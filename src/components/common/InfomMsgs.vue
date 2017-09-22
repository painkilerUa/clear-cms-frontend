<template>
  <div class="inf-msgs" v-if="getInformationMsgs.text" :style="getInformationMsgs.style">
    <span>{{getInformationMsgs.text}}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'inform-msgs',
  computed: {
    ...mapGetters([
      'getInformationMsgs'
    ])
  },
  methods: {
    ...mapActions([
      'setStyleForMsg'
    ])
  },
  watch: {
    'getInformationMsgs.text' (value) {
      console.log('getInformationMsgs has changed', value)
      let top = window.pageYOffset + 100 + 'px'
      this.setStyleForMsg({top: top})
    }
  }
}
</script>

<style src="@/assets/scss/components/inform-msgs.scss" lang="scss" scoped/>
