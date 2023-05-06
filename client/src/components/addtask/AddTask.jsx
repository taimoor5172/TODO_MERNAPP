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
    <div className="absolute top-[450px] left-[50%] w-[400px] p-[40px] translate-x-[-50%] translate-y-[-50%] shadow-lg shadow-[rgba(0,0,0,.6)] bg-[#EE8C33]">
      <h2 className="mx-0 mb-5 p-0 text-[#fff] text-center ">ADD Task</h2>
      <form onSubmit={postData}>
        <div className="relative">
          <input className="w-full px-0 py-[10px] text-base mb-[15px] text-[#fff] border-0 border-b outline-0 bg-transparent" type="text" required name="title" onChange={handleInput} />
          <label className="absolute top-0 left-0 px-0 py-[10px] text-[20px] text-[#fff] focus:top-[-20px] focus:text-[#030303] valid:top-[-20px] valid:text-[#030303]">Title</label>
        </div>
        <div>
          <span className="text-[#fff] text-center ml-8">Completed</span>
          <input
            type="radio"
            name="status"
            value={"Completed"}
            required
            onChange={handleInput}
          />
          <span className="text-[#fff] text-center ml-8">Progess</span>
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
