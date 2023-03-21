import React, { useState } from "react";
import "./addtask.css";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddTask = () => {
  const [todo, setTodo] = useState({
    title: "",
    status: "",
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
    const res = await Axios.post("http://localhost:8800/tasks/", {
      title,
      status,
    });

    const data = await res.data;
    if (res.status === 200) {
      toast.success(data.message);
    }
    if (res.status === 400) {
      toast.error(data.message);
    }
  };
  return (
    <div className="login-box">
      <h2>ADD Task</h2>
      <form onSubmit={postData}>
        <div className="user-box">
          <input type="text" required name="title" onChange={handleInput} />
          <label>Title</label>
        </div>
        <div>
          <span>Completed</span>
          <input
            type="radio"
            name="status"
            value={"Completed"}
            required
            onChange={handleInput}
          />
          <span>Progess</span>
          <input
            type="radio"
            name="status"
            value={"Progress"}
            required
            onChange={handleInput}
          />
        </div>
        <div className="form-buttons">
          <button className="form-button" type="submit">
            ADD{" "}
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AddTask;
