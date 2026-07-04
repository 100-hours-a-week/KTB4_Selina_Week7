package io.github.ysbunny.community.dto.comment;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class CommentListResponse {
    private List<CommentListItemResponse> comments;
}
