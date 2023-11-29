import { useState } from "react";
import Card from "../components/card";
import DigitalClock from "../components/cards/clock";
import CompletionChart from "../components/cards/completionChart";
import Quote from "../components/cards/quote";
import UpcomingTask from "../components/cards/upcomingTask";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Sidebar from "../components/sidebar";
import { Toaster } from "react-hot-toast";
import Spotify from "../components/cards/spotify";

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
        <div className="w-full h-full flex gap-20 flex-wrap p-24 overflow-y-scroll 2xl:overflow-hidden">
          <Card title={"Today"} content={<DigitalClock />}></Card>
          <Card
            title={"Current task"}
            content={<UpcomingTask index={0} />}
          ></Card>
          <Card title={"Completion Ratio"} content={<CompletionChart />}></Card>
          <Card title={"Motivational Quote"} content={<Quote />}></Card>
          <Card title={"Pomodoro Timer"} content={undefined}></Card>
          <Card
            title={"Upcoming Task"}
            content={<UpcomingTask index={1} />}
          ></Card>
          <Card title={""} content={undefined}></Card>
          <Card title={"Spotify Music"} content={<Spotify />} bg="#b2598582"></Card>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  );
};

export default Dashboard;
