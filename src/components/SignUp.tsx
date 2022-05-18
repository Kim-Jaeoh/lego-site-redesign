import { useCallback, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { CloseOutlined, EyeOutlined } from "@ant-design/icons";
import styled from "./Sign.module.css";
import { ModalProps } from "../types";
import useModalFixed from "../hooks/useModalFixed";

const SignUp = ({ openModal, changeModalOpen }: ModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(false);

  const ModalFixed = useModalFixed();

  const handleEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const emailCurrent = e.target.value;

    e.preventDefault();

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("올바른 이메일 형식으로 입력해주세요.");
      setIsEmail(false);
      console.log("틀림");
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
      console.log("맞음");
    }
    setEmail(emailCurrent);
  }, []);

  const handlePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setPassword(e.target.value);
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("회원가입 되었습니다");
        changeModalOpen(); // false, 가입창 닫기
        openModal(); // true, 로그인창 열기
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <>
      <section className={styled.modal_back}>
        <div className={styled.modal}>
          <header className={styled.redline}>
            <CloseOutlined className={styled.close} onClick={changeModalOpen} />
          </header>
          <main>
            <div className={styled.modal_login_logo}>
              <img src="./image/modal-login-logo.png" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className={styled.email}>
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  // title="Email@email.com"
                  required
                />
                {email.length > 0 && (
                  <p
                    className={`${styled.message} ${
                      isEmail ? styled.success : styled.error
                    }`}
                  >
                    {emailMessage}
                  </p>
                )}
              </div>
              <div className={styled.password}>
                <label htmlFor="password">비밀번호</label>
                <input
                  // className={styled.password}
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  minLength={6}
                  required
                />
              </div>
              <div className={`${styled.password} ${styled.password_check}`}>
                <label htmlFor="password">비밀번호 확인</label>
                <input
                  className={styled.password}
                  type="password"
                  id="password"
                />
              </div>
              <div className={styled.signin}>
                <button type="submit">
                  <p>회원 가입하기</p>
                </button>
                <div className={styled.signin_text}>
                  <p
                    onClick={() => {
                      openModal(); // true, 로그인창 열기
                      changeModalOpen(); // false, 가입창 닫기
                    }}
                  >
                    로그인
                  </p>
                </div>
              </div>
            </form>
          </main>
          <footer className={styled.redline} />
        </div>
      </section>
    </>
  );
};

export default SignUp;
