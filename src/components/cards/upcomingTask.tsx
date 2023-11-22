import {
  faCalendarCheck,
  faCircleCheck,
  faDiagramNext,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectUpcomingTasks } from "../../redux/taskSelectors";
import { updateTaskStatus } from "../../redux/taskSlice";
import { taskStatusString } from "../../models/task";
import toastIt from "../../utilities/toast";
import { truncateText } from "../../utilities/misc";

export type TaskProps = {
  index: number;
};

const UpcomingTask = ({ index }: TaskProps) => {
  const tasks = useAppSelector(selectUpcomingTasks);
  const dispatch = useAppDispatch();
  const loading = false;

  const currentTask = tasks[index];
  const isInProgress =
    index === 0 &&
    !!currentTask &&
    currentTask.status !== taskStatusString.inProgress;

  if (isInProgress) {
    dispatch(
      updateTaskStatus({
        id: currentTask.id,
        status: taskStatusString.inProgress,
      })
    );
  }

  async function updateStatus() {
    await dispatch(
      updateTaskStatus({ id: currentTask.id, status: "COMPLETED" })
    );
    toastIt("Congratulations.", "🎉");
  }

  return (
    <div className="h-full w-full flex flex-col justify-between items-center">
      <div className="flex-col mt-7">
        {loading ? (
          <p className="text-center mt-12">Loading...</p>
        ) : currentTask ? (
          <div>
            <h2 className="text-center font-bold text-lg pb-4">
              {index === 1 ? (
                <FontAwesomeIcon className="text-orange-600" icon={faForward} />
              ) : (
                <FontAwesomeIcon
                  className="text-yellow-400"
                  icon={faDiagramNext}
                />
              )}{" "}
              &ensp;
              {currentTask.topic}
            </h2>
            <p className="text-center text-sm">
              {truncateText(currentTask.description, 100)}
            </p>
          </div>
        ) : index === 0 ? (
          <p className="text-center mt-16">No current task found.</p>
        ) : (
          <p className="text-center mt-16">No upcoming task found.</p>
        )}
      </div>

      {index === 1
        ? currentTask && (
            <p className="font-mono">
              <FontAwesomeIcon icon={faCalendarCheck} />
              &ensp; {moment(currentTask.dueDate).fromNow()}
            </p>
          )
        : currentTask && (
            <button
              onClick={updateStatus}
              className="px-4 py-1 border-2 border-green-400 rounded-full"
            >
              <FontAwesomeIcon
                className="text-green-400"
                icon={faCircleCheck}
              />{" "}
              &ensp;Done
            </button>
          )}
    </div>
  );
};

export default UpcomingTask;
