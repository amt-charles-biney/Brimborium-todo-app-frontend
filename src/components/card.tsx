import { ReactNode } from "react";

export type CardProps = {
  title: string;
  content: ReactNode;
};

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="w-[300px] h-[300px] glass flex flex-col rounded-2xl p-6">
      <h2 className="text-center font-bold">{title}</h2>
      <div className="w-full h-full">{content}</div>
    </div>
  );
};

export default Card;
