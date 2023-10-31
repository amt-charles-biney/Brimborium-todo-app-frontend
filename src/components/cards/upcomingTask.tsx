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
  const taskState = useAppSelector((state) => state.task);

  return (
    taskState.tasks.length > 0 && (
      <div className="h-full w-full flex flex-col justify-between items-center">
        <div className="flex-col mt-12">
          {taskState.loading ? (
            <p className="text-center">Loading...</p>
          ) : taskState.error ? (
            <p className="text-center">Error: {taskState.error}</p>
          ) : taskState.tasks ? (
            <div>
              <h2 className="text-center font-bold text-lg pb-4">
                {index === 1 ? (
                  <FontAwesomeIcon
                    className="text-orange-600"
                    icon={faForward}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="text-yellow-400"
                    icon={faDiagramNext}
                  />
                )}{" "}
                &ensp;
                {taskState.tasks[index].topic}
              </h2>
            </div>
          ) : (
            <p className="text-center">No upcoming task found.</p>
          )}

          <p className="text-center text-sm">
            {taskState.tasks[index].description}
          </p>
        </div>

        {index === 1 ? (
          taskState.tasks && (
            <p className="font-mono">
              <FontAwesomeIcon icon={faCalendarCheck} />
              &ensp; {moment(taskState.tasks[index].dueDate).fromNow()}
            </p>
          )
        ) : (
          <button className="px-4 py-1 border-2 border-green-400 rounded-full">
            <FontAwesomeIcon className="text-green-400" icon={faCircleCheck} />{" "}
            &ensp;Done
          </button>
        )}
      </div>
    )
  );
};

export default UpcomingTask;
