import {
  faCalendarCheck,
  faCircleCheck,
  faDiagramNext,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useAppSelector } from "../../redux/hooks";

export type TaskProps = {
  index: number;
};

const UpcomingTask = ({ index }: TaskProps) => {
  const { tasks, error, loading } = useAppSelector((state) => state.task);

  const upcomingTask = tasks[index];

  return (
    <div className="h-full w-full flex flex-col justify-between items-center">
      <div className="flex-col mt-12">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center">Error: {error}</p>
        ) : upcomingTask ? (
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
              {upcomingTask.topic}
            </h2>
            <p className="text-center text-sm">{upcomingTask.description}</p>
          </div>
        ) : index === 0 ? (
          <p className="text-center">No current task found.</p>
        ) : (
          <p className="text-center">No upcoming task found.</p>
        )}
      </div>

      {index === 1
        ? upcomingTask && (
            <p className="font-mono">
              <FontAwesomeIcon icon={faCalendarCheck} />
              &ensp; {moment(upcomingTask.dueDate).fromNow()}
            </p>
          )
        : upcomingTask && (
            <button className="px-4 py-1 border-2 border-green-400 rounded-full">
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
