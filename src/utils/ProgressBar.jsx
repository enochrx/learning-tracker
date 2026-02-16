import React from "react";

const ProgressBar = ({ topic }) => {
  return (
    <div className="progress__bar">
      <div className="progress__fill" style={{ width: `${progress}%` }}></div>
      <span className="progress__text">{progress}%</span>
      {/* <progress value={progress} max={100}></progress>
              <span>{progress}%</span> */}
    </div>
  );
};

export default ProgressBar;
