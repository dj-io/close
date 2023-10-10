package com.example.server.controller;


import com.example.server.model.Comment;
import com.example.server.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/comments/")
@AllArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping("{id}")
    public Comment getCommentById(@PathVariable Long id) {
        return commentService.getCommentById(id);
    }

    @PostMapping
    public Comment createComments(@RequestBody Comment comment) {
        return commentService.createComment(comment);
    }

    @PatchMapping
    public Comment updateComments(@RequestBody Comment comment) {
        return commentService.updateComment(comment);
    }

    @DeleteMapping("{id}")
    public HttpStatus deleteComments(@PathVariable Long id) {
        return commentService.deleteComment(id);
    }
}
