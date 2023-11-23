import React from "react";
import "../styles.css";
import { useState,useEffect } from "react";
import Task from "../Layouts/Task";

export const Todo = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []); 
  const click = (e,index) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setInputValue("");
      setData((prev) => {
        return [...prev, { msg: e.target.value, key: index }];
      });
    }
  };
  // console.log("data", data)
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleButtonClick = (e) => {
    setData((prev) => {
      return [...prev, { msg: inputValue }];
    });
    setInputValue("");
  };

  const handleDelete = (index) =>{
    let updData = data.filter(item => {
       return item.msg !== data[index].msg ? data[index]:"" 
    })
    setData(updData)
  }
  
  // console.log(data)
  return (
    <>
      <div className="h-72 md:h-96 z-10 relative">
        <div className="fixed top-0 w-full left-0 h-72 md:h-96">
          <div className=" w-full relative  z-0  ">
            <div className="text-white  absolute right-6 md:right-8 top-6 md:top-8 font-bold text-sm md:text-lg">{currentDate.toDateString()}</div>
            <div className=" bg-black w-full z-0 h-72 md:h-96"></div>
            <div className="w-full h-full top-0 opacity-20 absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <h1 className="text-white w-full text-center font-bold text-3xl md:text-6xl absolute bottom-16  uppercase tracking-widest">
              To-Do List
            </h1>
            <div className="left-1/2 flex gap-3 md:gap-5 -translate-x-1/2 absolute bottom-0 translate-y-1/2 ">
              <input
                className=" h-12 md:w-[30rem] shadow-sm rounded-lg bg-slate-300 px-4 placeholder:px-4 focus:outline-none"
                onKeyPress={click}
                onChange={handleChange}
                value={inputValue}
                placeholder="Create a new to-do"
              />
              <button
                type="submit"
                onClick={handleButtonClick}
                className=" bg-slate-300 text-2xl h-12 w-12 rounded-full shadow-sm"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-0 pb-8 md:pb-12 relative z-0 max-w-7xl mx-auto flex justify-center md:justify-start flex-wrap pt-12 md:pt-20 gap-4 md:gap-6">
        {data.map((item, index) => (
            <Task onClick={() => handleDelete(index)} task={item.msg} index={index}/>
        ))}
      </div>
    </>
  );
};
