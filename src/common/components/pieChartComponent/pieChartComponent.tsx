import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {ExtendedPoint} from "./type";

const orderedData = [
  {
    name: "Twitter",
    y: 114650
  },
  {
    name: "Blogs",
    y: 41858
  },
  {
    name: "Instagram",
    y: 24205
  },
  {
    name: "Forums",
    y: 17430
  },
  {
    name: "News",
    y: 17014
  },
  {
    name: "Tumblr",
    y: 3510
  },
  {
    name: "Comments",
    y: 804
  },
  {
    name: "Facebook",
    y: 198
  },
  {
    name: "ProfReviews",
    y: 3
  }
];
const PieChartComponent = () => {
  function connectorLineHandler(this: Highcharts.Series) {
    if (this.data && Array.isArray(this.data)) {
      for (let i = 0; i < this.data.length; i += 1) {
        const point = this.data[i] as ExtendedPoint;
        if (point.percentage !== undefined && point.percentage < 5 && point.connector) {
          point.connector.attr("stroke", "pink");
        }
      }
    }
  }

  const truncateTooltipTitle = (input: string, maxLength: number) => {
    if (input.length > maxLength) {
      return `${input.substring(0, maxLength)}...`;
    }
    return input;
  };
  const chartOptions = {
    chart: {
      type: "pie",
      events: {
        render: connectorLineHandler
      }
    },
    title: {
      text: "chartTitle"
    },
    tooltip: {
      padding: 4,
      borderRadius: 0,
      shape: "rect",
      useHTML: true,
      formatter: function (this: Highcharts.TooltipFormatterContextObject): string {
        const name = this.point?.name ?? '';
        const percentage = this.point?.percentage !== undefined ? Number.parseFloat(this.point.percentage.toFixed(2)) : 0;
        return `
        <div>
          <div>${truncateTooltipTitle(name, 100)}</div>
          <div>${percentage}%</div>
        </div>
      `;
      }
    },
    plotOptions: {
      pie: {
        cursor: "pointer",
        borderWidth: 0,
        dataLabels: {
          connectorColor: "transparent",
          softConnector: false,
          enabled: true,
          distance: 10
        },
        showInLegend: false,
        states: {
          hover: {
            brightness: 0,
            halo: {
              opacity: 1,
              size: 10
            }
          }
        }
      },
      series: {
        startAngle: 0
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        data: orderedData
      }
    ]
  };

  return (
    <HighchartsReact
      containerProps={{ style: { height: "100%", weight: "100%" } }}
      options={chartOptions}
      highcharts={Highcharts}
      immutable
    />
  );
};

export default PieChartComponent;