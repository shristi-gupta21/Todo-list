import React, { memo, useEffect, useState } from "react";

const Time = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = currentDateTime.toLocaleDateString(undefined, options);
  return (
    <div className="text-white  absolute right-6 md:right-8 top-6 md:top-8 font-bold text-sm md:text-lg">
      {formattedDate + "  " + formattedTime}
    </div>
  );
};
export default memo(Time);
