import React from "react";
import styled from "./PopularList.module.css";
import CategoryTitle from "../CategoryTitle";

const PopularList = () => {
  return (
    <section className={styled.popular}>
      <div className={styled.inner}>
        <CategoryTitle title={"인기 제품"} color={"white"} num={2} />
        <article>
          <ul className={styled.popular_list}>
            <li className={styled.popular_card_main}>
              <div className={styled.popular_card_main_image}>
                <img src="/image/popular_main.png" alt="popular_main_photo" />
              </div>
              <div className={styled.popular_detail}>
                <div>
                  <p>재미있는 놀이를 위한 주문</p>
                  <p>
                    레고® 해리포터™가 선사하는 마법과도 같은 모험의 세계로
                    여러분을 초대합니다.
                  </p>
                </div>
              </div>
            </li>
            <li className={styled.popular_card_sub}>
              <div>
                <div className={styled.popular_card_sub_image_1}>
                  <img
                    src="/image/popular_sub_1.png"
                    alt="popular_sub_1_photo"
                  />
                </div>
                <div className={styled.popular_detail_dim}>
                  <div className={styled.popular_detail_dim_text}>
                    <p>한층 더 넓어지는 은하계</p>
                    <p>레고로 재현하는 스타워즈: 더 만달로리안 속 세계</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styled.popular_card_sub_image_2}>
                  <img
                    src="/image/popular_sub_2.png"
                    alt="popular_sub_2_photo"
                  />
                </div>
                <div className={styled.popular_detail_dim}>
                  <div className={styled.popular_detail_dim_text}>
                    <p>픽업트럭의 대명사</p>
                    <p>
                      포드® F-150 랩터로 전설적인 픽업트럭을 직접 조립해 보세요.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default PopularList;
