import qs from "query-string";

export default (ctx) => {
  const { $axios } = ctx;
  const url = "https://api.api-ninjas.com/v1/city";
  const key = "hLB7T76SVJOpDKbgpQ/Rsg==pG0l8nmTwzCciXZs";

  return {
    async getCities(query = {}) {
      let q = qs.stringify(query);
      return await $axios({
        method: "GET",
        url: `${url}?${q}`,
        headers: { "X-Api-Key": key },
      });
    },
  };
};
