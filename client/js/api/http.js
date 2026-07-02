const BASE_URL = "http://localhost:8080/api";

export async function request(url, options = {}) {  // options = {}는 method, body 같은 추가 설정
    const response = await fetch(`${BASE_URL}${url}`, { // fetch()는 백엔드 API에 HTTP 요청을 보냄
         ...options,    // options 안에 있는 내용을 fetch 설정 객체 안에 펼쳐 넣음
        headers: {      // headers가 options보다 앞에 있으면 앞에서 만든 headers 전체를 덮어쓸 수 있음 주의
            "Content-Type": "application/json", // 보내는 데이터가 JSON 형식
            ...options.headers  // 기존 기본 header에 사용자가 추가로 넘긴 header를 합치는 역할
            }
    });

    if (!response.ok) {
        throw new Error("API 요청에 실패했습니다.");
    }

    if (response.status === 204) {
        return null;
    }

    return await response.json();
}
