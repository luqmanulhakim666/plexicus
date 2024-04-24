<template>
  <div class="shadow-base pa-4">
    <h4 class="h4--default primary--text text--lighten-4">Humidity</h4>
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    labels: Array,
  },
  data: () => ({
    series: [{ name: "Humidity", data: [] }],
    chartOptions: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        categories: [],
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
    },
  }),

  created() {
    this.chartOptions.xaxis.categories = this.labels;
    this.series[0].data = this.items;
  },
};
</script>
