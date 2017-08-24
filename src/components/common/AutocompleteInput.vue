<template>
  <div class="ac-wrapper">
    <input 
      class="ac-input" 
      v-model.trim="searchQuery"
      placeholder="Search..."
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
            <img v-if="option.content_type.icon" :src="option.content_type.icon" :alt="option.title" class="ac-thumbnail" />
            <!-- .ac-content -->
            <div class="ac-content">
              <h3 class="ac-title" v-if="option.title">{{option.title}}</h3>
              <div class="ac-description" v-if="option.description">{{option.description}}</div>
            </div>
            <!-- END:.ac-content -->
          </li>
          <li>
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
      'getAccessToken',
      'types',
      'getContentTypeTitles',
      'getContentTypeIdByTitle',
      'tags',
      'getTagTitles',
      'getTagIdByNames'
    ]),
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
        this.fetchContent()
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
      this.$http.get(`${queryString}`, { headers: {'Authorization': `Bearer ${this.getAccessToken}`} })
      .then((res) => {
        let resData = res.body.data
        this.options = resData.items
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