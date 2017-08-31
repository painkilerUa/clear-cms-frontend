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
              name="Title"
              v-model="formInfo.title"
              data-vv-as='"Title"'
              v-validate="'required'"
              placeholder="Type in to add title..."
              class="form-control" />
              <div
                v-if="errors.has('Title')"
                class="form-errors">{{ errors.first('Title') }}
              </div>
            </div>
            <!-- END:.form-element -->
              <div class="form-group">
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Language</label>
                  <v-select
                  :options="languages"
                  v-model="formInfo.language"
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Type</label>
                  <v-select
                  :options="getContentTypeTitles"
                  value.sync="formInfo.contentType"
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Topic</label>
                  <v-select
                  :options="getTagTitles"
                  value.sync="formInfo.tags"
                  :multiple="true"
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Category</label>
                  <v-select
                  :options="getCategoriesTitles"
                  :multiple="true"
                  placeholder="Select" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Access</label>
                  <v-select
                  :options="getRoleTitles"
                  value.sync="formInfo.access"
                  :multiple="true"
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
            <vue-editor
              name="Content"
              data-vv-as='"Content"'
              v-validate="'required'"
              v-model="formInfo.content" />
            <div
              v-if="errors.has('Content')"
              class="form-errors">{{ errors.first('Content') }}
            </div>
          </section>
          <section class="add-article-section">
            <h2 class="add-article-section__title">Article video</h2>
            <!-- .form-elements -->
            <div class="form-elements" v-for="n in addElements.video">
              <!-- .form-element -->
              <div class="form-element">
                <label for="addVideoUrl" class="form-label">Video URL</label>
                <input
                id="addVideoUrl"
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
              </div>
            <!-- END:.form-elements -->
            <button
              type="button"
              @click="addFormElement('video')"
              class="add-article-btn alignright">Add video
            </button>
          </section>
          <section class="add-article-section">
            <h2 class="add-article-section__title">Article resources</h2>
            <!-- .form-elements -->
            <div class="form-elements" v-for="n in addElements.resource">
              <!-- .form-group -->
              <div class="form-group">
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label for="addTitle" class="form-label">Upload resource</label>
                  <input
                  id="addTitle"
                  type="file"
                  placeholder="Type in to add title..."
                  class="form-control" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label for="addTitle" class="form-label">Insert resource URL</label>
                  <input
                  id="addTitle"
                  type="url"
                  placeholder="Insert resource link here"
                  class="form-control" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--full">
                  <label for="addTextarea" class="form-label">Transcript for resource</label>
                  <textarea
                  id="addTextarea"
                  placeholder="Transcript for resource"
                  class="form-control"
                  cols="30"
                  rows="5">
                  </textarea>
                </div>
                <!-- END:.form-element -->
              </div>
              <!-- END:.form-group -->
              </div>
              <!-- END:.form-elements -->
            <button
              type="button"
              @click="addFormElement('resource')"
              class="add-article-btn alignright">Add resource
            </button>
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
import api from '@/api'
import 'vue-awesome/icons/eye'
import 'vue-awesome/icons/upload'
import FormMessages from '@/components/common/FormMessages'
import forms from '@/mixins/forms'

export default {
  name: 'add-article',
  mixins: [forms],
  data () {
    return {
      formInfo: {
        language: null,
        contentType: null,
        tags: [],
        access: [],
        category: null,
        companySpecific: null,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptas tempore error quis recusandae perferendis aliquam, dolore alias, commodi natus labore dolorum obcaecati, voluptatibus sunt rem atque iusto odit, facere vel similique impedit. Qui, voluptas voluptatibus suscipit modi omnis harum, deserunt libero maxime natus, ad veniam inventore rerum velit numquam? Est obcaecati dolores laudantium dignissimos, saepe atque. Porro a dolorem tempora, ad vero rerum at. Nostrum provident sapiente praesentium atque, expedita alias, hic perspiciatis quae sed, aliquam beatae, rem optio magni perferendis quo numquam deleniti magnam. Tenetur vero expedita, aliquam, quis fugit laborum quisquam doloremque asperiores eligendi dolores facere maiores.'
      },
      languages: ['English (UK)', 'English (US)'],
      types: [],
      tags: [],
      categories: [],
      roles: [],
      addElements: {
        video: 1,
        resource: 1
      }
    }
  },
  computed: {
    getContentTypeTitles () {
      return this.types.map(item => item.type)
    },
    getTagTitles () {
      return this.tags.map(item => item.name)
    },
    getCategoriesTitles () {
      return this.categories.map(item => item.title)
    },
    getRoleTitles () {
      return this.roles.map(item => item.name)
    }
  },
  methods: {
    getTypes () {
      this.$http.get(`${api.serverURL}${api.URLS.contentTypes}`, api.headersAuthSettings)
      .then((res) => {
        this.types = res.body.items
      })
      .catch((err) => console.log(err))
    },
    getTags () {
      this.$http.get(`${api.serverURL}${api.URLS.tags}`, api.headersAuthSettings)
      .then((res) => {
        this.tags = res.body.items
      })
      .catch((err) => console.log(err))
    },
    getCategories () {
      this.$http.get(`${api.serverURL}${api.URLS.categories}`, api.headersAuthSettings)
      .then((res) => {
        this.categories = res.body.items
        console.log(res)
      })
      .catch((err) => console.log(err))
    },
    getRoles () {
      this.$http.get(`${api.serverURL}${api.URLS.roles}`, api.headersAuthSettings)
      .then((res) => {
        this.roles = res.body.items
      })
      .catch((err) => console.log(err))
    },
    addFormElement (type) {
      this.addElements[type] += 1
    }
  },
  components: {
    FormMessages
  },
  mounted () {
    this.getTypes()
    this.getTags()
    this.getCategories()
    this.getRoles()
  }
}
</script>

<style src='@/assets/scss/components/add-article.scss' lang='scss' scoped />
