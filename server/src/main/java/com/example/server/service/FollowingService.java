package com.example.server.service;

import com.example.server.model.Following;
import com.example.server.repository.FollowingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class FollowingService {

    @Autowired
    FollowingRepository followingRepository;

    public Iterable<Following> getFollowed() {
        return followingRepository.findAll();
    }

    public Iterable<Following> getFollowedByUserId(Long id) { return followingRepository.getFollowingByUserId(id); }

    public Following follow(Following id) {
       //TODO: ensure users can not follow themselves (compare new id to current id)
        return followingRepository.save(id);
    }

    public HttpStatus unFollow(Long id) {
        followingRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
