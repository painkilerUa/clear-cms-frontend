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
            <ul class="main-menu-header">
              <!--<li>-->
                <!--<router-link :to="{name: 'admin'}">Admin-->
                <!--</router-link>-->
              <!--</li>-->
              <!--<li>-->
                <!--<router-link :to="{name: 'management'}">Management</router-link>-->
              <!--</li>-->
              <li>
                <icon name="file" class="icon icon-file"></icon>
                <span>Content</span>
                <ul class="first-level-menu-header articles">
                  <li>
                    <router-link :to="{name: 'articles-list'}">Articles</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'add-article'}">Add new article</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'todo-list'}">Things to do</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'add-todo'}">Add new TTD</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <icon name="tag" class="icon icon-tag"></icon>
                <span>Categories</span>
                <ul class="first-level-menu-header categories">
                  <li>
                    <router-link :to="{name: 'categories'}">Category</router-link>
                  </li>
                  <li>
                    <router-link :to="{name: 'tags'}">Topic</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <icon name="user-o" class="icon icon-user-o"></icon>
                <router-link :to="{name: 'users'}">Users</router-link>
              </li>
              <!--<li>-->
                <!--<router-link :to="{name: 'security-configuration'}">Security Configuration</router-link>-->
              <!--</li>-->
            </ul>
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
								<router-link
								:to="{name: 'profile'}"
								class="app-header-login__item app-header-login__item--name"
								tabindex="-1"
								v-if="getUsername">{{getUsername}}</router-link>
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
						<!--<div class="app-header-options__text">Your accessibility options</div>-->
					</div>
					<!-- END:.app-header-options -->
				</div>
				<!-- END:.app-header-info__container -->
			</div>
			<!-- END:.myContainer -->
		</div>
		<!-- END:.app-header-info -->
		<!-- .app-header-search -->
		<!--<div class="app-header-search">-->
			<!--&lt;!&ndash; .myContainer &ndash;&gt;-->
			<!--<div class="myContainer">-->
			  <!--<autocomplete-input />-->
			<!--</div>-->
			<!--&lt;!&ndash; END:.myContainer &ndash;&gt;-->
		<!--</div>-->
		<!-- END:.app-header-search -->
	</header>
	<!-- END:.app-header -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import 'vue-awesome/icons/file'
import 'vue-awesome/icons/tag'
import 'vue-awesome/icons/user-o'

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
      'authLogout',
      'getUserRoles'
    ])
  },
  mounted () {
    this.getUserRoles()
  }
}
</script>

<style src="@/assets/scss/components/app-header.scss" lang="scss" scoped/>
