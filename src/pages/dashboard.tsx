import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Card from "../components/card";
import DigitalClock from "../components/cards/clock";
import CompletionChart from "../components/cards/completionChart";
import Quote from "../components/cards/quote";
import Spotify from "../components/cards/spotify";
import UpcomingTask from "../components/cards/upcomingTask";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Qat from "../components/qat";
import Sidebar from "../components/sidebar";
import { ModalComponentProps, ModalState } from "../models/ui";

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
    component: ({ closeModal }: ModalComponentProps) => JSX.Element
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
          <Card title={"Today"} content={<DigitalClock />}></Card>
          <Card
            title={"Current task"}
            content={<UpcomingTask index={0} />}
          ></Card>
          <Card title={"Completion Ratio"} content={<CompletionChart />}></Card>
          <Card title={"Motivational Quote"} content={<Quote />}></Card>
          <Card title={"Weather"} content={undefined}></Card>
          <Card
            title={"Upcoming Task"}
            content={<UpcomingTask index={1} />}
          ></Card>
          <Card title={"Pomodoro Timer"} content={undefined}></Card>
          <Card
            title={"Spotify Music"}
            content={<Spotify />}
            bg="#b2598582"
          ></Card>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={true} />
      <Qat openModal={openModal}></Qat>
    </div>
  );
};

export default Dashboard;
