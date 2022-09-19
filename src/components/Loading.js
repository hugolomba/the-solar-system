import React from "react";
import "../components/Loading.css";

const Loading = ({ className }) => {
  return (
    <div className={`loader-container ${className}`}>
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
