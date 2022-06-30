import React from "react";
import "../style/loading.css";

const Loading = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
