import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import theColors from "./colors";
import bubble from "./Bubble";
import insertionSort from "./InsertionSort";
import selectionSort from "./SelectionSort";
import mergeSort from "./MergeSort";
import quick from "./QuickSort";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

const BarChart = ({
  idkData,
  algo,
  setAlgo,
  start,
  labels,
  colors,
  setStart,
  setLabels,
  setIdk,
  setMyColors,
  speed,
}) => {
  const chartRef = useRef(); //ref
  console.log("HEYY BAR", colors, labels, idkData);
  let thisData = idkData.slice();
  let myColors = colors.slice();
  let myLabels = labels.slice();

  useEffect(() => {
    thisData = idkData.slice();
    chartRef.current.update();
  }, [idkData]);

  useEffect(() => {
    const myfun = async () => {
      const word = algo.split(" ")[0].toLowerCase();
      if (start) {
        if (word === "bubble") {
          await bubble(idkData, labels, colors, chartRef, speed);
        } else if (word === "selection") {
          await selectionSort(idkData, labels, colors, chartRef, speed);
        } else if (word === "insertion") {
          await insertionSort(idkData, labels, colors, chartRef, speed);
        } else if (word === "quick") {
          await quick(
            thisData,
            0,
            thisData.length - 1,
            labels,
            colors,
            chartRef,
            speed
          );
        } else if (word === "merge") {
          await quick(
            thisData,
            0,
            thisData.length - 1,
            labels,
            colors,
            chartRef,
            speed
          );
        }
        setIdk((prev) => idkData);
        setMyColors((prev) => colors);
        setLabels((prev) => labels);
        setStart(false);
        setAlgo("Choose an algorithm");
        chartRef.current.update();
      }
      return;
    };
    myfun();
  }, [start]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sort Stuff ",
        backgroundColor: colors,
        borderColor: "white",
        data: idkData,
        datalabels: {
          color: "white",
          borderColor: "yellow",
          borderRadius: 2,
          font: {
            size: "20",
            weight: "bold",
          },
        },
      },
    ],
  };

  return (
    <div className="chartDiv">
      <Bar
        data={data}
        width={"500px"}
        height={"600px"}
        ref={chartRef}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
      <h1>{algo}</h1>
    </div>
  );
};

export default BarChart;
