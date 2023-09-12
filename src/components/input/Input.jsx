import React, { useState } from "react";
import "./input.css";
import { v4 as uuid } from 'uuid';

function AddTaskForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    id: new Date().getTime(),
    title: '',
    description: '',
    status: "OPEN",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      ></input>
      <button type="submit" className="buttonSubmit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
