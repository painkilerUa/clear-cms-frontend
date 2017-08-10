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
            <li class="ac-filters-list__item">
              <v-select v-model="types.selectedItem" placeholder="Type" :on-change="selectType" :options="['foo','bar']" />
            </li>
            <li class="ac-filters-list__item">
              <v-select v-model="tags.selectedItem" placeholder="Topic" :multiple="true" :on-change="selectTags" :options="['foo','bar']" />
            </li>
          </ul>
          <!-- END:.ac-filters-list -->
        </div>
        <!-- END:.ac-filters -->
        <!-- ac-list -->
        <ul
        class="ac-list">
          <li v-for="(option, index) in optionsComputed" 
            :key="option.title"
            data-index="index"
            class="ac-list__item"
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :class="{highlighted: index === highlightedPosition}"
            @mouseenter="highlightedPosition = index"
            @mousedown="select"
            @keydown.space.enter="select" tabindex="0"> 
            <img v-if="option.thumbnail" :src="option.thumbnail" :alt="option.title" class="ac-thumbnail" />
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
import Velocity from 'velocity-animate'
import { directive as onClickaway } from 'vue-clickaway'

export default {
  name: 'autocomplete-input',
  data () {
    return {
      searchQuery: '',
      highlightedPosition: 0,
      options: [],
      isOpen: false,
      types: {
        items: [],
        selectedItem: null
      },
      tags: {
        items: [],
        selectedItems: []
      }
    }
  },
  computed: {
    optionsComputed () {
      return this.options
    }
  },
  methods: {
    onInput (value) {
      this.options = []
      this.$http.get(`${api.serverURL}/search?_format=json&search=${this.searchQuery}`)
      .then((res) => {
        this.isOpen = !!value
        this.options = res.body.data
        console.log(res.body.data)
      })
      .catch((err) => console.error(err))
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
    },
    selectType (val) {
      this.types.selectedItem = val
      console.log('selectedType', this.types.selectedItem)
    },
    selectTags (val) {
      this.tags.selectedItems.push(val)
      console.log('selectedTags', this.types.selectedItems)
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '3.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  },
  directives: {
    onClickaway
  },
  components: {
    Velocity
  },
  mounted () {
  }
}
</script>

<style src="@/assets/scss/components/autocomplete-input.scss" lang="scss" scoped />