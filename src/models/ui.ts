import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

/**
 * Represents the props required for a modal component.
 */
export type ModalComponentProps = {
  closeModal: (isOpen: boolean) => void;
};

/**
 * Represents the props required for a modal.
 */
export type ModalProps = {
  closeModal: (isOpen: boolean) => void;
  component: (props: ModalComponentProps) => JSX.Element;
};

/**
 * Represents the state of a modal.
 */
export type ModalState = {
  isModalOpen: boolean;
  component?: (props: ModalComponentProps) => JSX.Element;
};

/**
 * Function type for opening a modal.
 */
export type OpenModalFunction = (
  isOpen: boolean,
  component: (props: ModalComponentProps) => JSX.Element
) => void;

/**
 * Represents the props required for a QatButton component.
 */
export type QatButtonProps = {
  title: string;
  color: string;
  icon: IconDefinition;
  openModal?: OpenModalFunction;
  component?: (props: ModalComponentProps) => JSX.Element;
};

/**
 * Represents options for opening a modal.
 */
export type OpenModal = {
  isMini: boolean;
  openModal?: OpenModalFunction;
};

/**
 * Represents the props required for a navigation component.
 */
export type NavProps = {
  link?: string;
  icon: IconDefinition;
  name: string;
  isMini: boolean;
  openModal?: OpenModalFunction;
  component?: (props: ModalComponentProps) => JSX.Element;
};
