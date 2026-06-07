package io.github.ysbunny.community.dto.user;

import lombok.Getter;

@Getter
public class CreateUserRequest {
    private String email;
    private String password;
    private String nickname;
    private String profileImage;
}
