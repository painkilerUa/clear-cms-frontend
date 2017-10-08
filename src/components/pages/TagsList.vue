<template>
  <div>
    <div class="confirmation-popup" v-if="confirmation.isShown">
      <div class="confirmation-popup-inner" :style="confirmation.style">
        <div class="confirmation-popup-inner-caption">
          <span>Are you sure you want to perform this action?</span>
        </div>
        <div class="confirmation-popup-inner-body">
          <span>Please note that by deleting/arhiving/restoring this article you will</span>
        </div>
        <div class="confirmation-popup-inner-controll-panel">
          <button type="button" @click="clearAction">No, cancel</button>
          <button type="button" @click="confirmActionHandler">Yes, proceed</button>
        </div>
      </div>
    </div>
    <div class="wrap-tag-list">
      <h1 class="main-caption">Topics List</h1>
      <div class="tag">
        <div class="tag-list">
          <!--<div class="tag-list-heading"></div>-->
          <div class="tag-list-body">
            <table class="table table-data">
              <thead>
              <tr>
                <th class="cellpadding tag-list-body__head_id table-head-ceil">ID</th>
                <th class="categories-list-search-col text-left tag-list-body__head_search table-head-ceil">
                  <div class="table-search-wrap">
                    <div class="wrap-input">
                      <input
                        v-model="searchString"
                        type="search"
                        class="table-search"
                        placeholder="Search in topics..." />
                    </div>
                    <div class="wrap-search-icon">
                      <icon name="search"></icon>
                    </div>
                  </div>
                </th>
                <th colspan="2" class="cellpadding tag-list-body__head_actions table-head-ceil">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="tag in updatedTags">
                <td class="text-center cellpadding text-center" v-if="tag.type === 'show'">
                  <!--<input type="checkbox" :id="tag.id"/>-->
                  <!--<label :for="tag.id">{{tag.id}}</label>-->
                  {{tag.id}}
                </td>
                <td class="cellpadding" v-if="tag.type === 'show'">{{tag.name}}</td>
                <td class="cellpadding text-center" v-if="tag.type === 'show'">
                  <button
                    type="button"
                    class="table-crud-btn icon-btn"
                    @click="showEditionForm(tag.id)">
                    <icon name="pencil"/>
                    <span class="table-tooltip-edit">Edit</span>
                  </button>
                </td>
                <td class="cellpadding text-center" v-if="tag.type === 'show'">
                  <button
                    type="button"
                    class="table-crud-btn icon-btn"
                    @click="initAction('removeTag', tag.id)">
                    <icon name="times" />
                  </button>
                </td>
                <td colspan="4" v-if="tag.type === 'edit'">
                  <div class="wrap-edit-form">
                    <div class="row">
                      <div class="wrap-title-input">
                        <input type="text" v-model="tag.name">
                      </div>
                      <div class="wrap-desc-textarea">
                        <textarea name="desc-textarea" cols="10" rows="3" v-model="tag.description"></textarea>
                      </div>
                    </div>
                    <div class="wrap-table-control-panel">
                      <button type="button" @click="discardСhanges(tag.id)">Discard changes</button>
                      <button type="button" @click="editTag(tag.id)">Save changes</button>
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tag-add-form">
          <h3>Add new topic</h3>
          <div class="form-elements">
            <div class="form-element">
              <label for="input-tag-name" class="form-label">Topic Name</label>
              <input type="text" id="input-tag-name" class="form-control" placeholder="Write topic name" v-model="newTag.name"/>
            </div>
            <div class="form-element">
              <label for="textarea-tag-desc" class="form-label">Topic description</label>
              <textarea class="form-control" name="category-desc" id="textarea-tag-desc" cols="30" rows="10" v-model="newTag.description"></textarea>
            </div>
          </div>
          <div class="wrap-control-panel">
            <button type="button" class="btn-conf" @click="createTag">Create topic</button>
          </div>
        </div>
      </div>
      <!--<div class="categories-list">-->
        <!--<h2>List with topics</h2>-->
        <!--<div class="categories-list-body">-->
          <!--<table class="table table-data">-->
            <!--<thead>-->
            <!--<tr>-->
              <!--<th class="cellpadding">ID</th>-->
              <!--<th class="categories-list-search-col text-left">-->
                <!--<div class="table-search-wrap">-->
                  <!--<input-->
                    <!--v-model="searchString"-->
                    <!--type="search"-->
                    <!--class="table-search"-->
                    <!--placeholder="Search in topics..." />-->
                <!--</div>-->
              <!--</th>-->
              <!--<th colspan="2" class="cellpadding">Actions</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody>-->
            <!--<tr v-for="tag in updatedTags">-->
              <!--<td class="text-center cellpadding" v-if="tag.type === 'show'">-->
                <!--&lt;!&ndash;<input type="checkbox" :id="tag.id"/>&ndash;&gt;-->
                <!--&lt;!&ndash;<label :for="tag.id">{{tag.id}}</label>&ndash;&gt;-->
                <!--{{tag.id}}-->
              <!--</td>-->
              <!--<td class="cellpadding" v-if="tag.type === 'show'">{{tag.name}}</td>-->
              <!--<td class="cellpadding" v-if="tag.type === 'show'">-->
                <!--<button-->
                  <!--type="button"-->
                  <!--class="table-crud-btn icon-btn"-->
                  <!--@click="showEditionForm(tag.id)">-->
                  <!--<icon name="pencil"/>-->
                <!--</button>-->
              <!--</td>-->
              <!--<td class="cellpadding" v-if="tag.type === 'show'">-->
                <!--<button-->
                  <!--type="button"-->
                  <!--class="table-crud-btn icon-btn"-->
                  <!--@click="initAction('removeTag', tag.id)">-->
                  <!--<icon name="times" />-->
                <!--</button>-->
              <!--</td>-->
              <!--<td colspan="4" v-if="tag.type === 'edit'">-->
                <!--<div class="wrap-edit-form">-->
                  <!--<div class="row">-->
                    <!--<div class="wrap-title-input">-->
                      <!--<input type="text" v-model="tag.name">-->
                    <!--</div>-->
                    <!--<div class="wrap-desc-textarea">-->
                      <!--<textarea name="desc-textarea" cols="10" rows="3" v-model="tag.description"></textarea>-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="wrap-table-control-panel">-->
                    <!--<button type="button" @click="discardСhanges(tag.id)">Discard changes</button>-->
                    <!--<button type="button" @click="editTag(tag.id)">Save changes</button>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</td>-->
            <!--</tr>-->
            <!--</tbody>-->
          <!--</table>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="wrap-add-category-form">-->
        <!--<h3>Add new topic</h3>-->
        <!--<div class="input-grout">-->
          <!--<label for="input-tag-name">Topic Name</label>-->
          <!--<div class="wrap-input">-->
            <!--<input type="text" id="input-tag-name" class="input-category-name" placeholder="Write topic name" v-model="newTag.name"/>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="textarea-group">-->
          <!--<label for="textarea-tag-desc">Topic description</label>-->
          <!--<div class="wrap-textarea">-->
            <!--<textarea name="category-desc" id="textarea-tag-desc" cols="30" rows="10" v-model="newTag.description"></textarea>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="wrap-control-panel">-->
          <!--<button type="button" class="btn-conf" @click="createTag">Create topic</button>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import api from '@/api'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/pencil'
