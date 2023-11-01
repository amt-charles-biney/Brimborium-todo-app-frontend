import { faSort, faSortNumericAsc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../redux/hooks";
import TaskItem from "../taskItem";

const AllTasks = () => {
  const { tasks } = useAppSelector((state) => state.task);

  return (
    <div className="w-full h-full flex">
      <div className="w-full min-w-[50.75rem] h-full">
        <ul className="flex gap-10 px-5 font-bold text-xl pb-3 text-center">
          <li className="w-[35%] text-left cursor-pointer">
            Topic <FontAwesomeIcon className="text-xs" icon={faSort} />
          </li>
          <li className="w-[15%] cursor-pointer">
            Deadline{" "}
            <FontAwesomeIcon className="text-sm" icon={faSortNumericAsc} />
          </li>
          <li className="w-[10%] cursor-pointer">
            Status <FontAwesomeIcon className="text-xs" icon={faSort} />
          </li>
          <li className="w-[15%] cursor-pointer">
            Project <FontAwesomeIcon className="text-xs" icon={faSort} />
          </li>
          <li className="w-[15%] cursor-pointer">
            Progress <FontAwesomeIcon className="text-xs" icon={faSort} />
          </li>
          <li className="w-[10%]">Assigned</li>
        </ul>
        <ul className="flex flex-col">
          {tasks.map((task) => {
            return <TaskItem task={task} key={task.id} />;
          })}
        </ul>
        {/* TODO: Page numbers */}
      </div>
      {/* TODO: Add a side modal.*/}
    </div>
  );
};

export default AllTasks;
