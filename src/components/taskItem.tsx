import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useSearchParams } from "react-router-dom";
import { Task } from "../models/task";
import TaskStatus from "./taskStatus";

export type TaskItemProps = {
  index: number;
  task: Task;
};
const TaskItem = ({ task, index }: TaskItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSetParams = () => {
    setSearchParams({ taskId: task.id });
  };
  return (
    <li
      onClick={handleSetParams}
      className={`flex gap-10 w-full transition-all text-center items-center ${
        searchParams.get("taskId") == task.id ? "!bg-gray-800" : ""
      } ${
        index % 2 === 0 ? "glass" : ""
      }  hover:bg-gray-700 px-5 py-3 rounded cursor-pointer`}
    >
      <div className="w-[35%] flex gap-3">
        <input type="checkbox" />
        <h3 className="capitalize text-left">{task.topic}</h3>
      </div>
      <p className="w-[15%] text-sm">{moment(task.dueDate).fromNow()}</p>
      <div className="status w-[10%]">
        <TaskStatus status={task.status as string}></TaskStatus>
      </div>
      <p className="w-[15%] text-sm">Nexum Kopla</p>
      <div className="tracker w-[15%] h-1 bg-green-700 rounded-full"></div>
      <div className="w-[10%] flex justify-center">
        <div className="assigned w-[40px] h-[40px] border rounded-full flex items-center justify-center">
          <FontAwesomeIcon className="text-xl" icon={faUser} />
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
