import React, { useState } from "react";
import AddTask from "../addtask/AddTask";
import Showlist from "../showlist/Showlist";
import profileImg from "../../images/person.jpeg";
// import "./header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [openFrom, setOpenFrom] = useState(false);
  return (
    <>
      <div className="flex justify-center mt-12">
        <img src={profileImg} alt="person" className="w-[100px] h-[100px] rounded-[50%] object-cover border-2"></img>
      </div>
        <div className="flex items-center w-fit m-0 m-auto mt-12 rounded-[10px] shadow-lg shadow-blue-500/50">
        <span className="text-2xl font-medium text-[#F9E0F5] m-2">
          <i
            className="bi bi-list cursor-pointer"
            onClick={() => {
              setAddOpen(!addOpen);
              setOpenFrom(false);
            }}
          ></i>
        </span>
        <p className="text-white text-2xl font-bold m-2">Todo Today</p>
        <i 
          className={`cursor-pointer bi bi-plus ml-6 text-[#F9E0F5] cursor-pointer text-[2em] hover:text-[#EE8C33] ${addOpen ? "" : "add-icon-close"}`}
          onClick={() => {
            setOpenFrom(!openFrom);
            setOpen(true);
          }}
        ></i>
        <span className="text-2xl font-medium text-[#F9E0F5] ml-12 hover:text-[#EE8C33]">
          <i
            className="bi bi-chevron-down cursor-pointer"
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
