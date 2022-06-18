import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //Get the value of each dataPoint and return a new array and store it inside 'dataPointValues'.
  const totalMax = Math.max(...dataPointValues); //Then find the max value within the newly created array.

  return (
    <div className="chart-container">
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxVal={totalMax}
            label={dataPoint.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
