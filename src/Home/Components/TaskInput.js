import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

const TaskInput = ({
  handleEditTodo,
  clickUpdateBtn,
  onUpdateClick,
  handleAddTodo,
  setInputValue,
  inputValue,
}) => {
  console.log(inputValue);
  return (
    <form
      onSubmit={clickUpdateBtn ? onUpdateClick : handleAddTodo}
      className="left-1/2 flex gap-3 md:gap-5 -translate-x-1/2 absolute bottom-0 translate-y-1/2 "
    >
      <input
        className=" h-12 md:w-[30rem] shadow-sm rounded-lg bg-slate-300 px-4 placeholder:px-4 focus:outline-none"
        onKeyDown={handleEditTodo}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Create a new to-do"
      />
      {clickUpdateBtn ? (
        <button
          disabled={inputValue === ""}
          className=" bg-slate-300 h-12 w-12 rounded-full shadow-sm flex justify-center items-center disabled:bg-slate-300/60 disabled:text-black/70 disabled:cursor-not-allowed"
        >
          <EditIcon onKeyDown={handleEditTodo} />
        </button>
      ) : (
        <button
          disabled={inputValue === ""}
          className="  bg-slate-300 h-12 w-12 rounded-full shadow-sm  flex justify-center items-center disabled:bg-slate-300/60 disabled:text-black/70 disabled:cursor-not-allowed"
        >
          <AddIcon />
        </button>
      )}
    </form>
  );
};

export default TaskInput;
