import moment from "moment";
import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = moment(time).format("HH:mm ");
  const seconds = moment(time).format("ss");

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <p className="text-[5.8rem] font-mono font-bold leading-[7rem] pt-5">{formattedTime}</p>
      <p className="text-center text-sm">{moment().format("dddd, MMMM Do YYYY")}</p>
      <p className="text-sm w-[35px] flex justify-center items-center h-[35px] font-bold font-mono absolute bottom-8 border-red-500 border-2 text-red-500 rounded-full">
        {seconds}
      </p>
    </div>
  );
}

export default DigitalClock;
