package io.github.ysbunny.community.dto.comment;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class CreateCommentRequest {

    @NotBlank
    private String comment;
}
