import React, { useState } from "react";
import AddTask from "../addtask/AddTask";
import Showlist from "../showlist/Showlist";
import profileImg from "../../images/person.jpeg";
import "./header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [openFrom, setOpenFrom] = useState(false);
  return (
    <>
      <div className="profile-img-container">
        <img src={profileImg} alt="person" className="profile-img"></img>
      </div>
      <div className="head">
        <span>
          <i
            className="bi bi-list"
            onClick={() => {
              setAddOpen(!addOpen);
              setOpenFrom(false);
            }}
          ></i>
        </span>
        <p>Todo Today</p>
        <i
          className={`bi bi-plus add-icon ${addOpen ? "" : "add-icon-close"}`}
          onClick={() => {
            setOpenFrom(!openFrom);
            setOpen(true);
          }}
        ></i>
        <span className="down_arrow">
          <i
            className="bi bi-chevron-down"
            onClick={() => {
              setOpen(!open);
              setAddOpen(false);
              setOpenFrom(false);
            }}
          ></i>
        </span>
      </div>
      <Showlist open={open} />
      {openFrom && <AddTask />}
    </>
  );
};

export default Header;
