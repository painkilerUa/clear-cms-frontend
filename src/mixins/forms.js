export default {
  data () {
    return {
      formErrors: this.$validator.errors.items,
      formServerMessages: {
        success: [],
        errors: []
      }
    }
  },
  methods: {
    clearServerErrors () {
      this.formServerMessages.errors = []
    },
    checkErrorsOnSubmit () {
      this.$validator.validateAll()
    }
  }
}
