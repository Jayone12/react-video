import { useState } from "react";
import styled from "styled-components";

const JoinContainer = styled.div`
  width: 350px;
  margin: 100px auto 0;
  border: 1px solid #c8c8c8;
  padding: 25px;
  border-radius: 10px;
`;

const Label = styled.label`
  padding: 10px 0;
`;

const KakaoLogin = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  background-color: yellow;
  color: brown;
  border: none;
`;

function Join() {
  const [errorMessage, setErrormessage] = useState("");
  const onJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const password = event.currentTarget.password.value;
    const passwordConfirm = event.currentTarget.passwordConfirm.value;
    const formData = new FormData();
    formData.append("email", event.currentTarget.email.value);
    formData.append("username", event.currentTarget.username.value);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordConfirm);
    formData.append("profileImg", event.currentTarget.profileImg.files[0]);
    if (password !== passwordConfirm) {
      return setErrormessage("비밀번호가 틀렸습니다.");
    }
    fetch("http://localhost:4000/join", {
      method: "POST",
      body: formData,
      redirect: "follow",
    }).then((response) => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
  };
  return (
    <JoinContainer>
      <form
        className="user-form"
        onSubmit={onJoin}
        encType="multipart/form-data"
      >
        <input
          name="email"
          type="email"
          placeholder="사용할 이메일을 입력하세요."
          required
        />
        <input
          name="username"
          type="text"
          placeholder="사용하실 이름을 입력하세요."
          required
        />
        <input
          name="password"
          type="password"
          placeholder="사용할 비밀번호를 입력하세요."
          required
        />
        <input
          name="passwordConfirm"
          type="passwordConfirm"
          placeholder="입력하신 비밀번호 다시 입력해주세요."
          required
        />
        <span className="error-message">{errorMessage}</span>
        <Label htmlFor="profileImg">프로필 이미지</Label>
        <input type="file" accept="image/*" name="profileImg" id="profileImg" />
        <button>회원 가입</button>
      </form>
      <KakaoLogin>카카오 계정으로 회원가입</KakaoLogin>
    </JoinContainer>
  );
}
export default Join;
