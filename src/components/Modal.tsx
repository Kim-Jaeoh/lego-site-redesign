import { CloseOutlined } from "@ant-design/icons";
import styled from "./Modal.module.css";
import { ModalProps } from "../types";
import useModalFixed from "../hooks/useModalFixed";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Modal = ({ openModal, changeModalOpen }: ModalProps) => {
  const ModalFixed = useModalFixed();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [isEmail, setIsEmail] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const emailCurrent = e.target.value;

    e.preventDefault();

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식이에요 : )");
      setIsEmail(true);
    }
    setEmail(emailCurrent);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("로그인 되었습니다.");
        openModal(); // false, 로그인창 닫기
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
            <CloseOutlined className={styled.close} onClick={openModal} />
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
                  // pattern="[A-Z0-9 ._ % + -]. + @ [A-Z0-9 .-] + \ [AZ] {2,3} $"
                  title="Email@email.com"
                  required
                />
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
              <div className={styled.signin}>
                <button type="submit">
                  <p>로그인</p>
                </button>
                <div className={styled.signin_text}>
                  <p
                    onClick={() => {
                      openModal(); // false, 로그인창 닫기
                      changeModalOpen(); // true, 가입창 열기
                    }}
                  >
                    회원 가입
                  </p>
                  <p>사용자 이메일을 잊었나요?</p>
                  <p>비밀번호를 잊었나요?</p>
                </div>
              </div>
              {/* )} */}
            </form>
          </main>
          <footer className={styled.redline} />
        </div>
      </section>
    </>
  );
};

export default Modal;
