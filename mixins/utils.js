export default {
  computed: {
    currentDate() {
      const date = new Date();
      return date;
    },
  },

  methods: {
    onDigits(event) {
      let keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },

    formatDate(val) {
      if (!val) {
        return "";
      }

      return this.$dayjs(val).format("DD-MM-YYYY");
    },

    formatDateInput(val) {
      if (!val) {
        return "";
      }

      return this.$dayjs(val).format("YYYY-MM-DD");
    },
  },
};
