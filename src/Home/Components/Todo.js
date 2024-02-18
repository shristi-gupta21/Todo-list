import React from "react";
import { useState } from "react";
import Time from "./Time";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

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
  const onUpdateClick = (e) => {
    e.preventDefault();
    setClickUpdate(null);
    setClickUpdateBtn(false);
    data[clickUpdate].msg = inputValue;
    setData(data);
    setInputValue("");
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setClickUpdate(null);
    setClickUpdateBtn(false);
    console.log("inputValue", inputValue, inputValue.length);

    setData((prev) => {
      return [...prev, { msg: inputValue }];
    });
    setInputValue("");
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
            <TaskInput
              handleEditTodo={handleEditTodo}
              clickUpdateBtn={clickUpdateBtn}
              onUpdateClick={onUpdateClick}
              handleAddTodo={handleAddTodo}
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
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
