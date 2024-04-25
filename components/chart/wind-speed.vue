<template>
  <div class="shadow-base pa-4 rounded-xl">
    <h4 class="h4--default primary--text text--lighten-4">Wind Speed</h4>
    <apexchart type="radialBar" :options="chartOptions" :series="items" />
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    labels: Array,
  },
  data: () => ({
    chartOptions: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            margin: 8,
            fontSize: "16px",
            formatter: function (seriesName, opts) {
              return (
                seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              );
            },
          },
        },
      },
      colors: ["#1ab7ea", "#718df5", "#39539E"],
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  }),

  created() {
    this.chartOptions.labels = this.labels;
  },
};
</script>
