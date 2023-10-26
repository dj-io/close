package com.example.server.model;


import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "post_image_id_unique",
                        columnNames = "postImageId"
                )
        }
)
public class Post {

    @Id
    @SequenceGenerator(
            name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "post_sequence")
    private Long id;

    @Column(
            unique = true
    )
    private String postImageId;

    @Column(name = "created", nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime created;

    @Column(name = "updated")
    @UpdateTimestamp
    private LocalDateTime updated;

    private String caption;
    private String mediaType;
    private Long likes = 0L;
    private Long shares = 0L;

    private Long user_id;

    @OneToMany(
            targetEntity = Comment.class,
            cascade = CascadeType.ALL
//            orphanRemoval = true
    )
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private List<Comment> comment;

    public Post(String postImageId,
                String caption,
                String mediaType,
                Long likes,
                Long shares,
                LocalDateTime created,
                LocalDateTime updated,
                Long user_id) {
        this.postImageId = postImageId;
        this.caption = caption;
        this.mediaType = mediaType;
        this.likes = likes;
        this.shares = shares;
        this.created = created;
        this.updated = updated;
        this.user_id = user_id;
    }
}
