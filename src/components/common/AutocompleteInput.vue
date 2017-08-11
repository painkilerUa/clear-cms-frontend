<template>
  <div class="ac-wrapper">
    <input class="ac-input" 
      v-model.trim="searchQuery"
      placeholder="Search..."
      @input="onInput($event.target.value)"
      @keydown.enter="select"
      @keyup.esc="close"
      @keydown.up="moveUp"
      @keydown.down="moveDown" />
      <!-- .ac-results -->
      <div class="ac-results" v-if="isOpen">
        <!-- .ac-filters -->
        <!-- TODO: add v-on-clickaway="close" -->
        <div class="ac-filters">
          <span class="ac-blocktitle ac-filters-title">Filter</span>
          <!-- .ac-filters-list -->
          <ul class="ac-filters-list">
            <!-- TODO:add v-model to v-selects -->
            <li class="ac-filters-list__item">
              <v-select placeholder="Type" v-model="selectedType" :on-change="selectType" :options="['a', 'b']" />
            </li>
            <li class="ac-filters-list__item">
              <v-select placeholder="Topic" v-model="selectedTags" :multiple="true" :on-change="selectTags" :options="['tag1', 'tag2']" />
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
            @mouseenter="highlightedPosition = index"
            @mousedown="select"
            @keydown.space.enter="select" tabindex="0"> 
            <img v-if="option.content_type.icon" :src="option.content_type.icon" :alt="option.title" class="ac-thumbnail" />
            <!-- .ac-content -->
            <div class="ac-content">
              <h3 class="ac-title" v-if="option.title">{{option.title}}</h3>
              <div class="ac-description" v-if="option.description">{{option.description}}</div>
            </div>
            <!-- END:.ac-content -->
          </li>
          <li v-if="isOpen">
            <button type="button" class="ac-blocktitle ac-more" @click="nextPage">+ See more</button>
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
      serverApiSearchURL: `${api.serverURL}/search?_format=json`,
      searchQuery: '',
      allCount: null,
      isOpen: false,
      page: 1,
      highlightedPosition: 0,
      options: [],
      selectedType: null,
      selectedTags: []
    }
  },
  computed: {
    ...mapGetters([
      'types',
      'getContentTypeTitles',
      'getContentTypeIdByTitle',
      'tags',
      'getTagTitles',
      'getTagIdByNames'
    ]),
    optionsComputed () {
      return this.options
    }
  },
  methods: {
    ...mapActions([
      'getTypes',
      'getTags'
    ]),
    onInput (value) {
      this.isOpen = !!value
      if (value === '') {
        this.close()
      } else {
        this.fetchContent()
      }
    },
    fetchContent () {
      // variables
      let queryString = `${this.serverApiSearchURL}&page=${this.page}`
      let searchQuery = this.searchQuery
      // END:variables
      if (searchQuery.length) {
        queryString += `&search=${searchQuery}`
      }
      if (this.selectedType) {
        queryString += `&contentType=${this.selectedType}`
      }
      if (this.selectedTags.length) {
        queryString += `&tags[]=${this.selectedTags}`
      }
      console.log('q:', queryString)
      this.$http.get(`${queryString}`)
      .then((res) => {
        this.options = res.body.data.items
        this.allCount = res.body.data.count
        console.log('allCount', res.body.data.count)
      })
      .catch((err) => console.error(err))
    },
    nextPage () {
      this.page += 1
      this.fetchContent()
    },
    moveUp () {
      if (!this.isOpen) {
        return
      }
      this.highlightedPosition = this.highlightedPosition - 1 < 0
        ? this.options.length - 1
        : this.highlightedPosition - 1
    },
    moveDown () {
      if (!this.isOpen) {
        return
      }
      this.highlightedPosition = (this.highlightedPosition + 1) % this.options.length
    },
    select () {
      const selectedOption = this.options[this.highlightedPosition]
      this.searchQuery = selectedOption.title
      this.close()
      this.$emit('selected', selectedOption)
    },
    close () {
      this.isOpen = false
      this.page = 1
    },
    selectType (val) {
      this.selectedType = val
      this.fetchContent()
    },
    selectTags (val) {
      this.selectedTags = val
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