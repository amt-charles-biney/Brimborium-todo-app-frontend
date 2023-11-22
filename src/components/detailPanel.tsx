import {
  faAdd,
  faClock,
  faDotCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useSearchParams } from "react-router-dom";
import projectGraph from "../assets/project-graph.svg";
import { statusParser } from "../data/statusParser";
import { TaskUpdateData, taskStatusString } from "../models/task";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { updateTask, updateTaskStatus } from "../redux/taskSlice";
import toastIt from "../utilities/toast";
import EditableText from "./editableText";

const DetailPanel = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const taskId = searchParams.get("taskId");

  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.task.tasks);
  const focusedTask = tasks.find((task) => task.id === taskId);

  async function updateStatus() {
    await dispatch(
      updateTaskStatus({ id: taskId!, status: taskStatusString.completed })
    );
    focusedTask?.status === taskStatusString.overdue
      ? toastIt("Finally! Congratulations.", "🎉")
      : toastIt("Congratulations.", "🎉");
  }

  const isOverdue = new Date(focusedTask?.dueDate as string) < new Date();

  const canStart =
    focusedTask?.status === taskStatusString.pending && !isOverdue;

  async function startTask() {
    if (canStart) {
      await dispatch(
        updateTaskStatus({ id: taskId!, status: taskStatusString.inProgress })
      );
      toastIt("Task started", "⏳");
    } else if (isOverdue) {
      await dispatch(
        updateTaskStatus({ id: taskId!, status: taskStatusString.overdue })
      );
      toastIt("Task is overdue for some reason", "🚫");
    }
  }

  async function saveTopic(topic: string): Promise<void> {
    const taskData: TaskUpdateData = {
      topic: topic && topic,
    };
    await dispatch(updateTask({ id: taskId!, task: taskData }));
    toastIt("Topic updated.", "✔");
  }

  async function saveDescription(description: string): Promise<void> {
    const taskData: TaskUpdateData = {
      description: description && description,
    };
    await dispatch(updateTask({ id: taskId!, task: taskData }));
    toastIt("Description updated.", "✔");
  }

  return (
    focusedTask && (
      <div className="w-[40%] max-w-[23.5rem] bg-[rgba(5,4,9,0.7)] glass p-4 grid grid-rows-[3.125rem_12.5rem_15.625rem_1fr] gap-5">
        <div className="w-full font-bold h-[3.125rem] gap-2 p-2 flex items-start justify-between">
          <h2 className="flex flex-col w-full">
            <EditableText
              key={taskId}
              initialText={focusedTask.topic}
              rows={1}
              callBack={saveTopic}
            />
            <small className="text-[0.625rem] font-thin">
              Created: {moment(focusedTask.createdDate).fromNow()}
            </small>
          </h2>

          <FontAwesomeIcon
            onClick={() => setSearchParams()}
            className="cursor-pointer pt-1"
            icon={faTimes}
          />
        </div>

        <div className="w-full h-[12.5rem] bg-blue-300 rounded-xl px-4 py-2 text-gray-800">
          <div className="flex gap-1">
            <div className="rounded-full w-[40px] h-[40px] text-white bg-blue-500 flex items-center justify-center font-bold text-2xl">
              <span>N</span>
            </div>
            <h2 className="font-bold flex flex-col">
              Nexum Kopla
              <small className="text-[0.625rem] block mt-[-5px]">
                <FontAwesomeIcon
                  className="text-green-500"
                  icon={faDotCircle}
                />{" "}
                Already in production.
              </small>
            </h2>
          </div>
          <div className="flex justify-center items-center h-[80%]">
            <img src={projectGraph} alt="Project graph" width={280} />
          </div>
        </div>

        <div className="w-full h-[15.625rem] rounded p-2 text-sm">
          <span
            className={`flex items-center ${
              statusParser[focusedTask.status].color
            } font-bold mb-1`}
          >
            <FontAwesomeIcon icon={faClock} />
            &ensp;{moment(focusedTask.dueDate).calendar()}
          </span>

          <div>
            <span className="font-bold text-sm">Description:</span>
            <br />{" "}
            <span className="block h-[8.75rem] overflow-y-auto">
              <EditableText
                initialText={focusedTask.description}
                rows={6}
                key={taskId}
                callBack={saveDescription}
              />
            </span>
          </div>

          <div className="flex mt-4 text-xs">
            {focusedTask.status === taskStatusString.pending && (
              <button
                onClick={startTask}
                className="rounded-full border border-green-400 px-3 py-1 hover:bg-green-400 hover:text-black"
              >
                Start task
              </button>
            )}
            {focusedTask.status !== taskStatusString.completed &&
              focusedTask.status !== taskStatusString.pending && (
                <button
                  onClick={updateStatus}
                  className="rounded-full border border-green-400 px-3 py-1 hover:bg-green-400 hover:text-black"
                >
                  Complete task
                </button>
              )}
          </div>
        </div>
        <div className="w-full h-full glass rounded-xl px-4 py-2 pb-4 flex justify-between flex-col">
          <h2 className="font-bold">Resources</h2>
          <div className="h-full mt-4">
            <ul className="text-sm list-disc pl-4">
              <li>Some resource</li>
              <li>Another resource</li>
              <li>Don't get upset</li>
              <li>The referee is a gonna</li>
              <li>It's the hope that kills yah</li>
            </ul>
          </div>
          <div className="flex">
            <div className="glass rounded-full p-1 w-full flex">
              <input
                type="text"
                className="bg-transparent text-xs w-full pl-2 outline-none border-none"
                placeholder="Add a resource material."
                required
              />
              <button className="min-w-[24px] h-[24px] bg-indigo-300 text-black text-xs flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faAdd} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DetailPanel;
