import React from "react";

const Test = ({ color, id }) => {
  return (
    <div
      className={`${color} h-[70vh] border border-black text-center items-center justify-center bg-blue-400 flex`}
      id={id.toLowerCase()}
    >
      <p>{id}</p>
    </div>
  );
};

export default Test;
