<template>
	<!-- .popup -->
	<div class="popup">
		<!-- .popup__inner -->
		<div class="popup__inner">
			<h2 class="popup-title">{{title}}</h2>
			<div class="popup-description">
				<p>{{description}}</p>
			</div>
			<slot name="body"/>
		</div>
		<!-- END:.popup__inner -->
	</div>
	<!-- END:.popup -->
</template>

<script>
export default {
 name: 'popup',
 props: {
   title: {
     type: String,
     default: 'Title'
   },
   description: {
   	type: String,
   	default: ''
   }
 }
}
</script>

<style src="@/assets/scss/components/popup" lang="scss" scoped/>