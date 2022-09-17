import React from "react";
import "../components/Loading.css";

const Loading = () => {
  return (
    <div className="loader-container">
      {/* <img className="loader" src={loader} />
      <div className="loader">
        <span>Loading...</span>
      </div> */}
      <div class="spinner">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Loading;
