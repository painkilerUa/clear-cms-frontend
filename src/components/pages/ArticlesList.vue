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
    <!-- .articles-list -->
    <div class="articles-list">
      <!-- .articles-list-heading -->
      <div class="articles-list-heading">
        <!-- .articles-list-actions -->
        <div class="articles-list-actions">
          <!-- .articles-list-inputwrap -->
          <div class="articles-list-inputwrap">
            <input type="checkbox" class="articles-list-input" />
          </div>
          <!-- END:.articles-list-inputwrap -->
          <v-select
            placeholder="Bulk action"
            v-model="selectedAction"
            :options="getArticleListActions" />
        </div>
        <!-- END:.articles-list-actions -->
        <!-- .articles-list-statusbar -->
        <div class="articles-list-statusbar">
          <!-- .articles-list-statusbar__contains -->
          <div class="articles-list-statusbar__contains articles-list-statusbar__block">Library contains {{articles.length}} Articles</div>
          <!-- END:.articles-list-statusbar__contains -->
          <!-- .articles-list-statuses -->
          <ul class="articles-list-statuses articles-list-statusbar__block">
            <li class="articles-list-statuses__item status--published">12567 Published</li>
            <li class="articles-list-statuses__item status--archived">12567 Archived</li>
            <li class="articles-list-statuses__item status--draft">12567 Draft</li>
          </ul>
          <!-- END:.articles-list-statuses -->
        </div>
        <!-- END:.articles-list-statusbar -->
        <div class="articles-list-add">
          <router-link
            :to="{name: 'add-article'}"
            class="icon-btn articles-list-add__btn">
            <icon name="plus" />
            <span>Add new article</span>
          </router-link>
        </div>
      </div>
      <!-- END:.articles-list-heading -->
      <!-- .articles-list-body -->
      <div class="articles-list-body">
        <!-- .table table-data -->
        <table class="table table-data">
          <thead>
          <tr>
            <th class="cellpadding">ID</th>
            <th class="articles-list-search-col text-left">
              <div class="table-search-wrap">
                <input
                  v-model="search"
                  @input="mainSearch(1, 20)"
                  type="search"
                  class="table-search"
                  placeholder="Search in articles..." />
              </div>
            </th>
            <th>
              <v-select placeholder="Lang"
                        :options="lngs"/>
            </th>
            <th>
              <v-select placeholder="Type"
                        v-model="contentType"
                        :options="getContentTypeForSelect"
                        :multiple="true"/>
            </th>
            <th>
              <v-select placeholder="Topics"
                        :options="getTagsForSelect"
                        v-model="tags"
                        :multiple="true" />
            </th>
            <th>
              <v-select placeholder="Category"
                        :options="getCategoriesForSelect"
                        v-model="categories"
                        :multiple="true" />
            </th>
            <th>
              <v-select placeholder="Access" />
            </th>
            <th>
              <v-select placeholder="Com spec" />
            </th>
            <th>
              <span>Last Edited</span>
            </th>
            <th>
              <v-select placeholder="Upl/Edit" />
            </th>
            <th>
              <v-select placeholder="Status" />
            </th>
            <th colspan="3" class="cellpadding">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(article, i) in articles">
            <td class="text-center cellpadding">
              <input type="checkbox" :id="article.id"/>
              <label :for="article.id">{{article.id}}</label>
            </td>
            <td class="cellpadding">{{article.title}}</td>
            <td class="cellpadding"></td>
            <td class="cellpadding">{{article.content_type.type}}</td>
            <td class="cellpadding">{{article.tags.length ? article.tags[0].name : ''}}</td>
            <td class="cellpadding">{{article.categories.length ? article.categories[0].title : ''}}</td>
            <td class="cellpadding">Clear assured</td>
            <td class="cellpadding">{{article.companies.length ? article.companies[0].name : ''}}</td>
            <td class="cellpadding">12 hours ago</td>
            <td class="cellpadding">Conan Simpson</td>
            <td class="cellpadding">
              <span class="status status--published">{{getStatus(article.status)}}</span>
            </td>
            <td class="cellpadding">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                @click="editArticle(article.id)">
                <icon name="pencil"/>
              </button>
            </td>
            <td class="cellpadding">
              <button
                type="button"
                class="table-crud-btn icon-btn">
                <icon name="folder" v-if="article.status !== 2 "/>
                <icon name="rotate-right" v-if="article.status === 2" />
              </button>
            </td>
            <td class="cellpadding">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                @click="initAction('removeArticle', article.id, i)">
                <icon name="times" />
              </button>
            </td>
          </tr>
          </tbody>
        </table>
        <!-- END:.table table-data -->
      </div>
      <!-- END:.articles-list-body -->
      <!--<div class="wrap-loading-spiner">-->
        <!--<span>Loading...</span>-->
      <!--</div>-->
    </div>
    <!-- END:.articles-list -->
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
import 'vue-awesome/icons/rotate-right'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'articles-list',
  data () {
    return {
      articles: [],
      getArticleListActions: ['Action 1', 'Action 2', 'Action 3'],
      selectedAction: null,
      lngs: ['English (UK)', 'English (US)'],
      confirmation: {
        action: '',
        isShown: false,
        articleId: null,
        i: null
      },
      contentAutoloadInfo: {
        curPage: 1,
        numPages: 1,
        locked: false
      },
      search: '',
      contentType: [],
      tags: [],
      categories: []
    }
  },
  methods: {
    ...mapActions([
      'getCategories',
      'getCompanies',
      'getRoles'
    ]),
//    search () {
//      if (!this.filter.search) {
//        this.contentInfo.typeAutoLoad = 'allContent'
//        this.fetchAllContentByScroll(1, 20)
//        return
//      }
//      this.contentInfo.typeAutoLoad = 'searchContent'
//      this.fetchSearchContent()
//    },
//    fetchSearchContent () {
//      console.log('fech content')
//      if (!this.filter.search) return
//      let queryString = `${api.URLS.search}`
//      Object.keys(this.filter).forEach((item) => {
//        let value = this.filter[item]
//        if (value && typeof (value) === 'string') {
//          queryString += `&search=${value}`
//        }
//        if (value !== null && typeof (value) === 'object' && value.length) {
//          let subString = ''
//          value.forEach((it) => {
//            subString += `&${item}=${it.value}`
//          })
//          queryString += subString
//        }
//      })
//      if (this.contentType.length) queryString += '&contentType=' + this.contentType[0].value
//      this.$http.get(`${queryString}`, api.headersAuthSettings)
//        .then((res) => {
//          let resData = res.body.data.items
//          if (!resData) {
//            this.articles = []
//            return
//          }
//          this.articles = resData
//          console.log('fetchContent', res)
//        })
//        .catch((err) => console.error(err))
//    },
    initAction (name, id, i) {
      this.confirmation.action = name
      this.confirmation.articleId = id
      this.confirmation.isShown = true
      this.confirmation.i = i
    },
    clearAction () {
      this.confirmation.action = ''
      this.confirmation.isShown = false
      this.confirmation.articleId = null
      this.confirmation.i = null
    },
    confirmActionHandler () {
      let self = this
      switch (this.confirmation.action) {
        case 'removeArticle':
          removeArticle(this.confirmation.articleId, this.confirmation.i)
          break
      }
      function removeArticle (articleId, i) {
        self.clearAction()
        self.$http.delete(api.URLS.content + '/' + articleId, api.headersAuthSettings)
          .then((res) => {
            self.clearAction()
            self.articles.splice(i, 1)
//            for (let i = 0; i < this.articles.length; i++) {
//              if (this.articles[i].id === articleId) {
//                this.articles.slice(i, 1)
//                break
//              }
//            }
            alert('Article has been successfully removed')
          })
          .catch((err) => console.log(err))
      }
    },
    // TODO: Change scrool handler make cur page different for different search typeFdelete
    handleScroll (event) {
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight)
      let fullScrolledValue = window.pageYOffset + window.innerHeight

      if (fullScrolledValue > scrollHeight - 200) {
        if (this.contentAutoloadInfo.locked || this.contentAutoloadInfo.curPage > this.contentAutoloadInfo.numPages) return
        this.contentAutoloadInfo.locked = true
        if (this.search) {
          console.log('Autoload mainSearch')
//          this.mainSearch(++this.contentAutoloadInfo.curPage, 20)
        } else {
          console.log('Autoload searchByParams')
//          this.searchByParams(++this.contentAutoloadInfo.curPage, 20)
        }
      }
    },
