<template>
  <div class="ac-wrapper">
    <input class="ac-input" 
      placeholder="Search..."
      @input.trim="onInput($event.target.value)"
      @keyup.enter.trim="isOpen = true"
      @keyup.esc="isOpen = false"
      @blur="isOpen = false"
      @keydown.up="moveUp"
      @keydown.down="moveDown"
      />
    <!-- ac-list -->
    <ul class="ac-list" v-if="isOpen">
      <li v-for="(option, index) in options" 
        class="ac-list__item"
        :class="{highlighted: index === highlightedPosition}"> 
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
      highlightedPosition: 0
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
    }
  }
}
</script>

<style src="@/assets/scss/components/autocomplete-input.scss" lang="scss" scoped />