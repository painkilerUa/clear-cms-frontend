<template>
  <div class="ac-wrapper">
    <input class="ac-input" 
      placeholder="Search..."
      @input.trim="onInput($event.target.value)"
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
    }
  }
}
</script>

<style src="@/assets/scss/components/autocomplete-input.scss" lang="scss" scoped />