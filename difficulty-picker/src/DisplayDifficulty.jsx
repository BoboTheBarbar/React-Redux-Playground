import React from "react";

const DisplayDifficulty = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray", // Gray frame around the box
        padding: "20px", // Padding inside the box for the text
        textAlign: "center", // Center the text inside the box
        margin: "10px", // Margin outside the box
        backgroundColor: "#f0f0f0", // Light background color for the box
      }}
    >
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : "No difficulty set"}
    </div>
  );
};

export default DisplayDifficulty;
