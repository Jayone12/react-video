import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 350px;
  margin: 100px auto 0;
  border: 1px solid #c8c8c8;
  padding: 25px;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

const KakaoLogin = styled.button`
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
  background-color: yellow;
  color: brown;
  border: none;
`;

const JoinWrapper = styled.div`
  font-size: 14px;
`;

function Login() {
  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };
  return (
    <LoginContainer>
      <Title>로그인 하기</Title>
      <form className="user-form" onSubmit={onLogin}>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력하세요."
          required
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          required
        />
        <button>로그인</button>
      </form>
      <KakaoLogin>카카오 로그인</KakaoLogin>
      <hr />
      <JoinWrapper>
        <p>
          아직 회원이 아니신가요? <br />
          <Link to="/join">회원가입 하러 가기 &rarr;</Link>
        </p>
      </JoinWrapper>
    </LoginContainer>
  );
}
export default Login;
