package io.github.ysbunny.community.service;

import io.github.ysbunny.community.domain.Post;
import io.github.ysbunny.community.dto.post.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
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

    public PostDetailResponse getPost(Long postId) {
        return new PostDetailResponse(
                post.getTitle(),
                post.getContent(),
                post.getPostImage()
        );
    }

    public UpdatePostResponse updatePost(Long postId, UpdatePostRequest request) {
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
