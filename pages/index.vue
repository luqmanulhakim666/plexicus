<template>
  <div>
    <template v-if="state.isLoading">
      <loading />
    </template>

    <div class="d-flex flex-column justify-center align-center mb-4">
      <v-icon size="44" color="primary lighten-2">
        mdi-city-variant-outline</v-icon
      >
      <h5 class="h5--small">Find City</h5>
    </div>

    <form-autocomplete
      v-model="search"
      :loading="state.loadingFetchCities"
      prepend-inner-icon="mdi-magnify"
      placeholder="Search for cities"
      className="text-capitalize mb-6 rounded-pill"
      clearable
      outlined
      hide-details="auto"
      :items="cities"
      item-text="name"
      return-object
      @keydown="onSearch"
    />

    <template v-if="!state.isLoading">
      <div class="mb-6">
        <div class="d-flex align-center mb-4">
          <h2 class="h2--xlarge dark--text text--lighten-5">
            Today's Hightlight
          </h2>
          <v-btn
            depressed
            x-small
            class="text-capitalize secondary lighten-5 h7--xxsmall mt-1 ml-4"
            @click="onGetCurrentLocation()"
            ><v-icon small class="mr-2">mdi-target</v-icon>Get Current
            Location</v-btn
          >
        </div>
        <v-row>
          <v-col cols="12" md="8">
            <card-widget-summarize :data="items.widget" />
          </v-col>
          <v-col cols="12" md="4">
            <chart-wind-speed
              :items="items.windSpeed.data"
              :labels="items.windSpeed.labels"
            />
          </v-col>
        </v-row>
      </div>

      <div class="mb-6">
        <h3 class="h3--small dark--text text--lighten-4 mb-4">Upcoming Days</h3>
        <v-row>
          <v-col cols="12">
            <card-widget-forecast :items="forecastList" />
          </v-col>
        </v-row>
      </div>

      <div>
        <h3 class="h3--small dark--text text--lighten-4 mb-4">
          Hours Forecast
        </h3>

        <v-row>
          <v-col cols="12" lg="6">
            <chart-temperature
              :items="items.temperature.series"
              :labels="items.labels"
            />
          </v-col>

          <v-col cols="12" lg="6">
            <chart-humidity :items="items.humidity" :labels="items.labels" />
          </v-col>
        </v-row>
      </div>
    </template>
  </div>
</template>

<script>
import alert from "@/mixins/alert";
import utils from "@/mixins/utils";
import debounce from "lodash/debounce";

export default {
  mixins: [alert, utils],
  data: () => ({
    search: null,
    showMessage: false,
    intro: true,
    state: {
      isLoading: false,
      loadingFetchCities: false,
    },
    items: {
      temperature: {
        series: {
          min: {
            name: "Temperature Min",
            data: [],
          },
          max: {
            name: "Temperature Max",
            data: [],
          },
        },
      },
      humidity: [],
      windSpeed: {
        data: [],
        labels: [],
      },
      labels: [],
      todayData: [],
      widget: {},
    },
  }),

  created() {
    this.onInit();
  },

  mounted() {
    this.$store.dispatch("location/checkLocationPermission");
  },

  computed: {
    forecastList() {
      return this.$store.getters["weather/forecastList"];
    },

    cities() {
      return this.$store.getters["location/cities"];
    },

    isLocationPermissionBlocked() {
      return this.$store.getters["location/locationBlocked"];
    },
  },

  methods: {
    async onInit() {
      this.state.isLoading = true;

      const location = await this.$store.getters["location/location"];

      // // check if location has lat & lon
      if (!location.lat || !location.lon) {
        await this.$store.dispatch("location/getCurrentLocation");
        return;
      }

      await this.$store.dispatch("weather/fetchWeather", location);
      this.state.isLoading = false;
      this.generateData();
    },

    generateData() {
      const { currentWeather, forecast } = this.$store.state.weather;

      this.items.todayData = forecast?.list?.filter((x) =>
        x.dt_txt.includes(this.$dayjs(this.curentDate).format("YYYY-MM-DD"))
      );
      this.items.widget = currentWeather;

      this.generateTemperatureData();
      this.generateHumidityData();
      this.generateWindSpeedData();
      this.generateLabels();
    },

    generateLabels() {
      this.items.labels = this.items.todayData?.map((item) => {
        return this.$dayjs(item.dt_txt).format("HH:MM A");
      });
    },

    generateTemperatureData() {
      this.items.temperature.series.min.data = this.items.todayData?.map(
        (item) => {
          return item.main.temp_min;
        }
      );

      this.items.temperature.series.max.data = this.items.todayData?.map(
        (item) => {
          return item.main.temp_max;
        }
      );
    },

    generateHumidityData() {
      this.items.humidity = this.items.todayData?.map((item) => {
        return item.main.humidity;
      });
    },

    generateWindSpeedData() {
      this.items.windSpeed.data = Object.values(this.items.widget?.wind);
      this.items.windSpeed.labels = Object.keys(this.items.widget?.wind);
    },

    onSearch: debounce(async function (e) {
      this.state.loadingFetchCities = true;

      const params = {
        name: e.target._value,
      };

      await this.$store.dispatch("location/fetchCities", params);
      this.state.loadingFetchCities = false;
    }, 500),

    async onGetCurrentLocation() {
      if (this.isLocationPermissionBlocked) {
        this.showMessage = true;

        this.setFailedAlert({
          message:
            "Location access is blocked. Please enable it in your browser settings to continue",
        });
        return;
      }

      await this.$store.dispatch("location/getCurrentLocation");
      const location = this.$store.getters["location/location"];
      await this.$store.dispatch("weather/fetchWeather", location);
      this.generateData();
    },
  },

  watch: {
    async search(val) {
      const location = {
        lat: val?.latitude,
        lon: val?.longitude,
      };

      if (val) {
        await this.$store.dispatch("weather/fetchWeather", location);
        this.state.isLoading = false;
        this.generateData();
      }
    },
  },
};
</script>
