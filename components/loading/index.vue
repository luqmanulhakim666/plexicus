<template>
  <div class="loading">
    <v-progress-circular
      width="5"
      class="loading_circle"
      color="primary"
      size="60"
      indeterminate
    />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  &_circle {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