//    fetchAllContentByScroll (page, limit) {
//      this.$http.get(api.URLS.content + '?page=' + page + '&limit=' + limit, api.headersAuthSettings)
//        .then((res) => {
//          this.contentInfo.curPage = res.body.current_page_number
//          this.articles = [...this.articles, ...res.body.items]
//          this.contentInfo.locked = false
//          console.log(res)
//        })
//        .catch((err) => {
//          this.contentInfo.locked = false
//          console.log(err)
//        })
//    },
    editArticle (id) {
      this.$router.push({path: `/admin/article/edit/${id}`})
    },
    mainSearch (page, limit) {
      if (!this.search) {
        this.searchByParams(1, 20)
        return
      }
      let subTag = ''
      this.tags.forEach((tag, i) => {
        subTag += `&tags[${i}]=${tag.value}`
      })
      let subCategories = ''
      this.categories.forEach((category, i) => {
        subCategories += `&category[${i}]=${category.value}`
      })
      let subContentType = ''
      if (this.contentType.length) {
        subContentType = `&contentType=${this.contentType[0].value}`
      }
      let urlString = `${api.URLS.search}&search=${this.search + subContentType + subTag + subCategories}&page=${page}&limit=${limit}`
      this.$http.get(urlString, api.headersAuthSettings)
        .then((res) => {
//          this.contentAutoloadInfo.curPage = res.body.current_page_number
          if (page === 1) {
            this.articles = res.body.data.items ? res.body.data.items : []
          } else {
            this.articles = [...this.articles, ...res.body.items]
          }
          this.contentAutoloadInfo.locked = false
          console.log('mainSearch', res)
        })
        .catch((err) => {
          this.contentAutoloadInfo.locked = false
          console.log(err)
        })
    },
    searchByParams (page, limit) {
      let body = {
        contentType: this.contentType.map((item) => item.value),
        tags: this.tags.map((item) => item.value),
        categories: this.categories.map((item) => item.value)
      }
      this.$http.post(api.URLS.contentSearch + '?page=' + page + '&limit=' + limit, body, api.headersAuthSettings)
        .then((res) => {
//          this.contentInfo.curPage = res.body.current_page_number
          if (page === 1) {
            this.articles = res.body.items
          } else {
            this.articles = [...this.articles, ...res.body.items]
          }
//          this.contentInfo.locked = false
          console.log('searchByParams', res)
        })
        .catch((err) => {
//          this.contentInfo.locked = false
          console.log(err)
        })
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
    }
  },
  computed: {
    ...mapGetters([
      'types',
      'getCategoriesTitle',
      'getTagTitles',
      'getContentTypeForSelect',
      'getTagsForSelect',
      'getCategoriesForSelect',
      'getRolesForSelect'
    ])
  },
  watch: {
    contentType () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
    },
    categories () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
    },
    tags () {
      this.search ? this.mainSearch(1, 20) : this.searchByParams(1, 20)
    }
  },
  mounted () {
    this.searchByParams(1, 20)
    this.getCategories()
    this.getCompanies()
    this.getRoles()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style src='@/assets/scss/components/articles-list.scss' lang='scss' scoped />
