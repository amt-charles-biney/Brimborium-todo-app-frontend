import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Qat from "../components/qat";
import Sidebar from "../components/sidebar";
import { ModalComponentProps, ModalState } from "../models/ui";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchUserTasks } from "../redux/taskSlice";
import { LoginResponse } from "../models/authentication";

const Dashboard = () => {
  const { id } = useAppSelector((state) => state.auth.user as LoginResponse);
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    dispatch(fetchUserTasks(id && id));
  }, [dispatch, id]);

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
      <Qat openModal={openModal}></Qat>
    </div>
  );
};

export default Dashboard;
