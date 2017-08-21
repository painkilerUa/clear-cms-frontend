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
  computed: {
    formJson () {
      return JSON.stringify(this.formInfo)
    },
    serverSuccessMessages () {
      return this.formServerMessages.success
    },
    serverErrors () {
      return this.formServerMessages.errors
    }
  },
  methods: {
    clearServerErrors () {
      this.formServerMessages.errors = []
    },
    checkErrorsOnSubmit () {
      this.$validator.validateAll()
    },
    submitSuccess (res) {
      this.clearServerErrors()
      this.formServerMessages.success = res
    },
    submitErrors (err) {
      this.formServerMessages.errors = err
    },
    successRedirect () {
      this.$router.push('/')
    },
    submit () {
      this.checkErrorsOnSubmit()
      if (this.formErrors.length === 0) {
        this.sendFormRequest()
      }
    }
  }
}
