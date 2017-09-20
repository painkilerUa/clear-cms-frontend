<template>
  <!-- add-article -->
  <div class="add-article">
    <div class="wrap-title">
      <div class="title">
        <h1>{{article.title}}</h1>
      </div>
      <div class="control-panel">
        <span @click="archiveArticle">Archive article</span>
        <span @click="deleteArticle">Delete article</span>
      </div>
    </div>
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
              v-model="article.title"
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
                  v-validate="'required'"
                  placeholder="Select"
                  :on-change="getSubFormFields"
                  v-model="article.contentType"/>
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
                  :options="getTagsForSelect"
                  v-model="article.tags"
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
                  :options="getCategoriesForSelect"
                  v-model="article.categories"
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
                  :options="getRolesForSelect"
                  v-model="article.roles"
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
                    v-model="article.companies"
                    :options="getCompaniesForSelect"
                    :multiple="true"
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
                @change="onThumbnailFileChange($event)"
                class="form-control form-control--file" />
            </label>
            <img id="thumbnailFilePreview" v-if="isThumbnailFileUploaded" :src="srcImagePreview" />
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
              v-model="article.content"
              :editorToolbar="customEditorToolbar" />
            <div
              v-if="errors.has('Content')"
              class="form-errors">{{ errors.first('Content') }}
            </div>
          </section>
          <section class="edit-article-resources" v-if="formResource.newResources && !!Object.keys(formResource.newResources[0]).length">
            <h2 class="add-article-section__title">{{formResource.title}}</h2>
            <div class="wrap-existing-resources">
              <div class="existing-resource" v-for="(resource, i) in formResource.existingResources" v-if="!!Object.keys(resource).length">
                <div class="wrap-top-control-panel">
                  <span @click="deleteExistingResource(i)">
                    Delete
                    <icon name="times-circle-o" />
                  </span>
                </div>
                <h3></h3>
                <div class="row" v-if="resource.file">
                  <span>
                    <span>{{resource.file}}</span>
                    <button type="button" @click="removeResourceFile(i)">
                      <icon name="remove" />
                    </button>
                  </span>
                </div>
                <div class="row">
                  <div class="wrap-add-resource-file" v-if="resource.file === ''">
                    <label :for="'edit-resource-file-' + i">Upload recource</label>
                    <input type="file" :id="'edit-resource-file-' + i" @change="uploadFileExistedResource(i)">
                  </div>
                  <div class="wrap-add-resource-url" v-if="!resource.file && resource.link !== undefined">
                    <label :for="'add-resource-url-' + i">Recource URL</label>
                    <input type="url" :id="'add-resource-url-' + i" v-model="resource.link">
                  </div>
                </div>
                <div class="row">
                  <textarea name="ext-desc" id="" cols="30" rows="5" v-model="resource.textarea"></textarea>
                </div>
              </div>
            </div>
            <div class="wrap-add-resource">
              <div class="add-resource" v-for="(newResource, j) in formResource.newResources">
                <div class="row">
                  <div class="wrap-add-resource-file" v-if="newResource.file !== undefined">
                    <label :for="'add-resource-file-' + j">Upload recource</label>
                    <input type="file" :id="'add-resource-file-' + j" @change="uploadFileNewResource(j)">
                  </div>
                  <div class="wrap-add-resource-url" v-if="newResource.link !== undefined">
                    <label :for="'add-resource-url-' + j">Recource URL</label>
                    <input type="url" :id="'add-resource-url-' + j" v-model="newResource.link">
                  </div>
                </div>
                <label :for="'add-resource-desc-' + j">Transcript for Video</label>
                <div class="row">
                  <textarea name="text" cols="30" rows="5" :id="'add-resource-desc-' + j" v-model="newResource.textarea"></textarea>
                </div>
              </div>
              <div class="wrap-bottom-control-panel">
                <button @click="addResource">Add resource</button>
              </div>
            </div>
          </section>
        </div>
        <!-- END:.add-article-sections -->
        <!-- .add-article-actions -->
        <div class="add-article-actions">
          <button type="button" class="action-btn action-btn--preview icon-btn" @click="previewArticle">
            <icon name="eye" />
            <span>Preview Article</span>
          </button>
          <button type="button" class="action-btn action-btn--exit icon-btn" @click="$router.push('/admin/articles-list')">Exit / Discard changes</button>
          <button type="submit" class="action-btn action-btn--publish icon-btn" @click.prevent="editArticle">Save changes & publish</button>
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
import 'vue-awesome/icons/info-circle'
import 'vue-awesome/icons/remove'
import FormMessages from '@/components/common/FormMessages'
import ArticleAddData from '@/components/pages/ArticleAddData'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'edit-article',
  mixins: [forms],
  data () {
    return {
      articleId: this.$route.params.id,
      article: {
        title: '',
        contentType: [],
        tags: [],
        categories: [],
        companies: [],
        roles: [],
        content: '',
//        createdAt: '2017-08-05 11:45:43',
//        updatedAt: '2017-08-05 11:45:43',
//        publishedAt: '2017-08-05 11:45:43',
        isActive: null
      },
      srcImagePreview: '',
      languages: ['English (UK)', 'English (US)'],
      tags: [],
      categories: [],
      roles: [],
      isThumbnailFileUploaded: false,
      addElements: {
        video: 1,
        resource: 1,
        case_study: 1,
        screen_text: 1
      },
      subForm: {
        type: ''
      },
      formResource: [],
      disableAPI: false,
      customEditorToolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{'list': 'blockquote'}, {'list': 'code-block'}],
        [{'list': 'ordered'}, {'list': 'bullet'}]
      ]
    }
  },
  computed: {
    ...mapGetters([
      'types',
      'getTagsForSelect',
      'getCategoriesForSelect',
      'getRolesForSelect',
      'getCompaniesForSelect'
    ]),
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
    'selectedValues.type' (value) {
      this.sendTypeRequest(value)
    }
  },
  methods: {
    ...mapActions([
      'getTypes',
      'getCompanies',
      'getRoles'
    ]),
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
    addFieldGroup (event) {
      let elem = {
        tag: 'input',
        attrs: {
          type: 'url',
          placeholder: 'input value'
        }
      }
      this.additionalFormFields[0].fields.push(elem)
    },
    sendTypeRequest (value) {
      console.log('sendTypeRequest', value)
    },
    addFormElement (type) {
      this.addElements[type] += 1
    },
    onThumbnailFileChange (e) {
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
    onResourceFileChange (value, i) {
      let valueTrimmed = value.replace(/^.*\\/, '')
      document.getElementById('uploadedResource_' + i).innerHTML = valueTrimmed
    },
    removeThumbnail () {
      var input = document.getElementById('uploadThumbnail')
      input.value = null
      this.isThumbnailFileUploaded = false
    },
    selectType () {
      if (this.selectedValues.type) {
        this.formInfo.contentType = this.types.find(item => item.type === this.selectedValues.type).id
        console.log('contentType', this.formInfo.contentType)
      }
    },
    selectCategories () {
      if (this.selectedValues.categories) {
        this.formInfo.categories = this.categories.filter(item => this.selectedValues.categories.indexOf(item.title) !== -1).map(item => item.id)
        console.log('categories', this.formInfo.categories)
      }
    },
    selectRoles () {
      if (this.selectedValues.roles) {
        this.formInfo.access = this.roles.filter(item => this.selectedValues.roles.indexOf(item.name) !== -1).map(item => item.id)
        console.log('roles', this.formInfo.access)
      }
    },
    selectTags () {
      if (this.selectedValues.tags.length) {
        this.formInfo.tags = this.tags.filter(item => this.selectedValues.tags.indexOf(item.name) !== -1).map(item => item.id)
        console.log('tags', this.formInfo.tags)
      }
    },
    editArticle (e, status = this.article.isActive) {
      if (this.disableAPI) return
      let formData = new FormData()
      formData.set('content[title]', this.article.title)
      formData.set('content[content]', this.article.content)
      formData.set('content[description]', this.article.description)
      formData.set('content[contentType]', this.article.contentType.value)
//      formData.set('content[createdAt]', '2017-08-05 11:45:43')
//      formData.set('content[updatedAt]', '2017-08-05 11:45:43')
//      formData.set('content[publishedAt]', '2017-08-05 11:45:43')
      formData.set('content[status]', status)
//  Add categories
      this.article.categories.forEach((category, i) => {
        let fieldName = 'content[categories][' + i + ']'
        formData.set(fieldName, category.value)
      })
//  Add tags
      this.article.tags.forEach((tag, i) => {
        let fieldName = 'content[tags][' + i + ']'
        formData.set(fieldName, tag.value)
      })
// Add companies
      this.article.companies.forEach((company, i) => {
        let fieldName = 'content[companies][' + i + ']'
        formData.set(fieldName, company.value)
      })
// Add roles
      this.article.roles.forEach((role, i) => {
        let fieldName = 'content[roles][' + i + ']'
        formData.set(fieldName, role.value)
      })
      if (document.getElementById('uploadThumbnail').files[0]) {
        formData.set('content[imageFile]', document.getElementById('uploadThumbnail').files[0])
      }
// Add resources
      let countTypeValues = 0
      this.formResource.existingResources.forEach((resource) => {
        Object.keys(resource).forEach((key, i) => {
          if (key === 'file' && resource[key]) {
            formData.set('content[typeValues][' + countTypeValues + '][file]', resource.id)
          }
          if (key === 'file' && resource[key] === '') {
            formData.set('content[typeValues][' + countTypeValues + '][file]', document.getElementById('edit-resource-file-' + resource.id).files[0])
          }
          if (key === 'link') {
            formData.set('content[typeValues][' + countTypeValues + '][link]', resource.link)
          }
          if (key === 'textarea') {
            formData.set('content[typeValues][' + countTypeValues + '][textarea]', resource.textarea)
          }
        })
        countTypeValues++
      })
      this.formResource.newResources.forEach((newResource) => {
        Object.keys(newResource).forEach((key, i) => {
//        Check filled fields
          if (!newResource.textarea || (!newResource.link && !newResource.id.toString())) return
          if (key === 'file' && document.getElementById('add-resource-file-' + newResource.id)) {
            formData.set('content[typeValues][' + countTypeValues + '][file]', document.getElementById('add-resource-file-' + newResource.id).files[0])
          }
          if (key === 'link') {
            formData.set('content[typeValues][' + countTypeValues + '][link]', newResource.link)
          }
          if (key === 'textarea') {
            formData.set('content[typeValues][' + countTypeValues + '][textarea]', newResource.textarea)
          }
        })
        countTypeValues++
      })
      this.disableAPI = true
      this.$http.post(api.URLS.content + '/' + this.articleId, formData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log('editArticle', res)
          this.$router.push('/admin/articles-list')
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
        })
    },
    uploadFileExistedResource (i) {
      this.formResource.existingResources[i].id = i
      console.log('uploadFileExistedResource', i)
    },
    uploadFileNewResource (j) {
      this.formResource.newResources[j].id = j
    },
    getSubFormFields (val) {
      if (!val) return
      let typeId = this.types.find(item => item.type === val).id
      this.$http.get(api.URLS.contentType + typeId, api.headersAuthSettings)
        .then((res) => {
          console.log('', res)
          let newFormField = {}
          if (res.body.form.form) {
            Object.keys(res.body.form.form).forEach((key) => {
              newFormField[key] = ''
            })
          }
          this.formResource.existingResources = []
          this.formResource.newResources = [newFormField]
          console.log('newFormField', newFormField)
          console.log('getSubFormFields', res)
        })
        .catch((err) => console.log(err))
    },
    getArticleById (id) {
      this.$http.get(api.URLS.content + '/' + id, api.headersAuthSettings)
        .then((res) => {
          console.log('getArticleById', res)
          this.article.title = res.body.title
          this.article.description = res.body.description
          this.article.isActive = +res.body.status
          this.article.contentType = {
            label: res.body.content_type.type,
            value: res.body.content_type.id
          }
          res.body.tags.forEach((tag) => {
            this.article.tags.push({
              label: tag.name,
              value: tag.id
            })
          })
          res.body.categories.forEach((category) => {
            this.article.categories.push({
              label: category.title,
              value: category.id
            })
          })
          res.body.companies.forEach((company) => {
            this.article.companies.push({
              label: company.name,
              value: company.id
            })
          })
          res.body.roles.forEach((role) => {
            this.article.roles.push({
              label: role.name,
              value: role.id
            })
          })
// Add image
          this.isThumbnailFileUploaded = !!res.body.image_name
          this.article.content = res.body.content
          let newResource = {}
          if (res.body.content_type.form.form) {
            Object.keys(res.body.content_type.form.form).forEach((key) => {
              newResource[key] = ''
            })
          }
          this.formResource = {
            title: res.body.content_type.form.comment ? res.body.content_type.form.comment.title : '',
            existingResources: res.body.formResource ? res.body.formResource : [],
            newResources: [newResource]
          }
//          this.existingResources = res.body.formResource
// File preview
          this.srcImagePreview = 'http://13.59.74.76' + res.body.image_path
          console.log('getArticleById', res)
        })
        .catch((err) => console.log(err))
    },
    addResource () {
      let newResource = {}
      Object.keys(this.formResource.newResources[0]).forEach((key) => {
        newResource[key] = ''
      })
      this.formResource.newResources.push(newResource)
    },
    deleteExistingResource (i) {
      this.formResource.existingResources.splice(i, 1)
    },
    removeResourceFile (i) {
      this.formResource.existingResources[i].file = ''
    },
    previewArticle () {
    },
    archiveArticle () {
      this.editArticle(null, 2)
    },
    deleteArticle () {
      if (this.disableAPI) return
      this.$http.delete(api.URLS.content + '/' + this.articleId, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          this.$router.push('/admin/articles-list')
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
        })
    }
  },
  components: {
    FormMessages,
    ArticleAddData
  },
  mounted () {
    this.getArticleById(this.$route.params.id)
    this.getCompanies()
    this.getRoles()
  }
}
</script>

<style src='@/assets/scss/components/edit-article.scss' lang='scss' scoped />
