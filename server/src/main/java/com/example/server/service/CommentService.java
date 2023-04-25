package com.example.server.service;

import com.example.server.model.Comment;
import com.example.server.model.Post;
import com.example.server.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    private Post post;

    public Iterable<Comment> getComments() {
        return commentRepository.findAll();
    }

    public Optional<Comment> getCommentsByPostId(Long id) {
        return commentRepository.findByPostId(id);
    }


    public Comment getCommentById(Long id) {
        return commentRepository.findById(id).get();
    }

    public Comment createComment(Comment comment) {

        Comment newComment = new Comment(
                        comment.getComment(),
                        comment.getLikes(),
                        post
        );

        return commentRepository.save(newComment);
    }

    public Comment updateComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public HttpStatus deleteComment(Long id) {
        commentRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
