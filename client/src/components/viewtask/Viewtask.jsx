import React from "react";
import "./viewtask.css";
const Viewtask = (props) => {
  return (
    <div className="container">
      <h2>Today Tasks</h2>
      <div>
        <div className="items">
          <input type="text" required name="title" value={props.title} />
          <label>Title</label>
        </div>
        <div className="items">
          <input type="text" required name="status" value={props.status} />
          <label>Status</label>
        </div>
        <div className="items">
          <input
            type="text"
            value={
              String(props.creationTime).split("T")[0] +
              "  /  " +
              String(props.creationTime).split("T")[1].split(".")[0]
            }
          />
          <label>Creation Time</label>
        </div>
        <div className="items">
          <input
            type="text"
            value={
              props.completedTime &&
              String(props.completedTime).split("T")[0] +
                "  /  " +
                String(props.completedTime).split("T")[1].split(".")[0]
            }
          />
          <label>Completion Time</label>
        </div>
      </div>
    </div>
  );
};

export default Viewtask;
