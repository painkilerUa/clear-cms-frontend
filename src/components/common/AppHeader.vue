<template>
	<!-- .app-header -->
	<header class="app-header">
		<!-- .app-header-main -->
		<div class="app-header-main">
			<!-- .myContainer -->
			<div class="myContainer">
				<!-- .app-header-main__container -->
				<div class="app-header-main__container">
					<a href="/" class="main-logo" tabindex="-1">Lloyd's</a>
					<!-- .app-header-description -->
					<div class="app-header-description">
						<p>Powered by <a href="#" class="app-header-description__link" tabindex="-1">the clear company</a></p>
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
						<template v-if="getIsLoggedIn">
							<template v-if="getUserRole === 'Admin'">
								<router-link
								:to="{name: 'admin'}"
								class="app-header-login__item app-header-login__item--name"
								tabindex="-1"
								v-if="getUsername">{{getUsername}}</router-link>
							</template>
							<template v-else>
								{{getUsername}}
							</template>
							<a href="#" class="app-header-login__item" tabindex="-1" @click.prevent="authLogout">Logout</a>
						</template>
						<template v-else>
							<router-link
							:to="{name: 'login'}"
							class="app-header-login__item"
							tabindex="-1">Login</router-link>
						</template>
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
			  <autocomplete-input />
			</div>
			<!-- END:.myContainer -->
		</div>
		<!-- END:.app-header-search -->
	</header>
	<!-- END:.app-header -->
</template>

<script>
import api from '@/api'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app-header',
  computed: {
    ...mapGetters([
      'getIsLoggedIn',
      'getUsername',
      'getUserRole'
    ])
  },
  methods: {
    ...mapActions([
      'authLogout'
    ])
  },
  mounted () {
    this.$http.get(api.URLS.userRole)
    .then((res) => {
      let userRole = res.body[0]
      this.$store.commit('authLoginSetUserRole', userRole)
      console.log(res)
    })
    .catch((err) => console.log(err))
  }
}
</script>

<style src="@/assets/scss/components/app-header.scss" lang="scss" scoped/>