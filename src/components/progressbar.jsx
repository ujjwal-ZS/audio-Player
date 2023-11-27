import React from "react";

const ProgressBar = ({ progress, onChange }) => {
  return (
    <div className="flex flex-col">
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        className="slider"
        style={{ "--progress": `${progress - 0.5}%` }}
        onChange={(event) => {
          onChange(parseInt(event?.target.value));
        }}
      />
    </div>
  );
};

export default ProgressBar;
