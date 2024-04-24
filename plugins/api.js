import weather from "@/api/weather";
import cities from "@/api/cities";

export default (ctx, inject) => {
  let api = {};
  api.weather = weather(ctx);
  api.cities = cities(ctx);
  inject("api", api);
};
