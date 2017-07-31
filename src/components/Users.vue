<template>
  <div class="users">
	 <h2>{{users.length}} Users in store</h2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped />
