<template>
  <div class="hello">
	{{users}}
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
      'getUsers'
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
