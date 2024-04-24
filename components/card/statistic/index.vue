<template>
  <div class="d-flex shadow-base pa-4 rounded-xl flex-column align-center">
    <div class="d-flex align-center mb-4">
      <v-icon :color="iconColor" :size="iconSize">{{ icon }}</v-icon>
      <p class="text--large ml-2">{{ title }}</p>
    </div>
    <p class="h3--large white--text">
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    iconColor: String,
    iconSize: String,
    icon: String,
    value: [String, Number],
  },
};
</script>
