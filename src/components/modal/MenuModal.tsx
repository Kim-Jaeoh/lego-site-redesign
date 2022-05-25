import { CloseOutlined } from "@ant-design/icons";
import styled from "./MenuModal.module.css";
import useModalFixed from "../../hooks/useModalFixed";
import { useState } from "react";
import { MenuModalProps } from "../../types";
import menuListData from "./menuListData";
import { ModalTest } from "./ModalTest";

const MenuModal = ({ openMenuModal }: MenuModalProps) => {
  const ModalFixed = useModalFixed(); // 모달창 픽스

  const [menuModal, setMenuModal] = useState<boolean>(true);
  const openMenu = () => {
    setMenuModal(!menuModal);
  };

  const [seriesModal, setSeriesModal] = useState<boolean>(false);
  const openSeries = () => {
    setSeriesModal(!seriesModal);
  };

  const [seriesModalVisible, setSeriesmodalVisible] = useState<boolean>(false);
  const seriesVisible = () => {
    setSeriesmodalVisible(!seriesModalVisible);
  };

  const newSeriesList = menuListData.map((seriesList, index) => {
    return (
      <li key={index}>
        <span>{seriesList.title}</span>
      </li>
    );
  });

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
                  if (seriesModal === true) {
                    openSeries();
                  }
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
                    openSeries();
                    setTimeout(() => {
                      seriesVisible();
                    }, 400);
                    // }
                  }}
                >
                  시리즈별
                </li>
                <li>관심 분야</li>
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
          {seriesModal ? <ModalTest openSeries={openSeries} /> : null}
          {/* {seriesModal ? (
            <section
              className={`${styled.menu_list_expand_box} ${
                seriesModal ? styled.on : styled.off
              }`}
            >
              <CloseOutlined
                className={styled.close_expand}
                onClick={() => {
                  seriesVisible(); // 새로 생성한 boolean 값
                  setTimeout(() => {
                    openSeries(); // 기존 boolean 값
                  }, 400);
                }}
              />
              <ul className={styled.menu_list_expand}>{newSeriesList}</ul>
            </section>
          ) : null} */}
        </div>
      </section>
    </>
  );
};

export default MenuModal;
