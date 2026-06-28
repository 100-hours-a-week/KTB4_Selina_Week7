// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 프로필 메뉴, 드롭다운 가져옴
    const profileMenuButton = document.querySelector("#profileMenuButton");
    const profileDropdown = document.querySelector("#profileDropdown");

    // 2. 프로필 메뉴 누르면 드롭다운 보이게
    profileMenuButton.addEventListener("click", () => {
        profileDropdown.classList.toggle("is-hidden");
    });

    // 3. 드롭다운의 회원정보 수정 버튼 가져옴
    const profileEditButton = document.querySelector("#profileEditButton");

    // 4. 드롭다운 회원정보 수정 버튼 누르면 다시 회원정보 수정 페이지 로드
    profileEditButton.addEventListener("click", () => {
        window.location.href = `./profile-edit.html`;
    });

    // 3. 드롭다운의 비밀번호 수정 버튼 가져옴
    const passwordEditButton = document.querySelector("#passwordEditButton");

    // 4. 드롭다운 비밀번호 수정 버튼 누르면 비밀번호 수정 페이지로 이동
    passwordEditButton.addEventListener("click", () => {
        window.location.href = `./password-edit.html`;
    });

    // 1. 프로필 수정 폼 가져옴
    const profileEditForm = document.querySelector("#profileEditForm");

    profileEditForm.addEventListener("submit", function (event) {
        // 2. 회원정보 수정 폼 제출 기본 동작 막음
        event.preventDefault();
    
        // 1. 프로필 프리뷰, 프로필 이미지, 닉네임 가져옴
        const profilePreview = document.querySelector("#profilePreview");
        const profileImage = document.querySelector("#profileImage");
        const nicknameInput = document.querySelector("#nickname");

        const nickname = nicknameInput.value.trim();

        // 2. 프로필 이미지 값이 바뀌면 프로필 프리뷰도 바뀜 구현


        // 2. 닉네임 값 입력할 때마다 검사
        nicknameInput.addEventListener("input", () => {
            
        });

        // 3. 닉네임 입력됐으면 회원정보 수정 가능
        if (!(nickname === "")) {
            // 4. 수정완료 토스트 메시지 2초간 띄움
            const editCompleteToast = document.querySelector("#editCompleteToast");

            editCompleteToast.classList.remove("is-hidden");

            setTimeout(() => {
                editCompleteToast.classList.add("is-hidden");
            }, 2000);
        }
    });

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
