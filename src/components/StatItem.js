import React from "react";

const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <div className="bg-white rounded shadow-lg items-center p-8 border-b-[#2cb1bc] border-b-4" color={color} bcg={bcg}>
      <header className="flex justify-between text-[#2cb1bc] text-4xl">
        <span>{count}</span>
        <span className="bg-[#ceeefa] p-2 rounded"> {icon}</span>
      </header>
      <h5 className="text-xl capitalize mt-4">{title}</h5>
    </div>
  );
};

export default StatItem;
