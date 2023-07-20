import React from "react";
import styled from "./CategoryTitle.module.css";

type Props = {
  title: string;
  color: string;
  num: number;
};

const CategoryTitle = ({ title, color, num }: Props) => {
  return (
    <div className={styled.title}>
      <p className={styled.title_text}>{title}</p>
      <button className={`${styled.plusButton} ${styled[color]}`}>
        <img src={`/image/plusButton${num}.png`} alt="plus button" />
      </button>
    </div>
  );
};

export default CategoryTitle;
