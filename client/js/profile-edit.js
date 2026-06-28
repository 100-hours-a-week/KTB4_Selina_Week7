// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 회원 탈퇴 모달창 가져옴
    const withdrawButton = document.querySelector("#withdrawButton");

    // 2. 회원 탈퇴 이벤트 리스너 등록
    withdrawButton.addEventListener("click", () => {
        // 3. 회원 탈퇴 모달창 가져옴
        const withdrawModal = document.querySelector("#withdrawModal");

        // 4. 탈퇴 모달창의 is-hidden 클래스 제거
        withdrawModal.classList.remove("is-hidden");

        // 5. 탈퇴 모달창의 취소, 확인 버튼 가져옴
        const cancelWithdrawButton = document.querySelector("#cancelWithdrawButton");
        const confirmWithdrawButton = document.querySelector("#confirmWithdrawButton");

        // 6. 취소 버튼 누르면 모달창 사라짐
        cancelWithdrawButton.addEventListener("click", () => {
            withdrawModal.classList.add("is-hidden");
        });

        // 6. 삭제 버튼 누르면 회원 탈퇴하고 로그인 화면으로 돌아감
        confirmWithdrawButton.addEventListener("click", (event) => {
            // 회원 탈퇴 처리 구현

            // 다시 모달창 숨기고 로그인 화면으로 돌아감
            withdrawModal.classList.add("is-hidden");
            window.location.href = `./login.html`;
        });
    });
});
