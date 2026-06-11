package io.github.ysbunny.community.service;

import io.github.ysbunny.community.domain.Post;
import io.github.ysbunny.community.dto.post.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
@RequiredArgsConstructor
public class PostService {

    private Post post;

    public CreatePostResponse createPost(CreatePostRequest request) {
        post = new Post(
                1L,
                request.getTitle(),
                request.getContent(),
                request.getPostImage()
        );
        return new CreatePostResponse(post.getPostId());
    }

    public PostListResponse getPostList() {
        PostListItemResponse item = new PostListItemResponse(
                post.getPostId(),
                post.getTitle()
        );
        return new PostListResponse(List.of(item));
    }

    public PostDetailResponse getPost(Long postId) {
        return new PostDetailResponse(
                post.getTitle(),
                post.getContent(),
                post.getPostImage()
        );
    }

    public UpdatePostResponse updatePost(
            @Positive Long postId,
            @Valid UpdatePostRequest request
    ) {
        post.updateTitle(request.getTitle());
        post.updateContent(request.getContent());

        if (request.getPostImage() != null) {
            post.updatePostImage(request.getPostImage());
        }

        return new UpdatePostResponse("update_success");
    }

    public DeletePostResponse deletePost(Long postId) {
        post = null;
        return new DeletePostResponse("delete_success");
    }
}
