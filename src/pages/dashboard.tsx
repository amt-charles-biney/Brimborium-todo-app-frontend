import Card from "../components/card";
import DigitalClock from "../components/cards/clock";
import CompletionChart from "../components/cards/completionChart";
import Quote from "../components/cards/quote";
import UpcomingTask from "../components/cards/upcomingTask";
import Navigation from "../components/navigation";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  document.title = "Dashboard | Brimborium";

  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden flex dark-gradient text-white">
      <Sidebar></Sidebar>
      <div className="w-full h-full grid bg-[rgba(5,4,9,0.7)]">
        <Navigation></Navigation>
        <div className="w-full h-full flex gap-20 flex-wrap p-24">
          <Card title={"Today"} content={<DigitalClock />}></Card>
          <Card title={"Upcoming Task"} content={<UpcomingTask />}></Card>
          <Card title={"Completion Ratio"} content={<CompletionChart />}></Card>
          <Card title={"Motivational Quote"} content={<Quote />}></Card>
          <Card title={""} content={undefined}></Card>
          <Card title={""} content={undefined}></Card>
          <Card title={""} content={undefined}></Card>
          <Card title={""} content={undefined}></Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
