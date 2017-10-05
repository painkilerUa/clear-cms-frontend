<template>
  <main class="main">
    <section id="main_picter">
    </section>
    <section id="content">
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-sm-2 button-outer">
            <img class="content-img" src="../../assets/img/main/index/paper.png" alt="paper" />
            <div class="button tablet">Policies and procedures</div>
          </div>
          <div class="col-md-2 col-sm-2  button-outer">
            <img class="content-img" src="../../assets/img/main/index/glass.png" alt="glass" />
            <div class="button">Finding talent</div>
          </div>
          <div class="col-md-2 col-sm-2  button-outer">
            <img class="content-img" src="../../assets/img/main/index/magnifier.png" alt="magnifier" />
            <div class="button">Assessing talent</div>
          </div>
          <div class="col-md-3 col-sm-3  button-outer mobile-block">
            <img class="content-img" src="../../assets/img/main/index/men.png" alt="mens" />
            <div class="button smaller-button">Retaining talent</div>
          </div>
          <div class="col-md-3 col-sm-3 button-outer line">
            <img class="content-img" src="../../assets/img/main/index/question.png" alt="question" />
            <div class="button smaller-button black">Ask an expert</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'index',
  computed: {
  },
  components: {
  }
}
</script>

<style src="@/assets/scss/main/index.scss" lang="scss" scoped/>
