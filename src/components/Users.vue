<template>
  <div class="users">

   <autocomplete-input :options="content" :filters="filtersData" @selected="selectArticle">
     <template slot="item" scope="option">
      <img v-if="option.thumbnail" :src="option.thumbnail" :alt="option.title" class="ac-thumbnail" />
      <!-- .ac-content -->
      <div class="ac-content">
        <h3 class="ac-title" v-if="option.title">{{option.title}}</h3>
        <div class="ac-description" v-if="option.description">{{option.description}}</div>
      </div>
      <!-- END:.ac-content -->
    </template>
   </autocomplete-input>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AutocompleteInput from '@/components/common/AutocompleteInput'

export default {
  name: 'users',
  data () {
    return {
      filtersData: [
        {title: 'Type', value: 'type'},
        {title: 'Topic', value: 'tags'}
      ]
    }
  },
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
  },
  components: {
    AutocompleteInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped />
