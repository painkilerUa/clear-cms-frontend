<template>
  <div class="ac-wrapper">
    <input class="ac-input" 
      v-model="keyword"
      placeholder="Search..."
      @input.trim="onInput($event.target.value)"
      @keydown.enter="select"
      @keyup.esc="close"
      @blur="close"
      @keydown.up="moveUp"
      @keydown.down="moveDown"
      />
    <!-- ac-list -->
    <ul class="ac-list" v-if="isOpen">
      <li v-for="(option, index) in optionsFiltered" 
        class="ac-list__item"
        :class="{highlighted: index === highlightedPosition}"
        @mouseenter="highlightedPosition = index"
        @mousedown="select"> 
        <slot name="item" 
          :title="option.title" 
          :description="option.description" 
          :thumbnail="option.thumbnail" />
      </li>
    </ul>
    <!-- END:ac-list -->
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isOpen: true,
      highlightedPosition: 0,
      keyword: ''
    }
  },
  computed: {
    optionsFiltered () {
      const regEx = new RegExp(this.keyword, 'i')
      return this.options.filter(option => option.title.match(regEx))
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
    }
  }
}
</script>

<style src="@/assets/scss/components/autocomplete-input.scss" lang="scss" scoped />