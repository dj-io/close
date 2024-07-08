package com.example.server.controller;

import com.example.server.model.Post;
import com.example.server.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/post/")
@AllArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping(path = "search")
    public Iterable<Post> getPostsByCaption(@RequestParam("keyword") String keyword) {
        return postService.searchPostsByCaption(keyword);
    }

    @GetMapping("{id}")
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

    @DeleteMapping("{id}")
    public HttpStatus deletePosts(@PathVariable Long id) {
        return postService.deletePost(id);
    }

    @PostMapping(
            value = "{id}/post-image",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public void uploadUserPostImage(
            @PathVariable("id") Long id,
            @RequestParam("file") MultipartFile file) {
        postService.uploadUserPostImage(id, file);
    }

    @GetMapping(
            value = "{id}/post-image",
            produces = MediaType.IMAGE_JPEG_VALUE
    )
    public byte[] getUserPostImage(
            @PathVariable("id") Long id) {
        return postService.getUserPostImage(id);
    }

}
