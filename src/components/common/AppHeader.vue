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
				<!-- .app-header-login -->
				<div class="app-header-login">
					<span class="app-header-login__item app-header-login__item--name">User1234</span>
					<span class="app-header-login__item">Logout</span>
				</div>
				<!-- END:.app-header-login -->
			</div>
			<!-- END:.myContainer -->
		</div>
		<!-- END:.app-header-info -->
	</header>
	<!-- END:.app-header -->
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style src="@/assets/scss/components/app-header.scss" lang="scss" scoped/>