// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. html의 id="editPostButton"인 게시글 요소 가져옴
    const editPostButton = document.querySelector("#editPostButton");

    // 2. 버튼에 이벤트 리스너 등록
    editPostButton.addEventListener("click", (event) => {
        // 3. URL 파라미터 가져옴
        const params = new URLSearchParams(window.location.search);

        // 4. postID 값 가져옴
        const postId = params.get("postId");

        // 5. 게시글 작성 페이지 수정 모드로 postId와 이동
        window.location.href = `./post-form.html?postId=${postId}&mode=edit`;
    });
});
