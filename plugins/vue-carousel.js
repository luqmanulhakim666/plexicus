import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const registerComponent = function (name, originalComponent) {
  Vue.component(name, {
    extends: originalComponent,
    props: ['data', 'options'],
    mounted() {
      this.renderChart(this.data, this.options)
    }
  })
}

registerComponent('vue-slick-carousel', VueSlickCarousel)
