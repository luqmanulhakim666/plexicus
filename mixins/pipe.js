export default {
  methods: {
    fetchIcon(icon) {
      if (!icon) return "";

      return this.$api.weather.getIcon(icon);
    },

    weatherDescription(value) {
      if (value.weather?.length > 0) {
        return value.weather[0].description;
      }
      return "";
    },

    toISOString(value) {
      if (this.$dayjs(value).isValid()) return this.$dayjs(value).toISOString();
      return null;
    },
  },
  decimal(val) {
    if (val) {
      return String(val)
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return "0";
  },
};
