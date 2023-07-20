import React from "react";
import styled from "./SeriesList.module.css";
import CategoryTitle from "../CategoryTitle";

const SeriesList = () => {
  return (
    <section className={styled.series_product}>
      <div className={styled.inner}>
        <CategoryTitle title={"시리즈별"} color={"red"} num={4} />

        <div>
          <ul className={styled.series_card}>
            <li className={styled.series_card_list}>
              <div className={styled.series_card_image}>
                <div>
                  <img src="/image/series-batman.png" alt="batman" />
                </div>
              </div>
              <div className={styled.series_card_text}>
                <p>배트맨™</p>
              </div>
            </li>
            <li className={styled.series_card_list}>
              <div className={styled.series_card_image}>
                <div>
                  <img src="/image/series-harry.png" alt="harry" />
                </div>
              </div>
              <div className={styled.series_card_text}>
                <p>해리포터™</p>
              </div>
            </li>
            <li className={styled.series_card_list}>
              <div className={styled.series_card_image}>
                <div>
                  <img src="/image/series-spiderman.png" alt="spiderman" />
                </div>
              </div>
              <div className={styled.series_card_text}>
                <p>스파이더맨™</p>
              </div>
            </li>
            <li className={styled.series_card_list}>
              <div className={styled.series_card_image}>
                <div>
                  <img src="/image/series-marvle.png" alt="marvle" />
                </div>
              </div>
              <div className={styled.series_card_text}>
                <p>마블</p>
              </div>
            </li>
            <li className={styled.series_card_list}>
              <div className={styled.series_card_image}>
                <div>
                  <img src="/image/series-ninjago.png" alt="ninjago" />
                </div>
              </div>
              <div className={styled.series_card_text}>
                <p>닌자고</p>
              </div>
            </li>
            <li className={styled.series_card_list}>
              <div className={styled.series_card_image}>
                <div>
                  <img src="/image/series-starwars.png" alt="starwars" />
                </div>
              </div>
              <div className={styled.series_card_text}>
                <p>스타워즈™</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styled.side_obj_2}>
        <img src="/image/obj_2.png" alt="머스탱" />
      </div>
    </section>
  );
};

export default SeriesList;
