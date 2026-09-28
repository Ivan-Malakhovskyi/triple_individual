import React from "react";

const TaskList = ({ items, handleDelete }) => {
  return (
    <div>
      <ul>
        {items.map(({ id, text, completed }) => (
          <li key={id}>
            <p>{text}</p>
            <p>{completed ? "Active" : "Non-active"}</p>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
