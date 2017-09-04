<script>
export default {
  name: 'article-add-data',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  render: function (createElement) {
    return createElement(
      'h1',
      this.title
    )
  }
}
</script>
