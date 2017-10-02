<template>
  <div id="spiner" class="wrap-spiner">
  </div>
</template>

<script>
  import Spinner from 'spin'

  export default {
    name: 'app-spiner',
    methods: {
      insertSpiner () {
        let opts = {
          lines: 7,
          length: 20,
          width: 5,
          radius: 16,
          scale: 0.75,
          corners: 1,
          color: '#000',
          opacity: 0.25,
          rotate: 0,
          direction: 1,
          speed: 1,
          trail: 60,
          fps: 20,
          className: 'spinner',
          shadow: false,
          hwaccel: false
        }
        let target = document.getElementById('spiner')
        new Spinner(opts).spin(target)
      }
    },
    mounted () {
      this.insertSpiner()
    }
  }
</script>
<style scoped lang='scss'>
  .wrap-spiner {
    padding: 40px 0;
  }
</style>
