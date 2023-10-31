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
@Table(name = "likes")
public class Like {

    @Id
    @SequenceGenerator(
            name = "like_sequence",
            sequenceName = "like_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "like_sequence")
    private Long id;

    private String username;
    private String name;
    private Long user_id;

    public Like(String username, String name, Long user_id) {
        this.username = username;
        this.name = name;
        this.user_id = user_id;
    }
}
