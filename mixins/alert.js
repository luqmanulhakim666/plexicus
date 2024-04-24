export default {
  methods: {
    isSuccess(status) {
      return status === 200;
    },

    setSuccessAlert(label) {
      this.$store.dispatch("snack", [label, "success", "mdi-check-circle"]);
    },

    setFailedAlert(res) {
      this.$store.dispatch("snack", [res.message, "error", "mdi-close-circle"]);
    },
  },
};
