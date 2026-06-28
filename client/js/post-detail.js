// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 게시글 수정, 삭제 버튼 가져옴
    const editPostButton = document.querySelector("#editPostButton");
    const deletePostButton = document.querySelector("#deletePostButton");

    // 2. 수정 버튼에 이벤트 리스너 등록
    editPostButton.addEventListener("click", (event) => {
        // 3. URL 파라미터 가져옴
        const params = new URLSearchParams(window.location.search);

        // 4. postID 값 가져옴
        const postId = params.get("postId");

        // 5. 게시글 작성 페이지 수정 모드로 postId와 이동
        window.location.href = `./post-form.html?postId=${postId}&mode=edit`;
    });

    // 2. 삭제 버튼에 이벤트 리스너 등록
    deletePostButton.addEventListener("click", () => {
        // 3. 삭제 모달창 가져옴
        const deletePostModal = document.querySelector("#deletePostModal");

        // 4. 삭제 모달창 띄우고 배경 스크롤 불가능
        deletePostModal.classList.remove("is-hidden");
        document.body.classList.add("modal-open");

        // 5. 삭제 모달창의 취소, 확인 버튼 가져옴
        const cancelDeleteButton = document.querySelector("#cancelDeleteButton");
        const confirmDeleteButton = document.querySelector("#confirmDeleteButton");

        // 6. 취소 버튼 누르면 모달창 숨기고 배경 스크롤 가능
        cancelDeleteButton.addEventListener("click", () => {
            deletePostModal.classList.add("is-hidden");
            document.body.classList.remove("modal-open");
        });

        // 6. 삭제 버튼 누르면 게시글 삭제하고 게시글 목록으로 돌아감
        confirmDeleteButton.addEventListener("click", (event) => {
            // 게시글 삭제 처리 구현

            // 7. 다시 모달창 숨기고 배경 스크롤 가능
            deletePostModal.classList.add("is-hidden");
            document.body.classList.remove("modal-open");


            // 8. 게시글 목록으로 돌아감
            window.location.href = `./posts.html`;
        });
    });
});
