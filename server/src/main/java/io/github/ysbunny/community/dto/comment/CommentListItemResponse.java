package io.github.ysbunny.community.dto.comment;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CommentListItemResponse {
    private Long commentId;
    private String commentContent;
}
