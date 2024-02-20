import React, { memo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Task = (props) => {
  const [toggleBtn, setToggleBtn] = useState(false);
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
        className="capitalize w-3/4 py-2 px-4 flex items-center "
        onClick={() => setToggleBtn(!toggleBtn)}
      >
        {props.task}
      </button>
      <div className="w-1/4 flex gap-4">
        <button onClick={props.onClickDelete}>
          <div>
            <DeleteIcon aria-label="delete" fontSize="small" />
          </div>
        </button>
        <button onClick={props.onClickUpdate}>
          <div>
            <EditIcon fontSize="small" aria-label="edit" />
          </div>
        </button>
      </div>
    </div>
  );
};
export default memo(Task);
