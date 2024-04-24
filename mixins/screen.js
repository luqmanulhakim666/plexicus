export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly
    },

    isTablet() {
      return this.$vuetify.breakpoint.md
    },

    isLaptop() {
      return this.$vuetify.breakpoint.mdAndUp
    },

    isDesktop() {
      return this.$vuetify.breakpoint.xlOnly
    },

    xsOnly() {
      return this.$vuetify.breakpoint.xsOnly
    },

    smOnly() {
      return this.$vuetify.breakpoint.smOnly
    },

    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },

    smAndUp() {
      return this.$vuetify.breakpoint.smAndUp
    },

    mdOnly() {
      return this.$vuetify.breakpoint.mdOnly
    },

    mdAndDown() {
      return this.$vuetify.breakpoint.mdAndDown
    },

    mdAndUp() {
      return this.$vuetify.breakpoint.mdAndUp
    },

    xs() {
      return this.$vuetify.breakpoint.xs
    },

    sm() {
      return this.$vuetify.breakpoint.sm
    },

    md() {
      return this.$vuetify.breakpoint.md
    },

    lg() {
      return this.$vuetify.breakpoint.lg
    },

    xl() {
      return this.$vuetify.breakpoint.xl
    }
  }
}
