<template>
  <v-footer absolute app>
    <div class="d-flex full-width justify-center">
      <span class="text-center">&copy; {{ getYear }} </span>
    </div>
  </v-footer>
</template>

<script>
export default {
  computed: {
    getYear() {
      const date = new Date();

      return date.getFullYear();
    },
  },
};
</script>
