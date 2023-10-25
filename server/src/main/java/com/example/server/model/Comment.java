package com.example.server.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Comment {

    @Id
    @SequenceGenerator(
            name = "comment_sequence",
            sequenceName = "comment_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "comment_sequence")
    private Long id;

    private String comment;
    private Long likes;
    private String username;
    private Long user_id;

    public Comment(String comment,
                   Long likes,
                   String username,
                   Long user_id) {
        this.comment = comment;
        this.likes = likes;
        this.username = username;
        this.user_id = user_id;
    }
}
