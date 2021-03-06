<template>
  <div class="ac-wrapper">
    <input class="ac-input" 
      v-model.trim="keyword"
      placeholder="Search..."
      @input="onInput($event.target.value)"
      @keydown.enter="select"
      @keyup.esc="close"
      @blur.esc="close"
      @keydown.up="moveUp"
      @keydown.down="moveDown" />
      <!-- .ac-results -->
      <div class="ac-results" v-if="isOpen">
        <!-- .ac-filters -->
        <div class="ac-filters">
          <span class="ac-blocktitle ac-filters-title">Filter</span>
          <!-- .ac-filters-list -->
          <ul class="ac-filters-list">
            <li class="ac-filters-list__item" v-for="filter in filters">
             <v-select v-model="filter.selected" multiple="true" :placeholder="filter.title" :options="['foo','bar']" />
            </li>
          </ul>
          <!-- END:.ac-filters-list -->
        </div>
        <!-- END:.ac-filters -->
        <!-- ac-list -->
        <transition-group
        tag="ul"
        name="staggered-fade"
        class="ac-list">
          <li v-for="(option, index) in optionsFilteredLimited" 
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
            <slot name="item" 
              :title="option.title" 
              :description="option.description" 
              :thumbnail="option.thumbnail" />
          </li>
          <li :key="optionsLeft.length" v-if="optionsLeft.length">
            <button type="button" class="ac-blocktitle ac-more" @mousedown="addLeftOptions" @keydown.space.enter="addLeftOptions">+ See more</button>
          </li>
        </transition-group>
        <!-- END:ac-list -->
      </div>
      <!-- END:.ac-results -->
  </div>
  <!-- END:ac-wrapper -->
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    limit: {
      type: Number,
      default: 5
    },
    filters: {
      type: Array,
      default: () => [
        {
          title: 'Type',
          prop: 'type',
          selected: null
        },
        {
          title: 'Topic',
          prop: 'tags',
          selected: null
        }
      ]
    }
  },
  data () {
    return {
      isOpen: true,
      selectedType: null,
      limitToShow: this.limit,
      optionsToShow: this.options,
      selectedFilter: null,
      optionsLeftShow: this.options,
      highlightedPosition: 0,
      keyword: ''
    }
  },
  computed: {
    optionsFiltered () {
      const regEx = new RegExp(this.keyword, 'i')
      return this.options.filter(option => option.title.match(regEx))
    },
    optionsFilteredLimited () {
      this.optionsToShow = this.optionsFiltered.slice(0, this.limitToShow).sort((a, b) => a[this.selectedFilter] < b[this.selectedFilter] ? -1 : (a[this.selectedFilter] > b[this.selectedFilter]) ? 1 : 0)
      return this.optionsToShow
    },
    optionsLeft () {
      this.optionsLeftShow = this.optionsFiltered.filter(option => this.optionsFilteredLimited.indexOf(option) === -1)
      return this.optionsLeftShow
    }
  },
  methods: {
    onInput (value) {
      this.isOpen = !!value
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
      this.keyword = selectedOption.title
      this.close()
      this.$emit('selected', selectedOption)
    },
    close () {
      this.isOpen = false
    },
    addLeftOptions () {
      this.limitToShow += 2
      this.optionsToShow.concat(this.optionsLeftShow)
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
  components: {
    Velocity
  }
}
</script>

<style src="@/assets/scss/components/autocomplete-input.scss" lang="scss" scoped />