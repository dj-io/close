package com.example.server.service;

import com.example.server.model.ConfirmationToken;
import com.example.server.model.User;
import com.example.server.repository.ConfirmationTokenRepository;
import com.example.server.repository.UserRepository;
import com.example.server.utils.EmailSender;
import com.example.server.utils.UserRole;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import static com.example.server.utils.EmailBuilder.buildEmail;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final static String USER_NOT_FOUND_MESSAGE =
            "user with username %s not found";

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
//    private final EmailSender emailSender;

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException(String.format(USER_NOT_FOUND_MESSAGE, username)));
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

        //TODO: send email

        return token;
    }

    public User updateUser(User user) {

        Optional<User> currentUser = userRepository.findById(user.getId());

        if (currentUser.isPresent()) {
            User updatedUser = currentUser.get();
            user.setPassword(updatedUser.getPassword());
        }

        return userRepository.save(user);
    }

    public Optional<User> getUser(String username) {
        return userRepository.findByUsername(username);
    }

    public Iterable<User> getCloseUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    public int enableUser(String email) {
        return userRepository.enableUser(email);
    }
}
