import React from "react";
import Task from "../Layouts/Task";
const TaskList = ({ data, handleDelete, handleUpdate }) => {
  return (
    <div className="px-4 md:px-0 pb-8 md:pb-12 relative z-0 max-w-7xl mx-auto flex justify-center md:justify-start flex-wrap pt-12 md:pt-20 gap-4 md:gap-6">
      {data.map((item, index) => (
        <Task
          key={index}
          onClickDelete={() => handleDelete(index)}
          task={item.msg}
          index={index}
          onClickUpdate={() => handleUpdate(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
