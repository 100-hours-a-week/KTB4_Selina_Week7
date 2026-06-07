package io.github.ysbunny.community.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Comment {

    private final Long commentId;
    private String comment;
}
