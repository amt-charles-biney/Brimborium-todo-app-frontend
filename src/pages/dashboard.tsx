import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Card from "../components/card";
import DigitalClock from "../components/cards/clock";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  document.title = "Dashboard | Brimborium";

  function closeModal(state: boolean): void {
    setIsModalOpen(state);
  }

  function openModal(state: boolean): void {
    setIsModalOpen(state);
  }

  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden flex dark-gradient text-white">
      {isModalOpen && <Modal closeModal={closeModal} />}
      <Sidebar openModal={openModal}></Sidebar>
      <div className="w-full h-full grid bg-[rgba(5,4,9,0.7)]">
        <Navigation></Navigation>
        <div className="w-full h-full flex gap-20 flex-wrap p-24">
          <Card title={"Today"} content={<DigitalClock />}></Card>
          <Card title={"Pomodoro"} content={undefined}></Card>
          <Card title={""} content={undefined}></Card>
          <Card title={""} content={undefined}></Card>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
};

export default Dashboard;
