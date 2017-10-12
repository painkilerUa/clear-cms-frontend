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
      <h1 class="main-caption">Categories in "Topics"</h1>
      <div class="categories">
        <div class="categories-list">
          <div class="categories-list-heading">
            <div class="categories-list-statusbar" v-if="!parent">
              <div class="categories-list-statusbar__contains">
                <span>{{categories.length}} subcategories</span>
              </div>
            </div>
            <div class="categories-list-selected-filters" v-if="parent" :style="statusbar.filter.isHover ? statusbar.filter.style : ''">
              <div class="categories-list-selected-filters-remove-all"
                   @click="removeAllFilters"
                   @mouseover="statusbar.filter.isHover = true"
                   @mouseleave="statusbar.filter.isHover = false"
                   :style="statusbar.filter.isHover ? statusbar.filter.style : ''">
                <span>{{statusbar.filter.isHover ? 'Remove all filters' : 'Aplied filters'}}</span>
              </div>
              <div class="categories-list-selected-filters-body">
                <button
                  type="button"
                  @click="removeSelectedFilters"
                  :class="{'hover-filter-element': isExist(this.parent)}">
                  <span>{{parent.label}}</span>
                  <icon name="times"></icon>
                </button>
              </div>
            </div>
          </div>
          <div class="categories-list-body">
            <table class="table table-data">
              <thead class="categories-list-body__head">
              <tr>
                <th class="cellpadding categories-list-body__head_id table-head-ceil">ID</th>
                <th class="categories-list-search-col text-left categories-list-body__head_search table-head-ceil">
                  <div class="table-search-wrap">
                    <div class="wrap-input">
                      <input
                        v-model="searchString"
                        type="search"
                        class="table-search"
                        placeholder="Category name..." />
                    </div>
                    <div class="wrap-search-icon">
                      <icon name="search"></icon>
                    </div>
                  </div>
                </th>
                <th class="categories-list-body__head_parent-select table-head-ceil table-head-hover"
                    :class="{'active-ceil-head': filerTableHead.selectedCeil === 1}"
                    @mouseover="addHoverElement(getCategoriesForSelect)"
                    @mouseleave="removeHoverElements" >
                  <div class="caption-head" @click="showHideSubMenu(1)">
                    <div class="caption-head-text">
                      <span>Type</span>
                    </div>
                    <div class="caption-head-icon">
                      <span class="active-chevron" v-if="filerTableHead.selectedCeil === 1">
                        <icon
                          name="chevron-up"
                        ></icon>
                      </span>
                      <span class="passive-chevron" v-if="filerTableHead.selectedCeil !== 1">
                        <icon
                          name="chevron-down"
                        ></icon>
                      </span>
                    </div>
                  </div>
                  <div class="wrap-dropdown-table-head"
                       id="sub-menu-1"
                       v-show="filerTableHead.selectedCeil === 1"
                       tabindex="-1"
                       @focusout="filerTableHead.selectedCeil = null">
                  <v-select
                    v-model="parent"
                    name="Category"
                    data-vv-as='"Category"'
                    :options="getCategoriesForSelect"
                    v-validate="'required'"
                    placeholder="Parent" />
                </div>
                </th>
                <th class="categories-list-body__head_count-articles table-head-ceil">
                  No of articles
                </th>
                <th colspan="2" class="cellpadding categories-list-body__head_actions table-head-ceil">Actions</th>
              </tr>
              </thead>
              <tbody class="categories-list-body__body">
              <tr v-for="(category, i) in updatedCategories">
                <td class="text-center cellpadding" v-if="category.type === 'show'">
                  <!--<input type="checkbox" :id="category.id"/>-->
                  <!--<label :for="category.id">{{category.id}}</label>-->
                  {{category.id}}
                </td>
                <td class="cellpadding" v-if="category.type === 'show'">{{category.isChild ? '- ' + category.title : category.title}}</td>
                <td class="cellpadding" v-if="category.type === 'show'">{{category.parent ? category.parent.label : '-'}}</td>
                <td class="cellpadding" v-if="category.type === 'show'">{{category.contents.length}}</td>
                <td class="cellpadding text-center" v-if="category.type === 'show'">
                  <button
                    type="button"
                    class="table-crud-btn icon-btn-m"
                    @click="showEditionForm(category.id)">
                    <icon name="pencil"/>
                    <span class="table-tooltip-edit">Edit</span>
                  </button>
                </td>
                <td class="cellpadding text-center" v-if="category.type === 'show'">
                  <button
                    type="button"
                    class="table-crud-btn icon-btn-m"
                    @click="initAction('removeCategory', category.id)">
                    <icon name="times" />
                  </button>
                </td>
                <td colspan="6" v-if="category.type === 'edit'">
                  <div class="wrap-edit-form">
                    <div class="row-edit-form">
                      <div class="wrap-title-input">
                        <input type="text" v-model="category.title">
                      </div>
                      <div class="wrap-parent-select">
                        <!--<div class="caption-head parent-select-edit" @click="showHideSubMenu(2)">-->
                          <!--<div class="caption-head-text">-->
                            <!--<span>Parent</span>-->
                          <!--</div>-->
                          <!--<div class="caption-head-icon">-->
                            <!--<span class="active-chevron" v-if="filerTableHead.selectedCeil === 2">-->
                              <!--<icon name="chevron-up"></icon>-->
                            <!--</span>-->
                            <!--<span class="passive-chevron" v-if="filerTableHead.selectedCeil !== 2">-->
                              <!--<icon name="chevron-down"></icon>-->
                            <!--</span>-->
                          <!--</div>-->
                        <!--</div>-->
                        <!--<div class="wrap-dropdown-table-head"-->
                             <!--id="sub-menu-2"-->
                             <!--v-show="filerTableHead.selectedCeil === 2"-->
                             <!--tabindex="-1"-->
                             <!--@focusout="filerTableHead.selectedCeil = null">-->
                          <v-select
                          v-model="category.parent"
                          name="Category"
                          :options="getCategoriesForSelect"
                          :searchable = false
                          placeholder="Parent" />
                        <!--</div>-->
                      </div>
                      <div class="wrap-desc-textarea">
                        <textarea name="desc-textarea" cols="10" rows="1" v-model="category.description"></textarea>
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
        <div class="categories-add-form">
          <h3>Add new category</h3>
          <div class="form-elements">
            <div class="form-element">
              <label for="input-category-name" class="form-label">Category Name</label>
              <input type="text" id="input-category-name" class="form-control" placeholder="Write category name" v-model="newCategory.title"/>
            </div>
            <div class="form-element">
              <label for="select-parent-category" class="form-label">Parent</label>
              <div class="form-control-add-category">
                <v-select
                  v-model="newCategory.parent"
                  name="Category"
                  :options="parentCategoriesForSelect"
                  placeholder="Select parent category (optional)"
                  id="select-parent-category" />
              </div>
            </div>
            <div class="form-element">
              <label for="textarea-category-desc" class="form-label-add-category"><span>Category description</span> (will not show up in articles)</label>
              <textarea
                name="category-desc"
                id="textarea-category-desc"
                cols="30"
                rows="5"
                v-model="newCategory.description"
                class="form-control">
              </textarea>
            </div>
          </div>
            <div class="categories-add-form-control-panel">
              <button type="button" class="categories-add-form-control-panel-btn-conf" @click="createCategory">Create category</button>
            </div>
        </div>
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
        parent: ''
      },
      disableAPI: false,
      searchString: '',
      parent: null,
      statusbar: {
        filter: {
          isHover: false,
          style: {
            backgroundColor: '#fffdd8',
            borderColor: '#000'
          }
        }
      },
      hoverElements: [],
      filerTableHead: {
        selectedCeil: null
      }
    }
  },
  methods: {
    ...mapActions([
      'getCategories',
      'setInformationMsg'
    ]),
    search () {
      if (!this.filter.search) {
        this.contentInfo.typeAutoLoad = 'allContent'
        this.fetchAllContentByScroll(1, 200)
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
        self.getCategories()
        self.$http.delete(api.URLS.category + '/' + id, api.headersAuthSettings)
          .then((res) => {
            self.clearAction()
            for (let i = 0; i < self.categories.length; i++) {
              if (self.categories[i].id === id) {
                self.categories.splice(i, 1)
                break
              }
            }
            let infMsg = 'Category has been successfully removed'
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
        this.fetchAllContentByScroll(++this.contentAutoloadInfo.curPage, 200)
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
//          this.categories = [...this.categories, ...res.body.items]
          this.categories = this.expendCategories(res.body.items.filter(item => !item.parent))
          this.contentAutoloadInfo.locked = false
          console.log(res)
        })
        .catch((err) => {
          this.contentAutoloadInfo.locked = false
          console.log(err)
        })
    },
    expendCategories (categories) {
      let result = []
      categories.forEach(item => {
        result.push(item)
        if (item.children.length) {
          item.children.forEach(child => {
            let curChild = child
            curChild.isChild = true
            curChild.parent = {
              label: item.title,
              value: item.id
            }
            result.push(curChild)
          })
        }
      })
      return result
    },
    createCategory () {
      if (this.disableAPI) return
      if (!this.newCategory.title) return
      let formData = new FormData()
      Object.keys(this.newCategory).forEach((fieldName) => {
        if (typeof this.newCategory[fieldName] === 'string' || typeof this.newCategory[fieldName] === 'number') {
          formData.append('category[' + fieldName + ']', this.newCategory[fieldName])
        }
        if (typeof this.newCategory[fieldName] === 'object' && fieldName !== 'parent') {
          this.newCategory[fieldName].forEach((item, i) => {
            formData.append('category[' + fieldName + '][' + i + ']', item.value)
          })
        }
      })
      if (this.newCategory.parent) {
        formData.append('category[parent]', this.newCategory.parent.value)
      }
      this.disableAPI = true
      this.$http.post(api.URLS.category, formData, api.headersAuthSettings)
        .then((res) => {
          this.disableAPI = false
          console.log('createCategory', res)
          this.fetchAllContentByScroll(1, 200)
          this.newCategory.title = ''
          this.newCategory.parent = null
          this.newCategory.description = ''
          this.getCategories()
          let infMsg = 'Category has been successfully created'
          this.setInformationMsg({text: infMsg, className: 'success'})
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
          this.fetchAllContentByScroll(1, 200)
//          for (let i = 0; i < this.updatedCategories.length; i++) {
//            if (this.updatedCategories[i].id === id && this.updatedCategories[i].type === 'show') {
//              let updatedData = res.body
//              updatedData.type = 'show'
//              this.updatedCategories[i] = updatedData
//              break
//            }
//          }
          let infMsg = 'Category has been successfully updated'
          this.setInformationMsg({text: infMsg, className: 'success'})
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
    },
    removeSelectedFilters (filter) {
      this.parent = null
    },
    removeAllFilters () {
      this.parent = null
    },
    addHoverElement (elements) {
      this.hoverElements = elements
    },
    removeHoverElements () {
      this.hoverElements = []
    },
    isExist (element) {
      let el = this.hoverElements.find(item => {
        if ((element.value === item.value || item.value === null) && element.label === item.label) {
          return true
        }
      })
      return !!el
    },
    showHideSubMenu (num) {
      if (!this.filerTableHead.selectedCeil) {
        this.filerTableHead.selectedCeil = num
//        setTimeout(() => {
//          document.getElementById('sub-menu-' + num).focus()
//        })
      } else {
        this.filerTableHead.selectedCeil = null
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCategoriesTitle',
      'getCategoriesForSelect',
      'parentCategoriesForSelect',
      'getTagsForSelect'
    ]),
    filteredCategories () {
      return this.categories.filter((category) => category.title.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1)
        .filter((category) => this.parent === null || (category.parent && category.parent.value === this.parent.value))
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
          parent: category.parent ? {label: category.parent.label, value: category.parent.value} : null,
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
    this.fetchAllContentByScroll(1, 200)
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
