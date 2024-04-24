import qs from "query-string";

export default (ctx) => {
  let { $axios } = ctx;
  const url = "https://api.openweathermap.org/data/2.5";
  return {
    async getCurrentweather(query = {}) {
      let q = qs.stringify(query);
      return await $axios.get(`${url}/weather?${q}`);
    },

    async getForeCast(query = {}) {
      let q = qs.stringify(query);
      return await $axios.get(`${url}/forecast?${q}`);
    },

    getIcon(icon) {
      return `https://openweathermap.org/img/wn/${icon}.png`;
    },
  };
};
