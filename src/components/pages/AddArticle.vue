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
      <!-- .add-article-body -->
      <div class="add-article-body">
        <!-- .add-article-sections -->
        <div class="add-article-sections">
          <section class="add-article-section">
            <h2 class="add-article-section__title">Article content</h2>
            <vue-editor v-model="content" />
          </section>
          <section class="add-article-section">
            <h2 class="add-article-section__title">Article video</h2>
            <!-- .form-element -->
            <div class="form-element">
              <label for="addTitle" class="form-label">Video URL</label>
              <input
              id="addTitle"
              type="text"
              placeholder="Insert video link here"
              class="form-control" />
            </div>
            <!-- END:.form-element -->
            <!-- .form-element -->
            <div class="form-element">
              <label for="addTextarea" class="form-label">Transcript for video</label>
              <textarea
              id="addTextarea"
              placeholder="Transcript for video"
              class="form-control"
              cols="30"
              rows="5">
              </textarea>
            </div>
            <!-- END:.form-element -->
            <button type="button">Add video</button>
          </section>
          <section class="add-article-section">
            <h2 class="add-article-section__title">Article resources</h2>
            <!-- END:.form-element -->
            <button type="button">Add resource</button>
          </section>
        </div>
        <!-- END:.add-article-sections -->
        <!-- .add-article-actions -->
        <div class="add-article-actions">
          <button type="button" class="action-btn action-btn--preview icon-btn">
            <icon name="eye" />
            <span>Preview Article</span>
          </button>
          <button type="button" class="action-btn action-btn--exit icon-btn">Exit without saving</button>
          <button type="button" class="action-btn action-btn--draft icon-btn">Save as draft</button>
          <button type="button" class="action-btn action-btn--publish icon-btn">Publish article</button>
        </div>
        <!-- END:.add-article-actions -->
      </div>
      <!-- END:.add-article-body -->
    </form>
    <!-- END:.add-article-wrapper -->
  </div>
  <!-- END:add-article -->
</template>

<script>
import 'vue-awesome/icons/upload'
import 'vue-awesome/icons/eye'

export default {
  name: 'add-article',
  data () {
    return {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sint et similique laudantium eius est, fuga ex reiciendis placeat illo omnis ducimus, adipisci quisquam eum asperiores earum soluta nam quos.'
    }
  }
}
</script>

<style src='@/assets/scss/components/add-article.scss' lang='scss' scoped />
