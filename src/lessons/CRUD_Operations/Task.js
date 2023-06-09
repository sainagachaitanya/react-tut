import React from "react";

const Task = (props) => {
  return (
    <div 
      className="task"
      style={{backgroundColor: props.completed && "green"}}>
      <h1>{props.taskname}</h1>
      <button onClick={() => props.updateTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
};

export default Task;