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

    @ManyToOne
    @JoinColumn(nullable= false, name = "post_id")

    private Post post;

    public Comment(String comment,
                   Long likes,
                   Post post) {
        this.comment = comment;
        this.likes = likes;
        this.post = post;
    }
}
