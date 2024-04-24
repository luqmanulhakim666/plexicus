<template>
  <div>
    <v-snackbar
      elevation="5"
      v-for="item in snacks"
      :key="item.id"
      :value="item.show"
      :color="item.background"
      :timeout="item.timeout"
      top
    >
      <v-icon size="20" class="mr-2">{{ item.icon }}</v-icon>
      <span class="h8--supersmall">{{ item.msg }}</span>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'snackbar',

  computed: {
    snacks() {
      return this.$store.state.snackbars
    }
  },

  methods: {
    close(id) {
      this.$store.dispatch('unsnack', id)
    }
  }
}
</script>
