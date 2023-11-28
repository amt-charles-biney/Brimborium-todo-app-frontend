import { ReactNode } from "react";

export type CardProps = {
  title: string;
  content: ReactNode;
  bg?: string;
};

const Card = ({ title, content, bg }: CardProps) => {
  return (
    <div
      style={{ backgroundColor: bg && bg }}
      className={`w-[300px] h-[300px] glass b flex flex-col rounded-2xl p-6`}
    >
      <h2 className="text-center font-bold">{title}</h2>
      <div className="w-full h-full">{content}</div>
    </div>
  );
};

export default Card;
