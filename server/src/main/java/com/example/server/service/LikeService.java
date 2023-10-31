package com.example.server.service;

import com.example.server.model.Like;
import com.example.server.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class LikeService {

    @Autowired
    LikeRepository likeRepository;

    public Iterable<Like> getLikes() {
        return likeRepository.findAll();
    }

    public Like getLikeById(Long id) {
        return likeRepository.findById(id).get();
    }

    public Like createLike(Like like) { return likeRepository.save(like); }

    public Like updateLike(Like like) {
        return likeRepository.save(like);
    }

    public HttpStatus deleteLike(Long id) {
        likeRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
