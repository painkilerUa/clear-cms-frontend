<template>
	<div class="home-login">
		<popup :title="'Login to your account'" :modal="true">
			
		</popup>
	</div>
</template>

<script>
import Popup from '@/components/common/Popup'

export default {
  name: 'home-login',
  components: {
    Popup
  }
}
</script>