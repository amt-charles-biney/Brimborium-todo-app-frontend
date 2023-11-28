import { statusParser } from "../data/statusParser";

const TaskStatus = ({ status }: { status: string }) => {
  const statusObject = statusParser[status];
  return (
    <div
      className={`rounded-full ${statusObject.bg} max-w-[5rem] flex items-center justify-center py-1 m-auto`}
    >
      <p className="text-xs">{statusObject.text}</p>
    </div>
  );
};

export default TaskStatus;
