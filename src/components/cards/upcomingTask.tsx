import {
  faCalendarCheck,
  faCircleCheck,
  faDiagramNext,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useEffect, useState } from "react";
import api from "../../config/axios";
import { Task } from "../../models/task";
import { useAppSelector } from "../../redux/hooks";

export type TaskProps = {
  index: number;
};

const UpcomingTask = ({ index }: TaskProps) => {
  const user = useAppSelector((state) => state.user);
  const [upcomingTask, setUpcomingTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchNextTask() {
      try {
        const response = await api.get(
          `/todo?orderBy=dueDate:asc&where=userId:${user?.id}`
        );
        if (response.data.length > 0) {
          setUpcomingTask(response.data[index]);
        } else {
          setUpcomingTask(null);
        }
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    }

    fetchNextTask();
  }, [index, user]);

  return (
    <div className="h-full w-full flex flex-col justify-between items-center">
      <div className="flex-col mt-12">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center">Error: {error.message}</p>
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
          </div>
        ) : (
          <p className="text-center">No upcoming task found.</p>
        )}

        <p className="text-center text-sm">{upcomingTask?.description}</p>
      </div>

      {index === 1 ? (
        upcomingTask && (
          <p className="font-mono">
            <FontAwesomeIcon icon={faCalendarCheck} />
            &ensp; {moment(upcomingTask?.dueDate).fromNow()}
          </p>
        )
      ) : (
        <button className="px-4 py-1 border-2 border-green-400 rounded-full">
          <FontAwesomeIcon className="text-green-400" icon={faCircleCheck} />{" "}
          &ensp;Done
        </button>
      )}
    </div>
  );
};

export default UpcomingTask;
