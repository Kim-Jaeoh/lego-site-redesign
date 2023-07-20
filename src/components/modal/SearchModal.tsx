import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import styled from "./SearchModal.module.css";

interface SearchModalProps {
  searchModal: boolean;
  onSearchModal: () => void;
}

const SearchModal = ({ searchModal, onSearchModal }: SearchModalProps) => {
  const [isOpen, setIsOpen] = useState(searchModal);

  const modalRef = useRef<number | null>(null);

  useEffect(() => {
    return () => window.clearTimeout(modalRef.current as number);
  }, []);

  const onCloseModal = () => {
    setIsOpen((prev) => !prev);
    modalRef.current = window.setTimeout(() => onSearchModal(), 400);
  };

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
              <CloseOutlined className={styled.close} onClick={onCloseModal} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SearchModal;
