package com.example.server.service;

import com.example.server.exception.ResourceNotFoundException;
import com.example.server.model.Post;
import com.example.server.model.User;
import com.example.server.repository.PostRepository;
import com.example.server.s3.S3Buckets;
import com.example.server.s3.S3Service;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

@Service
public class PostService {


    @Autowired
    private PostRepository postRepository;

    private User user;

    private final S3Service s3Service;
    private final S3Buckets s3Buckets;

    public PostService(S3Service s3Service, S3Buckets s3Buckets) {
        this.s3Service = s3Service;
        this.s3Buckets = s3Buckets;
    }

    private void checkIfPostExistsOrThrow(Long id) {
        if (!postRepository.existsPostsById(id)) {
            throw new ResourceNotFoundException(
                    "post with id [%s] not found".formatted(id)
            );
        }
    }

    public Iterable<Post> getPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostsByCaption(String keyword) {
        return postRepository.findByCaption(keyword);
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id).get();
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(Post post) {
        return postRepository.save(post);
    }

    public int updatePostImageId(String postImageId, Long id) {
        return postRepository.updatePostImageId(postImageId, id);
    }

    public void uploadUserPostImage(Long id, MultipartFile file) {

        checkIfPostExistsOrThrow(id);
        String postImageId = UUID.randomUUID().toString();
        try {
            s3Service.putObject(
                    s3Buckets.getUser(),
                    "post-images/%s/%s".formatted(id, postImageId),
                    file.getBytes()
            );
        } catch (IOException e) {
            throw new RuntimeException("failed to upload post image", e);
        }

        updatePostImageId(postImageId, id);
    }

    public byte[] getUserPostImage(Long id) {
        var post = postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(
                        "post with id [%s] not found".formatted(id)
                ));

        if (StringUtils.isBlank(post.getPostImageId())) {
            throw new ResourceNotFoundException(
                    "post image not found for post with id [%s]".formatted(id));
        }


        byte[] postImage = s3Service.getObject(
                s3Buckets.getUser(),
                "post-images/%s/%s".formatted(id, post.getPostImageId())
        );

        return postImage;
    }

    public HttpStatus deletePost(Long id) {
        postRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
