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
    resetForm () {
      let func = this.formInfo.function
      if (func.length) {
        func = null
      }
      this.$refs.form.reset()
    },
    clearServerMessages () {
      this.formServerMessages.success = []
      this.formServerMessages.errors = []
    },
    checkErrorsOnSubmit () {
      this.$validator.validateAll()
    },
    submitSuccess (res) {
      this.formServerMessages.success = res
    },
    submitErrors (err) {
      if (Array.isArray(err)) {
        this.formServerMessages.errors = err
      } else {
        this.formServerMessages.errors.push(JSON.parse(err).error_description)
      }
    },
    submit () {
      this.clearServerMessages()
      this.checkErrorsOnSubmit()
      if (this.formErrors.length === 0) {
        this.sendFormRequest()
      }
    }
  }
}
