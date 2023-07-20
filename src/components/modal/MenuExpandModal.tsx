import { useMemo } from "react";
import { CloseOutlined } from "@ant-design/icons";
import styled from "./MenuModal.module.css";
import { series, interest } from "../../data/menuListData";

type ListProps = {
  clickTab: number | null;
  onExpandClose(): void;
};

interface typeProps {
  place: number;
  title: string;
}

export const MenuExpandModal = ({ clickTab, onExpandClose }: ListProps) => {
  const type: typeProps[] = useMemo(() => {
    return clickTab === 1 ? series : interest;
  }, [clickTab]);

  const newInterestLists = [1, 2].map((place) => (
    <div key={place}>
      {type.map(
        (obj, index) => obj.place === place && <li key={index}>{obj.title}</li>
      )}
    </div>
  ));

  return (
    <section className={`${styled.menu_list_expand_box}`}>
      <CloseOutlined
        className={styled.close_expand}
        onClick={() => {
          onExpandClose();
        }}
      />
      <ul className={styled.menu_list_expand}>{newInterestLists}</ul>
    </section>
  );
};
