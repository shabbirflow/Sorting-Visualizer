import BarChart from "./assets/BarChart";
import React, { useState, useEffect } from "react";
import NewBubbleSort from "./assets/NewBubbleSort";
import theColors from "./assets/colors";
import { Slider, colors } from "@mui/material";

const App = () => {
  console.log("HEY APP");
  const [idk, setIdk] = useState([6, 4, 2, 1, 10]);
  const [myColors, setMyColors] = useState([
    "rgb(255, 99, 132)",
    "#C9A7EB",
    "#6DA9E4",
    "#FFD93D",
    "#159895",
    "#3E54AC",
  ]);
  const [labels, setLabels] = useState([
    "ind_1",
    "ind_2",
    "ind_3",
    "ind_4",
    "ind_5",
  ]);
  const [start, setStart] = useState(false);
  const [mode, setMode] = useState("Choose an algorithm");
  const [speed, setSpeed] = useState(400); // console.log('lol', idk, myColors, labels);

  const algos = [
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
  ];

  const handleChange = (event) => {
    console.log(event.target.value);
    let arr = [];
    for (let i = 0; i <= event.target.value; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    setIdk(arr);
    let theLabels = []; //indices are labels
    let colors = [];
    while (colors.length <= event.target.value) {
      const item = theColors[Math.floor(Math.random() * theColors.length)];
      colors.push(item);
    }
    setMyColors(colors);
    for (let i = 0; i <= event.target.value; i++) {
      theLabels.push(`ind_${i}`);
    }
    setLabels(theLabels);
  };

  const handleSpeed = (event) => {
    console.log(event.target.value);
    setSpeed(event.target.value);
  };

  return (
    <div>
      <h1>SORTING VISUALIZER</h1>
      <div className="ltor">
        <BarChart
          idkData={idk}
          algo={mode}
          setAlgo={setMode}
          start={start}
          labels={labels}
          colors={myColors}
          setStart={setStart}
          setLabels={setLabels}
          setIdk={setIdk}
          setMyColors={setMyColors}
          speed={speed}
        />

        <div className="modes">
          <ul className="modelist">
            {algos.map((x) => {
              return (
                <button
                  disabled={start === true ? true : false}
                  className="algobtn"
                  key={x}
                  onClick={() => {
                    setMode(x);
                    setStart(true);
                    console.log("btn", start);
                  }}
                >
                  {x}
                </button>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="slider-div">
        <div className="speed-div b">
          <h5 className="speed-h5">Length</h5>
          <Slider
            defaultValue={6}
            step={2}
            min={2}
            max={40}
            onChange={handleChange}
            disabled={start}
          />
        </div>
        <div className="speed-div a">
          <h5 className="speed-h5">Speed</h5>
          <Slider
            defaultValue={400}
            min={10}
            max={600}
            onChange={handleSpeed}
            disabled={start}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
