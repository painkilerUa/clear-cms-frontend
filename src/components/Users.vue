<template>
  <div class="hello">
	{{users}}

    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est consequatur commodi laboriosam officia assumenda impedit. Reprehenderit saepe, hic, nobis ut, odio ex harum iure rem repellendus voluptatibus cumque id odit.
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'users',
  data () {
    return {
    }
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
