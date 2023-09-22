package com.example.server.controller;

import com.example.server.model.User;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/users/")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public Iterable<User> getItems() {
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

}
