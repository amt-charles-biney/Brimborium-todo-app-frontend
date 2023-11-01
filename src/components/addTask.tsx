import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import moment from "moment";
import { useState } from "react";
import { TaskData } from "../models/task";
import { ModalComponentProps } from "../models/ui";
import { useAppDispatch } from "../redux/hooks";
import { addTask } from "../redux/taskSlice";
import pageImage from "../assets/add-task.svg";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AddTask = ({ closeModal }: ModalComponentProps) => {
  const dispatch = useAppDispatch();
  const taskDataObject: TaskData = {
    topic: "",
    description: "",
    dueDate: moment().add(1, "hours"),
  };
  const [taskData, setTaskData] = useState(taskDataObject);
  const inputStyle: string = "bg-white glass rounded-md p-2";

  function handleChange(e: { target: HTMLInputElement | HTMLTextAreaElement }) {
    const target = e.target as HTMLInputElement;

    setTaskData({
      ...taskData,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await dispatch(addTask(taskData));
    closeModal(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[400px]">
      <div className="m-auto">
        <img
          src={pageImage}
          alt="Add task svg from undraw"
          width="60%"
          className="m-auto"
        />
        <h1 className="text-2xl text-white font-bold text-center mt-4">
          Add a new task
        </h1>
        <p className="text-center">
          Effortlessly collaborate with your team by adding a new task to the
          shared project
        </p>
      </div>
      <label className="flex flex-col">
        Topic
        <input
          type="text"
          value={taskData.topic}
          onChange={handleChange}
          className={inputStyle}
          name="topic"
          required
        />
      </label>
      <label htmlFor="description" className="flex flex-col">
        Description
        <textarea
          value={taskData.description}
          name="description"
          onChange={handleChange}
          className={`${inputStyle} min-h-[200px]`}
          required
        ></textarea>
      </label>
      <label htmlFor="" className="flex flex-col">
        Due date
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
              value={taskData.dueDate}
              disablePast
              onChange={(newValue) =>
                setTaskData({ ...taskData, dueDate: newValue! })
              }
              className="text-white"
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </label>
      <fieldset className="flex justify-between">
        <span
          onClick={() => closeModal(false)}
          className="border border-red-500 rounded-full py-2 px-10 cursor-pointer"
        >
          <FontAwesomeIcon className="text-red-500" icon={faXmark} />
          &ensp; Cancel
        </span>
        <button className="border border-green-400 rounded-full py-2 px-10">
          <FontAwesomeIcon className="text-green-400" icon={faPlus} />
          &ensp; Create task
        </button>
      </fieldset>
    </form>
  );
};

export default AddTask;
