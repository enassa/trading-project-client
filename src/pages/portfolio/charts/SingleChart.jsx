import React, { memo } from "react";
import Chart from "react-apexcharts";

class SingleChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "GOOGL",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            // Hamburger menu at top
            show: false,
          },

          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
          show: false,
        },
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }
  render() {
    const { height } = this.props;
    return (
      <div className="w-[80%] h-full " id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={height ?? "100%"}
        />
      </div>
    );
  }
}

export default SingleChart;
