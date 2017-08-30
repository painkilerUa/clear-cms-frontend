<template>
  <!-- add-article -->
  <div class="add-article">
    <h1 class="add-article-title">Add new article</h1>
    <!-- .add-article-wrapper -->
    <form class="add-article-wrapper form" @submit.prevent>
      <section class="add-article-section add-article-section--heading">
        <h2 class="add-article-section__title">Article details</h2>
        <!-- .add-article-details -->
        <div class="add-article-details">
          <!-- .form-elements -->
          <div class="form-elements">
            <!-- .form-element -->
            <div class="form-element">
              <label for="addTitle" class="form-label">Title</label>
              <input
              id="addTitle"
              type="text"
              placeholder="Type in to add title..."
              class="form-control" />
            </div>
            <!-- END:.form-element -->
              <div class="form-group">
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Language</label>
                  <v-select
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Type</label>
                  <v-select
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Topic</label>
                  <v-select
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Category</label>
                  <v-select
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Access</label>
                  <v-select
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Company Specific</label>
                  <v-select
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
            </div>
          </div>
          <!-- END:.form-elements -->
          <!-- .add-article-thumbnail -->
          <div class="add-article-thumbnail">
            <span class="form-label">Featured image</span>
            <label class="form-label form-label--file">
              <icon name="upload" />
              <input type="file" class="form-control form-control--file" />
            </label>
          </div>
          <!-- END:.add-article-thumbnail -->
        </div>
        <!-- END:.add-article-details -->
      </section>
    </form>
    <!-- END:.add-article-wrapper -->
  </div>
  <!-- END:add-article -->
</template>

<script>
import 'vue-awesome/icons/upload'

export default {
  name: 'add-article',
  data () {
    return {
    }
  }
}
</script>

<style src='@/assets/scss/components/add-article.scss' lang='scss' scoped />
