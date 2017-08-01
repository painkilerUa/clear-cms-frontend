<template>
  <div class="users">
	 <h2>{{users.length}} Users in store</h2>

   <autocomplete-input :options="users">
     <template slot="item" scope="option">
      <!-- ac-article -->
      <article class="ac-article">
        <img v-if="option.thumbnail" :src="option.thumbnail" alt="option.title" />
        <h3 class="ac-title">{{option.title}}</h3>
        <div class="ac-description">{{option.description}}</div>
      </article>
      <!-- END:ac-article -->
    </template>
   </autocomplete-input>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AutocompleteInput from '@/components/common/AutocompleteInput'

export default {
  name: 'users',
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'getUsers'
    ])
  },
  mounted () {
    this.getUsers()
  },
  components: {
    AutocompleteInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped />
