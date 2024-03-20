"use client";

import React, { useState } from "react";

type Props = {
  task: String;
  completed: Boolean;
  date: Date;
  _id: String;
};

const Task: React.FC<Props> = ({ _id, task, completed, date }) => {
  const handleChange = async () => {
    const response = await fetch("http://localhost:3000/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        task,
        completed: !completed,
        date,
      }),
    });

    const data = await response.json();
    if (data.success && !task) alert("Great!, you have completed the task.");
  };

  return (
    <div className="task_container">
      <div>
        <input
          type="checkbox"
          onChange={handleChange}
          className="chk"
          checked={completed ? true : false}
        />
        <span>{task}</span>
      </div>
      <div className="">
        <button
          type="button"
          className="inline-block rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600  focus:border-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none edit"
          data-twe-ripple-init
        >
          Edit
        </button>
        <button
          type="button"
          className="inline-block rounded-full border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600  focus:border-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 motion-reduce:transition-none delete"
          data-twe-ripple-init
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
