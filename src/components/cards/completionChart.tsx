import { PieChart } from "react-minimal-pie-chart";

const CompletionChart = () => {
  const data = [
    { title: "Tasks completed", value: 10, color: "#247BA0" },
    { title: "Task yet to be done", value: 15, color: "#F3D970" },
  ];

  return (
    <div className="w-full h-full flex justify-center items-center">
      <PieChart animate startAngle={90} className="w-[180px] h-[180px]" data={data} />
    </div>
  );
};

export default CompletionChart;
