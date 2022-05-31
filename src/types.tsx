export interface ModalProps {
  openLoginModal(): void;
  changeLoginModalOpen(): void;
}

export interface MenuModalProps {
  openMenuModal(): void;
}

export interface MenuListModalProps {
  openListExpand(): void;
}

export interface MenuClickProps {
  openListExpand(): void;
  clickTab: any;
}
