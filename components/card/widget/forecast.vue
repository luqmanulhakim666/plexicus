<template>
  <div class="widget">
    <VueSlickCarousel
      class="carousel-container fill-height"
      v-bind="settings"
      :slidesToShow="handleSlideToShow"
      v-if="!isEmpty"
    >
      <div cols="12" lg="4" v-for="(item, index) in items" :key="index">
        <card-widget class="ma-2" :data="item" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import screen from "@/mixins/screen";

export default {
  mixins: [screen],
  props: {
    items: Array,
  },
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    settings: {
      infinite: false,
      centerMode: false,
      rows: 1,
      slidesPerRow: 1,
      dots: false,
    },
  }),

  computed: {
    handleSlideToShow() {
      if (this.xs) return 2;
      if (this.sm) return 3;
      return 5;
    },

    isEmpty() {
      return this.items.length === 0;
    },
  },
};
</script>

<style lang="scss">
.carousel-container {
  width: 100%;
}

.slick-list {
  padding: 0 !important;
}

.slick-prev {
  z-index: 1;
  left: 0;
}

.slick-next {
  z-index: 1;
  right: 0;
}

.slick-prev,
.slick-next {
  height: 40px;
  width: 40px;

  &::before {
    font-size: 40px;
  }
}
</style>
