package io.github.ysbunny.community.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Post {

    private final Long postId;
    private String title;
    private String content;
    private String postImage;

    public void updateTitle(String title) {
        this.title = title;
    }
    public void updateContent(String content) {
        this.content = content;
    }
    public void updatePostImage(String postImage) {
        this.postImage = postImage;
    }
}
