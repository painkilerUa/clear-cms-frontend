<template>
	<!-- .content -->
	<div class="content">
		
	</div>
	<!-- END:.content -->
</template>

<script>
import api from '@/api'

export default {
  data () {
    return {
      contentItem: null,
      id: 10003
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