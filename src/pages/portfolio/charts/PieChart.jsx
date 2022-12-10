import React from "react";
import Chart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        labels: ["GOOGL", "APPL", "MSFT", "TSLA", "NEtFLIX"],
        chart: {
          type: "donut",
        },
        plotOptions: {
          pie: {
            donut: {
              size: "35%",
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart h-full">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={"100%"}
        />
      </div>
    );
  }
}
export default PieChart;
