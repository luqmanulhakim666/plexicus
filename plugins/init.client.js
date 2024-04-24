// Initialize things only on client side

export default async ({ store }) => {
  try {
    await store.dispatch("location/getCurrentLocation");
  } catch (error) {}
};
