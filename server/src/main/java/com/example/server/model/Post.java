package com.example.server.model;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Post {

    @Id
    @SequenceGenerator(
            name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_sequence")
    private Long id;

    private String picture;
    private String caption;

    private Long likes = 0L;
    private Long shares = 0L;

    @ManyToOne
    @JoinColumn(nullable= false, name = "user_id")

    private User user;

    public Post(String picture,
                String caption,
                Long likes,
                Long shares,
                User user) {
        this.picture = picture;
        this.caption = caption;
        this.likes = likes;
        this.shares = shares;
        this.user = user;
    }
}
