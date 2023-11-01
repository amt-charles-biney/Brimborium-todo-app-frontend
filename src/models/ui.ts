import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type ModalComponentProps = {
  closeModal: (isOpen: boolean) => void;
};

export type ModalProps = {
  closeModal: (isOpen: boolean) => void;
  component: (props: ModalComponentProps) => JSX.Element;
};

export type ModalState = {
  isModalOpen: boolean;
  component?: (props: ModalComponentProps) => JSX.Element;
};

export type OpenModalFunction = (
  isOpen: boolean,
  component: (props: ModalComponentProps) => JSX.Element
) => void;

export type QatButtonProps = {
  title: string;
  color: string;
  icon: IconDefinition;
  openModal?: OpenModalFunction;
  component?: (props: ModalComponentProps) => JSX.Element;
};

export type openModal = {
  openModal?: OpenModalFunction;
};

export type NavProps = {
  link?: string;
  icon: IconDefinition;
  name: string;
  openModal?: OpenModalFunction;
  component?: (props: ModalComponentProps) => JSX.Element;
};
