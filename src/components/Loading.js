import React from "react";
import "../components/Loading.css";

const Loading = () => {
  return (
    <div className={`loader-container`}>
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
