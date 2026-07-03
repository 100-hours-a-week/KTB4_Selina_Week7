import { updateUser, logout } from './api/userApi.js';

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

// 3. 드롭다운의 로그아웃 버튼 가져옴
const logoutButton = document.querySelector("#logoutButton");

// 4. 드롭다운 로그아웃 버튼 누르면 로그아웃 후 로그인 페이지로 이동
logoutButton.addEventListener("click", async () => {
    const userData = {
        token: localStorage.getItem("loginToken")
    };
    
    const result = await logout(userData);

    window.location.href = `./login.html`;
});

// 1. 프로필 수정 폼, 프로필 프리뷰, 프로필 이미지, 닉네임, 안내 문구, 수정하기 버튼 가져옴
const profileEditForm = document.querySelector("#profileEditForm");
const profilePreview = document.querySelector("#profilePreview");
const profileImage = document.querySelector("#profileImage");
const nicknameInput = document.querySelector("#nickname");
const nicknameHelperText = document.querySelector("#nicknameHelperText");
const editButton = document.querySelector("#editButton");

profileEditForm.addEventListener("submit", async function (event) {
    // 2. 회원정보 수정 폼 제출 기본 동작 막음
    event.preventDefault();

    const userId = 1;   // 임시 번호

    const userData = {
        nickname: nicknameInput.value.trim(),
        profileImage: profileImage.value
    }

    // 프로필 이미지 값이 바뀌면 프로필 프리뷰도 바뀜 구현

    // 3. 닉네임 입력됐으면 회원정보 수정 가능
    if (!(userData.nickname === "")) {
        try {
            console.log("회원정보 수정 요청 데이터:", userData);

            const result = await updateUser(userId, userData);
            
            console.log(result.nickname);
            console.log(result.profileImage);
        } catch (error) {
            alert(error.message);
        }

        // 4. 수정완료 토스트 메시지 2초간 띄움
        const editCompleteToast = document.querySelector("#editCompleteToast");

        editCompleteToast.classList.remove("is-hidden");

        setTimeout(() => {
            editCompleteToast.classList.add("is-hidden");
        }, 2000);
    }
});

nicknameInput.addEventListener("input", () => {
    // 2. 닉네임 값 가져옴
    const nickname = nicknameInput.value.trim();

    // 3. 닉네임 값 여부에 따라 안내 문구와 수정하기 버튼 활성화 여부 결정
    if (nickname === "") {
        nicknameHelperText.textContent = "* 닉네임을 입력해주세요.";
        editButton.disabled = true;
    } else {
        nicknameHelperText.textContent = "";
        editButton.disabled = false;
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
