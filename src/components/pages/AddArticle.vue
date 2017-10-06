<template>
  <!-- add-article -->
  <div class="add-article">
    <div class="wrap-preview-article" v-if="articlePreview.isShown">
      <button type="button" class="close-preview-button" @click="articlePreview.isShown = false">
        <icon name="window-close-o"></icon>
      </button>
      <h3>{{selectedValues.title}}</h3>
      <div class="wrap-main-content">
        <div class="text-content">
          <div v-html="selectedValues.content"></div>
        </div>
        <div class="graphic-content">
          <div class="wrap-main-img" v-if="articlePreview.mainImg !== null">
            <img :src="articlePreview.mainImg" alt="imgPreview">
          </div>
          <div class="wrap-resource">
            <div class="wrap-resource-video" v-if="subForm.type === 'video'" v-for="resource in articlePreview.resources">
              <h4>Video resources</h4>
              <iframe
              :src="changeLinkForPreview(resource.link)">
              </iframe>
              <span>Transcript for video</span>
              <section>{{resource.textarea}}</section>
            </div>
            <div class="wrap-resource-screen-text" v-if="subForm.type === 'resource'" v-for="resource in articlePreview.resources">
              <h4>Article resources</h4>
              <div class="wrap-file">
                <span>File Name: </span>
                <span>{{resource.fileName}}</span>
              </div>
              <section v-if="resource.link">{{resource.link}}</section>
              <span>Description Resource</span>
              <section>{{resource.textarea}}</section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="add-article-title">Add new article</h1>
    <icon name="info-circle" aria-hidden="true" class="add-article-icon-info" data-description=""/>
    <div class="add-article-tooltip">
      <span>Use your keyboard for easily navigate between fields and make selection:</span>
      <ul>
        <li>use <span>TAB</span> to switch from one selector to the next one.</li>
        <li>use <span>UP</span> and <span>DOWN</span> arrows to navigate through suggestions of a selector</li>
        <li>use <span>ENTER</span> to select an option</li>
      </ul>
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
              v-model="selectedValues.title"
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
                  v-model="selectedValues.language"
                  :options="getLanguagesForSelect"
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
                  v-model="selectedValues.contentType"
                  name="Type"
                  data-vv-as='"Type"'
                  :options="getContentTypeForSelect"
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
                  <label class="form-label">Topics</label>
                  <v-select
                  name="Topic"
                  data-vv-as='"Topic"'
                  :options="getTagsForSelect"
                  v-model="selectedValues.tags"
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
                  :options="getCategoriesForSelect"
                  v-model="selectedValues.categories"
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
                  v-model="selectedValues.roles"
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
                  placeholder="Select"
                  :multiple="true"
                  :options="getCompaniesForSelect"
                  v-model="selectedValues.companies"/>
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
            <img id="thumbnailFilePreview" v-if="isThumbnailFileUploaded" src="" />
            <!--<div-->
              <!--v-if="errors.has('Thumbnail')"-->
              <!--class="form-errors">{{ errors.first('Thumbnail') }}-->
            <!--</div>-->
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
              :editorToolbar="editorToolbar"
              name="Content"
              class="article-editor"
              v-model="selectedValues.content" />
            <div
              v-if="errors.has('Content')"
              class="form-errors">{{ errors.first('Content') }}
            </div>
          </section>
          <section class="add-article-section">
            <h2 class="add-article-section__title">Things to consider</h2>
              <v-select
                :debounce="250"
                :on-search="getOptionsThingsToConsider"
                :options="thingsToConsiderOptions"
                :multiple="true"
                v-model="selectedValues.thingsToConsider"
                placeholder="Search..."
              />
          </section>
          <section class="add-article-section">
            <h2 class="add-article-section__title">Things to do</h2>
                <v-select
                  :debounce="250"
                  :on-search="getOptionsThingsToDo"
                  :options="thingsToDoOptions"
                  :multiple="true"
                  v-model="selectedValues.thingsToDo"
                  placeholder="Search..."
                />
          </section>
          <section class="add-article-section" v-if="subForm.type === 'video'">
            <h2 class="add-article-section__title">Article video</h2>
            <!-- .form-elements -->
            <div class="form-elements" v-for="n in addElements.video">
              <div class="control-panel-top" v-if="addElements['video'] > 1">
                <span @click="deleteResourceField('video')">
                  Delete
                  <icon name="times-circle-o" />
                </span>
              </div>
              <!-- .form-element -->
              <div class="form-element">
                <label for="addVideoUrl" class="form-label">Video URL</label>
                <input
                id="addVideoUrl"
                type="text"
                placeholder="Insert video link here"
                class="form-control input-url-video" />
              </div>
              <!-- END:.form-element -->
              <!-- .form-element -->
              <div class="form-element">
                <label for="addTextarea" class="form-label">Transcript for video</label>
                <textarea
                id="addTextarea"
                placeholder="Transcript for video"
                class="form-control input-textarea-video"
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
          <section class="add-article-section" v-if="subForm.type === 'resource'">
            <h2 class="add-article-section__title">Article resources</h2>
            <!-- .form-elements -->
            <div class="form-elements" v-for="n in addElements.resource">
              <div class="control-panel-top"  v-if="addElements['resource'] > 1">
                <span @click="deleteResourceField('resource')">
                  Delete
                  <icon name="times-circle-o" />
                </span>
              </div>
              <!-- .form-group -->
              <div class="form-group">
                <!-- .form-element -->
                <div class="form-element form-element--half">
                  <span class="form-label">Upload resource</span>
                  <label class="form-label form-label--file-resource">
                    <icon name="upload" />
                    <span class="form-label__text">Upload resource</span>
                    <span :id="'uploadedResource_' + n"></span>
                    <input
                    id=""
                    type="file"
                    @change="onResourceFileChange($event.target.value, n)"
                    placeholder="Type in to add title..."
                    class="form-control visually-hidden form-control--file input-file-resource" />
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
                  class="form-control input-url-resource" />
                </div>
                <!-- END:.form-element -->
                <!-- .form-element -->
                <div class="form-element form-element--full">
                  <label for="addTextarea" class="form-label">Transcript for resource</label>
                  <textarea
                  id="addTextarea"
                  placeholder="Transcript for resource"
                  class="form-control input-textarea-resource"
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
          <button type="button" class="action-btn action-btn--preview icon-btn" @click="previewArticle">
            <icon name="eye" />
            <span>Preview Article</span>
          </button>
          <button type="button" class="action-btn action-btn--exit icon-btn" @click="$router.push('/admin/articles-list')">Exit without saving</button>
          <button type="button" class="action-btn action-btn--draft icon-btn" @click="publishArticle(0)">Save as draft</button>
          <button type="submit" class="action-btn action-btn--publish icon-btn" @click.prevent="publishArticle(1)">Publish article</button>
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
import 'vue-awesome/icons/window-close-o'
import FormMessages from '@/components/common/FormMessages'
import ArticleAddData from '@/components/pages/ArticleAddData'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'add-article',
  mixins: [forms],
  data () {
    return {
      selectedValues: {
        title: '',
        content: null,
        description: 'description',
        contentType: null,
        tags: [],
        categories: [],
        roles: [],
        companies: [],
        language: null,
        publishedAt: '2017-08-05 11:45:43',
        thingsToConsider: [],
        thingsToDo: []
      },
      formInfo: {
        title: '',
        thumbnail: null,
        languages: null,
        contentType: null,
        tags: [],
        access: [],
        categories: [],
        companySpecific: null,
        content: ''
      },
      language: ['English (UK)', 'English (US)'],
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
      additionalForms: [
        {
          type: 'input'
        }
      ],
      subForm: {
        type: ''
      },
      disableAPI: false,
      articlePreview: {
        isShown: false,
        mainImg: null,
        resources: []
      },
      thingsToConsiderOptions: [],
      thingsToDoOptions: [],
      editorToolbar: [
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        ['bold', 'italic', 'underline', 'strike', {'color': []}, {'background': []}],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'indent': '-1'}, {'indent': '+1'}],
        ['blockquote', 'code-block', 'image', 'link'],
        [{'font': []}],
        [{'align': []}],
        ['clean']
      ]
    }
  },
  computed: {
    ...mapGetters([
      'types',
      'getTagsForSelect',
      'getCategoriesForSelect',
      'getCompaniesForSelect',
      'getRolesForSelect',
      'getContentTypeForSelect',
      'getLanguagesForSelect'
    ]),
    veeValidateFileUploadRules () {
      return {
        required: false,
        mimes: 'image/*'
      }
    }
  },
  watch: {
    'selectedValues.type' (value) {
      this.sendTypeRequest(value)
    },
    'selectedValues.contentType' (value) {
      this.getSubFormFields(value)
    }
  },
  methods: {
    ...mapActions([
      'getTypes',
      'getCompanies',
      'getRoles',
      'getCategories',
      'getTags',
      'setDataPreviewArticle',
      'setInformationMsg',
      'getLngs'
    ]),
//    sendFormRequest () {
//      this.selectType()
//      this.selectTags()
//      this.selectCategories()
//      this.selectRoles()
//      console.log('formJson', this.formJson)
//      this.$http.post(api.URLS.content, this.formJson, api.headersAuthSettings)
//      .then((res) => { console.log(res) })
//      .catch((err) => { this.submitErrors(err.body.errors) })
//    },
//    addFieldGroup (event) {
//      let elem = {
//        tag: 'input',
//        attrs: {
//          type: 'url',
//          placeholder: 'input value'
//        }
//      }
//      this.additionalFormFields[0].fields.push(elem)
//    },
//    sendTypeRequest (value) {
//      console.log('sendTypeRequest', value)
//    },
    addFormElement (type) {
      this.addElements[type] += 1
    },
    deleteResourceField (type) {
      this.addElements[type] -= 1
    },
    onThumbnailFileChange (e) {
      let self = this
      var input = document.getElementById('uploadThumbnail')
      if (input.files && input.files[0] && input.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
        this.isThumbnailFileUploaded = true
        var reader = new FileReader()
        reader.onload = function (e) {
          var thumbnailFilePreview = document.getElementById('thumbnailFilePreview')
          thumbnailFilePreview.setAttribute('src', e.target.result)
          thumbnailFilePreview.setAttribute('alt', 'thumbnail')
          self.articlePreview.mainImg = e.target.result
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
      this.articlePreview.mainImg = null
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
    publishArticle (status) {
      this.$validator.validateAll()
      if (this.errors.items.length) return
      if (this.disableAPI) return
      let formData = new FormData()
      if (document.getElementById('uploadThumbnail').files.length) {
        formData.append('content[imageFile]', document.getElementById('uploadThumbnail').files[0])
      }
      formData.append('content[title]', this.selectedValues.title)
      formData.append('content[content]', this.selectedValues.content)
      formData.append('content[description]', this.selectedValues.description)
      formData.append('content[contentType]', this.selectedValues.contentType.value)
      if (this.selectedValues.language) {
        formData.append('content[language]', this.selectedValues.language.value)
      }
      formData.append('content[publishedAt]', this.selectedValues.publishedAt)
      formData.append('content[status]', status)
      formData.append('content[isArticle]', 1)
// Add children
      let children = [...this.selectedValues.thingsToConsider, ...this.selectedValues.thingsToDo]
      children.forEach((item, i) => {
        let fieldName = 'content[children][' + i + ']'
        formData.append(fieldName, item.value)
      })
//  Add categories
      this.selectedValues.categories.forEach((category, i) => {
        let fieldName = 'content[categories][' + i + ']'
        formData.append(fieldName, category.value)
      })
//  Add tags
      this.selectedValues.tags.forEach((tag, i) => {
        let fieldName = 'content[tags][' + i + ']'
        formData.append(fieldName, tag.value)
      })
// Add companies
      this.selectedValues.companies.forEach((company, i) => {
        let fieldName = 'content[companies][' + i + ']'
        formData.append(fieldName, company.value)
      })
      this.selectedValues.roles.forEach((role, i) => {
        let fieldName = 'content[roles][' + i + ']'
        formData.append(fieldName, role.value)
      })
      if (this.subForm.type === 'resource') {
        let urls = [...document.getElementsByClassName('input-url-resource')]
        let textareas = [...document.getElementsByClassName('input-textarea-resource')]
        let files = [...document.getElementsByClassName('input-file-resource')]
        if (!urls.length || !textareas.length || !files.length) return
        urls.forEach((url, i) => {
          if (!url.value) return
          formData.append('content[typeValues][' + i + '][link]', url.value)
        })
        textareas.forEach((textarea, i) => {
          if (!textarea.value) return
          formData.append('content[typeValues][' + i + '][textarea]', textarea.value)
        })
        files.forEach((file, i) => {
          if (!file.files[0]) return
          formData.append('content[typeValues][' + i + '][file]', file.files[0])
        })
        console.log(urls, textareas, files)
      }
      if (this.subForm.type === 'video') {
        let urls = [...document.getElementsByClassName('input-url-video')]
        let textareas = [...document.getElementsByClassName('input-textarea-video')]
        if (!urls.length || !textareas.length) return
        urls.forEach((url, i) => {
          if (!url.value) return
          formData.append('content[typeValues][' + i + '][link]', url.value)
        })
        textareas.forEach((textarea, i) => {
          if (!textarea.value) return
          formData.append('content[typeValues][' + i + '][textarea]', textarea.value)
        })
      }
      this.disableAPI = true
      this.$http.post(api.URLS.content, formData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log('publishArticle', res)
          let infMsg
          switch (status) {
            case 0:
              infMsg = 'Article save as draft'
              break
            case 1:
              infMsg = 'Article published'
              break
            case 2:
              infMsg = 'Article archived'
              break
          }
          this.setInformationMsg({text: infMsg, className: 'success'})
          this.$router.push('/admin/article/edit/' + res.body.id)
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
          let infMsg
          switch (status) {
            case 0:
              infMsg = "Article has't saved as draft"
              break
            case 1:
              infMsg = "Article has't published"
              break
            case 2:
              infMsg = "Article has't archived"
              break
          }
          this.setInformationMsg({text: infMsg, className: 'warning'})
        })
    },
    getSubFormFields (val) {
      if (!val) return
      this.$http.get(api.URLS.contentType + val.value, api.headersAuthSettings)
        .then((res) => {
          this.subForm.type = res.body.form.type
          console.log('getSubFormFields', res)
        })
        .catch((err) => console.log(err))
    },
    previewArticle () {
      this.articlePreview.resources = []
      this.articlePreview.isShown = true
      if (this.subForm.type === 'video') {
        let urls = [...document.getElementsByClassName('input-url-video')]
        let textareas = [...document.getElementsByClassName('input-textarea-video')]
        if (!urls.length || !textareas.length) return
        urls.forEach((url, i) => {
          if (!url.value) return
          this.articlePreview.resources.push({link: url.value})
        })
        textareas.forEach((textarea, i) => {
          if (!textarea.value) return
          this.articlePreview.resources[i].textarea = textarea.value
        })
      }
      if (this.subForm.type === 'resource') {
        let urls = [...document.getElementsByClassName('input-url-resource')]
        let textareas = [...document.getElementsByClassName('input-textarea-resource')]
        let files = [...document.getElementsByClassName('input-file-resource')]
        if (!urls.length || !textareas.length || !files.length) return
        textareas.forEach((textarea, i) => {
          this.articlePreview.resources.push({textarea: textarea.value})
        })
        urls.forEach((url, i) => {
          this.articlePreview.resources[i].link = url.value
        })
        files.forEach((file, i) => {
          console.log(file)
          this.articlePreview.resources[i].fileName = file.files[0].name
        })
      }
    },
    changeLinkForPreview (oldLink) {
      let splited = oldLink.split('/')
      return 'https://www.youtube.com/embed/' + splited[splited.length - 1]
    },
    getOptionsThingsToConsider (search, loading) {
      this.getOptionsThingsToSmth('toConsider', {search, loading})
    },
    getOptionsThingsToDo (search, loading) {
      this.getOptionsThingsToSmth('toDo', {search, loading})
    },
    getOptionsThingsToSmth (type, payload) {
      payload.loading(true)
      let urlString = `${api.URLS.search}&search=${payload.search}&isArticle=${type === 'toConsider'}`
      this.$http.get(urlString, api.headersAuthSettings)
        .then((res) => {
          console.log(res)
          let items = res.body.data.items ? res.body.data.items : []
          if (type === 'toDo') {
            this.thingsToDoOptions = items.map(item => {
              return {
                value: item.id,
                label: item.title
              }
            })
          } else {
            this.thingsToConsiderOptions = items.map(item => {
              return {
                value: item.id,
                label: item.title
              }
            })
          }
          payload.loading(false)
        })
        .catch((err) => {
          console.log(err)
          payload.loading(false)
        })
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
    this.getCompanies()
    this.getLngs()
  }
}
</script>

<style src='@/assets/scss/components/add-article.scss' lang='scss' scoped />
