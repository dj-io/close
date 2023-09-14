package com.example.server.controller;

import com.example.server.model.User;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/profiles/")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping(path = "search")
    public Optional<User> getProfile(@RequestParam("username") String username) {
        return userService.getProfile(username);
    }

    @GetMapping(path = "{id}")
    public User getProfileById(@PathVariable Long id) {

        return userService.getProfileById(id);
    }

    @PostMapping
    public User createProfile(@RequestBody User user) {

        return userService.createProfile(user);
    }

    @PatchMapping
    public User updateProfile(@RequestBody User user) {

        return userService.updateProfile(user);
    }


}
