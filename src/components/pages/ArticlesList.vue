<template>
	<!-- .articles-list -->
	<div class="articles-list">
   <!-- .articles-list-actions -->
    <div class="articles-list-actions">
      <v-select
      placeholder="Bulk action"
      v-model="selectedAction"
      :options="getArticleListActions" />
    </div>
    <!-- END:.articles-list-actions --> 
  </div>
	<!-- END:.articles-list -->
</template>

<script>
export default {
  name: 'articles-list',
  data () {
    return {
      getArticleListActions: [],
      selectedAction: null
    }
  }
}
</script>

<style src='@/assets/scss/components/articles-list.scss' lang='scss' scoped />