import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

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
  openModal: (arg0: boolean) => void;
};

export type NavProps = {
  link?: string;
  icon: IconDefinition;
  name: string;
  openModal?: (arg0: boolean) => void;
};

export type ModalProps = {
  closeModal: (arg0: boolean) => void;
  component: ReactNode;
};

export type ModalComponentProps = {
  closeModal: (arg0: boolean) => void;
};
