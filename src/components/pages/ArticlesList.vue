<template>
	<!-- .articles-list -->
	<div class="articles-list">
   <!-- .articles-list-heading -->
   <div class="articles-list-heading">
      <!-- .articles-list-actions -->
      <div class="articles-list-actions">
        <!-- .articles-list-inputwrap -->
        <div class="articles-list-inputwrap">
        	<input type="checkbox" />
        </div>
        <!-- END:.articles-list-inputwrap -->
        <v-select
        placeholder="Bulk action"
        v-model="selectedAction"
        :options="getArticleListActions" />
      </div>
      <!-- END:.articles-list-actions -->
    </div>
   <!-- END:.articles-list-heading -->
  </div>
	<!-- END:.articles-list -->
</template>

<script>
export default {
  name: 'articles-list',
  data () {
    return {
      getArticleListActions: ['Action 1', 'Action 2', 'Action 3'],
      selectedAction: null
    }
  }
}
</script>

<style src='@/assets/scss/components/articles-list.scss' lang='scss' scoped />