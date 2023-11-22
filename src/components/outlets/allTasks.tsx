import { useAppSelector } from "../../redux/hooks";
import EmptyListPrompt from "../emptyListPrompt";
import TableHeaders from "../tableHeaders";
import TaskItem from "../taskItem";

const AllTasks = () => {
  const { tasks } = useAppSelector((state) => state.task);

  return (
    <div className="w-full h-full flex">
      {tasks.length < 1 ? (
        <EmptyListPrompt
          topic={"No tasks found."}
          message={"Try adding some tasks to help manage your project."}
        />
      ) : (
        <div className="w-full min-w-[50.75rem] h-full">
          <TableHeaders />
          <ul className="flex flex-col">
            {tasks.map((task, index) => {
              return <TaskItem index={index} task={task} key={task.id} />;
            })}
          </ul>
          {/* TODO: Page numbers */}
        </div>
      )}
    </div>
  );
};

export default AllTasks;
