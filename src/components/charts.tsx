import { ParentSize } from "@visx/responsive";
import { Bar } from "@visx/shape";
import Stock from "./cards/stock";
import TreeCard from "./cards/tree";

const charts = () => {
  return (
    <div>
      <div className="w-[50%] h-[50%]">
        <ParentSize>
          {({ width, height }) => <TreeCard width={width} height={height} />}
        </ParentSize>
      </div>
      <div className="w-[50%] h-[50%]">
        <ParentSize>
          {({ width, height }) => <Bar width={width} height={height} />}
        </ParentSize>
      </div>
      <div className="w-[100%] h-[40%] -translate-y-20">
        <ParentSize>
          {({ width, height }) => <Stock width={width} height={height} />}
        </ParentSize>
      </div>
    </div>
  );
};

export default charts;
