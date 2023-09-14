import Navigation from "../components/navigation";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  document.title = "Dashboard | Brimborium";

  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden flex dark-gradient text-white">
      <Sidebar></Sidebar>
      <div className="w-full h-full flex bg-[rgba(5,4,9,0.7)] flex-col">
        <Navigation></Navigation>
        <div className="w-full h-full flex flex-wrap items-center"></div>
      </div>
    </div>
  );
};

export default Dashboard;
