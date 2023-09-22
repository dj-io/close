package com.example.server.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "following")
public class Following {

    @Id
    @SequenceGenerator(
            name = "following_sequence",
            sequenceName = "following_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "following_sequence")


    private Long id;

    @Column(name = "followed_id")
    private Long followedId;

    public Following(Long followedId) {
        this.followedId = followedId;
    }
}
