<template>
  <v-app dark>
    <app-bar />
    <v-main class="o-app">
      <v-container fluid>
        <Nuxt />
      </v-container>
      <snackbar />
      <footer-section />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.o-app {
  background-color: #f7f7f8;
  padding-bottom: 0 !important;
}
</style>
