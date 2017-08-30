<template>
	<!-- .articles-list -->
	<div class="articles-list">
   <!-- .articles-list-heading -->
   <div class="articles-list-heading">
      <!-- .articles-list-actions -->
      <div class="articles-list-actions">
        <!-- .articles-list-inputwrap -->
        <div class="articles-list-inputwrap">
        	<input type="checkbox" class="articles-list-input" />
        </div>
        <!-- END:.articles-list-inputwrap -->
        <v-select
        placeholder="Bulk action"
        v-model="selectedAction"
        :options="getArticleListActions" />
      </div>
      <!-- END:.articles-list-actions -->
      <!-- .articles-list-statusbar -->
      <div class="articles-list-statusbar">
      	<!-- .articles-list-statusbar__contains -->
      	<div class="articles-list-statusbar__contains articles-list-statusbar__block">Library contains 33.456 Articles</div>
      	<!-- END:.articles-list-statusbar__contains -->
      	<!-- .articles-list-statuses -->
      	<ul class="articles-list-statuses articles-list-statusbar__block">
      		<li class="articles-list-statuses__item articles-list-statuses__item--published">12567 Published</li>
      		<li class="articles-list-statuses__item articles-list-statuses__item--archived">12567 Archived</li>
      		<li class="articles-list-statuses__item articles-list-statuses__item--draft">12567 Draft</li>
      	</ul>
      	<!-- END:.articles-list-statuses -->
      </div>
      <!-- END:.articles-list-statusbar -->
      <div class="articles-list-add">
        <button
        type="button"
        class="articles-list-add__btn">
        + Add new article</button>
      </div>
    </div>
   <!-- END:.articles-list-heading -->
   <!-- .articles-list-body -->
   <div class="articles-list-body">
     <!-- .table table-data -->
     <table class="table table-data">
       <thead>
         <tr>
           <th>ID</th>
           <th>
             <input
             type="search"
             class="table-search"
             placeholder="Search in articles" />
           </th>
           <th>
             <v-select placeholder="Language" />
           </th>
           <th>
             <v-select placeholder="Type" />
           </th>
           <th>
             <v-select placeholder="Topic" />
           </th>
           <th>
             <v-select placeholder="Category" />
           </th>
           <th>
             <v-select placeholder="Access" />
           </th>
           <th>
             <v-select placeholder="Comp spec" />
           </th>
           <th>
             <v-select placeholder="Last Edited" />
           </th>
           <th>
            <v-select placeholder="Upl / Edit" />
           </th>
           <th>
            <v-select placeholder="Status" />
           </th>
           <th colspan="3">Actions</th>
         </tr>
       </thead>
     </table>
     <!-- END:.table table-data -->
   </div>
   <!-- END:.articles-list-body -->
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