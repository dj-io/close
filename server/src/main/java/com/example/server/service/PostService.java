package com.example.server.service;

import com.example.server.model.Post;
import com.example.server.model.User;
import com.example.server.repository.PostRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PostService {


    @Autowired
    private PostRepository postRepository;

    private User user;

    public Iterable<Post> getPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostsByUserId(Long id) {
        return postRepository.findByUserId(id);
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id).get();
    }

    public Post createPost(Post post) {

        Post newPost = new Post(
                 post.getPicture(),
                 post.getCaption(),
                 post.getLikes(),
                 post.getShares(),
                 user
        );

        return postRepository.save(newPost);
    }

    public Post updatePost(Post post) {
        return postRepository.save(post);
    }

    public HttpStatus deletePost(Long id) {
        postRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
