import { CloseOutlined } from "@ant-design/icons";
import styled from "./MenuModal.module.css";
import useModalFixed from "../../hooks/useModalFixed";
import { useCallback, useEffect, useState } from "react";
import { MenuModalProps } from "../../types";

const MenuModal = ({ openMenuModal }: MenuModalProps) => {
  const ModalFixed = useModalFixed(); // 모달창 픽스

  const [menuModal, setMenuModal] = useState<boolean>(true);

  const openMenu = () => {
    setMenuModal(!menuModal);
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     // setTimeout의 반환값은 timeoutID는 양의 정수로서 setTimeout()이 생성한 타이머 식별에 활용된다.
  //     openMenuModal();
  //     console.log("timeout");
  //   }, 1000);
  //   return () => clearTimeout(timeout); // 생애주기가 끝나면 해당하는 타이머를 제거한다.
  // }, [openMenuModal]);

  return (
    <>
      <section className={styled.modal_back}>
        <div
          className={`${styled.modal} ${menuModal ? styled.on : styled.off}`}
        >
          <header>
            <CloseOutlined
              className={styled.close}
              onClick={() => {
                openMenu(); // 창 열기
                setTimeout(() => {
                  openMenuModal(); // 창 닫기
                }, 400);
              }}
            />
            <div className={styled.banner}>
              <img
                src="./image/menu_event_banner.png"
                alt="menu evenet banner"
              />
            </div>
          </header>
          <section>
            <ul className={styled.menu_list}>
              <li>시리즈별</li>
              <li>관심 분야</li>
              <li>독점 제품</li>
              <li>신제품</li>
              <li>인기 제품</li>
              <li>할인 및 행사 제품</li>
            </ul>
            <div className={styled.footer_sns}>
              <a
                href="https://www.facebook.com/LEGOKorea.official"
                target="_BLANK"
                rel="noreferrer"
              >
                <img src="/image/sns-fb.png" alt="sns facebook" />
              </a>
              <a
                href="https://twitter.com/LEGO_Group"
                target="_BLANK"
                rel="noreferrer"
              >
                <img src="/image/sns-twt.png" alt="sns twitter" />
              </a>
              <a
                href="https://www.instagram.com/legokorea_official/"
                target="_BLANK"
                rel="noreferrer"
              >
                <img src="/image/sns-ig.png" alt="sns instagram" />
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default MenuModal;
