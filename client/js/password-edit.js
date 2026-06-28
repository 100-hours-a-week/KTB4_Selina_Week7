// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 비밀번호 수정 폼 가져옴
    const passwordEditForm = document.querySelector("#passwordEditForm");

    passwordEditForm.addEventListener("submit", function (event) {
        // 2. 비밀번호 수정 폼 제출 기본 동작 막음
        event.preventDefault();
    
        // 3. 비밀번호, 비밀번호 확인 값 가져옴
        const passwordInput = document.querySelector("#password");
        const passwordConfirmInput = document.querySelector("#passwordConfirm");

        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();

        // 4. 비밀번호 값 입력할 때마다 검사
        passwordInput.addEventListener("input", () => {
            
        });

        // 4. 비밀번호 확인 값 입력할 때마다 검사
        passwordConfirmInput.addEventListener("input", () => {
            
        });

        // 5. 비밀번호 값, 비밀번호 확인 값 입력됐으면 비밀번호 수정 가능
        if (!(password === "" || passwordConfirm === "")) {
            // 6. 수정완료 토스트 메시지 2초간 띄움
            const passwordEditToast = document.querySelector("#passwordEditToast");

            passwordEditToast.classList.remove("is-hidden");

            setTimeout(() => {
                passwordEditToast.classList.add("is-hidden");
            }, 2000);
        }
    });
});
