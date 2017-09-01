<template>
	<!-- .article-add-data -->
	<div class="article-add-data">
		
	</div>
	<!-- END:.article-add-data -->
</template>

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
      'h1', this.title
    )
  }
}
</script>