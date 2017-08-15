<template>
	<div class="home-login">
		<popup :title="'Login to your account'" :modal="true">
		  <!-- popup-body -->
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form">
			  	<input type="text" class="form-control" placeholder="User Name" />
			  	<input type="password" class="form-control" placeholder="Password" />
			  	<button type="submit" class="form-control form-submit">Login</button>
			  </form>
			  <!-- END:.form -->
			</template>
		  <!-- END:popup-body -->
		  <!-- popup-footer -->
		  <template slot="footer">
		  	
		  </template>
		  <!-- END:popup-footer -->
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