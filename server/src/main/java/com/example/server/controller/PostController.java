package com.example.server.controller;

import com.example.server.model.Post;
import com.example.server.model.User;
import com.example.server.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/post/")
@AllArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping(path = "search")
    public Optional<Post> getPostsByCaption(@RequestParam("keyword") String keyword) {
        return postService.getPostsByCaption(keyword);
    }

    @GetMapping("/{id}")
    public Post getPostById(@PathVariable Long id) {
        return postService.getPostById(id);
    }

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.createPost(post);
    }

    @PatchMapping
    public Post updateItem(@RequestBody Post post) {
        return postService.updatePost(post);
    }

    @DeleteMapping("/{id}")
    public HttpStatus deletePosts(@PathVariable Long id) {
        return postService.deletePost(id);
    }

}
