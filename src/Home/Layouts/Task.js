import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
const Task = (props) => {
  return (
    <div
      key={props.index}
      id={`list-item-${props.index}`}
      className="col-span-1 whitespace-normal min-w-[18.5rem] flex h-fit bg-blue-300 p-4 md:p-5 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-4">
      <input type="checkbox" id="" className=" scale-125" />{" "}
      <p className="capitalize">{props.task}</p>
      </div>
      <div className="w-full flex justify-end items-start">
        <button
          className="px-2 "
          onClick={props.onClick}
        >
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </button>
      </div>
    </div>
  );
};
export default Task;
