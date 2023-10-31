package com.example.server.controller;

import com.example.server.model.Like;
import com.example.server.service.LikeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/likes/")
@AllArgsConstructor
public class LikeController {

    private final LikeService likeService;

    @GetMapping("{id}")
    public Like getLikeById(@PathVariable Long id) {
        return likeService.getLikeById(id);
    }

    @PostMapping
    public Like createLikes(@RequestBody Like like) {
        return likeService.createLike(like);
    }

    @PatchMapping
    public Like updateLikes(@RequestBody Like like) {
        return likeService.updateLike(like);
    }

    @DeleteMapping("{id}")
    public HttpStatus deleteLikes(@PathVariable Long id) {
        return likeService.deleteLike(id);
    }
}
