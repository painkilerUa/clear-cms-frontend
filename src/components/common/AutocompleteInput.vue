<template>
  <div class="autocomplete-input">
    <input class="ac-input" 
      placeholder="Search..."
      @input.trim="onInput($event.target.value)"
      />
    <!-- ac-list -->
    <ul class="ac-list" v-if="isOpen">
      <li v-for="option in options">
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
      isOpen: false
    }
  },
  methods: {
    onInput (value) {
      this.isOpen = !!value
    }
  }
}
</script>