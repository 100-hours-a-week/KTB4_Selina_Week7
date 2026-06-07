package io.github.ysbunny.community.dto.user;

import lombok.Getter;

@Getter
public class LoginUserRequest {
    private String email;
    private String password;
}
