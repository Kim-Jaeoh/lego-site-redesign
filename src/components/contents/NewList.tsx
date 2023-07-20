import React from "react";
import styled from "./NewList.module.css";
import CategoryTitle from "../CategoryTitle";

type Props = {};

const NewList = (props: Props) => {
  return (
    <section className={styled.new_product}>
      <div className={styled.inner}>
        <div className={styled.new_product_video}>
          <video controls>
            <source
              src="/image/new_bat-car-video.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className={styled.new_product_detail}>
          <CategoryTitle title={"신제품"} color={"orange"} num={3} />

          <div className={styled.new_product_detail_text}>
            <p>레고® DC 배트맨™ 배트모빌™ 텀블러</p>
            <p>
              다크 나이트™ 3부작 영화에 등장하는 범죄 퇴치 기계를 경이로운
              모습의 모델로 재현해보세요.
            </p>
          </div>
          <div className={styled.new_product_image}>
            <img src="/image/bat-car-box_hover.png" alt="batmobile box" />
            <img src="/image/bat-car_hover.png" alt="batmobile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewList;
