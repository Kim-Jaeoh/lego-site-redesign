import { useEffect, useState, useRef } from "react";
import { CloseOutlined } from "@ant-design/icons";
import styled from "./MenuModal.module.css";
import useModalFixed from "../../hooks/useModalFixed";
import { MenuExpandModal } from "./MenuExpandModal";

type Props = {
  menuModal: boolean;
  onMenuModal: () => void;
};

const MenuModal = ({ menuModal, onMenuModal }: Props) => {
  const [isOpenModal, setisOpenModal] = useState(menuModal);
  const [expandModal, setExpandModal] = useState({
    series: false,
    interest: false,
  });
  const [clickTab, setClickTab] = useState<number | null>(null);
  const modalRef = useRef<number | null>(null);
  const ModalFixed = useModalFixed(); // 모달창 픽스

  useEffect(() => {
    return () => window.clearTimeout(modalRef.current as number);
  }, []);

  const onCloseModal = () => {
    setisOpenModal((prev) => !prev);
    modalRef.current = window.setTimeout(() => onMenuModal(), 400);
  };

  const onSeriesClick = () => {
    setClickTab(1);
    setExpandModal((prev) => ({ series: !prev.series, interest: false }));
  };

  const onInterestClick = () => {
    setClickTab(2);
    setExpandModal((prev) => ({ interest: !prev.interest, series: false }));
  };

  return (
    <section className={styled.modal_back}>
      {(expandModal.series || expandModal.interest) && (
        <MenuExpandModal
          clickTab={clickTab}
          onExpandClose={clickTab === 1 ? onSeriesClick : onInterestClick}
        />
      )}

      <div
        className={`${styled.modal} ${isOpenModal ? styled.on : styled.off}`}
      >
        <div className={styled.modal_title}>
          <header>
            <CloseOutlined className={styled.close} onClick={onCloseModal} />
            <div className={styled.banner}>
              <img
                src="./image/menu_event_banner.png"
                alt="menu evenet banner"
              />
            </div>
          </header>
          <section className={styled.menu_list}>
            <ul>
              <li onClick={onSeriesClick}>시리즈별</li>
              <li onClick={onInterestClick}>관심 분야</li>
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
      </div>
    </section>
  );
};

export default MenuModal;
