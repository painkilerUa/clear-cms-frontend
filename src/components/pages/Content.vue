<template>
	<!-- .content -->
	<div class="content">
		<h1 class="content-title" v-if="title">{{title}}</h1>
		<span class="content-type">{{type}}</span>
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
    }
  },
  methods: {
    fetchContent () {
      this.$http.get(`${api.serverURL}/api/v1/content/${this.id}`)
      .then((res) => { this.contentItem = res.body })
    }
  },
  mounted () {
    this.fetchContent()
  }
}
</script>