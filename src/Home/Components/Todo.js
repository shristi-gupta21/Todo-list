import React from "react";
import "../styles.css";
import { useState } from "react";

export const Todo = () => {
  const [data, setdata] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const click = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setInputValue("");
      setdata((prev) => {
        return [...prev, { msg: e.target.value }];
      });
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleButtonClick = (e) => {
    setdata((prev) => {
      return [...prev, { msg: inputValue }];
    });
    setInputValue("");
  };
  
  return (
    <>
      <div className="h-72 md:h-96 z-10 relative">
        <div className="fixed top-0 w-full left-0 h-72 md:h-96">
          <div className=" w-full relative  z-0  ">
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
              <button type="submit" onClick={handleButtonClick} className=" bg-slate-300 text-2xl h-12 w-12 rounded-full shadow-sm">+</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative z-0 max-w-6xl mx-auto flex justify-center md:justify-start flex-wrap pt-12 md:pt-20 gap-4 md:gap-6">
        {data.map((item,index) => (
          <div key={index} className="col-span-1 whitespace-normal min-w-[20rem] flex gap-4 h-fit bg-zinc-400 p-4 md:p-5 rounded-lg shadow-md">
            <input type="checkbox" id="" className=" scale-125" /> <p className=" capitalize">{item.msg}</p> 
          </div>
        ))}
      </div>
    </>
  );
};
