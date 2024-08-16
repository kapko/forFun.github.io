import React, {useEffect} from "react";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more.js";
import highchartsSolidGauge from "highcharts/modules/solid-gauge.js";

highchartsMore(Highcharts);
highchartsSolidGauge(Highcharts);

const SolidChart:React.FC = () => {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'solidgauge',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '',
    },

    exporting: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background:[ {
        backgroundColor:
          (Highcharts.defaultOptions.legend &&
            Highcharts.defaultOptions.legend.backgroundColor) || '#fafafa',
        borderRadius: 5,
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc',
      }],
    },
    yAxis: {
      stops: [
        [0.1, '#55BF3B'], // green
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#DF5353'], // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: undefined,
      tickAmount: 2,
      // title: {
      //   y: -90,
      // },
      labels: {
        y: 16,
      },
    },
    plotOptions: {
      solidgauge: {
        // borderRadius: 3,
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
  };

  useEffect(() => {
    const chartSpeed = Highcharts.chart(
      'container-speed',
      Highcharts.merge(chartOptions, {
        yAxis: {
          min: 0,
          max: 200,
          title: {
            y: -160,
            text: 'Speed',
          },
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Speed',
            data: [80],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">km/h</span>' +
                '</div>',
            },
            tooltip: {
              valueSuffix: ' km/h',
            },
          },
        ],
      }) as Highcharts.Options
    );

    const chartRpm = Highcharts.chart(
      'container-rpm',
      Highcharts.merge(chartOptions, {
        yAxis: {
          min: 0,
          max: 5,
          title: {
            y:-160,
            text: 'RPM',
          },
        },
        series: [
          {
            name: 'RPM',
            data: [1],
            dataLabels: {
              format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px">{y:.1f}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">' +
                '* 1000 / min' +
                '</span>' +
                '</div>',
            },
            tooltip: {
              valueSuffix: ' revolutions/min',
            },
          },
        ],
      }) as Highcharts.Options
    );

    const updateCharts = () => {
      let point, newVal, inc;

      if (chartSpeed && chartSpeed.series[0].points[0]) {
        point = chartSpeed.series[0].points[0];
        if (point && point.y !== undefined) {
          inc = Math.round((Math.random() - 0.5) * 100);
          newVal = point.y + inc;

          if (newVal < 0 || newVal > 200) {
            newVal = point.y - inc;
          }

          point.update(newVal);
        }
      }

      if (chartRpm && chartRpm.series[0].points[0]) {
        point = chartRpm.series[0].points[0];
        if (point && point.y !== undefined) {
          inc = Math.random() - 0.5;
          // inc = Math.round((Math.random() - 0.5) * 100);
          newVal = point.y + inc;

          if (newVal < 0 || newVal > 5) {
            newVal = point.y - inc;
          }

          point.update(newVal);
        }
      }
    };

    const interval = setInterval(updateCharts, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div>
      <div id="container-speed" ></div>
      <div id="container-rpm"></div>
    </div>
  );
};

export default SolidChart;