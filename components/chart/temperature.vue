<template>
  <div class="shadow-base pa-4">
    <h4 class="h4--default primary--text text--lighten-4">Temperature</h4>
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
export default {
  props: {
    items: Object,
    labels: Array,
  },
  data: () => ({
    series: [],
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
    for (let i in this.items) {
      this.series.push(this.items[i]);
    }
  },
};
</script>
