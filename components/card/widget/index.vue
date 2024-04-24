<template>
  <v-card
    height="300"
    flat
    class="primary shadow-base lighten-3 rounded-xl d-flex flex-column justify-space-between"
  >
    <div class="mx-auto">
      <temperature-icon :data="data"></temperature-icon>
      <p class="text--default white--text">{{ date }}</p>
    </div>
    <v-spacer></v-spacer>

    <div class="d-flex mx-auto flex-column">
      <div class="d-flex">
        <h1 class="h1--xxlarge white--text mr-2">
          {{ temperature }}
        </h1>
        <v-progress-circular
          size="10"
          :value="100"
          color="white"
          width="2"
        ></v-progress-circular>
      </div>
      <p class="h7--xxsmall text-center white--text text-capitalize">
        {{ weatherDescription(data) }}
      </p>
    </div>

    <v-spacer />

    <div class="d-flex flex-column align-center mx-auto">
      <div class="d-flex">
        <v-icon color="white">mdi-water-percent</v-icon>
        <p class="white--text">
          {{ humidity }}
        </p>
      </div>
      <div class="d-flex">
        <v-icon color="white">mdi-weather-windy</v-icon>
        <p class="white--text ml-1">{{ windSpeed }} km/h</p>
      </div>
    </div>

    <v-spacer />

    <div class="primary lighten-2">
      <p class="h7--xxsmall text-center">
        {{ time }}
      </p>
    </div>
  </v-card>
</template>

<script>
import pipe from "@/mixins/pipe";
import utils from "@/mixins/utils";
export default {
  mixins: [pipe, utils],
  props: {
    data: Object,
  },

  computed: {
    date() {
      return this.$dayjs(this.data.dt_txt).format("DD MMM");
    },

    time() {
      return this.$dayjs(this.data.dt_txt).format("HH:MM A");
    },

    windSpeed() {
      return this.data.wind.speed;
    },

    humidity() {
      return this.data.main.humidity;
    },

    temperature() {
      return this.data.main.temp;
    },
  },
};
</script>
