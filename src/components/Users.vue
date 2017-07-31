<template>
  <div class="users">
	 <h2>{{users.length}} Users in store</h2>

   <autocomplete-input :options="users" />
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
