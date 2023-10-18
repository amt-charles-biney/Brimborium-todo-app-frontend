import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Qat from "../components/qat";
import Sidebar from "../components/sidebar";
import { ModalComponentProps, ModalState } from "../models/ui";
import { Outlet } from "react-router";

const Dashboard = () => {
  const InitialModalInstance: ModalState = {
    isModalOpen: false,
  };

  const [modalInstance, setModalInstance] = useState(InitialModalInstance);
  document.title = "Dashboard | Brimborium";

  function closeModal(state: boolean): void {
    setModalInstance((prevState) => {
      return {
        ...prevState,
        isModalOpen: state,
      };
    });
  }

  function openModal(
    state: boolean,
    component: (props: ModalComponentProps) => JSX.Element
  ): void {
    setModalInstance(() => {
      return {
        component,
        isModalOpen: state,
      };
    });
  }

  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden flex dark-gradient text-white">
      {modalInstance.isModalOpen && (
        <Modal closeModal={closeModal} component={modalInstance.component!} />
      )}
      <Sidebar openModal={openModal}></Sidebar>
      <div className="w-full h-full grid bg-[rgba(5,4,9,0.7)]">
        <Navigation></Navigation>
        <div className="w-full h-full flex gap-20 flex-wrap p-24 overflow-y-scroll">
          <Outlet></Outlet>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={true} />
      <Qat openModal={openModal}></Qat>
    </div>
  );
};

export default Dashboard;
