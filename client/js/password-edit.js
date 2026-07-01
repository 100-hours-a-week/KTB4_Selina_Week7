// 0. HTML이 다 로드된 뒤 이벤트 리스너를 등록
document.addEventListener("DOMContentLoaded", function () {
    // 1. 비밀번호 수정 폼, 비밀번호, 비밀번호 확인 값, 안내 문구들, 수정하기 버튼 가져옴
    const passwordEditForm = document.querySelector("#passwordEditForm");
    const passwordInput = document.querySelector("#password");
    const passwordConfirmInput = document.querySelector("#passwordConfirm");
    const passwordHelperText = document.querySelector("#passwordHelperText");
    const passwordConfirmHelperText = document.querySelector("#passwordConfirmHelperText");
    const passwordEditButton = document.querySelector("#passwordEditButton");

    passwordEditForm.addEventListener("submit", function (event) {
        // 2. 비밀번호 수정 폼 제출 기본 동작 막음
        event.preventDefault();

        // 3. 비밀번호 값, 비밀번호 확인 값 입력됐으면 비밀번호 수정 가능
        if (!(password === "" || passwordConfirm === "")) {
            // 4. 수정완료 토스트 메시지 2초간 띄움
            const passwordEditToast = document.querySelector("#passwordEditToast");

            passwordEditToast.classList.remove("is-hidden");

            setTimeout(() => {
                passwordEditToast.classList.add("is-hidden");
            }, 2000);
        }
    });

    function checkPasswordEditForm() {
        // 4. 비밀번호 값, 비밀번호 확인 값 가져옴
        const password = passwordInput.value.trim();
        const passwordConfirm = passwordConfirmInput.value.trim();

        // 5. 비밀번호과 비밀번호 확인 모두 작성 되었으면 제출 버튼 보이게, 하나라도 작성 안 되어있으면 제출 버튼 안 보이게 함
        if (password !== "" && passwordConfirm !== "") {
            passwordEditButton.disabled = false;
        } else {
            passwordEditButton.disabled = true;
        }
    }

    passwordInput.addEventListener("input", () => {
        // 2. 비밀번호 값 가져옴
        const password = passwordInput.value.trim();

        // 3. 비밀번호 값 여부에 따라 안내 문구 여부 결정
        if (password === "") {
            passwordHelperText.textContent = "* 비밀번호를 입력해주세요.";
        } else {
            passwordHelperText.textContent = "";
        }

        checkPasswordEditForm();
    });

    passwordConfirmInput.addEventListener("input", () => {
        // 2. 비밀번호 확인 값 가져옴
        const passwordConfirm = passwordConfirmInput.value.trim();

        // 3. 비밀번호 확인 값 여부에 따라 안내 문구 여부 결정
        if (passwordConfirm === "") {
            passwordConfirmHelperText.textContent = "* 비밀번호 확인을 입력해주세요.";
        } else {
            passwordConfirmHelperText.textContent = "";
        }

        checkPasswordEditForm();
    });
});
