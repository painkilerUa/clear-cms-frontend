<template>
  <!-- add-article -->
  <div class="add-article">
    <h1 class="add-article-title">Add new article</h1>
    <!-- .add-article-wrapper -->
    <form class="add-article-wrapper form" @submit.prevent="submit">
      <section class="add-article-section add-article-section--heading">
        <form-messages :messages="formServerMessages" class="text-left" />
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
                  name="Language"
                  data-vv-as="Language"
                  placeholder="Select" />
                  <div
                    v-if="errors.has('Language')"
                    class="form-errors">{{ errors.first('Language') }}
                  </div>
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Type</label>
                  <v-select
                  name="Type"
                  data-vv-as='"Type"'
                  :options="getContentTypeTitles"
                  v-model="selectValues.type"
                  v-validate="'required'"
                  placeholder="Select" />
                  <div
                    v-if="errors.has('Type')"
                    class="form-errors">{{ errors.first('Type') }}
                  </div>
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Topic</label>
                  <v-select
                  name="Topic"
                  data-vv-as='"Topic"'
                  :options="getTagTitles"
                  v-model="selectValues.tags"
                  v-validate="'required'"
                  :multiple="true"
                  placeholder="Select" />
                  <div
                    v-if="errors.has('Topic')"
                    class="form-errors">{{ errors.first('Topic') }}
                  </div>
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Category</label>
                  <v-select
                  name="Category"
                  data-vv-as='"Category"'
                  :options="getCategoriesTitles"
                  v-model="selectValues.categories"
                  v-validate="'required'"
                  :multiple="true"
                  placeholder="Select" />
                  <div
                    v-if="errors.has('Category')"
                    class="form-errors">{{ errors.first('Category') }}
                  </div>
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Access</label>
                  <v-select
                  name="Access"
                  :options="getRoleTitles"
                  v-model="selectValues.roles"
                  v-validate="'required'"
                  :multiple="true"
                  data-vv-as='"Access"'
                  placeholder="Select" />
                  <div
                    v-if="errors.has('Access')"
                    class="form-errors">{{ errors.first('Access') }}
                  </div>
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
            <label class="form-label form-label--file-upload" v-show="!isThumbnailFileUploaded">
              <icon name="upload" />
              <input
                type="file"
                id="uploadThumbnail"
                name="Thumbnail"
                data-vv-as='"Thumbnail"'
                value.sync="formInfo.thumbnail"
                v-validate.reject="veeValidateFileUploadRules"
                @change="onThumbnailFileChange"
                class="form-control form-control--file" />
            </label>
            <img id="thumbnailFilePreview" v-if="isThumbnailFileUploaded" src="" />
            <div
              v-if="errors.has('Thumbnail')"
              class="form-errors">{{ errors.first('Thumbnail') }}
            </div>
            <button
              type="button"
              v-if="isThumbnailFileUploaded"
              @click="removeThumbnail"
              class="btn btn--remove-element alignright">
              <span class="btn__text">Remove image</span>
              <icon name="times-circle-o" />
            </button>
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
              class="article-editor"
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
                  <span class="form-label">Upload resource</span>
                  <label class="form-label form-label--file-resource">
                    <icon name="upload" />
                    <span class="form-label__text">Upload resource</span>
                    <span id="uploadedResource"></span>
                    <input
                    id="uploadResource"
                    type="file"
                    @change="onResourceFileChange($event.target.value)"
                    placeholder="Type in to add title..."
                    class="form-control visually-hidden form-control--file" />
                  </label>
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
          <button type="submit" class="action-btn action-btn--publish icon-btn">Publish article</button>
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
import forms from '@/mixins/forms'
import 'vue-awesome/icons/eye'
import 'vue-awesome/icons/upload'
import 'vue-awesome/icons/times-circle-o'
import FormMessages from '@/components/common/FormMessages'
import ArticleAddData from '@/components/pages/ArticleAddData'

export default {
  name: 'add-article',
  mixins: [forms],
  data () {
    return {
      selectValues: {
        type: null,
        tags: [],
        categories: [],
        roles: []
      },
      formInfo: {
        thumbnail: null,
        language: null,
        contentType: null,
        tags: [],
        access: [],
        categories: [],
        companySpecific: null,
        content: ''
      },
      languages: ['English (UK)', 'English (US)'],
      types: [],
      tags: [],
      categories: [],
      roles: [],
      isThumbnailFileUploaded: false,
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
    },
    veeValidateFileUploadRules () {
      return {
        required: true,
        mimes: 'image/*'
      }
    }
  },
  watch: {
    'selectValues.type' (value) {
      this.sendTypeRequest(value)
    }
  },
  methods: {
    sendFormRequest () {
      this.selectType()
      this.selectTags()
      this.selectCategories()
      this.selectRoles()
      console.log('formJson', this.formJson)
      this.$http.post(api.URLS.content, this.formJson, api.headersAuthSettings)
      .then((res) => { console.log(res) })
      .catch((err) => { this.submitErrors(err.body.errors) })
    },
    sendTypeRequest (value) {
      console.log('sendTypeRequest', value)
    },
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
    },
    onThumbnailFileChange: function () {
      var input = document.getElementById('uploadThumbnail')
      if (input.files && input.files[0] && input.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
        this.isThumbnailFileUploaded = true
        var reader = new FileReader()
        reader.onload = function (e) {
          var thumbnailFilePreview = document.getElementById('thumbnailFilePreview')
          thumbnailFilePreview.setAttribute('src', e.target.result)
          thumbnailFilePreview.setAttribute('alt', 'thumbnail')
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    onResourceFileChange (value) {
      let valueTrimmed = value.replace(/^.*\\/, '')
      document.getElementById('uploadedResource').innerHTML = valueTrimmed
    },
    removeThumbnail () {
      var input = document.getElementById('uploadThumbnail')
      input.value = null
      this.isThumbnailFileUploaded = false
    },
    selectType () {
      if (this.selectValues.type) {
        this.formInfo.contentType = this.types.find(item => item.type === this.selectValues.type).id
        console.log('contentType', this.formInfo.contentType)
      }
    },
    selectCategories () {
      if (this.selectValues.categories) {
        this.formInfo.categories = this.categories.filter(item => this.selectValues.categories.indexOf(item.title) !== -1).map(item => item.id)
        console.log('categories', this.formInfo.categories)
      }
    },
    selectRoles () {
      if (this.selectValues.roles) {
        this.formInfo.access = this.roles.filter(item => this.selectValues.roles.indexOf(item.name) !== -1).map(item => item.id)
        console.log('roles', this.formInfo.access)
      }
    },
    selectTags () {
      if (this.selectValues.tags.length) {
        this.formInfo.tags = this.tags.filter(item => this.selectValues.tags.indexOf(item.name) !== -1).map(item => item.id)
        console.log('tags', this.formInfo.tags)
      }
    }
  },
  components: {
    FormMessages,
    ArticleAddData
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
