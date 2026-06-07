package io.github.ysbunny.community.dto.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class LogoutUserRequest {

    @NotBlank
    private String token;
}
