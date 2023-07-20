import { useState } from "react";
import MenuModal from "../components/modal/MenuModal";
import LoginModal from "../components/modal/LoginModal";
import SignUpModal from "../components/modal/SignUpModal";
import SearchModal from "../components/modal/SearchModal";
import Header from "../components/Header";
import Slider from "../components/contents/Slider";
import RecommendList from "../components/contents/RecommendList";
import PopularList from "../components/contents/PopularList";
import NewList from "../components/contents/NewList";
import SeriesList from "../components/contents/SeriesList";
import Footer from "../components/Footer";

export default function Home() {
  const [menuModal, setMenuModal] = useState(false);
  const [loginmodalOpen, setLoginModalOpen] = useState(false);
  const [changeLoginModal, setChangeLoginModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const onMenuModal = () => {
    setMenuModal((prev) => !prev);
  };

  const onLoginModal = () => {
    setLoginModalOpen((prev) => !prev);
  };

  const onChangeLoginModal = () => {
    setChangeLoginModal((prev) => !prev);
  };

  const onSearchModal = () => {
    setSearchModal((prev) => !prev);
  };

  return (
    <>
      {/* 햄버거 메뉴 창 */}
      {menuModal && (
        <MenuModal menuModal={menuModal} onMenuModal={onMenuModal} />
      )}

      {/* 로그인 창 */}
      {loginmodalOpen &&
        (changeLoginModal ? (
          <SignUpModal
            onLoginModal={onLoginModal}
            onChangeLoginModal={onChangeLoginModal}
          />
        ) : (
          <LoginModal
            onLoginModal={onLoginModal}
            onChangeLoginModal={onChangeLoginModal}
          />
        ))}

      {/* 검색 창 */}
      {searchModal && (
        <SearchModal searchModal={searchModal} onSearchModal={onSearchModal} />
      )}

      <Header
        onMenuModal={onMenuModal}
        onLoginModal={onLoginModal}
        onSearchModal={onSearchModal}
      />
      <Slider />
      <RecommendList />
      <PopularList />
      <NewList />
      <SeriesList />
      <Footer />
    </>
  );
}
