import React from "react";
import styled from "./RecommendList.module.css";
import CategoryTitle from "../CategoryTitle";

type Props = {};

const RecommendList = (props: Props) => {
  return (
    <section className={styled.recommend}>
      <div className={styled.inner}>
        <div className={styled.side_obj_1}>
          <img src="/image/obj_1.png" alt="가디언쉽" />
        </div>
        <CategoryTitle title={"추천 제품"} color={"green"} num={1} />

        <article>
          <ul className={styled.recommend_list}>
            <li className={styled.recommend_card}>
              <div className={styled.product_image}>
                <img src="/image/product_1.png" alt="product 1" />
              </div>
              <div className={styled.product_detail}>
                <p className={styled.product_name}>카니지</p>
                <p className={styled.product_price}>89,900원</p>
              </div>
            </li>
            <li className={styled.recommend_card}>
              <div className={styled.product_image}>
                <img src="/image/product_2.png" alt="product 2" />
              </div>
              <div className={styled.product_detail}>
                <p className={styled.product_name}>인피니티 건틀렛</p>
                <p className={styled.product_price}>99,900원</p>
              </div>
            </li>
            <li className={styled.recommend_card}>
              <div className={styled.product_image}>
                <img src="/image/product_3.png" alt="product 3" />
              </div>
              <div className={styled.product_detail}>
                <p className={styled.product_name}>가디언 쉽</p>
                <p className={styled.product_price}>224,900원</p>
              </div>
            </li>
            <li className={styled.recommend_card}>
              <div className={styled.product_image}>
                <img src="/image/product_4.png" alt="product 4" />
              </div>
              <div className={styled.product_detail}>
                <p className={styled.product_name}>타자기</p>
                <p className={styled.product_price}>259,900원</p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default RecommendList;
