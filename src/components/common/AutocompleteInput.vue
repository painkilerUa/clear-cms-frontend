<template>
  <div class="autocomplete-input">
    <input class="ac-input" placeholder="Search..." />
    <ul class="ac-list" v-if="isOpen">
      <li v-for="option in options">
        <slot name="item" 
          :title="option.title" 
          :description="option.description" 
          :thumbnail="option.thumbnail" />
      </li>
    </ul>
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
      isOpen: false
    }
  }
}
</script>