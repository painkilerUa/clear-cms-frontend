<template>
  <div class="users">
	{{users.length}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'users',
  data () {
    return {
    }
  },
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
