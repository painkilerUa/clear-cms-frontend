<template>
  <div class="confirmation-popup" v-if="getConfData.showPopup">
    <div class="confirmation-popup-inner">
      <div class="confirmation-popup-inner-caption">
        <span>Are you sure you want to perform this action?</span>
      </div>
      <div class="confirmation-popup-inner-body">
        <span>Please note that by deleting/arhiving/restoring this article you will</span>
      </div>
      <div class="confirmation-popup-inner-controll-panel">
        <button type="button" @click="clearConfAction">No, cancel</button>
        <button type="button" @click="confCurAction">Yes, proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'conf-popup',
  computed: {
    ...mapGetters([
      'getConfData'
    ])
  },
  methods: {
    ...mapActions([
      'clearConfAction',
      'confCurAction'
    ])
  },
  mounted () {
    console.log('conf popup mounted')
  }
}
</script>

<style src="@/assets/scss/components/conf-popup.scss" lang="scss" scoped/>
