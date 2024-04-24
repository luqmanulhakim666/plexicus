<template>
  <div>
    <v-img width="100%" class="cover" :src="iconUrl" />
  </div>
</template>

<script>
import pipe from "@/mixins/pipe";
export default {
  mixins: [pipe],
  props: {
    data: [Array, Object],
    size: [String, Number],
  },

  computed: {
    iconUrl() {
      if (this.data.weather?.length > 0) {
        return this.fetchIcon(this.data.weather[0].icon);
      }

      return "";
    },
  },
};
</script>
