<template>
  <div class="autocomplete-input">
    <input class="ac-input" placeholder="Search..." />
    <!-- <ul class="options-list">
      <li v-for="option in options">
        {{option}}
      </li>
    </ul> -->
    <slot name="item" :title="option.title" :description="option.description" :thumbnail="option.thumbnail" />
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>