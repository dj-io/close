package com.example.server.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Registration {

    private String name;
    private final String email;
    private final String password;

    private String picture;
    private String username;
    private String pronouns;
    private String biography;
    private String links;

    private Long posts;
    private Long followers;
    private Long following;

    private Boolean closed;

}
