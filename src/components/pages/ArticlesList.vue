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
                  v-model="filter.search"
                  @input="search"
                  type="search"
                  class="table-search"
                  placeholder="Search in articles..." />
              </div>
            </th>
            <th>
              <v-select placeholder="Lang"
                        v-model="filter.lng"
                        :options="lngs"/>
            </th>
            <th>
              <v-select placeholder="Type"
                        v-model="contentType"
                        :options="getContentTypeForSelect"
                        :multiple="true"/>
            </th>
            <th>
              <v-select placeholder="Topic"
                        :options="getTagsForSelect"
                        v-model="filter.tags"
                        :multiple="true" />
            </th>
            <th>
              <v-select placeholder="Category"
                        :options="getCategoriesForSelect"
                        v-model="filter.category"
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
          <tr v-for="article in articles">
            <td class="text-center cellpadding">
              <input type="checkbox" :id="article.id"/>
              <label :for="article.id">{{article.id}}</label>
            </td>
            <td class="cellpadding">{{article.content}}</td>
            <td class="cellpadding"></td>
            <td class="cellpadding">{{article.content_type.type}}</td>
            <td class="cellpadding">{{}}</td>
            <td class="cellpadding">Category lor..</td>
            <td class="cellpadding">Clear assured</td>
            <td class="cellpadding">Lorem ipsum.</td>
            <td class="cellpadding">12 hours ago</td>
            <td class="cellpadding">Conan Simpson</td>
            <td class="cellpadding">
              <span class="status status--published">Published</span>
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
                <icon name="folder"/>
              </button>
            </td>
            <td class="cellpadding">
              <button
                type="button"
                class="table-crud-btn icon-btn"
                @click="initAction('removeArticle', article.id)">
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'articles-list',
  data () {
    return {
      articles: [],
      getArticleListActions: ['Action 1', 'Action 2', 'Action 3'],
      selectedAction: null,
      lngs: ['English (UK)', 'English (US)'],
      tags: [],
      filter: {
        search: '',
        lng: null,
        contentType: [],
        tags: [],
        category: [],
        access: []
      },
      confirmation: {
        action: '',
        isShown: false,
        articleId: null
      },
      contentInfo: {
        typeAutoLoad: 'allContent',
        curPage: 1,
        numPages: 1,
        locked: false
      },
      contentType: []
    }
  },
  methods: {
    ...mapActions([
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
      this.confirmation.articleId = id
      this.confirmation.isShown = true
    },
    clearAction () {
      this.confirmation.action = ''
      this.confirmation.isShown = false
      this.confirmation.articleId = null
    },
    confirmActionHandler () {
      let self = this
      switch (this.confirmation.action) {
        case 'removeArticle':
          removeArticle(this.confirmation.articleId)
          break
      }
      function removeArticle (articleId) {
        self.clearAction()
        self.$http.delete(api.URLS.content + '/' + articleId, api.headersAuthSettings)
          .then((res) => {
            self.clearAction()
            alert('Article has been successfully removed')
          })
          .catch((err) => console.log(err))
      }
    },
    handleScroll (event) {
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight)
      let scrolledValue = window.pageYOffset + window.innerHeight

      if (scrolledValue > scrollHeight - 300) {
        if (!this.contentInfo.locked) {
          this.contentInfo.locked = true
          if (this.contentInfo.typeAutoLoad === 'allContent') {
            this.fetchAllContentByScroll(this.contentInfo.curPage++, 20)
          }
        }
      }
    },
    fetchAllContentByScroll (page, limit) {
      this.$http.get(api.URLS.content + '?page=' + page + '&limit=' + limit, api.headersAuthSettings)
        .then((res) => {
          this.contentInfo.curPage = res.body.current_page_number
          this.articles = [...this.articles, ...res.body.items]
          this.contentInfo.locked = false
          console.log(res)
        })
        .catch((err) => {
          this.contentInfo.locked = false
          console.log(err)
        })
    },
    editArticle (id) {
      this.$router.push({path: `/admin/article/edit/${id}`})
    }
  },
  computed: {
    ...mapGetters([
      'types',
      'getCategoriesTitle',
      'getTagTitles',
      'getContentTypeForSelect',
      'getTagsForSelect',
      'getCategoriesForSelect'
    ])
  },
  watch: {
    contentType: function () {
      this.search()
    }
  },
  mounted () {
    this.fetchAllContentByScroll(1, 20)
    this.getCategories()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style src='@/assets/scss/components/articles-list.scss' lang='scss' scoped />
