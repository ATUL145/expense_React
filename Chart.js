import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
