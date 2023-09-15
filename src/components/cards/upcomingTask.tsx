import {
  faCircleCheck,
  faDiagramNext,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import api from "../../config/axios";
import { Task } from "../../models/task";

const UpcomingTask: React.FC = () => {
  const [upcomingTask, setUpcomingTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchNextTask() {
      try {
        const response = await api.get(
          "/todo?orderBy=dueDate:asc&where=userId:05ddd17c-ac94-4973-bb28-6430beb9dc32"
        );
        if (response.data.length > 0) {
          setUpcomingTask(response.data[0]);
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
  }, []);

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
              <FontAwesomeIcon
                className="text-yellow-400"
                icon={faDiagramNext}
              />{" "}
              &ensp;
              {upcomingTask.topic}
            </h2>
          </div>
        ) : (
          <p className="text-center">No upcoming task found.</p>
        )}

        <p className="text-center text-sm">{upcomingTask?.description}</p>
      </div>

      <button className="px-4 py-1 border-2 border-green-400 rounded-full">
        <FontAwesomeIcon className="text-green-400" icon={faCircleCheck} />{" "}
        &ensp;Done
      </button>
    </div>
  );
};

export default UpcomingTask;
