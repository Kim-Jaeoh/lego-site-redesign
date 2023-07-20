import React from "react";
import styled from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styled.inner}>
        <div className={styled.footer_logo}>
          <img src="/image/lego-logo.png" alt="lego logo" />
        </div>
        <ul className={styled.footer_list}>
          <li>
            <p className={styled.footer_title}>회사 소개</p>
            <ul className={styled.footer_sub}>
              <li>레고 그룹 소개</li>
              <li>레고® 뉴스</li>
              <li>지속가능한 사업</li>
              <li>레고 제품 인증</li>
              <li>레고 채용 정보</li>
              <li></li>
            </ul>
          </li>
          <li>
            <p className={styled.footer_title}>도움 안내</p>
            <ul className={styled.footer_sub}>
              <li>연락</li>
              <li>조립설명서 찾기</li>
              <li>부품 누락</li>
              <li>배송 및 반품</li>
              <li>이용 약관</li>
              <li>제품 리콜</li>
            </ul>
          </li>
          <li>
            <p className={styled.footer_title}>관광 명소</p>
            <ul className={styled.footer_sub}>
              <li>레고® 하우스</li>
              <li>레고랜드® 파크</li>
              <li>레고랜드 디스커버리 센터</li>
            </ul>
          </li>
          <li>
            <p className={styled.footer_title}>기타 정보</p>
            <ul className={styled.footer_sub}>
              <li>레고® 라이프</li>
              <li>레고 에듀케이션</li>
              <li>레고 아이디어</li>
              <li>레고 파운데이션</li>
            </ul>
          </li>
        </ul>
        <div className={styled.footer_detail}>
          <div className={styled.footer_sns}>
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
          <div className={styled.footer_copy}>
            <p>©2021 The LEGO Group. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
