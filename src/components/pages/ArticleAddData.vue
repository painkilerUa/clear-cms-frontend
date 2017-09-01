<script>
export default {
  name: 'article-add-data',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    formFields: {
      type: Array,
      default () { return [] }
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
        }),
        createElement('div', {
          attrs: {
            'class': 'form-elements'
          },
          domProps: {
            innerHTML: this.title
          }
        }),
        createElement('button', {
          attrs: {
            type: 'button',
            class: 'add-article-btn alignright'
          },
          domProps: {
            innerText: `Add ${this.type}`
          }
        })
      ]
    )
  }
}
</script>

<style src='@/assets/scss/components/add-article.scss' lang='scss' scoped />