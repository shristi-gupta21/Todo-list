import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
const Task = (props) => {
  return (
    <div
      key={props.index}
      id={`list-item-${props.index}`}
      className="col-span-1 whitespace-normal min-w-[18.5rem] flex h-fit bg-blue-300 p-4 md:p-5 rounded-lg shadow-md"
    >
      <div className="w-full flex items-center gap-4">
        <input type="checkbox" id="" className=" scale-125" />{" "}
        <p className="capitalize">{props.task}</p>
      </div>
      <div className="w-full flex justify-end items-start">
        <button onClick={props.onClickDelete}>
          <div>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </button>
        <button onClick={props.onClickUpdate}>
          <div>
            <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="small" />
            </IconButton>
          </div>
        </button>
      </div>
    </div>
  );
};
export default Task;