import 'vue-awesome/icons/folder'
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/chevron-up'
import 'vue-awesome/icons/chevron-down'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'tags-list',
  data () {
    return {
      tags: [],
      updatedTags: [],
      confirmation: {
        action: '',
        isShown: false,
        id: null,
        style: {
          top: '100px'
        }
      },
      contentAutoloadInfo: {
//        typeAutoLoad: 'allContent',
        curPage: 1,
        numPages: 1,
        locked: false,
        style: {
          top: '100px'
        }
      },
      newTag: {
        name: '',
        isActive: 1,
        description: ''
//        createdAt: '2017-08-05 11:45:43',
//        updatedAt: '2017-08-05 11:45:43'
      },
      disableAPI: false,
      searchString: ''
    }
  },
  methods: {
    ...mapActions([
      'getTags',
      'setInformationMsg'
    ]),
    search () {
      if (!this.filter.search) {
        this.contentInfo.typeAutoLoad = 'allContent'
        this.fetchAllContentByScroll(1, 20)
        return
      }
      this.contentInfo.typeAutoLoad = 'searchContent'
      this.fetchSearchContent()
    },
    fetchSearchContent () {
      console.log('fech content')
      if (!this.filter.search) return
      let queryString = `${api.URLS.search}`
      Object.keys(this.filter).forEach((item) => {
        let value = this.filter[item]
        if (value && typeof (value) === 'string') {
          queryString += `&search=${value}`
        }
        if (value !== null && typeof (value) === 'object' && value.length) {
          let subString = ''
          value.forEach((it) => {
            subString += `&${item}=${it.value}`
          })
          queryString += subString
        }
      })
      if (this.contentType.length) queryString += '&contentType=' + this.contentType[0].value
      this.$http.get(`${queryString}`, api.headersAuthSettings)
        .then((res) => {
          let resData = res.body.data.items
          if (!resData) {
            this.articles = []
            return
          }
          this.articles = resData
          console.log('fetchContent', res)
        })
        .catch((err) => console.error(err))
    },
    initAction (name, id) {
      this.confirmation.action = name
      this.confirmation.id = id
      this.confirmation.isShown = true
    },
    clearAction () {
      this.confirmation.action = ''
      this.confirmation.isShown = false
      this.confirmation.id = null
    },
    confirmActionHandler () {
      let self = this
      switch (this.confirmation.action) {
        case 'removeTag':
          removeTag(this.confirmation.id)
          break
      }
      function removeTag (id) {
        self.clearAction()
        self.$http.delete(api.URLS.tag + '/' + id, api.headersAuthSettings)
          .then((res) => {
            self.clearAction()
            for (let i = 0; i < self.tags.length; i++) {
              if (self.tags[i].id === id) {
                self.tags.splice(i, 1)
                break
              }
            }
            let infMsg = 'Topic has been successfully removed'
            self.setInformationMsg({text: infMsg, className: 'success'})
          })
          .catch((err) => console.log(err))
      }
    },
    handleScroll (event) {
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight)
      let fullScrolledValue = window.pageYOffset + window.innerHeight

      if (fullScrolledValue > scrollHeight - 200) {
        this.fetchAllContentByScroll(++this.contentAutoloadInfo.curPage, 20)
//        if (!this.contentInfo.locked) {
//          this.contentInfo.locked = true
//          if (this.contentInfo.typeAutoLoad === 'allContent') {
//            this.fetchAllContentByScroll(this.contentInfo.curPage++, 20)
//          }
//        }
      }
    },
    fetchAllContentByScroll (page, limit) {
      if (this.contentAutoloadInfo.locked || this.contentAutoloadInfo.curPage > this.contentAutoloadInfo.numPages) return
      this.contentAutoloadInfo.locked = true
      this.$http.get(api.URLS.tags1 + '?limit=' + limit + '&page=' + page, api.headersAuthSettings)
        .then((res) => {
          this.contentAutoloadInfo.curPage = res.body.current_page_number
          this.contentAutoloadInfo.numPages = Math.ceil(res.body.total_count / limit)
          this.tags = [...this.tags, ...res.body.items]
          this.contentAutoloadInfo.locked = false
          console.log(res)
        })
        .catch((err) => {
          this.contentAutoloadInfo.locked = false
          console.log(err)
        })
    },
    createTag () {
      if (this.disableAPI) return
      if (!this.newTag.name) return
      let formData = new FormData()
      Object.keys(this.newTag).forEach((fieldName) => {
        if (typeof this.newTag[fieldName] === 'string' || typeof this.newTag[fieldName] === 'number') {
          formData.append('tag[' + fieldName + ']', this.newTag[fieldName])
        }
        if (typeof this.newTag[fieldName] === 'object') {
          this.newTag[fieldName].forEach((item, i) => {
            formData.append('tag[' + fieldName + '][' + i + ']', item.value)
          })
        }
      })
      this.disableAPI = true
      this.$http.post(api.URLS.tag, formData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log('createTag', res)
          this.tags.push(res.body)
          this.newTag.name = ''
          this.newTag.description = ''
          let infMsg = 'Topic has been successfully created'
          this.setInformationMsg({text: infMsg, className: 'success'})
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
        })
    },
    showEditionForm (id) {
      for (let tag of this.updatedTags) {
        if (tag.type === 'edit') tag.type = null
        if (tag.id === id && tag.type === null) {
          tag.type = 'edit'
        }
      }
    },
    discardСhanges (id) {
      for (let tag of this.updatedTags) {
        if (tag.id === id && tag.type === 'edit') {
          tag.type = null
        }
      }
    },
    editTag (id) {
      if (this.disableAPI) return
      let tag = this.updatedTags.find((tag) => tag.id === id && tag.type === 'edit')
      let formData = {
        tag: {
          name: tag.name,
          description: tag.description,
          isActive: 1
//          createdAt: '2017-08-05 11:45:43',
//          updatedAt: '2017-08-05 11:45:43'
        }
      }
      this.disableAPI = true
      this.$http.put(api.URLS.tag + '/' + id, formData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log('updateTag', res)
          this.discardСhanges(id)
          for (let i = 0; i < this.updatedTags.length; i++) {
            if (this.updatedTags[i].id === id && this.updatedTags[i].type === 'show') {
              let updatedData = res.body
              updatedData.type = 'show'
              this.updatedTags[i] = updatedData
              break
            }
          }
          let infMsg = 'Topic has been successfully updated'
          this.setInformationMsg({text: infMsg, className: 'success'})
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
        })
    }
  },
  computed: {
    ...mapGetters([
      'getTagsForSelect'
    ]),
    filteredTags () {
      return this.tags.filter((tag) => tag.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1)
    }
  },
  watch: {
    filteredTags: function () {
      let updatedTags = []
      this.filteredTags.forEach((tag, i, arr) => {
        tag.type = 'show'
        updatedTags.push(tag)
        updatedTags.push({
          type: null,
          id: tag.id,
          name: tag.name,
          description: tag.description
        })
      })
      this.updatedTags = updatedTags
    },
    'confirmation.isShown' (value) {
      if (value) {
        this.confirmation.style.top = window.pageYOffset - 100 + 'px'
      }
    }
  },
  mounted () {
    this.fetchAllContentByScroll(1, 20)
    this.getTags()
//    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
//    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style src='@/assets/scss/components/tags-list.scss' lang='scss' scoped />
