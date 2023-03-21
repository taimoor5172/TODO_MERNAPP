import React, { useState } from "react";
import "./updatetask.css";
import Axios from "axios";
const UpdateTask = (props) => {
  const [todo, setTodo] = useState({
    title: props.title,
    status: props.status,
    completedTime: props.completedTime,
    creationTime: props.creationTime,
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setTodo({ ...todo, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { title, status } = todo;
    const res = await Axios.put("http://localhost:8800/tasks", {
      id: props._id,
      title,
      status,
    });
    const data = await res.data;
    if (res.status === 200) {
      props.handler();
    }
    if (res.status === 400) {
      alert(data.message);
    }
  };
  return (
    <div class="container">
      <h2>Task</h2>
      <form onSubmit={postData} onKeyDown>
        <div class="items">
          <input
            type="text"
            required
            name="title"
            onChange={handleInput}
            value={todo.title}
          />
          <label>Title</label>
        </div>
        <div class="items">
          <input
            type="text"
            required
            name="status"
            onChange={handleInput}
            value={todo.status}
          />
          <label>Status</label>
        </div>
        <div class="items">
          <input
            type="text"
            value={
              String(todo.creationTime).split("T")[0] +
              "  /  " +
              String(todo.creationTime).split("T")[1].split(".")[0]
            }
          />
          <label>Creation Time</label>
        </div>
        <div class="items">
          <input
            type="text"
            value={
              todo.completedTime &&
              String(todo.completedTime).split("T")[0] +
                "  /  " +
                String(todo.completedTime).split("T")[1].split(".")[0]
            }
          />
          <label>Completion Time</label>
        </div>

        <div class="form-buttons">
          <button className="form-button" type="submit">
            Update{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
