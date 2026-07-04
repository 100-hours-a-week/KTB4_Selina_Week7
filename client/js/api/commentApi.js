import { request } from "./http.js";

// 댓글 등록
export function createComment(postId, commentData) {
    return request(`/posts/${postId}/comments`, {
        method: "POST",
        body: JSON.stringify(commentData)
    });
}

// 댓글 수정
export function updateComment(postId, commentId, commentData) {
    return request(`/posts/${postId}/comments/${commentId}`, {
        method: "PATCH",
        body: JSON.stringify(commentData)
    });
}

// 댓글 삭제
export function deleteComment(commentId) {
    return request(`/posts/${postId}/comments/${commentId}`, {
        method: "DELETE"
    });
}

