import React from "react";
import { useState, useEffect } from "react";
import Task from "../Layouts/Task";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Time from "./Time";
import TaskList from "./TaskList";

export const Todo = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [clickUpdate, setClickUpdate] = useState(null);
  const [clickUpdateBtn, setClickUpdateBtn] = useState(false);

  const handleEditTodo = (e) => {
    if (!clickUpdateBtn && e.key === "Enter" && e.target.value !== "") {
      setInputValue("");
      setData((prev) => {
        return [...prev, { msg: e.target.value }];
      });
    } else if (clickUpdateBtn && e.key === "Enter" && e.target.value !== "") {
      setClickUpdate(null);
      setClickUpdateBtn(false);
      data[clickUpdate].msg = inputValue;
      setData(data);
      setInputValue("");
    }
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setClickUpdate(null);
    setClickUpdateBtn(false);
    if (inputValue === "") {
      window.alert("Write your task");
    } else {
      setData((prev) => {
        return [...prev, { msg: inputValue }];
      });
      setInputValue("");
    }
    console.log(inputValue);
  };

  const handleDelete = (index) => {
    let updData = data.filter((item) => {
      return item.msg !== data[index].msg ? data[index] : "";
    });
    setData(updData);
  };

  const handleUpdate = (index) => {
    setClickUpdateBtn(true);
    setClickUpdate(index);
    setInputValue(data[index].msg);
  };

  const onUpdateClick = (e) => {
    e.preventDefault();
    setClickUpdate(null);
    setClickUpdateBtn(false);
    if (inputValue !== "") {
      data[clickUpdate].msg = inputValue;
      setData(data);
      setInputValue("");
    } else {
      window.alert("write something");
    }
  };

  return (
    <>
      <div className="h-72 md:h-96 z-10 relative">
        <div className="fixed top-0 w-full left-0 h-72 md:h-96">
          <div className=" w-full relative  z-0  ">
            <Time />
            <div className=" bg-black w-full z-0 h-72 md:h-96"></div>
            <div className="w-full h-full top-0 opacity-20 absolute bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <h1 className="text-white w-full text-center font-bold text-3xl md:text-6xl absolute bottom-16  uppercase tracking-widest">
              To-Do List
            </h1>
            <form
              onSubmit={clickUpdateBtn ? onUpdateClick : handleAddTodo}
              className="left-1/2 flex gap-3 md:gap-5 -translate-x-1/2 absolute bottom-0 translate-y-1/2 "
            >
              <input
                className=" h-12 md:w-[30rem] shadow-sm rounded-lg bg-slate-300 px-4 placeholder:px-4 focus:outline-none"
                onKeyPress={handleEditTodo}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                placeholder="Create a new to-do"
              />
              {clickUpdateBtn ? (
                <button
                  onKeyPress={handleEditTodo}
                  className=" bg-slate-300 h-12 w-12 rounded-full shadow-sm"
                >
                  <EditIcon />
                </button>
              ) : (
                <button className=" bg-slate-300 h-12 w-12 rounded-full shadow-sm">
                  <AddIcon />
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <TaskList
        data={data}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </>
  );
};
