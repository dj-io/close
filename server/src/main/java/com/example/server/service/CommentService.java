package com.example.server.service;

import com.example.server.model.Comment;
import com.example.server.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    CommentRepository commentRepository;

    public Iterable<Comment> getComments() {
        return commentRepository.findAll();
    }


    public Comment getCommentById(Long id) {
        return commentRepository.findById(id).get();
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment updateComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public HttpStatus deleteComment(Long id) {
        commentRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
