<template>
  <!-- add-article -->
  <div class="add-article">
    <div class="wrap-preview-article" v-if="articlePreview.isShown">
      <button type="button" class="close-preview-button" @click="articlePreview.isShown = false">
        <icon name="window-close-o"></icon>
      </button>
      <h3>{{article.title}}</h3>
      <div class="wrap-main-content">
        <div class="text-content">
          <div v-html="article.content"></div>
        </div>
        <div class="graphic-content">
          <div class="wrap-main-img" v-if="articlePreview.mainImg !== null">
            <img :src="articlePreview.mainImg" alt="imgPreview">
          </div>
          <div class="wrap-resource">
            <div class="wrap-resource-video" v-if="article.resources.type === 'video'" v-for="resource in article.resources.data">
              <div class="existed-resource-video" v-if="resource.type === 'exist'">
                <h4>Existed video resources</h4>
                <iframe
                  :src="resource.link">
                </iframe>
                <span>Transcript for video</span>
                <section>{{resource.textarea}}</section>
              </div>
              <div class="new-resource-video" v-if="resource.type === 'new' && resource.link.value">
                <h4>New video resources</h4>
                <iframe
                  :src="resource.link.value">
                </iframe>
                <span>Transcript for video</span>
                <section>{{resource.textarea.value}}</section>
              </div>
            </div>
            <div class="wrap-resource" v-if="article.resources.type === 'resource'" v-for="resource in article.resources.data">
              <div class="existed-resource" v-if="resource.type === 'exist'">
                <h4>Existed article resources</h4>
                <div class="wrap-file" v-if="resource.file">
                  <span>File Name: </span>
                  <span>{{resource.file}}</span>
                </div>
                <section v-if="resource.link">{{resource.link}}</section>
                <span>Description Resource</span>
                <section>{{resource.textarea}}</section>
              </div>
              <div class="new-resource" v-if="resource.type === 'new' && (resource.file.name || resource.link.value)">
                <h4>New article resources</h4>
                <div class="wrap-file" v-if="resource.file.name">
                  <span>File Name: </span>
                  <span>{{resource.file.name}}</span>
                </div>
                <section v-if="resource.link.value">{{resource.link.value}}</section>
                <span v-if="resource.textarea.value">Description Resource</span>
                <section>{{resource.textarea.value}}</section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-title">
      <div class="title">
        <h1>{{article.title}}</h1>
        <div class="statusbar">
          <span>{{getStatus(article.status)}}</span>
          <span>{{lastTimeEdited(article)}}</span>
        </div>
      </div>
      <div class="control-panel">
        <div class="wrap-button">
          <button type="button" @click="changeArtStatus">
            <icon name="folder" class="icon-btn-ctr" ></icon>
            <span>
            {{ctrBtnTitle}}
          </span>
          </button>
          <button type="button" @click="deleteArticle" >
            <icon name="remove" class="icon-btn-ctr"></icon>
            <span>
            Delete article
          </span>
          </button>
        </div>
      </div>
    </div>
    <!-- .add-article-wrapper -->
    <form class="add-article-wrapper form" @submit.prevent="submit">
      <section class="add-article-section add-article-section--heading">
        <form-messages :messages="formServerMessages" class="text-left" />
        <h2 class="add-article-section__title">1. TTD details</h2>
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
                    v-model="article.language"
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
                  name="Type"
                  data-vv-as='"Type"'
                  placeholder="Select"
                  disabled="true"
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
            <h2 class="add-article-section__title">2. TTD content</h2>
            <vue-editor
              :editorToolbar="editorToolbar"
              name="Content"
              class="article-editor"
              data-vv-as='"Content"'
              v-model="article.content"/>
            <div
            v-if="errors.has('Content')"
            class="form-errors">{{ errors.first('Content') }}
            </div>
          </section>
          <section class="add-article-section">
            <h2 class="add-article-section__title">3. Things to consider</h2>
            <div class="add-article-section-search-select">
              <v-select
                :debounce="250"
                :on-search="getOptionsThingsToConsider"
                :options="thingsToConsiderOptions"
                :multiple="true"
                v-model="article.thingsToConsider"
                placeholder="Search..."
              >
              </v-select>
            </div>
          </section>
          <section class="edit-article-resources" v-if="article.resources.title">
            <h2 class="add-article-section__title">4. {{article.resources.title}}</h2>
            <div class="wrap-existing-resources">
              <div class="existing-resource" v-for="(resource, i) in article.resources.data" v-if="resource.type === 'exist'">
                <div class="wrap-top-control-panel">
                  <span @click="deleteExistingResource(i)">
                    Delete
                    <icon name="times-circle-o" />
                  </span>
                </div>
                <h3></h3>
                <div class="resource-row" v-if="resource.file">
                  <span class="existed-file-logo">
                    <icon :name="getIconFileName(resource.file)" />
                    <span>{{resource.file}}</span>
                    <button type="button" @click="removeResourceFile(i)">
                      <icon name="remove" />
                    </button>
                  </span>
                </div>
                <div class="resource-row" :class="{'form-group': article.resources.type === 'resource'}">
                  <div class="wrap-add-resource-file form-element-half" v-if="resource.file === ''">
                    <span class="form-label">Upload resource</span>
                    <label class="form-label form-label--file-resource">
                      <icon name="upload" />
                      <span class="form-label__text">Upload resource</span>
                      <span :id="'uploadedResource_' + i"></span>
                      <input type="file"
                             @change="uploadFileExistedResource($event, i)"
                             class="form-control visually-hidden form-control--file input-file-resource">
                    </label>
                  </div>
                  <div class="wrap-add-resource-url" v-if="!resource.file && resource.link !== undefined" :class="{'form-element-half': article.resources.type === 'resource'}">
                    <label :for="'add-resource-url-' + i" class="form-label">{{article.resources.type === 'resource' ? 'Recource URL' : 'Video URL'}}</label>
                    <input type="url" :id="'add-resource-url-' + i" v-model="resource.link" class="form-control">
                  </div>
                </div>
                <div class="resource-row">
                  <label :for="'add-resource-textarea-' + i" class="form-label">{{article.resources.type === 'resource' ? 'Transcript for resource' : 'Transcript for video'}}</label>
                  <textarea name="ext-desc" :id="'add-resource-textarea-' + i" class="form-control input-textarea-resource" cols="30" rows="5" v-model="resource.textarea"></textarea>
                </div>
              </div>
            </div>
            <div class="wrap-add-resource">
              <div class="add-resource" v-for="(newResource, j) in article.resources.data" v-if="newResource.type === 'new'">
                <div class="wrap-top-control-panel">
                  <span @click="deleteNewResource(j)">
                    Delete
                    <icon name="times-circle-o" />
                  </span>
                </div>
                <div class="resource-row" :class="{'form-group': article.resources.type === 'resource'}">
                  <div class="wrap-add-resource-file form-element-half" v-if="newResource.file !== undefined">
                    <span class="form-label">Upload resource</span>
                    <label class="form-label form-label--file-resource">
                      <icon name="upload" />
                      <span class="form-label__text">Upload resource</span>
                      <span :id="'uploadedResource_' + j"></span>
                      <input type="file"
                             @change="uploadFileNewResource($event, j)"
                             class="form-control visually-hidden form-control--file input-file-resource"
                             :placeholder="newResource.file.placeholder">
                    </label>
                  </div>
                  <div class="wrap-add-resource-url" v-if="newResource.link !== undefined" :class="{'form-element-half': article.resources.type === 'resource'}">
                    <label :for="'add-resource-url-' + j" class="form-label">{{newResource.link.title}}</label>
                    <input type="url" :id="'add-resource-url-' + j" class="form-control" :placeholder="newResource.link.placeholder" v-model="article.resources.data[j].link.value">
                  </div>
                </div>
                <div class="resource-row">
                  <label :for="'add-resource-desc-' + j" class="form-label">{{newResource.textarea.title}}</label>
                  <textarea name="text" cols="30" rows="5" class="form-control input-textarea-resource" :id="'add-resource-desc-' + j" :placeholder="newResource.textarea.placeholder" v-model="article.resources.data[j].textarea.value"></textarea>
                </div>
              </div>
              <div class="wrap-bottom-control-panel">
                <button type="button" @click="addResource">Add resource</button>
              </div>
            </div>
          </section>
        </div>
        <!-- END:.add-article-sections -->
        <!-- .add-article-actions -->
        <div class="add-article-actions">
          <button type="button" class="action-btn action-btn--preview icon-btn" @click="previewArticle">
            <icon name="eye" />
            <span>Preview TTD</span>
          </button>
          <button type="button" class="action-btn action-btn--exit icon-btn" @click="$router.push('/admin/articles-list')">Exit / Discard changes</button>
          <button type="button" class="action-btn action-btn--draft icon-btn" @click="editArticle(0)">Save as draft</button>
          <button type="submit" class="action-btn action-btn--publish icon-btn" @click.prevent="editArticle(1)">Save changes & publish</button>
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
import 'vue-awesome/icons/file-pdf-o'
import 'vue-awesome/icons/file-word-o'
import FormMessages from '@/components/common/FormMessages'
import ArticleAddData from '@/components/pages/ArticleAddData'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'edit-todo',
  mixins: [forms],
  data () {
    return {
      articleId: this.$route.params.id,
      article: {
        title: '',
        contentType: [],
        language: {},
        tags: [],
        categories: [],
        companies: [],
        roles: [],
        content: '',
        publishedAt: '2017-08-05 11:45:43',
        status: null,
        resources: {
          title: '',
          data: []
        },
        thingsToConsider: [],
        isArticle: 0
      },
      thingsToConsiderOptions: [],
      srcImagePreview: '',
      languages: ['English (UK)', 'English (US)'],
      tags: [],
      categories: [],
      roles: [],
      isThumbnailFileUploaded: false,
      subForm: {
        type: ''
      },
      formResource: [],
      disableAPI: false,
      editorToolbar: [
        [{'header': [1, 2, 3, 4, 5, 6, false]}],
        ['bold', 'italic', 'underline', 'strike', {'color': []}, {'background': []}],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'indent': '-1'}, {'indent': '+1'}],
        ['blockquote', 'code-block', 'image', 'link'],
        [{'font': []}],
        [{'align': []}],
        ['clean']
      ],
      formData: new FormData(),
      articlePreview: {
        isShown: false,
        mainImg: null,
        resources: []
      },
      flags: {
        hasImg: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'types',
      'getTagsForSelect',
      'getCategoriesForSelect',
      'getRolesForSelect',
      'getCompaniesForSelect',
      'getLanguagesForSelect'
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
    },
    ctrBtnTitle () {
      switch (this.article.status) {
        case 0:
          return 'Publish article'
        case 1:
          return 'Archive article'
        case 2:
          return 'Re-publish article'
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
      'getRoles',
      'setInformationMsg',
      'getLngs'
    ]),
    sendTypeRequest (value) {
      console.log('sendTypeRequest', value)
    },
    addFormElement (type) {
      this.addElements[type] += 1
    },
    onThumbnailFileChange (e) {
      var self = this
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
// Add to formData
        this.formData.append('content[imageFile]', e.target.files[0])
        this.flags.hasImg = true
      }
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
    editArticle (status = this.article.status, redirect) {
      this.$validator.validateAll()
      if (this.errors.items.length) return
      if (this.disableAPI) return
      this.formData.append('content[title]', this.article.title)
      this.formData.append('content[content]', this.article.content ? this.article.content : '')
      this.formData.append('content[description]', this.article.description)
      this.formData.append('content[contentType]', this.article.contentType.value)
      if (this.article.language) {
        this.formData.append('content[language]', this.article.language.value)
      }
      this.formData.append('content[publishedAt]', this.article.publishedAt)
      this.formData.append('content[status]', status)
// Add categories
      this.article.categories.forEach((category, i) => {
        let fieldName = 'content[categories][' + i + ']'
        this.formData.append(fieldName, category.value)
      })
// Add tags
      this.article.tags.forEach((tag, i) => {
        let fieldName = 'content[tags][' + i + ']'
        this.formData.append(fieldName, tag.value)
      })
// Add companies
      this.article.companies.forEach((company, i) => {
        let fieldName = 'content[companies][' + i + ']'
        this.formData.append(fieldName, company.value)
      })
// Add roles
      this.article.roles.forEach((role, i) => {
        let fieldName = 'content[roles][' + i + ']'
        this.formData.append(fieldName, role.value)
      })
// Check if the main image exist, if it does't set empty string
      if (!this.flags.hasImg) {
//        this.formData.appendappend('content[imageFile]', e.target.files[0])
        this.formData.append('content[imageFile]', new Blob(), '')
      }
// Set parametr isArticle false for TTD
      this.formData.append('content[isArticle]', this.article.isArticle)
// Add children
      this.article.thingsToConsider.forEach((item, i) => {
        let fieldName = 'content[children][' + i + ']'
        this.formData.append(fieldName, item.value)
      })
// Add resources
      this.article.resources.data.forEach((resource, i) => {
        if (resource.type === 'exist') {
          if (resource.id) {
            this.formData.append('content[typeValues][' + i + '][file]', resource.id)
          }
          if (resource.link) {
            this.formData.append('content[typeValues][' + i + '][link]', resource.link)
          }
          if (resource.textarea) {
            this.formData.append('content[typeValues][' + i + '][textarea]', resource.textarea)
          }
        } else {
          Object.keys(resource).forEach(key => {
            if (resource[key]['value'] && key !== 'file') {
              this.formData.append('content[typeValues][' + i + '][' + key + ']', resource[key]['value'])
            }
          })
        }
      })
      let newWindow
      if (redirect) {
        newWindow = window.open('', '_blank')
      }
      this.disableAPI = true
      this.$http.post(api.URLS.content + '/' + this.articleId, this.formData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log('editArticle', res)
          this.getArticleById(res.body.id)
          let infMsg
          switch (status) {
            case 0:
              infMsg = 'TTD save as draft'
              break
            case 1:
              infMsg = 'TTD published'
              break
            case 2:
              infMsg = 'TTD archived'
              break
          }
          this.setInformationMsg({text: infMsg, className: 'success'})
          if (redirect) {
            newWindow.location.href = '/content/' + res.body.id
          }
        })
        .catch((err) => {
          this.disableAPI = false
          if (redirect) {
            newWindow.close()
          }
          let infMsg
          switch (status) {
            case 0:
              infMsg = "TTD has't saved as draft"
              break
            case 1:
              infMsg = "TTD has't published"
              break
            case 2:
              infMsg = "TTD has't archived"
              break
          }
          this.setInformationMsg({text: infMsg, className: 'warning'})
          console.log(err)
        })
    },
    uploadFileExistedResource (e, i) {
      let valueTrimmed = e.target.value.replace(/^.*\\/, '')
      document.getElementById('uploadedResource_' + i).innerHTML = valueTrimmed
      if (e.target.files.length) {
        this.formData.append('content[typeValues][' + i + '][file]', e.target.files[0])
      } else {
        this.formData.delete('content[typeValues][' + i + '][file]')
      }
    },
    uploadFileNewResource (e, j) {
      let valueTrimmed = e.target.value.replace(/^.*\\/, '')
      document.getElementById('uploadedResource_' + j).innerHTML = valueTrimmed
      if (e.target.files.length) {
        this.article.resources.data[j].file.name = e.target.files[0].name
        this.formData.append('content[typeValues][' + j + '][file]', e.target.files[0])
      } else {
        this.formData.delete('content[typeValues][' + j + '][file]')
        this.article.resource.data[j].name = null
      }
    },
    editResourceField (fieldName, e, j) {
      console.log(fieldName, e.target.value, j)
//      console.log(this.article.resources.data[j][fieldName]['value'])
      this.article.resources.data[j][fieldName]['value'] = e.target.value
//      console.log(this.article.resources.data[j][fieldName]['value'])
    },
    getArticleById (id) {
      this.$http.get(api.URLS.content + '/' + id, api.headersAuthSettings)
        .then((res) => {
          this.formData = new FormData()
          console.log('getArticleById', res)
          this.article.title = res.body.title
          this.article.description = res.body.description
          this.article.content = res.body.content ? res.body.content : ''
          this.article.status = +res.body.status
          this.article.updated_at = res.body.updated_at
          this.article.user = res.body.user

          this.article.contentType = {
            label: res.body.content_type.type,
            value: res.body.content_type.id
          }
// get language
          if (res.body.language) {
            this.article.language = {
              label: res.body.language.name,
              value: res.body.language.id
            }
          } else {
            this.article.language = null
          }
          this.article.tags = []
          res.body.tags.forEach((tag) => {
            this.article.tags.push({
              label: tag.name,
              value: tag.id
            })
          })
          this.article.categories = []
          res.body.categories.forEach((category) => {
            this.article.categories.push({
              label: category.title,
              value: category.id
            })
          })
          this.article.companies = []
          res.body.companies.forEach((company) => {
            this.article.companies.push({
              label: company.name,
              value: company.id
            })
          })
          this.article.roles = []
          res.body.roles.forEach((role) => {
            this.article.roles.push({
              label: role.name,
              value: role.id
            })
          })
// Add image
          this.isThumbnailFileUploaded = !!res.body.image_name
// Image preview
          this.srcImagePreview = api.staticServerURL + res.body.image_path
          if (res.body.image_name) {
            this.articlePreview.mainImg = api.staticServerURL + res.body.image_path
          }
// Add thingsToConsider
          let thingsToConsider = res.body.children ? res.body.children : []
          this.article.thingsToConsider = thingsToConsider.map(item => {
            return {
              value: item.id,
              label: item.title
            }
          })
// Add resources
          this.article.resources = {title: '', data: []}
          if (res.body.formResource) {
            Object.keys(res.body.formResource).forEach(key => {
              res.body.formResource[key].type = 'exist'
              this.article.resources.data.push(res.body.formResource[key])
            })
          }
          if (res.body.content_type.form.form) {
            let resource = {type: 'new'}
            Object.keys(res.body.content_type.form.form).forEach((key) => {
              let field = res.body.content_type.form.form[key]
              field.value = ''
              resource[key] = field
            })
            this.article.resources.data.push(resource)
            this.article.resources.title = res.body.content_type.form.comment.title
            this.article.resources.type = res.body.content_type.form.type
          }
          console.log('getArticleById', res)
        })
        .catch((err) => console.log(err))
    },
    addResource () {
      let resource = this.article.resources.data[this.article.resources.data.length - 1]
      console.log(resource)
      let newResource = {type: 'new'}
      Object.keys(resource).forEach((key) => {
        let fieldName = {}
        if (key === 'type') return
        Object.keys(resource[key]).forEach((k) => {
          if (k === 'value') {
            fieldName[k] = ''
          } else {
            fieldName[k] = resource[key][k]
          }
        })
        newResource[key] = fieldName
      })
      this.article.resources.data.push(newResource)
    },
    getOptionsThingsToConsider (search, loading) {
      loading(true)
      let urlString = `${api.URLS.search}&search=${search}`
      this.$http.get(urlString, api.headersAuthSettings)
        .then((res) => {
          console.log(res)
          let items = res.body.data.items ? res.body.data.items : []
          this.thingsToConsiderOptions = items.map(item => {
            return {
              value: item.id,
              label: item.title
            }
          })
          loading(false)
        })
        .catch((err) => {
          console.log(err)
          loading(false)
        })
    },
    deleteExistingResource (i) {
      this.article.resources.data.splice(i, 1)
    },
    deleteNewResource (i) {
      this.article.resources.data.splice(i, 1)
    },
    removeResourceFile (i) {
      this.article.resources.data[i].file = ''
      this.article.resources.data[i].id = ''
    },
    previewArticle () {
      this.$validator.validateAll()
      if (this.errors.items.length) return
      this.editArticle(0, true)
//      this.articlePreview.resources = []
//      this.articlePreview.isShown = true
    },
    changeArtStatus () {
      let newStatus
      switch (this.article.status) {
        case 0:
          newStatus = 1
          break
        case 1:
          newStatus = 2
          break
        case 2:
          newStatus = 1
          break
      }
      this.editArticle(newStatus)
    },
    deleteArticle () {
      if (this.disableAPI) return
      this.$http.delete(api.URLS.content + '/' + this.articleId, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          this.$router.push('/admin/todo-list')
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
        })
    },
    getIconFileName (fileName) {
      switch (fileName.split('.')[1]) {
        case 'pdf':
          return 'file-pdf-o'
        case 'doc':
          return 'file-word-o'
      }
    },
    getStatus (st) {
      switch (st) {
        case 0:
          return 'Draft'
        case 1:
          return 'Published'
        case 2:
          return 'Archived'
        default:
          return ''
      }
    },
    lastTimeEdited (article) {
      if (!article.updated_at) return
      let string = 'Last edited '
      let updatedAt = new Date(article.updated_at)
      let now = new Date()
      let difference = Math.floor((+now - +updatedAt) / (1000 * 60 * 60))
      if (difference < 1) {
        string += 'less than 1 hour ago'
      } else if (difference >= 1 && difference < 24) {
        string += difference + ' hours ago'
      } else {
        string += this.convertDate(article.updated_at, '.')
      }
      string += ' by ' + article.user.username
      return string
    },
    convertDate (payload, delimetr) {
      if (!payload) return
      let date = new Date(payload)
      let fullYear = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      function toDoubleDigit (num) {
        return num.toString().length < 2 ? '0' + num : num.toString()
      }
      return toDoubleDigit(day) + delimetr + toDoubleDigit(month) + delimetr + fullYear
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
    this.getLngs()
  }
}
</script>

<style src='@/assets/scss/components/edit-article.scss' lang='scss' scoped />
