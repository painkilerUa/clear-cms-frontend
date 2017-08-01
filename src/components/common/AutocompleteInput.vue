<template>
  <div class="autocomplete-input">
    <input class="ac-input" placeholder="Search..." />
    <ul class="options-list">
      <li v-for="option in options">
        <slot name="item" 
          :title="option.title" 
          :content="option.description" 
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
  }
}
</script>