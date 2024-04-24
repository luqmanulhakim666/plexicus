export const state = () => ({
  appid: "e4125c083ad80ff385661137964d618f",
  currentWeather: {},
  forecast: {},
});

export const mutations = {
  SET_CURRENT_WEATHER(state, payload) {
    state.currentWeather = payload;
  },
  SET_FORECAST(state, payload) {
    state.forecast = payload;
  },
};

export const actions = {
  /**
   * fetch Open Wheater API
   *
   */
  async fetchWeather({ commit, state }, location) {
    const params = {
      lat: location.lat,
      lon: location.lon,
      units: "metric",
      appid: state.appid,
    };

    const api = [
      this.$api.weather.getCurrentweather(params),
      this.$api.weather.getForeCast(params),
    ];

    let [resCurrentWeather, resForecast] = await Promise.all(api);

    commit("SET_CURRENT_WEATHER", resCurrentWeather.data);
    commit("SET_FORECAST", resForecast.data);
  },
};

export const getters = {
  forecastList(state) {
    return state.forecast?.list;
  },
};
