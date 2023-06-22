import React from "react";
import "../styles.css";
import { useState } from "react";

export const Todo = () => {
  const [data, setdata] = useState([]);
  const click = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setdata((prev) => {
        return [...prev, { msg: e.target.value }];
      });
    }
  };

  return (
    <>
      <h1 className="heading">To-Do List</h1>
      <div className="input-div">
        <input className="input" onKeyPress={click} />
      </div>

      <div>
        {data.map((item) => (
          <p>{item.msg}</p>
        ))}
      </div>
    </>
  );
};
