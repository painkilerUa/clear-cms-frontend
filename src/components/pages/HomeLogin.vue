<template>
	<div class="home-login">
		<popup :title="'Login to your account'" :modal="true">
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form">
			  	<input type="text" class="form-control" placeholder="User Name" />
			  	<input type="password" class="form-control" placeholder="Password" />
			  	<button type="submit" class="form-control form-submit">Login</button>
			  </form>
			  <!-- END:.form -->
			</template>
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