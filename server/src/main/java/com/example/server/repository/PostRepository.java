package com.example.server.repository;

import com.example.server.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface PostRepository extends JpaRepository<Post, Long> {
    Optional<Post> findById(Long id);
    Optional<Post> findByCaption(String caption);
    boolean existsPostsById(Long id);


    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("UPDATE Post a " + "SET a.postImageId = ?1 WHERE a.id = ?2")
    int updatePostImageId(String postImageId, Long id);
}
