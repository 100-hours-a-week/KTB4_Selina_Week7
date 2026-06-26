package io.github.ysbunny.community.dto.user;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UpdateUserResponse {
    private String nickname;
    private String profileImage;
}
