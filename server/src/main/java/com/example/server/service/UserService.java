package com.example.server.service;

import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.ConfirmationToken;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import com.example.server.s3.S3Buckets;
import com.example.server.s3.S3Service;
import org.apache.commons.lang3.StringUtils;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MESSAGE =
            "user with username %s not found";

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    private final S3Service s3Service;
    private final S3Buckets s3Buckets;
//    private final EmailSender emailSender;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException(String.format(USER_NOT_FOUND_MESSAGE, username)));
    }

    private void checkIfCustomerExistsOrThrow(Long id) {
        if (!userRepository.existsUserById(id)) {
            throw new ResourceNotFoundException(
                    "customer with id [%s] not found".formatted(id)
            );
        }
    }

    public String userSignup(User user) {

        boolean userEmailExists = userRepository.findByEmail(user.getEmail()).isPresent();
        boolean usernameExists = userRepository.findByUsername(user.getUsername()).isPresent();

        if (usernameExists) {
            throw new IllegalStateException("username already taken");
        }

        if (userEmailExists) {

            // TODO: resolve token capture and allow resend email if token exp.
//            if (!user.getEnabled()) {
//                String link = "http://localhost:8080/api/v1/registration/confirm?token=" + "";
//                emailSender.send(user.getEmail(), buildEmail(user.getFirstName(), link));
//            }

            throw new IllegalStateException("email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        userRepository.save(user);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user
        );

        confirmationTokenService.saveConfirmationToken(confirmationToken);

        return token;
    }

    public User updateUser(User user) {

        Optional<User> currentUser = userRepository.findById(user.getId());
        User updatedUser = currentUser.get();

        boolean usernameExists = userRepository.findByUsername(user.getUsername()).isPresent();

        if (usernameExists && !user.getUsername().equals(updatedUser.getUsername())) {
            throw new IllegalStateException("username already taken");
        }

        if (currentUser.isPresent()) { user.setPassword(updatedUser.getPassword()); }
        if (currentUser.isPresent() && user.getUsername() == null) { user.setUsername(updatedUser.getUsername()); }
        if (currentUser.isPresent() && user.getBiography() == null) { user.setBiography(updatedUser.getBiography()); }
        if (currentUser.isPresent() && user.getLinks() == null) { user.setLinks(updatedUser.getLinks()); }

        return userRepository.save(user);
    }

    public Optional<User> getUser(String username) {
        return userRepository.findByUsername(username);
    }

    public Iterable<User> searchUsers(String username) { return userRepository.searchUsersByUsername(username); }

    public Iterable<User> getCloseUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    public int enableUser(String email) {
        return userRepository.enableUser(email);
    }

    public int updateProfileImageId(String profileImageId, Long id) {
        return userRepository.updateProfileImageId(profileImageId, id);
    }

    public void uploadUserProfileImage(Long id, MultipartFile file) {

        checkIfCustomerExistsOrThrow(id);
        String profileImageId = UUID.randomUUID().toString();
        try {
            s3Service.putObject(
                    s3Buckets.getUser(),
                    "profile-images/%s/%s".formatted(id, profileImageId),
                    file.getBytes()
            );
        } catch (IOException e) {
            throw new RuntimeException("failed to upload profile image", e);
        }

        updateProfileImageId(profileImageId, id);
    }

    public byte[] getUserProfileImage(Long id) {
        var user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "customer with id [%s] not found".formatted(id)
                ));

        if (StringUtils.isBlank(user.getProfileImageId())) {
            throw new ResourceNotFoundException(
                    "customer with id [%s] profile image not found".formatted(id));
        }


        byte[] profileImage = s3Service.getObject(
                s3Buckets.getUser(),
                "profile-images/%s/%s".formatted(id, user.getProfileImageId())
        );

        return profileImage;
    }
}
