<template>
	<!-- .app-header -->
	<header class="app-header">
		<!-- .app-header-main -->
		<div class="app-header-main">
			<!-- .myContainer -->
			<div class="myContainer">
				<!-- .app-header-main__container -->
				<div class="app-header-main__container">
					<a href="#" class="main-logo">Lloyd's</a>
					<!-- .app-header-description -->
					<div class="app-header-description">
						<p>Powered by <a href="#" class="app-header-description__link">the clear company</a></p>
					</div>
					<!-- END:.app-header-description -->
				</div>
				<!-- END:.app-header-main__container -->
			</div>
			<!-- END:.myContainer -->
		</div>
		<!-- END:.app-header-main -->
		<!-- .app-header-info -->
		<div class="app-header-info">
			<!-- .myContainer -->
			<div class="myContainer">
				<!-- .app-header-info__container -->
				<div class="app-header-info__container">
					<!-- .app-header-login -->
					<div class="app-header-login">
						<a href="#" class="app-header-login__item app-header-login__item--name">User1234</a>
						<a href="#" class="app-header-login__item">Logout</a>
					</div>
					<!-- END:.app-header-login -->
					<!-- .app-header-options -->
					<div class="app-header-options">
						<div class="app-header-options__text">Your accessibility options</div>
					</div>
					<!-- END:.app-header-options -->
				</div>
				<!-- END:.app-header-info__container -->
			</div>
			<!-- END:.myContainer -->
		</div>
		<!-- END:.app-header-info -->
		<!-- .app-header-search -->
		<div class="app-header-search">
			<!-- .myContainer -->
			<div class="myContainer">
			  <!-- autocomplete-input -->
			  <autocomplete-input :options="content" @selected="selectArticle">
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
   			  <!-- END:autocomplete-input -->
			</div>
			<!-- END:.myContainer -->
		</div>
		<!-- END:.app-header-search -->
	</header>
	<!-- END:.app-header -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app-header',
  computed: {
    ...mapGetters([
      'content'
    ])
  },
  methods: {
    ...mapActions([
      'getContent'
    ]),
    selectArticle (article) {
      console.log('article selected', article)
    }
  },
  mounted () {
    this.getContent()
  }
}
</script>

<style src="@/assets/scss/components/app-header.scss" lang="scss" scoped/>