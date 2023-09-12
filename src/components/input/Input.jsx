import React, { useState } from "react";
import "./input.css";
import { v4 as uuid } from "uuid";

function AddTaskForm({ onSubmit }) {
  const initialFormData = {
    id: new Date().getTime(),
    title: "",
    description: "",
    status: "OPEN",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() === "") {
      setError("Title is required");
      return; 
    }
    onSubmit(formData);
    setError(null);
    setFormData(initialFormData);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      ></input>
      
      <button type="submit" className="buttonSubmit">
        Add Task
      </button>
    </form>
    {error && <p className="error">{error}</p>}
    </div>
  );
}

export default AddTaskForm;
