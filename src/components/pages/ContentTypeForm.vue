<script>
  export default {
    name: 'content-type-form',
    props: {
      data: {
        type: Array,
        required: false
      }
    },
    render (createElement) {
      return createElement('section',
        {attrs: {
          'class': 'eugene'
        }}, [
          createElement('input',
            {
              attrs: {
                'type': 'text',
                'value': 'hello'
              }
            }
          )
        ])
    }
  }
</script>
