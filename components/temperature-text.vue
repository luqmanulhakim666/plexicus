<template>
  <div class="d-flex">
    <h1 :class="['mr-2', fontColor, fontSize]">
      {{ Math.floor(temperature) }}
    </h1>
    <v-progress-circular
      size="10"
      :value="100"
      :class="[fontColor]"
      width="2"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  props: {
    temperature: [String, Number],
    fontSize: {
      type: String,
      default: "h1--xxlarge",
    },
    fontColor: {
      type: String,
      default: "white--text",
    },
  },
};
</script>
