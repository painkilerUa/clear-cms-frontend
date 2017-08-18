export default {
  methods: {
    clearServerErrors () {
      this.formServerMessages.errors = []
    },
    checkErrorsOnSubmit () {
      this.$validator.validateAll()
    }
  }
}
