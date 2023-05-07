import React, { useState } from "react";
import Task from "./Task";

const CrudOperations = () => {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskname: newTask,
      completed: false
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (todoId) => {
    setTodoList(todoList.filter((item) => item.id !== todoId));
  }

  const updateTask = (todoId) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId){
        return {...todo, completed: true}
      } else {
        return todo
      }
    })
    setTodoList(updatedTodoList);
  }

  return (
    <div>
      <div className="addTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {
          todoList.map((todo) => {
            return (
              <Task 
                taskname={todo.taskname} 
                id={todo.id} 
                completed={todo.completed}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )
          })
        }
      </div>
    </div> 
  )
};

export default CrudOperations;