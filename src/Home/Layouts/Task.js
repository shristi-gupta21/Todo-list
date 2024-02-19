import React, { memo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
const Task = (props) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  console.log("toggleBtn", toggleBtn);
  return (
    <button
      key={props.index}
      id={`list-item-${props.index}`}
      className={`col-span-1 whitespace-normal min-w-[18.5rem] min-h-[4rem] flex bg-blue-300 items-center px-4 rounded-lg shadow-md relative`}
      onClick={() => setToggleBtn(!toggleBtn)}
    >
      {toggleBtn && (
        <div className="h-1 w-3/5 top-1/2 -translate-y-1/2 bg-yellow-300/60 absolute"></div>
      )}
      <div className="w-full flex items-center">
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
    </button>
  );
};
export default memo(Task);
