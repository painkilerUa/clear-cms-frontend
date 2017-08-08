<template>
  <div class="users">

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'users',
  computed: {
    ...mapGetters([
      'content',
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'getContent',
      'getUsers'
    ]),
    selectArticle (article) {
      console.log('article selected', article)
    }
  },
  mounted () {
    this.getContent()
    this.getUsers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped />
