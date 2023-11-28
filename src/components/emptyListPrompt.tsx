import empty from "../assets/empty.svg";

export type EmptyListPromptProps = {
  image?: string;
  topic: string;
  message: string;
};
const EmptyListPrompt = ({
  image = empty,
  topic,
  message,
}: EmptyListPromptProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img src={image} alt="Empty box svg from undraw" width={380} />
      <h2 className="pt-8 text-2xl font-bold">{topic}</h2>
      <p>{message}</p>
    </div>
  );
};

export default EmptyListPrompt;
