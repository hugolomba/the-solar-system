import React from "react";
import loader from "../img/loader.gif";

const Loading = () => {
  return (
    <div className="loader-container">
      <img className="loader" src={loader} />
    </div>
  );
};

export default Loading;
