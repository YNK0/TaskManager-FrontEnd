import React from "react";
import "./box.css";
import TaskBox from "../task/TaskBox";
import { useState } from "react";
import AddTaskForm from "../input/Input"
import { v4 as uuid } from 'uuid';

function Box() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Comprar leche",
      description: "Llevar leche a casa para el desayuno",
      status: "CLOSE",
    },
    {
      id: 2,
      title: "Lavar la ropa",
      description: "Lavar la ropa sucia",
      status: "IN_PROGRESS",
    },
    {
      id: 3,
      title: "Limpiar la casa",
      description: "Barrer, trapear y limpiar la cocina",
      status: "OPEN",
    },
    {
      id: 4,
      title: "Hacer el mandado",
      description: "Comprar comida y artículos de limpieza",
      status: "OPEN",
    },
    {
      id: 5,
      title: "Ir al gimnasio",
      description: "Hacer ejercicio para estar saludable",
      status: "OPEN",
    },
  ]);

  const handleDeleteClick = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const handleNextValue = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      const nextStatus =
        tasks[taskIndex].status === "OPEN" ? "IN_PROGRESS" : "CLOSE";
      setTasks(
        tasks.map((task, index) => {
          if (task.id === taskId) {
            return {
              ...task,
              status: nextStatus,
            };
          } else {
            return task;
          }
        })
      );
    }
  };

  return (
    <div>
      <AddTaskForm 
        onSubmit={(task) => {
          task.id = task.title.length*task.id;
          setTasks([task, ...tasks]);
        }  
        }
      />
      <div className="box parent">
        <div className="div1">
          <h1>Open</h1>
          {tasks.map((task) => {
            if (task.status === "OPEN") {
              return (
                <TaskBox
                  key={task.id}
                  tasks={task}
                  onDelete={() => handleDeleteClick(task.id)}
                  nextValue={() => handleNextValue(task.id)}
                />
              );
            }
          })}
        </div>
        <div className="div2">
          <h1>In Progress</h1>
          {tasks.map((task) => {
            if (task.status === "IN_PROGRESS") {
              return (
                <TaskBox
                  key={task.id}
                  tasks={task}
                  onDelete={() => handleDeleteClick(task.id)}
                  nextValue={() => handleNextValue(task.id)}
                />
              );
            }
          })}
        </div>
        <div className="div3">
          <h1>Close</h1>
          {tasks.map((task) => {
            if (task.status === "CLOSE") {
              return (
                <TaskBox
                  key={task.id}
                  tasks={task}
                  onDelete={() => handleDeleteClick(task.id)}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Box;
