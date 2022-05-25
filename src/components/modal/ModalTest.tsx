import { CloseOutlined } from "@ant-design/icons";
import styled from "./MenuModal.module.css";
import useModalFixed from "../../hooks/useModalFixed";
import { useState } from "react";
import { MenuListModalProps, MenuModalProps } from "../../types";
import menuListData from "./menuListData";

interface ParentOne {
  title: string;
}

const json = JSON.stringify(menuListData);

export const ModalTest = ({ openSeries }: MenuListModalProps) => {
  const [seriesModalVisible, setSeriesmodalVisible] = useState<boolean>(true);
  const seriesVisible = () => {
    setSeriesmodalVisible(!seriesModalVisible);
  };

  const newSeriesList = menuListData.map((series, index) => {
    return (
      <li key={index}>
        <span>{series.title}</span>
      </li>
    );
  });

  return (
    <>
      <section className={`${styled.menu_list_expand_box}`}>
        <CloseOutlined
          className={styled.close_expand}
          onClick={() => {
            seriesVisible(); // 새로 생성한 boolean 값
            openSeries(); // 기존 boolean 값
            // setTimeout(() => {}, 400);
          }}
        />
        <ul className={styled.menu_list_expand}>{newSeriesList}</ul>
      </section>
    </>
  );
};
