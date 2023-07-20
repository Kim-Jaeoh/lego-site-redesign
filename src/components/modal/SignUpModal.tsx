import { useCallback, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { CloseOutlined } from "@ant-design/icons";
import styled from "./SignUpModal.module.css";
import useModalFixed from "../../hooks/useModalFixed";

type Props<T> = {
  onLoginModal: T;
  onChangeLoginModal: T;
};

const SignUp = ({ onLoginModal, onChangeLoginModal }: Props<() => void>) => {
  const ModalFixed = useModalFixed(); // 모달창 픽스

  // 이메일, 비밀번호, 비밀번호 확인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  // 오류메시지 상태
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  const checkForm = isEmail && isPassword && isPasswordConfirm;

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // @와 .이 들어갔는지, 그리고 .뒤에 영어가 2자리 이상인지 체크
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
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*~+=-])(?=.*[0-9]).{8,25}$/;
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

      if (passwordCurrent === passwordConfirm) {
        setPasswordConfirmMessage("비밀번호가 동일합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 다릅니다.");
        setIsPasswordConfirm(false);
      }
    },
    [passwordConfirm]
  );

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (passwordConfirmCurrent === password) {
        setPasswordConfirmMessage("비밀번호가 동일합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 다릅니다.");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((email && password && passwordConfirm) === "") {
      alert("입력이 되지 않았습니다.");
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("회원가입 되었습니다.");
          onChangeLoginModal(); // false, 가입창 닫기
        })
        .catch((e) => {
          alert(e);
        });
    }
  };

  const onClose = () => {
    onChangeLoginModal();
    onLoginModal();
  };

  return (
    <section className={styled.modal_back}>
      <div className={styled.modal}>
        <header className={styled.redline}>
          <CloseOutlined className={styled.close} onClick={onClose} />
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
            <div className={`${styled.password} ${styled.password_check}`}>
              <label htmlFor="passwordConfirm">비밀번호 확인</label>
              <input
                className={styled.password}
                type="password"
                id="passwordConfirm"
                onChange={onChangePasswordConfirm}
                minLength={8}
              />
              {passwordConfirm.length > 0 && (
                <p
                  className={`${styled.message} ${
                    isPasswordConfirm ? styled.success : styled.error
                  }`}
                >
                  {passwordConfirmMessage}
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
                <p>회원 가입하기</p>
              </button>
              <div className={styled.signin_text}>
                <p
                  onClick={() => {
                    // onLoginModal(); // true, 로그인창 열기
                    onChangeLoginModal(); // false, 가입창 닫기
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
  );
};

export default SignUp;
