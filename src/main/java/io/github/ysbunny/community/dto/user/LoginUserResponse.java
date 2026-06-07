package io.github.ysbunny.community.dto.user;

import lombok.Getter;

@Getter
public class LoginUserResponse {
    private Long userId;
    private String token;
}
