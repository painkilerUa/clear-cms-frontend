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
      'section',
      {
        attrs: {
          'class': 'add-article-section'
        }
      },
      [
        createElement('h2', {
          attrs: {
            'class': 'add-article-section__title'
          },
          domProps: {
            innerText: this.title
          }
        })
      ]
    )
  }
}
</script>

<style src='@/assets/scss/components/add-article.scss' lang='scss' scoped />