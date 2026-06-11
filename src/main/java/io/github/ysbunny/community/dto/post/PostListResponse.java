package io.github.ysbunny.community.dto.post;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class PostListResponse {
    private List<PostListItemResponse> posts;
}
