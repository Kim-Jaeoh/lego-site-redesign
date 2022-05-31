import { Link } from "react-router-dom";
import { SearchOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useCallback, useContext, useEffect, useState } from "react";
import styled from "./SearchModal.module.css";

interface SearchModalProps {
  searchModal: boolean;
  openSearchModal(): void;
}

const SearchModal = ({ searchModal, openSearchModal }: SearchModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const visible = useCallback(() => {
    setTimeout(() => {
      openSearchModal();
    }, 400);
  }, [openSearchModal]);

  return (
    <header className={`${styled.header} ${isOpen ? styled.on : styled.off}`}>
      <div className={styled.inner}>
        <nav className={styled.gnb}>
          <div className={styled.gnb_left}>
            <SearchOutlined className={styled.search} />
            <form>
              <input type="text" placeholder="검색어를 입력하세요" />
            </form>
          </div>
          <div className={styled.gnb_right}>
            <div className={styled.button}>
              <CloseOutlined
                className={styled.close}
                onClick={() => {
                  onClose();
                  visible();
                  // setTimeout(() => {
                  //   openSearchModal();
                  //   console.log("?");
                  // }, 400);
                }}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SearchModal;
