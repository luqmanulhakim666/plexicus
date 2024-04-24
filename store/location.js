export const state = () => ({
  location: {
    lat: null,
    lon: null,
  },
  locationBlocked: null,
  cities: [],
});

export const mutations = {
  SET_LOCATION(state, location) {
    state.location.lat = location.latitude;
    state.location.lon = location.longitude;
  },
  SET_CITIES(state, payload) {
    state.cities = payload;
  },
  SET_LOCATION_BLOCKED(state, payload) {
    state.locationBlocked = payload;
  },
};

export const actions = {
  async fetchCities({ commit }, payload) {
    // fetch cities API
    const res = await this.$api.cities.getCities(payload);
    const data = res.data?.map((x) => {
      return {
        ...x,
        name: `${x.name}, ${x.country}`,
      };
    });

    commit("SET_CITIES", data);
  },
  async getCurrentLocation({ commit }) {
    // ask users to allow their location
    try {
      const position = await new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
          reject(new Error("Geolocation is not supported by this browser"));
        }
      });
      commit("SET_LOCATION", position.coords);
    } catch (error) {
      console.error("Error", error.message);
    }
  },

  async checkLocationPermission({ commit }) {
    // Check if user block the location permission
    if (navigator.permissions) {
      const permissionStatus = await navigator.permissions.query({
        name: "geolocation",
      });
      commit("SET_LOCATION_BLOCKED", permissionStatus.state === "denied");
    }
  },
};

export const getters = {
  location(state) {
    return state.location;
  },
  cities(state) {
    return state.cities;
  },
  locationBlocked(state) {
    return state.locationBlocked;
  },
};
