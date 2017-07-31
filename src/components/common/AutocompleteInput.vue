<template>
  <div class="autocomplete-input">
    <p class="control has-icon has-icon-right">
      <input class="input is-large" placeholder="Search..." />
    </p>
    <ul class="options-list">
      <li v-for="option in options">
        {{option}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: []
    }
  }
}
</script>