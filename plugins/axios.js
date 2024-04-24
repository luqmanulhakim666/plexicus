import qs from "query-string";

export default function ({ store, $axios, redirect, route, env }) {
  $axios.onResponse((res) => {
    return { ...res, statusCode: res.status };
    return res;
  });

  $axios.onError((err) => {
    return err;
  });

  $axios.setHeader("Accept", "application/json; charset=utf-8");
  $axios.defaults.paramsSerializer = (params) => {
    if (params.attributes)
      params.attributes = JSON.stringify(params.attributes);
    if (params.filter) params.filter = JSON.stringify(params.filter);
    if (params.order) params.order = JSON.stringify(params.order);
    return qs.stringify(params);
  };
}
