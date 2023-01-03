import { CloseOutlined } from "@ant-design/icons";
import styled from "./MenuModal.module.css";
import useModalFixed from "../../hooks/useModalFixed";
import { useCallback, useEffect, useState } from "react";
import { MenuModalProps } from "../../types";
// import { series } from "./menuListData";
import { TabContent } from "./ListSeries";

const MenuModal = ({ openMenuModal }: MenuModalProps) => {
  const ModalFixed = useModalFixed(); // 모달창 픽스

  useEffect(() => {}, []);

  const [menuModal, setMenuModal] = useState<boolean>(true);
  const [expandModal, setExpandModal] = useState<boolean>(false);
  const [expandModal2, setExpandModal2] = useState<boolean>(false);

  const openMenu = () => {
    setMenuModal(!menuModal);
  };

  const openListExpand = useCallback(() => {
    setExpandModal((prev) => !prev); // 해당 메뉴 on/off
    setExpandModal2(false); // 다른 메뉴 닫기
  }, []);

  const openListExpand2 = useCallback(() => {
    setExpandModal2((prev) => !prev); // 해당 메뉴 on/off
    setExpandModal(false); // 다른 메뉴 닫기
  }, []);

  let [clickTab, setClickTab] = useState<number>();

  return (
    <>
      <section className={styled.modal_back}>
        <div
          className={`${styled.modal} ${menuModal ? styled.on : styled.off}`}
        >
          <div className={styled.modal_title}>
            <header>
              <CloseOutlined
                className={styled.close}
                onClick={() => {
                  openMenu(); // 새로 생성한 boolean 값
                  setTimeout(() => {
                    openMenuModal(); // 기존 boolean 값
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
            <section className={styled.menu_list}>
              <ul>
                <li
                  onClick={() => {
                    setClickTab(0);
                    openListExpand();
                  }}
                >
                  시리즈별
                </li>
                <li
                  onClick={() => {
                    setClickTab(1);
                    openListExpand2();
                  }}
                >
                  관심 분야
                </li>
                <li>독점 제품</li>
                <li>신제품</li>
                <li>인기 제품</li>
              </ul>
            </section>
            <div className={styled.footer_sns}>
              <div className={styled.footer_sns_list}>
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
            </div>
          </div>
          {expandModal || expandModal2 ? (
            <TabContent clickTab={clickTab} openListExpand={openListExpand} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default MenuModal;
