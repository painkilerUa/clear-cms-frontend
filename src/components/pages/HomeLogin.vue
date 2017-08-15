<template>
	<div class="home-login">
		<popup :title="'Login to your account'" :modal="true">
		  <!-- popup-body -->
			<template slot="body">
			  <!-- .form -->
			  <form action="#" class="form">
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="text" name="User Name" data-vv-as='"User Name"' class="form-control" v-validate="'required'" placeholder="User Name" />
			  		<div v-if="errors.has('User Name')" class="form-errors">{{ errors.first('User Name') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<!-- .form-element -->
			  	<div class="form-element">
			  		<input type="password" name="Password" data-vv-as='"Password"' class="form-control" v-validate="'required'" placeholder="Password" />
			  		<div v-if="errors.has('Password')" class="form-errors">{{ errors.first('Password') }}</div>
			  	</div>
			  	<!-- END:.form-element -->
			  	<button type="submit" class="form-control form-submit">Login</button>
			  </form>
			  <!-- END:.form -->
			</template>
		  <!-- END:popup-body -->
		  <!-- popup-footer -->
		  <template slot="footer">
		  	<!-- popup-infolinks -->
		  	<ul class="popup-infolinks">
		  		<li class="popup-infolinks__item">
		  			<a href="#" class="popup-infolinks__link">Forgot password?</a>
		  		</li>
		  		<li class="popup-infolinks__item">
		  			<a href="#" class="popup-infolinks__link">Not registered yet?</a>
		  		</li>
		  	</ul>
		  	<!-- END:popup-infolinks -->
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