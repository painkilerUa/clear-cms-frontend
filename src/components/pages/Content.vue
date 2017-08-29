<template>
	<!-- .content -->
	<div class="content">
		<h1 class="content-title" v-if="title">{{title}}</h1>
		<strong class="content-type" v-if="type">{{type}}</strong>
		<div class="content-content" v-if="content">{{content}}</div>
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
    content () {
      if (this.contentItem) {
        return this.contentItem.content
      }
    }
  },
  methods: {
    clearItem () {
      this.contentItem = null
    },
    fetchContent () {
      this.clearItem()
      this.$http.get(`${api.URLS.content}/${this.id}`, api.headersAuthSettings)
      .then((res) => { this.contentItem = res.body })
      .catch((err) => console.error(err))
    }
  },
  mounted () {
    this.fetchContent()
  }
}
</script>