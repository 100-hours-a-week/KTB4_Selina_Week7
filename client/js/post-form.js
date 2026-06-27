// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. URL 파라미터 가져옴
    const params = new URLSearchParams(window.location.search);

    // 2. postID 값과 mode 값 가져옴
    const postId = params.get("postId");
    const mode = params.get("mode");

    // 3. 폼 제목과 제출 버튼 문구 가져옴
    const formTitle = document.querySelector("#formTitle");
    const submitButton = document.querySelector("#submitButton");

    // 수정 모드라면 폼 제목과 버튼 문구 수정하고 해당 게시글 데이터 불러오기
    if (mode === "edit") {
        formTitle.textContent = "게시글 수정";
        submitButton.textContent = "수정하기";

        // 해당 게시글 데이터 불러오는 로직 나중에 추가
    }
});
