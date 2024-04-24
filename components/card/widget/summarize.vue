<template>
  <div
    class="widget primary d-flex flex-column justify-space-between lighten-2 white--text shadow-base rounded-xl pa-4 fill-height"
  >
    <div class="d-flex align-end mb-4">
      <v-icon color="white">mdi-target</v-icon>
      <h5 class="h5--small ml-2">{{ data.name }}, {{ data.sys.country }}</h5>
    </div>

    <div>
      <v-row>
        <v-col cols="12" md="4">
          <div class="d-flex align-center">
            <div class="d-flex">
              <temperature-text
                :temperature="data.main.temp"
                fontColor="primary--text"
              />
            </div>

            <p class="text--large dark--text text-capitalize">
              {{ weatherDescription(data) }}
            </p>
            <temperature-icon size="200" :data="data" />
          </div>
        </v-col>
        <v-col cols="12" md="5">
          <v-divider class="d-flex mx-auto" vertical />
        </v-col>
        <v-col cols="12" md="3">
          <div class="d-flex justify-space-around">
            <div>
              <p class="text--default">Max</p>
              <temperature-text
                :temperature="data.main.temp_max"
                fontColor="primary--text text--lighten-4"
                fontSize="h4--default"
              />
            </div>

            <div>
              <p class="text--default">Min</p>
              <temperature-text
                :temperature="data.main.temp_min"
                fontSize="h4--default"
                fontColor="primary--text text--lighten-4"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <div>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="6" md="3">
              <card-statistic
                title="Humidity"
                :value="data.main.humidity"
                icon="mdi-water-percent"
                iconColor="white"
              />
            </v-col>
            <v-col cols="6" md="3">
              <card-statistic
                title="Wind"
                :value="data.wind.speed"
                icon="mdi-weather-windy"
                iconColor="white"
              />
            </v-col>
            <v-col cols="6" md="3">
              <card-statistic
                title="Cloud"
                :value="data.clouds.all"
                icon="mdi-weather-cloudy"
                iconColor="white"
              />
            </v-col>
            <v-col cols="6" md="3">
              <card-statistic
                title="Pressure"
                :value="data.main.pressure"
                icon="mdi-arrow-collapse"
                iconColor="white"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import pipe from "@/mixins/pipe";
import utils from "@/mixins/utils";

export default {
  mixins: [pipe, utils],
  props: {
    data: Object,
  },
};
</script>
