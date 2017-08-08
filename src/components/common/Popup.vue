<template>
	<!-- .popup -->
	<div class="popup">
		<!-- .popup__inner -->
		<div class="popup__inner">
			<slot name="popup-inner"></slot>
		</div>
		<!-- END:.popup__inner -->
	</div>
	<!-- END:.popup -->
</template>

<script>
export default {

}
</script>

<style src="@/assets/scss/components/popup" lang="scss" scoped/>