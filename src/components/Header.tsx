import React, { useContext } from "react";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "./Header.module.css";
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../context/authContext";

type Props<T> = {
  onMenuModal: T;
  onLoginModal: T;
  onSearchModal: T;
};

const Header = ({
  onMenuModal,
  onLoginModal,
  onSearchModal,
}: Props<() => void>) => {
  const userInfo = useContext(AuthContext);
  const auth = getAuth();

  const handleLogout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
      await signOut(auth);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className={styled.header}>
      <div className={styled.inner}>
        <div className={styled.logo} onClick={handleTop}>
          <img
            src="/image/lego-logo.png"
            alt="lego logo"
            className={styled.logo_img}
          />
        </div>
        <nav className={styled.gnb}>
          <div className={styled.gnb_left}>
            <ul>
              <div className={styled.button} onClick={onMenuModal}>
                <MenuOutlined className={styled.menubar} />
              </div>
              <li>
                <span>BRAND</span>
              </li>
              <li>
                <span>NEWS</span>
              </li>
            </ul>
          </div>
          <div className={styled.gnb_right}>
            <ul>
              <li>
                <span>PRODUCT</span>
              </li>
              <li>
                <span>EVENT</span>
              </li>
              <div className={styled.button} onClick={onSearchModal}>
                <SearchOutlined className={styled.search} />
              </div>
            </ul>
          </div>
        </nav>
      </div>
      {/* 로그인 영역 */}
      {userInfo ? (
        <div className={styled.auth_box}>
          <button onClick={handleLogout} className={styled.auth_btn}>
            <div className={styled.logo_chacracter}>
              <img src="image/login-active.png" alt="" />
            </div>
            <p className={styled.auth_text}>Log Out</p>
          </button>
        </div>
      ) : (
        <div className={styled.auth_box}>
          <button onClick={onLoginModal} className={styled.auth_btn}>
            <div className={`${styled.logo_chacracter} ${styled.active}`}>
              <img src="image/login.png" alt="" />
            </div>
            <p className={styled.auth_text}>Sign In</p>
          </button>
        </div>
      )}
      {/* 로그인 영역 */}
    </header>
  );
};

export default Header;
