package com.example.server.controller;

import com.example.server.model.User;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/users/")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public Iterable<User> getCloseUsers() {
        return userService.getCloseUsers();
    }

    @GetMapping(path = "search")
    public Optional<User> getUser(@RequestParam("username") String username) {
        return userService.getUser(username);
    }

    @GetMapping(path = "{id}")
    public User getUserById(@PathVariable Long id) {

        return userService.getUserById(id);
    }

    @PatchMapping
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @PostMapping(
            value = "{id}/profile-image",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public void uploadUserProfileImage(
            @PathVariable("id") Long id,
            @RequestParam("file") MultipartFile file) {
        userService.uploadUserProfileImage(id, file);
    }

    @GetMapping(
            value = "{id}/profile-image",
            produces = MediaType.IMAGE_JPEG_VALUE
    )
    public byte[] getCustomerProfileImage(
            @PathVariable("id") Long id) {
        return userService.getCustomerProfileImage(id);
    }

}
