import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "./swiperModules/swiper.scss";
import "./swiperModules/navigation.scss";
import "./swiperModules/pagination.scss";
import styled from "./Home.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MenuModal from "./modal/MenuModal";
import LoginModal from "./modal/LoginModal";
import SignUpModal from "./modal/SignUpModal";
import { AuthContext } from "../context/authContext";
import { getAuth, signOut } from "firebase/auth";

export default function Home() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const [menuModal, setMenuModal] = useState<boolean>(false);
  const [loginmodalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [changeLoginModal, setChangeLoginModal] = useState<boolean>(false);

  const openMenuModal = () => {
    setMenuModal(!menuModal);
  };

  const openLoginModal = () => {
    setLoginModalOpen(!loginmodalOpen);
  };

  const changeLoginModalOpen = () => {
    setChangeLoginModal(!changeLoginModal);
  };

  const userInfo = useContext(AuthContext);
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
      await signOut(auth);
    }
  };

  return (
    <>
      {/* 햄버거 메뉴 창 */}
      {menuModal ? <MenuModal openMenuModal={openMenuModal} /> : null}

      {/* 로그인 창 */}
      {loginmodalOpen ? (
        <LoginModal
          openLoginModal={openLoginModal}
          changeLoginModalOpen={changeLoginModalOpen}
        />
      ) : null}

      {/* 회원가입 창 */}
      {changeLoginModal ? (
        <SignUpModal
          openLoginModal={openLoginModal}
          changeLoginModalOpen={changeLoginModalOpen}
        />
      ) : null}

      <header className={styled.header}>
        <div className={styled.inner}>
          <div className={styled.logo}>
            <Link to={"/"}>
              <img
                src="/image/lego-logo.png"
                // width={120}
                alt="lego logo"
                className={styled.logo_img}
              />
            </Link>
          </div>
          <nav className={styled.gnb}>
            <div className={styled.gnb_left}>
              <ul>
                <div className={styled.button} onClick={openMenuModal}>
                  <MenuOutlined className={styled.menubar} />
                </div>
                <li>
                  <span>BRAND</span>
                </li>
                <li>
                  <span>NEWS</span>
                </li>
              </ul>
            </div>
            <div className={styled.gnb_right}>
              <ul>
                <li>
                  <span>PRODUCT</span>
                </li>
                <li>
                  <span>EVENT</span>
                </li>
                <div className={styled.button}>
                  <SearchOutlined className={styled.search} />
                </div>
              </ul>
            </div>
          </nav>
        </div>
        {/* 로그인 영역 */}
        {userInfo ? (
          <div className={styled.logout}>
            <button onClick={handleLogout} className={styled.signin}>
              <p>Log Out</p>
            </button>
            <div className={styled.userEmail}>
              <p>{user!.email?.substring(0, user!.email.indexOf("@", 0))}</p>
              {/* 이메일 @ 뒤에 삭제 */}
            </div>
          </div>
        ) : (
          <div onClick={openLoginModal} className={styled.login}>
            <button className={styled.signin}>
              <p>Sign In</p>
            </button>
            {/* <div className={styled.login_logo}>
              <img src="image/login.png" alt="" />
            </div> */}
          </div>
        )}
        {/* 로그인 영역 */}
      </header>

      {/* 배너 슬라이드 */}
      <section className={styled.slider}>
        <Swiper
          className={styled.slide}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 6000 }}
        >
          <SwiperSlide>
            <img src="/image/slide1.png" alt="slide-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/slide2.png" alt="slide-2" />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* 배너 슬라이드 */}

      {/* 추천 제품 */}
      <section className={styled.recommend}>
        <div className={styled.inner}>
          <div className={styled.title}>
            <div className={styled.title_text}>추천 제품</div>
            <div className={`${styled.plusButton} ${styled.green}`}>
              <img src="/image/plusButton1.png" alt="plus button" />
            </div>
          </div>

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
        <div className={styled.side_obj_1}>
          <img src="/image/obj_1.png" alt="가디언쉽" />
        </div>
      </section>
      {/* 추천 제품 */}

      {/* 인기 제품 */}
      <section className={styled.popular}>
        <div className={styled.inner}>
          <div className={styled.title}>
            <div className={styled.title_text}>인기 제품</div>
            <div className={`${styled.plusButton} ${styled.white}`}>
              <img src="/image/plusButton2.png" alt="plus button" />
            </div>
          </div>

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
                        포드® F-150 랩터로 전설적인 픽업트럭을 직접 조립해
                        보세요.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>
      {/* 인기 제품 */}

      {/* 신제품 */}
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
            <div className={styled.title}>
              <div className={styled.title_text}>신제품</div>
              <div className={`${styled.plusButton} ${styled.orange}`}>
                <img src="/image/plusButton3.png" alt="plus button" />
              </div>
            </div>
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
      {/* 신제품 */}

      {/* 시리즈별 */}
      <section className={styled.series_product}>
        <div className={styled.inner}>
          <div className={styled.title}>
            <div className={styled.title_text}>시리즈별</div>
            <div className={`${styled.plusButton} ${styled.red}`}>
              <img src="/image/plusButton4.png" alt="plus button" />
            </div>
          </div>
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
      {/* 시리즈별 */}

      {/* 푸터 */}
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
      {/* 푸터 */}
    </>
  );
}
