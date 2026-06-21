package io.github.ysbunny.community.service;

import io.github.ysbunny.community.dto.post.*;
import io.github.ysbunny.community.entity.Post;
import io.github.ysbunny.community.entity.User;
import io.github.ysbunny.community.repository.PostRepository;
import io.github.ysbunny.community.repository.UserRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PostService {
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    @Transactional
    public Long createPost(String loginToken, CreatePostRequest request) {
        User author = userRepository.findByLoginToken(loginToken)
                .orElseThrow(() -> new IllegalArgumentException("user not found"));

        Post post = new Post(
                request.getTitle(),
                request.getContent(),
                request.getPostImage(),
                author
        );

        Post savedPost = postRepository.save(post);

        return savedPost.getId();
    }

//    public PostListResponse getPostList() {
//        PostListItemResponse item = new PostListItemResponse(
//                post.getPostId(),
//                post.getTitle()
//        );
//        return new PostListResponse(List.of(item));
//    }
//
//    public PostDetailResponse getPost(Long postId) {
//        return new PostDetailResponse(
//                post.getTitle(),
//                post.getContent(),
//                post.getPostImage()
//        );
//    }
//
//    public UpdatePostResponse updatePost(
//            @Positive Long postId,
//            @Valid UpdatePostRequest request
//    ) {
//        post.updateTitle(request.getTitle());
//        post.updateContent(request.getContent());
//
//        if (request.getPostImage() != null) {
//            post.updatePostImage(request.getPostImage());
//        }
//
//        return new UpdatePostResponse("update_success");
//    }
//
//    public DeletePostResponse deletePost(Long postId) {
//        post = null;
//        return new DeletePostResponse("delete_success");
//    }
}
