package io.github.ysbunny.community.dto.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
public class UpdateUserRequest {

    @Size(min = 8, max = 20)
    private String password;

    @Size(max = 10)
    private String nickname;

    private String profileImage;
}
