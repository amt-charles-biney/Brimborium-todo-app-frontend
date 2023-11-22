import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Qat from "../components/qat";
import Sidebar from "../components/sidebar";
import { LoginResponse } from "../models/authentication";
import { ModalComponentProps, ModalState } from "../models/ui";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchUserTasks } from "../redux/taskSlice";
import DetailPanel from "../components/detailPanel";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useAppSelector((state) => state.auth.user as LoginResponse);
  const [searchParams] = useSearchParams();
  const taskId = searchParams.get("taskId");
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
    <div
      className={`h-[100vh] w-[100vw] overflow-hidden grid ${
        taskId ? "grid-cols-[6rem_1fr]" : "grid-cols-[16rem_1fr]"
      } dark-gradient text-white transition-all`}
    >
      {modalInstance.isModalOpen && (
        <Modal closeModal={closeModal} component={modalInstance.component!} />
      )}
      <Sidebar openModal={openModal} isMini={!!taskId}></Sidebar>
      <main className="flex">
        <div className="w-full h-full grid grid-rows-[6.25rem_1fr] bg-[rgba(5,4,9,0.7)]">
          <Navigation></Navigation>
          <div className="w-full h-full max-h-[calc(100vh-6.25rem)] flex gap-20 flex-wrap px-12 py-20 overflow-y-scroll">
            <Outlet></Outlet>
          </div>
        </div>
        {taskId && <DetailPanel />}
      </main>
      <Qat openModal={openModal}></Qat>
    </div>
  );
};

export default Dashboard;
