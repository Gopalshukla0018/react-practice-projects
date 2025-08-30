import React from "react";
import "./RandomColor.css";
import { useState,useEffect } from "react";
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  const handleCreateRandomHexColor = () => {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
  ;
    setColor(hexColor);
  };
  const handleCreateRandomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r},${g},${b})`;


    setColor(rgb);
  };
useEffect(() => {
         typeOfColor=='rgb'? handleCreateRandomRgbColor(): handleCreateRandomHexColor()
}, [typeOfColor])


  return (
    <div className="container" style={{ background: color }}>
      <div>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor == "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Color
        </button>
         <div className="content-box">
        <h1>{typeOfColor=='rgb' ? 'rgb': 'hex'}  </h1>
        <h3>{color}</h3>
      </div>
      </div>
     
    </div>
  );
};

export default RandomColor;
