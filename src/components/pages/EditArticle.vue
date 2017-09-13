<template>
  <!-- add-article -->
  <div class="add-article">
    <div class="wrap-title">
      <div class="title">
        <h1>{{article.title}}</h1>
      </div>
      <div class="control-panel">
        <span>Archive article</span>
        <span>Delete article</span>
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
                  <label class="form-label">Tags</label>
                  <v-select
                  name="Tags"
                  data-vv-as='"Tags"'
                  :options="getTagsForSelect"
                  v-model="article.tags"
                  v-validate="'required'"
                  :multiple="true"
                  placeholder="Select" />
                  <div
                    v-if="errors.has('Tags')"
                    class="form-errors">{{ errors.first('Tags') }}
                  </div>
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <label class="form-label">Category</label>
                  <v-select
                  name="Category"
                  data-vv-as='"Category"'
                  :options="getTagsForSelect"
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
                  :options="getRoleTitles"
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
              v-model="article.content" />
            <div
              v-if="errors.has('Content')"
              class="form-errors">{{ errors.first('Content') }}
            </div>
          </section>
          <section class="edit-article-resources">
            <h2 class="add-article-section__title">{{formResource.title}}</h2>
            <div class="wrap-existing-resources">
              <div class="existing-resource" v-for="(resource, i) in formResource.existingResources">
                <div class="wrap-top-control-panel">
                  <span @click="deleteExistingResource(i)">
                    Delete
                    <icon name="times-circle-o" />
                  </span>
                </div>
                <h3></h3>
                <div class="row">
                  <span>
                    <span>{{resource.file}}</span>
                    <icon name="remove" />
                  </span>
                  <div class="wrap-input-link" v-if="!resource.link">
                    <input type="url" v-model="resource.link">
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
                  <div class="wrap-add-resource-file" v-if="newResource.file">
                    <label for="'add-resource-file-' + j">Upload recource</label>
                    <input type="file" id="'add-resource-file-' + j">
                  </div>
                  <label for="'add-resource-url-' + j">Video URL</label>
                  <input type="url" id="'add-resource-url-' + j" v-model="newResource.link">
                </div>
                <label for="{'add-resource-desc-' + j}">Transcript for Video</label>
                <div class="row">
                  <textarea name="text" cols="30" rows="5" id="'add-resource-desc-' + j" v-model="newResource.textarea"></textarea>
                </div>

              </div>
              <div class="wrap-bottom-control-panel">
                <button @click="addResource">Add resource</button>
              </div>
            </div>
          </section>
          <!--<section class="add-article-section" v-if="article.contentType.label === 'video'">-->
            <!--<h2 class="add-article-section__title">Article video</h2>-->
            <!--<div class="wrap-existing-resources">-->
              <!--<div class="existing-resource" v-for="(resource, i) in existingResources">-->
                <!--<div class="wrap-control">-->
                  <!--&lt;!&ndash;<span>Delete</span>&ndash;&gt;-->
                <!--</div>-->
                <!--<h4>Attachment {{i +1}}: URL and transcript</h4>-->
                <!--<div class="wrap-link">-->
                  <!--<input type="url" :value="resource.link" class="link" />-->
                <!--</div>-->
                <!--<div class="wrap-textarea">-->
                  <!--<textarea name="textarea" id="" cols="30" rows="5" :value="resource.textarea"></textarea>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--&lt;!&ndash; .form-elements &ndash;&gt;-->
            <!--<div class="form-elements" v-for="n in addElements.video">-->
              <!--&lt;!&ndash; .form-element &ndash;&gt;-->
              <!--<div class="form-element">-->
                <!--<label for="addVideoUrl" class="form-label">Video URL</label>-->
                <!--<input-->
                <!--id="addVideoUrl"-->
                <!--type="text"-->
                <!--placeholder="Insert video link here"-->
                <!--class="form-control input-url-video" />-->
              <!--</div>-->
              <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
              <!--&lt;!&ndash; .form-element &ndash;&gt;-->
              <!--<div class="form-element">-->
                <!--<label for="addTextarea" class="form-label">Transcript for video</label>-->
                <!--<textarea-->
                <!--id="addTextarea"-->
                <!--placeholder="Transcript for video"-->
                <!--class="form-control input-textarea-video"-->
                <!--cols="30"-->
                <!--rows="5">-->
                <!--</textarea>-->
              <!--</div>-->
              <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
              <!--</div>-->
            <!--&lt;!&ndash; END:.form-elements &ndash;&gt;-->
            <!--<button-->
              <!--type="button"-->
              <!--@click="addFormElement('video')"-->
              <!--class="add-article-btn alignright">Add video-->
            <!--</button>-->
          <!--</section>-->
          <!--<section class="add-article-section" v-if="article.contentType.label === 'case_study'">-->
            <!--<h2 class="add-article-section__title">Article Case Study</h2>-->
            <!--&lt;!&ndash; .form-elements &ndash;&gt;-->
            <!--<div class="form-elements" v-for="n in addElements.case_study">-->
              <!--&lt;!&ndash; .form-element &ndash;&gt;-->
              <!--<div class="form-element">-->
                <!--<label for="case-study-textarea" class="form-label">Case Study transcript</label>-->
                <!--<textarea-->
                  <!--id="case-study-textarea"-->
                  <!--placeholder="Case Study transcript"-->
                  <!--class="form-control input-textarea-case-study"-->
                  <!--cols="30"-->
                  <!--rows="5">-->
                <!--</textarea>-->
              <!--</div>-->
              <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
            <!--</div>-->
            <!--&lt;!&ndash; END:.form-elements &ndash;&gt;-->
            <!--<button-->
              <!--type="button"-->
              <!--@click="addFormElement('case_study')"-->
              <!--class="add-article-btn alignright">Add element-->
            <!--</button>-->
          <!--</section>-->
          <!--<section class="add-article-section" v-if="article.contentType.label === 'screen_text'">-->
            <!--<h2 class="add-article-section__title">Article Screen Text</h2>-->
            <!--&lt;!&ndash; .form-elements &ndash;&gt;-->
            <!--<div class="form-elements" v-for="n in addElements.screen_text">-->
              <!--&lt;!&ndash; .form-element &ndash;&gt;-->
              <!--<div class="form-element">-->
                <!--<label for="screen-text-textarea" class="form-label">Screen Text transcript</label>-->
                <!--<textarea-->
                  <!--id="screen-text-textarea"-->
                  <!--placeholder="Screen Text transcript"-->
                  <!--class="form-control input-textarea-screen-text"-->
                  <!--cols="30"-->
                  <!--rows="5">-->
                <!--</textarea>-->
              <!--</div>-->
              <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
            <!--</div>-->
            <!--&lt;!&ndash; END:.form-elements &ndash;&gt;-->
            <!--<button-->
              <!--type="button"-->
              <!--@click="addFormElement('screen_text')"-->
              <!--class="add-article-btn alignright">Add element-->
            <!--</button>-->
          <!--</section>-->
          <!--<section class="add-article-section" v-if="article.contentType.label === 'resource'">-->
            <!--<h2 class="add-article-section__title">Article resources</h2>-->
            <!--&lt;!&ndash; .form-elements &ndash;&gt;-->
            <!--<div class="form-elements" v-for="n in addElements.resource">-->
              <!--&lt;!&ndash; .form-group &ndash;&gt;-->
              <!--<div class="form-group">-->
                <!--&lt;!&ndash; .form-element &ndash;&gt;-->
                <!--<div class="form-element form-element&#45;&#45;half">-->
                  <!--<span class="form-label">Upload resource</span>-->
                  <!--<label class="form-label form-label&#45;&#45;file-resource">-->
                    <!--<icon name="upload" />-->
                    <!--<span class="form-label__text">Upload resource</span>-->
                    <!--<span :id="'uploadedResource_' + n"></span>-->
                    <!--<input-->
                    <!--id=""-->
                    <!--type="file"-->
                    <!--@change="onResourceFileChange($event.target.value, n)"-->
                    <!--placeholder="Type in to add title..."-->
                    <!--class="form-control visually-hidden form-control&#45;&#45;file input-file-resource" />-->
                  <!--</label>-->
                <!--</div>-->
                <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
                <!--&lt;!&ndash; .form-element &ndash;&gt;-->
                <!--<div class="form-element form-element&#45;&#45;half">-->
                  <!--<label for="addTitle" class="form-label">Insert resource URL</label>-->
                  <!--<input-->
                  <!--id="addTitle"-->
                  <!--type="url"-->
                  <!--placeholder="Insert resource link here"-->
                  <!--class="form-control input-url-resource" />-->
                <!--</div>-->
                <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
                <!--&lt;!&ndash; .form-element &ndash;&gt;-->
                <!--<div class="form-element form-element&#45;&#45;full">-->
                  <!--<label for="addTextarea" class="form-label">Transcript for resource</label>-->
                  <!--<textarea-->
                  <!--id="addTextarea"-->
                  <!--placeholder="Transcript for resource"-->
                  <!--class="form-control input-textarea-resource"-->
                  <!--cols="30"-->
                  <!--rows="5">-->
                  <!--</textarea>-->
                <!--</div>-->
                <!--&lt;!&ndash; END:.form-element &ndash;&gt;-->
              <!--</div>-->
              <!--&lt;!&ndash; END:.form-group &ndash;&gt;-->
              <!--</div>-->
              <!--&lt;!&ndash; END:.form-elements &ndash;&gt;-->
            <!--<button-->
              <!--type="button"-->
              <!--@click="addFormElement('resource')"-->
              <!--class="add-article-btn alignright">Add resource-->
            <!--</button>-->
          <!--</section>-->
          <!--<article-add-data-->
            <!--:title="'Test Video'"-->
            <!--:type="'video'"-->
            <!--v-for="(item, i) in additionalFormFields"-->
            <!--:key="i"-->
            <!--@addNewFieldGroup="addFieldGroup"-->
            <!--:formFields="item.fields"/>-->
        </div>
        <!-- END:.add-article-sections -->
        <!-- .add-article-actions -->
        <div class="add-article-actions">
          <button type="button" class="action-btn action-btn--preview icon-btn">
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
        createdAt: '2017-08-05 11:45:43',
        updatedAt: '2017-08-05 11:45:43',
        publishedAt: '2017-08-05 11:45:43',
        isActive: 1
      },
      srcImagePreview: '',
      languages: ['English (UK)', 'English (US)'],
      tags: [],
      categories: [],
      roles: [],
      isThumbnailFileUploaded: true,
      addElements: {
        video: 1,
        resource: 1,
        case_study: 1,
        screen_text: 1
      },
      subForm: {
        type: ''
      },
      formResource: []
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
//    getTypes () {
//      this.$http.get(`${api.serverURL}${api.URLS.contentTypes}`, api.headersAuthSettings)
//      .then((res) => {
//        this.types = res.body.items
//        console.log('getTypes', res.body)
//      })
//      .catch((err) => console.log(err))
//    },
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
    editArticle () {
      let formData = new FormData()
//      Object.keys(this.article).forEach((fieldName) => {
//        if (typeof this.article[fieldName] === 'string' || typeof this.article[fieldName] === 'number') {
//          formData.set('category[' + fieldName + ']', this.article[fieldName])
//        }
//        if (typeof this.article[fieldName] === 'object') {
//          this.article[fieldName].forEach((item, i) => {
//            formData.set('category[' + fieldName + '][' + i + ']', item.value)
//          })
//        }
//      })
      formData.set('content[title]', this.article.title)
      formData.set('content[content]', this.article.content)
      formData.set('content[description]', this.article.description)
      formData.set('content[contentType]', this.article.contentType.value)
      formData.set('content[createdAt]', '2017-08-05 11:45:43')
      formData.set('content[updatedAt]', '2017-08-05 11:45:43')
      formData.set('content[publishedAt]', '2017-08-05 11:45:43')
      formData.set('content[isActive]', this.article.isActive)
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
      if (document.getElementById('uploadThumbnail').files[0]) {
        formData.set('content[imageFile]', document.getElementById('uploadThumbnail').files[0])
      }
      this.existingResources.forEach((item, i) => {
        Object.keys(item).forEach((key) => {
          formData.set('content[typeValues][' + i + '][' + key + ']', item[key])
        })
      })
      this.$http.post(api.URLS.content + '/' + this.articleId, formData, api.headersAuthSettings)
        .then((res) => {
          console.log('editArticle', res)
          this.$router.push('/admin/articles-list')
        })
        .catch((err) => console.log(err))
    },
    getSubFormFields (val) {
      if (!val) return
//      console.log('getSubFormFields', val)
//      console.log('getSubFormFields', this.types)
      let typeId = this.types.find(item => item.type === val).id
      this.$http.get(api.URLS.contentType + typeId, api.headersAuthSettings)
        .then((res) => {
          this.subForm.type = res.body.form.type
          console.log('getSubFormFields', res)
        })
        .catch((err) => console.log(err))
    },
    getArticleById (id) {
      this.$http.get(api.URLS.content + '/' + id, api.headersAuthSettings)
        .then((res) => {
          console.log('getArticleById', res)
          this.article.title = res.body.title
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
          // TODO: make for roles same thins
          this.article.content = res.body.content
          let newResource = {}
          Object.keys(res.body.content_type.form.form).forEach((key) => {
            newResource[key] = ''
          })
          this.formResource = {
            title: res.body.content_type.form.comment.title,
            existingResources: res.body.formResource,
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
      this.formResource.newResources.push(this.formResource.newResources[0])
    },
    deleteExistingResource (i) {
      this.formResource.existingResources.splice(i, 1)
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
