import React, { memo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
const Task = (props) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  console.log("toggleBtn", toggleBtn);
  return (
    <div
      key={props.index}
      id={`list-item-${props.index}`}
      className={`col-span-1 whitespace-normal min-w-[18.5rem] min-h-[4rem] flex justify-between bg-blue-300 items-center px-2 rounded-lg shadow-md relative`}
    >
      {toggleBtn && (
        <div className="h-1 w-3/5 top-1/2 -translate-y-1/2 bg-yellow-300/60 absolute"></div>
      )}

      <button
        className="capitalize w-2/3 py-2 flex items-center "
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        {props.task}
      </button>
      <div className="w-1/3">
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
export default memo(Task);
