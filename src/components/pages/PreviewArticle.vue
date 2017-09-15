<template>
	<!-- .content -->
	<div class="content">
    <div class="inner-content">
      <h1>{{article.title}}</h1>
      <!--<h1 class="content-title" v-if="contentItem.title">{{contentItem.title}}</h1>-->
      <!--<strong class="content-type" v-if="contentItem.content_type.type">ContentType: {{contentItem.content_type.type}}</strong>-->
      <!--<div class="main-content" v-if="contentItem.content" v-html="contentItem.content">-->
      <!--</div>-->
      <!--<div class="wrap-img">-->
        <!--<img :src="'http://13.59.74.76' + contentItem.image_path" alt="alt">-->
      <!--</div>-->
      <!--<div class="form-resource" v-for="item in contentItem.type_values">-->
        <!--<p>{{item.link}}</p>-->
        <!--<p>{{item.textarea}}</p>-->
        <!--<img :src="'http://13.59.74.76/uploads/images/content/' + item.file" alt="alt" v-if="true">-->
      <!--</div>-->
    </div>
	</div>
	<!-- END:.content -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      article: {}
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters([
      'getArticlePreview'
    ])
  },
  methods: {
  },
  mounted () {
    this.article = JSON.parse(localStorage.previewArticle)
  }
}
</script>
getArticlePreview
<style src='@/assets/scss/components/content.scss' lang='scss' scoped />
