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
  openModal: (arg0: boolean) => void;
};

export type NavProps = {
  link?: string;
  icon: IconDefinition;
  name: string;
  openModal?: (arg0: boolean) => void;
};
