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
      		<li class="articles-list-statuses__item status--published">12567 Published</li>
      		<li class="articles-list-statuses__item status--archived">12567 Archived</li>
      		<li class="articles-list-statuses__item status--draft">12567 Draft</li>
      	</ul>
      	<!-- END:.articles-list-statuses -->
      </div>
      <!-- END:.articles-list-statusbar -->
      <div class="articles-list-add">
        <button
        type="button"
        class="icon-btn articles-list-add__btn">
          <icon name="plus"></icon>
          <span>Add new article</span>
        </button>
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
             <v-select placeholder="Lang" />
           </th>
           <th>
             <v-select placeholder="Type" />
           </th>
           <th>
             <v-select placeholder="Topic" />
           </th>
           <th>
             <v-select placeholder="Categor" />
           </th>
           <th>
             <v-select placeholder="Access" />
           </th>
           <th>
             <v-select placeholder="Com spec" />
           </th>
           <th>
             <v-select placeholder="Last Edit" />
           </th>
           <th>
            <v-select placeholder="Upl/Edit" />
           </th>
           <th>
            <v-select placeholder="Status" />
           </th>
           <th colspan="3" class="cellpadding">Actions</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td class="text-center cellpadding">
             <input type="checkbox" id="1258"/>
             <label for="1258">1258</label>
           </td>
           <td class="cellpadding">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, eveniet?
           </td>
           <td class="cellpadding">English (USA)</td>
           <td class="cellpadding">Video</td>
           <td class="cellpadding">Financial</td>
           <td class="cellpadding">Category lor..</td>
           <td class="cellpadding">Clear assured</td>
           <td class="cellpadding">Lorem ipsum.</td>
           <td class="cellpadding">12 hours ago</td>
           <td class="cellpadding">Conan Simpson</td>
           <td class="cellpadding">
            <span class="status status--published">Published</span>
           </td>
           <td class="cellpadding">
             <button
             type="button"
             class="table-crud-btn icon-btn">
              <icon name="pencil"/>
             </button>
           </td>
           <td class="cellpadding">
             <button
             type="button"
             class="table-crud-btn icon-btn">
              <icon name="folder"/>
             </button>
           </td>
           <td class="cellpadding">
             <button
             type="button"
             class="table-crud-btn icon-btn">
              <icon name="times"/>
             </button>
           </td>
         </tr>
       </tbody>
     </table>
     <!-- END:.table table-data -->
   </div>
   <!-- END:.articles-list-body -->
  </div>
	<!-- END:.articles-list -->
</template>

<script>
import api from '@/api'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/pencil'
import 'vue-awesome/icons/folder'
import 'vue-awesome/icons/times'

export default {
  name: 'articles-list',
  data () {
    return {
      articles: [],
      getArticleListActions: ['Action 1', 'Action 2', 'Action 3'],
      selectedAction: null
    }
  },
  mounted () {
    this.$http.get(api.URLS.content, api.headersAuthSettings)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.log(err))
  }
}
</script>

<style src='@/assets/scss/components/articles-list.scss' lang='scss' scoped />