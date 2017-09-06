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
    var self = this
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
          }
        }, [
          this.formFields.map(function (item) {
            return createElement(item.tag, {
              attrs: {
                type: item.attrs.type,
                cols: item.attrs.cols,
                rows: item.attrs.rows,
                placeholder: item.attrs.placeholder,
                'class': 'form-control'
              }
            })
          })
        ]),
        createElement('button', {
          attrs: {
            type: 'button',
            class: 'add-article-btn alignright'
          },
          on: {
            click (event) {
              self.$emit('addNewFieldGroup', 'veee')
            }
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