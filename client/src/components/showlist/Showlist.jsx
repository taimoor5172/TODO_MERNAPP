import React, { useState, useEffect } from "react";
import "./showlist.css";
import Axios from "axios";
import UpdateTask from "../updatetask/UpdateTask";
import Viewtask from "../viewtask/Viewtask";
const Showlist = (props) => {
  const [todos, setTodos] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [todoData, setTodoData] = useState();

  const getAllTodos = async () => {
    try {
      const res = await Axios.get("http://localhost:8800/tasks");
      setTodos(res.data);
    } catch (err) {}
  };
  useEffect(() => {
    getAllTodos();
  }, [props.open, openEdit]);

  const deleteTodo = async (id) => {
    try {
      await Axios.delete(`http://localhost:8800/tasks/${id}`);
      getAllTodos();
    } catch (err) {}
  };
  const getTodo = async (id) => {
    try {
      const res = await Axios.get(`http://localhost:8800/tasks/${id}`);
      setTodoData(res.data);
      setOpenEdit(!openEdit);
    } catch (err) {}
  };
  const viewTodo = async (id) => {
    try {
      const res = await Axios.get(`http://localhost:8800/tasks/${id}`);
      setTodoData(res.data);
      setOpenView(!openView);
    } catch (err) {}
  };
  const openHandler = () => {
    setOpenEdit(!openEdit);
  };
  const viewHandler = () => {
    setOpenView(!openView);
  };

  return (
    <div className={`task ${props.open ? "close" : ""}`}>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span>{todo.title}</span>
          <div className="dropdown">
            <button>
              <i
                className="bi bi-pencil-square"
                onClick={() => {
                  getTodo(todo._id);
                }}
              ></i>
              <i
                className="bi bi-eye"
                onClick={() => {
                  viewTodo(todo._id);
                }}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => deleteTodo(todo._id)}
              ></i>
            </button>
          </div>
        </li>
      ))}
      {openEdit && <UpdateTask {...todoData} handler={openHandler} />}
      {openView && <Viewtask {...todoData} handler={viewHandler} />}
    </div>
  );
};

export default Showlist;
