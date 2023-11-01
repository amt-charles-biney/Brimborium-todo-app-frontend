import { ModalProps } from "../models/ui";

const Modal = ({ closeModal, component }: ModalProps) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed glass z-[2]">
      <div className="h-full w-full flex justify-center items-center">
        {component({ closeModal: closeModal })}
      </div>
    </div>
  );
};

export default Modal;
