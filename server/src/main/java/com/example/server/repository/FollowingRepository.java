package com.example.server.repository;


import com.example.server.model.Following;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public interface FollowingRepository extends JpaRepository<Following, Long> {

    @Transactional
    @Query(value = "SELECT * FROM FOLLOWING a WHERE a.user_id = ?1", nativeQuery = true)
    Iterable<Following> getFollowingByUserId(Long id);
}
