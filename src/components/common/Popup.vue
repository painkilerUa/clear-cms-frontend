<template>
	<!-- .popup -->
	<div class="popup">
		<!-- .popup__inner -->
		<div class="popup__inner">
			<h2 class="popup-title" v-if="title">{{title}}</h2>
			<div class="popup-description" v-if="description">
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
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style src="@/assets/scss/components/popup.scss" lang="scss" scoped/>