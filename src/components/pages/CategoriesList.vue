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
    <div class="wrap-categories-list">
      <h1>Categories in "Topics"</h1>
      <div class="categories-list">
        <h2>List with categories</h2>
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
                    v-model="searchString"
                    type="search"
                    class="table-search"
                    placeholder="Category name..." />
                </div>
              </th>
              <th>
                <v-select
                  v-model="parent"
                  name="Category"
                  data-vv-as='"Category"'
                  :options="getCategoriesForSelect"
                  v-validate="'required'"
                  placeholder="Parent" />
              </th>
              <th>
                No of articles
              </th>
              <th colspan="2" class="cellpadding">Actions</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(category, i) in updatedCategories">
                <td class="text-center cellpadding" v-if="category.type === 'show'">
                  <input type="checkbox" :id="category.id"/>
                  <label :for="category.id">{{category.id}}</label>
                </td>
                <td class="cellpadding" v-if="category.type === 'show'">{{category.title}}</td>
                <td class="cellpadding" v-if="category.type === 'show'">{{category.parent ? category.parent.title : ''}}</td>
                <td class="cellpadding" v-if="category.type === 'show'">{{category.contents.length}}</td>
                <td class="cellpadding" v-if="category.type === 'show'">
                  <button
                    type="button"
                    class="table-crud-btn icon-btn"
                    @click="showEditionForm(category.id)">
                    <icon name="pencil"/>
                  </button>
                </td>
                <td class="cellpadding" v-if="category.type === 'show'">
                  <button
                    type="button"
                    class="table-crud-btn icon-btn"
                    @click="initAction('removeCategory', category.id)">
                    <icon name="times" />
                  </button>
                </td>
                <td colspan="6" v-if="category.type === 'edit'">
                  <div class="wrap-edit-form">
                    <div class="row">
                      <div class="wrap-title-input">
                        <input type="text" v-model="category.title">
                      </div>
                      <div class="wrap-parent-select">
                        <v-select
                          v-model="category.parent"
                          name="Category"
                          :options="getCategoriesForSelect"
                          placeholder="Parent" />
                      </div>
                      <div class="wrap-desc-textarea">
                        <textarea name="desc-textarea" cols="10" rows="3" v-model="category.description"></textarea>
                      </div>
                    </div>
                    <div class="wrap-table-control-panel">
                      <button type="button" @click="discardСhanges(category.id)">Discard changes</button>
                      <button type="button" @click="editCategory(category.id)">Save changes</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="wrap-add-category-form">
        <h3>Add new category</h3>
        <div class="input-grout">
          <label for="input-category-name">Category Name</label>
          <div class="wrap-input">
            <input type="text" id="input-category-name" class="input-category-name" placeholder="Write category name" v-model="newCategory.title"/>
          </div>
        </div>
        <div class="select-grout">
          <label for="select-parent-category">Parent</label>
          <div class="wrap-select">
            <v-select
              v-model="newCategory.parent"
              name="Category"
              :options="getCategoriesForSelect"
              placeholder="Select parent category (optional)" />
          </div>
        </div>
        <div class="textarea-group">
          <label for="textarea-category-desc">Category description (will not show up in articles)</label>
          <div class="wrap-textarea">
            <textarea name="category-desc" id="textarea-category-desc" cols="30" rows="10" v-model="newCategory.description"></textarea>
          </div>
        </div>
        <div class="wrap-control-panel">
          <button type="button" class="btn-conf" @click="createCategory"> + Create category</button>
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
  name: 'categories-list',
  data () {
    return {
      categories: [],
      updatedCategories: [],
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
        locked: false
      },
      newCategory: {
        title: '',
        isActive: 1,
        description: '',
//        createdAt: '2017-08-05 11:45:43',
//        updatedAt: '2017-08-05 11:45:43',
        parent: ''
      },
      disableAPI: false,
      searchString: '',
      parent: null
    }
  },
  methods: {
    ...mapActions([
      'getCategories',
      'getCategories'
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
            for (let i = 0; i < self.categories.length; i++) {
              if (self.categories[i].id === id) {
                self.categories.splice(i, 1)
                break
              }
            }
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
      this.$http.get(api.URLS.categories1 + '?limit=' + limit + '&page=' + page, api.headersAuthSettings)
        .then((res) => {
          this.contentAutoloadInfo.curPage = res.body.current_page_number
          this.contentAutoloadInfo.numPages = Math.ceil(res.body.total_count / limit)
          this.categories = [...this.categories, ...res.body.items]
          this.contentAutoloadInfo.locked = false
          console.log(res)
        })
        .catch((err) => {
          this.contentAutoloadInfo.locked = false
          console.log(err)
        })
    },
    createCategory () {
      if (this.disableAPI) return
      if (!this.newCategory.title || !this.newCategory.description) return
      let formData = new FormData()
      Object.keys(this.newCategory).forEach((fieldName) => {
        if (typeof this.newCategory[fieldName] === 'string' || typeof this.newCategory[fieldName] === 'number') {
          formData.set('category[' + fieldName + ']', this.newCategory[fieldName])
        }
        if (typeof this.newCategory[fieldName] === 'object' && fieldName !== 'parent') {
          this.newCategory[fieldName].forEach((item, i) => {
            formData.set('category[' + fieldName + '][' + i + ']', item.value)
          })
        }
      })
      if (this.newCategory.parent) {
        formData.set('category[parent]', this.newCategory.parent.value)
      }
      this.disableAPI = true
      this.$http.post(api.URLS.category, formData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log('createCategory', res)
          this.categories.push(res.body)
          this.newCategory.title = ''
          this.newCategory.parent = null
          this.newCategory.description = ''
          alert('Category has been successfully added')
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
        })
    },
    showEditionForm (id) {
      for (let category of this.updatedCategories) {
        if (category.type === 'edit') category.type = null
        if (category.id === id && category.type === null) {
          category.type = 'edit'
        }
      }
    },
    editCategory (id) {
      if (this.disableAPI) return
      let category = this.updatedCategories.find((category) => category.id === id && category.type === 'edit')
      let formData = {
        category: {
          title: category.title,
          description: category.description,
          isActive: 1
//          createdAt: '2017-08-05 11:45:43',
//          updatedAt: '2017-08-05 11:45:43'
        }
      }
      if (category.parent && category.parent !== null) {
        formData.category.parent = category.parent.value
      }
      this.disableAPI = true
      this.$http.put(api.URLS.category + '/' + id, formData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log('updateCategory', res)
          this.discardСhanges(id)
          for (let i = 0; i < this.updatedCategories.length; i++) {
            if (this.updatedCategories[i].id === id && this.updatedCategories[i].type === 'show') {
              let updatedData = res.body
              updatedData.type = 'show'
              this.updatedCategories[i] = updatedData
              break
            }
          }
        })
        .catch((err) => {
          this.disableAPI = false
          console.log(err)
        })
    },
    discardСhanges (id) {
      for (let category of this.updatedCategories) {
        if (category.id === id && category.type === 'edit') {
          category.type = null
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCategoriesTitle',
      'getCategoriesForSelect',
      'getTagsForSelect'
    ]),
    filteredCategories () {
      return this.categories.filter((category) => category.title.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1)
        .filter((category) => this.parent === null || (category.parent && category.parent.id === this.parent.value))
    }
  },
  watch: {
    filteredCategories: function () {
      let updatedCategories = []
      this.filteredCategories.forEach((category, i, arr) => {
        category.type = 'show'
        updatedCategories.push(category)
        updatedCategories.push({
          type: null,
          id: category.id,
          title: category.title,
          parent: category.parent ? {label: category.parent.title, value: category.parent.id} : null,
          description: category.description
        })
      })
      this.updatedCategories = updatedCategories
    },
    'confirmation.isShown' (value) {
      if (value) {
        this.confirmation.style.top = window.pageYOffset - 100 + 'px'
      }
    }
  },
  mounted () {
    this.fetchAllContentByScroll(1, 20)
    this.getCategories()
//    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
//    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style src='@/assets/scss/components/categories-list.scss' lang='scss' scoped />

//TODO: Use updated categories commit it for correct removing
