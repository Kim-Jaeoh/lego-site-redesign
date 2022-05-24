import { CloseOutlined } from "@ant-design/icons";
import styled from "./LoginModal.module.css";
import { ModalProps } from "../../types";
import useModalFixed from "../../hooks/useModalFixed";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useCallback, useState } from "react";

const Modal = ({ openModal, changeModalOpen }: ModalProps) => {
  const ModalFixed = useModalFixed(); // 모달창 픽스

  // 이메일, 비밀번호, 비밀번호 확인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 오류메시지 상태
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const checkForm = isEmail && isPassword;

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = e.target.value;
      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("올바른 이메일 형식으로 입력해주세요.");
        setIsEmail(false);
      } else {
        setEmailMessage("올바른 이메일 형식입니다.");
        setIsEmail(true);
      }
      setEmail(emailCurrent);
    },
    []
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("안전한 비밀번호입니다.");
        setIsPassword(true);
      }
    },
    []
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((email && password) === "") {
      alert("입력이 되지 않았습니다.");
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("로그인 되었습니다.");
          openModal(); // false, 로그인창 닫기
        })
        .catch((e) => {
          alert(e);
        });
    }
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
                  onChange={onChangeEmail}
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
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChangePassword}
                  minLength={8}
                  required
                />
                {password.length > 0 && (
                  <p
                    className={`${styled.message} ${
                      isPassword ? styled.success : styled.error
                    }`}
                  >
                    {passwordMessage}
                  </p>
                )}
              </div>
              <div className={styled.signin}>
                <button
                  className={`${styled.button} ${
                    checkForm ? styled.active : styled.disabled
                  }`}
                  type="submit"
                  disabled={!checkForm}
                >
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
            </form>
          </main>
          <footer className={styled.redline} />
        </div>
      </section>
    </>
  );
};

export default Modal;
