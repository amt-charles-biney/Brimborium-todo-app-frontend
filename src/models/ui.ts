import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type QatButton = {
  title: string;
  color: string;
  icon: IconDefinition;
};

export type QatButtonProps = {
  title: string;
  color: string;
  icon: IconDefinition;
};

export type SidebarProps = {
  openModal?: (
    arg0: boolean,
    component: ({ closeModal }: ModalComponentProps) => JSX.Element
  ) => void;
};

export type NavProps = {
  link?: string;
  icon: IconDefinition;
  name: string;
  openModal?: (
    arg0: boolean,
    component: ({ closeModal }: ModalComponentProps) => JSX.Element
  ) => void;
  component?: ({ closeModal }: ModalComponentProps) => JSX.Element;
};

export type ModalProps = {
  closeModal: (arg0: boolean) => void;
  component: ({ closeModal }: ModalComponentProps) => JSX.Element;
};

export type ModalComponentProps = {
  closeModal: (arg0: boolean) => void;
};

export type ModalState = {
  isModalOpen: boolean;
  component?: ({ closeModal }: ModalComponentProps) => JSX.Element;
};
