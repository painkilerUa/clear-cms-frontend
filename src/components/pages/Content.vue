<template>
	<!-- .content -->
	<div class="content">
		<h1 class="content-title" v-if="title">{{title}}</h1>
		<span class="content-type" v-if="type">{{type}}</span>
		<div class="content-description" v-if="description">{{description}}</div>
	</div>
	<!-- END:.content -->
</template>

<script>
import api from '@/api'

export default {
  props: ['id'],
  data () {
    return {
      contentItem: null
    }
  },
  watch: {
    '$route': 'fetchContent'
  },
  computed: {
    title () {
      if (this.contentItem) {
        return this.contentItem.title
      }
    },
    type () {
      if (this.contentItem) {
        return this.contentItem.content_type.type
      }
    },
    description () {
      if (this.selectedItem) {
        return this.contentItem.content
      }
    }
  },
  methods: {
    fetchContent () {
      this.contentItem = null
      this.$http.get(`${api.serverURL}/api/v1/content/${this.id}`)
      .then((res) => { this.contentItem = res.body; console.log(res.body) })
    }
  },
  mounted () {
    this.fetchContent()
  }
}
</script>