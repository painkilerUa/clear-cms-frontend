<template>
  <div>
    <div class="wrap-confirmation-popup" v-if="confirmation.isShown">
      <div class="confirmation-popup">
        <div class="caption">
          <span>Are you sure you want to perform this action?</span>
        </div>
        <div class="body">
          <span>Please note that by deleting/arhiving/restoring this article you will</span>
        </div>
        <div class="wrap-button">
          <span @click="clearAction">No, cancel</span>
          <span @click="confirmActionHandler">Yes, proceed</span>
        </div>
      </div>
    </div>
    <div class="wrap-categories-list">
      <h1>Tags in "Topic"</h1>
      <div class="categories-list">
        <h2>List with tags</h2>
        <!--<div class="categories-list-actions">-->
          <!--<div class="categories-list-inputwrap">-->
            <!--<input type="checkbox" class="categories-list-input" />-->
          <!--</div>-->
          <!--<v-select-->
            <!--placeholder="Bulk action"-->
            <!--:options="['Action 1', 'Action 2']"-->
            <!--class="select-bulk-action"/>-->
          <!--<span class="categories-statusbar">54 subcategories</span>-->
        <!--</div>-->
        <div class="categories-list-body">
          <table class="table table-data">
            <thead>
            <tr>
              <th class="cellpadding">ID</th>
              <th class="categories-list-search-col text-left">
                <div class="table-search-wrap">
                  <input
                    type="search"
                    class="table-search"
                    placeholder="Search in tags..." />
                </div>
              </th>
              <th colspan="2" class="cellpadding">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="tag in tags">
              <td class="text-center cellpadding">
                <input type="checkbox" :id="tag.id"/>
                <label :for="tag.id">{{tag.id}}</label>
              </td>
              <td class="cellpadding">{{tag.name}}</td>
              <td class="cellpadding">
                <button
                  type="button"
                  class="table-crud-btn icon-btn">
                  <icon name="pencil"/>
                </button>
              </td>
              <td class="cellpadding">
                <button
                  type="button"
                  class="table-crud-btn icon-btn"
                  @click="initAction('removeTag', tag.id)">
                  <icon name="times" />
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="wrap-add-category-form">
        <h3>Add new tag</h3>
        <div class="input-grout">
          <label for="input-tag-name">Tag Name</label>
          <div class="wrap-input">
            <input type="text" id="input-tag-name" class="input-category-name" placeholder="Write tag name" v-model="newTag.name"/>
          </div>
        </div>
        <div class="textarea-group">
          <label for="textarea-tag-desc">Tag description</label>
          <div class="wrap-textarea">
            <textarea name="category-desc" id="textarea-tag-desc" cols="30" rows="10" v-model="newTag.description"></textarea>
          </div>
        </div>
        <div class="wrap-control-panel">
          <button type="button" class="btn-conf" @click="createTag"> + Create tag</button>
        </div>
      </div>

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
  name: 'tags',
  data () {
    return {
      tags: [],
      confirmation: {
        action: '',
        isShown: false,
        id: null
      },
      contentAutoloadInfo: {
//        typeAutoLoad: 'allContent',
        curPage: 1,
        numPages: 1,
        locked: false
      },
      newTag: {
        name: '',
        isActive: 1,
        description: '',
        createdAt: '2017-08-05 11:45:43',
        updatedAt: '2017-08-05 11:45:43'
      }
    }
  },
  methods: {
    ...mapActions([
      'getTags'
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
        case 'removeCategory':
          removeCategory(this.confirmation.id)
          break
      }
      function removeCategory (id) {
        self.clearAction()
        self.$http.delete(api.URLS.category + '/' + id, api.headersAuthSettings)
          .then((res) => {
            self.clearAction()
            alert('Successfully removed')
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
      if (!this.newTag.name || !this.newTag.description) return
      let formData = new FormData()
      Object.keys(this.newTag).forEach((fieldName) => {
        if (typeof this.newTag[fieldName] === 'string' || typeof this.newTag[fieldName] === 'number') {
          formData.set('category[' + fieldName + ']', this.newTag[fieldName])
        }
        if (typeof this.newTag[fieldName] === 'object') {
          this.newTag[fieldName].forEach((item, i) => {
            formData.set('category[' + fieldName + '][' + i + ']', item.value)
          })
        }
      })
      this.$http.post(api.URLS.tag, formData, api.headersAuthSettings)
        .then((res) => {
          console.log('createTag', res)
          alert('Tag has been successfully added')
        })
        .catch((err) => console.log(err))
    }
  },
  computed: {
    ...mapGetters([
      'getTagsForSelect'
    ])
  },
//  watch: {
//  },
  mounted () {
    this.fetchAllContentByScroll(1, 20)
    this.getTags()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style src='@/assets/scss/components/categories-list.scss' lang='scss' scoped />
