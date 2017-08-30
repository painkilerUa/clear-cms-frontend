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
        </div>
        <!-- END:.add-article-details -->
      </section>
    </form>
    <!-- END:.add-article-wrapper -->
  </div>
  <!-- END:add-article -->
</template>

<script>
export default {
  name: 'add-article',
  data () {
    return {
    }
  }
}
</script>

<style src='@/assets/scss/components/add-article.scss' lang='scss' scoped />
