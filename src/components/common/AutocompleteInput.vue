<template>
  <div class="ac-wrapper">
    <input
      class="ac-input"
      v-model.trim="searchQuery"
      placeholder="Search"
      @input="onInput($event.target.value)"
      @keyup.esc="close"/>
      <!-- .ac-results -->
      <!-- TODO: add v-on-clickaway="close" -->
      <div class="ac-results" v-if="isOpen">
        <!-- .ac-filters -->
        <div class="ac-filters">
          <span class="ac-blocktitle ac-filters-title">Filter</span>
          <!-- .ac-filters-list -->
          <ul class="ac-filters-list">
            <!-- TODO:add v-model to v-selects -->
            <li class="ac-filters-list__item">
              <v-select placeholder="Type" value.sync="selectedType" :on-change="selectType" :options="getContentTypeTitles" />
            </li>
            <li class="ac-filters-list__item">
              <v-select placeholder="Topic" value.sync="selectedTags" :multiple="true" :on-change="selectTags" :options="getTagTitles" />
            </li>
          </ul>
          <!-- END:.ac-filters-list -->
        </div>
        <!-- END:.ac-filters -->
        <!-- ac-list -->
        <ul
        class="ac-list">
          <li v-for="(option, index) in optionsComputed"
            class="ac-list__item"
            :class="{highlighted: index === highlightedPosition}"
            @click="select(option.id)"
            @keydown.space.enter="select(option.id)"
            @mouseenter="highlightedPosition = index"
            tabindex="0">
            <!--<img v-if="option.content_type.icon" :src="option.content_type.icon" :alt="option.title" class="ac-thumbnail" />-->
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="25" viewBox="0 0 26 25">
              <defs>
                <path id="a" d="M25.407 0v24.561H0V0z"/>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <mask id="b" fill="#fff">
                  <use xlink:href="#a"/>
                </mask>
                <path fill="#9B9B9B" d="M24.53 21.42h-9.525v-2.285h7.504v-1.142h-7.504v-1.428h7.504v-1.143h-7.504v-1.428h7.504v-1.142h-7.504v-1.428h7.504v-1.142h-7.504V8.854h7.504V7.71h-7.504V6.283h7.504V5.14h-7.504v-2h9.525V21.42zm-14.9-5.258c-.482.248-1.204-.012-1.775.028-.384-1.89-.832-3.77-1.175-5.669-.338 1.845-.776 3.673-1.163 5.507-.555-.029-1.111-.063-1.669-.1-.479-2.513-1.042-5.01-1.489-7.528.493-.023.99-.043 1.484-.06.297 1.819.635 3.63.894 5.452.408-1.868.824-3.736 1.227-5.604.549-.031 1.097-.054 1.645-.083a352.41 352.41 0 0 0 1.193 5.772c.326-1.982.687-3.958 1.036-5.938.577-.02 1.154-.05 1.729-.085-.653 2.767-1.224 5.558-1.937 8.308zm15.749-12.77c.06-.65-.457-1.156-1.115-1.09-3.085-.049-6.171 0-9.26-.017V0H13.28C8.854.78 4.426 1.525 0 2.29c0 6.66-.003 13.324 0 19.987 4.402.762 8.807 1.49 13.2 2.284h1.804v-2.284c2.889 0 5.775-.006 8.665.008.49-.023 1.036.014 1.457-.283.338-.51.252-1.15.28-1.727-.04-5.627.02-11.256-.028-16.882z" mask="url(#b)"/>
              </g>
            </svg>
            <!-- .ac-content -->
            <div class="ac-content">
              <span class="ac-title" v-if="option.title">{{option.title}}</span>
              <!--<div class="ac-description" v-if="option.content">{{option.content}}</div>-->
            </div>
            <!-- END:.ac-content -->
          </li>
          <li >
            <button type="button" class="ac-blocktitle ac-more">+ See more</button>
          </li>
        </ul>
        <!-- END:ac-list -->
      </div>
      <!-- END:.ac-results -->
  </div>
  <!-- END:ac-wrapper -->
</template>

<script>
import api from '@/api'
import { mapGetters, mapActions } from 'vuex'
import { directive as onClickaway } from 'vue-clickaway'

export default {
  name: 'autocomplete-input',
  data () {
    return {
      searchQuery: '',
      isOpen: false,
      page: 1,
      limit: 6,
      highlightedPosition: 0,
      options: [],
      selectedType: null,
      selectedTags: []
    }
  },
  computed: {
    ...mapGetters([
      'getIsLoggedIn',
      'getAccessToken',
      'types',
      'getContentTypeTitles',
      'getContentTypeIdByTitle',
      'tags',
      'getTagTitles',
      'getTagIdByNames'
    ]),
    optionsComputed () {
      let options = this.options.map(option => {
        let cutTitle = option.title.split(' ').splice(0, 9).join(' ') + '...'
        return {
          id: option.id,
          title: cutTitle
        }
      })
      return options
    },
    tokenComputed () {
      return localStorage.getItem('token')
    }
  },
  methods: {
    ...mapActions([
      'getTypes',
      'getTags'
    ]),
    onInput (value) {
      this.open(value)
      if (value === '') {
        this.close()
      } else {
        if (this.getIsLoggedIn) {
          console.log(this.$route.path)
          if (this.$route.path === '/') {
            this.fetchContent()
          } else {
          }
        }
      }
    },
    clear () {
      this.searchQuery = ''
    },
    fetchContent () {
      // variables
      let queryString = `${api.URLS.search}&page=${this.page}`
      let searchQuery = this.searchQuery
      // END:variables
      if (searchQuery.length) {
        queryString += `&search=${searchQuery}`
      }
      if (this.selectedType) {
        queryString += `&contentType=${this.selectedType}`
      }
      if (this.selectedTags.length) {
        this.selectedTags.forEach(function (el, index) {
          queryString += `&tags[]=${el}`
        })
      }
      this.$http.get(`${queryString}`, api.headersAuthSettings)
      .then((res) => {
        let resData = res.body.data
        this.options = resData.items ? resData.items : []
        console.log(res)
        console.log('queryString', queryString)
      })
      .catch((err) => console.error(err))
    },
    select (id) {
      this.close()
      this.clear()
      this.$router.push({name: 'content', params: {id: id}})
    },
    open (value) {
      this.isOpen = !!value
    },
    close () {
      this.isOpen = false
      this.page = 1
    },
    selectType (val) {
      if (val) {
        this.selectedType = this.getContentTypeIdByTitle(val)
      } else {
        this.selectedType = null
      }
      this.fetchContent()
    },
    selectTags (val) {
      if (val) {
        this.selectedTags = this.getTagIdByNames(val)
      } else {
        this.selectedTags = []
      }
      this.fetchContent()
    }
  },
  directives: {
    onClickaway
  },
  mounted () {
    this.getTypes()
    this.getTags()
  }
}
</script>

<style src="@/assets/scss/components/autocomplete-input.scss" lang="scss" scoped />
