<template>
	<!-- .profile -->
	<div class="container">
      <h1>My account</h1>
      <p class="text-wrap">Lorem ipsum — dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      <section class="info">
        <article class="personal-info">
        <h2>Personal info</h2>
        <div class="form-group">
          <div class="form-element">
            <label class="form-label">First name</label>
            <input class="form-control">
          </div>
          <div class="form-element form-element">
            <label class="form-label">Surname</label>
            <input class="form-control">
          </div>
          <div class="form-element form-element">
            <label class="form-label">Email adress</label>
            <input class="form-control">
          </div>
        </div>
        </article>

        <article class="company-info">
          <h2>Company info</h2>
          <div class="form-group">
            <div class="form-element">
              <label class="form-label">Company name</label>
              <input class="form-control">
            </div>
            <div class="form-element form-element">
              <label class="form-label">Company role</label>
              <input class="form-control">
            </div>
          </div>
        </article>

        <article class="password-info">
          <h2>Password</h2>
          <div class="form-group">
            <div class="form-element">
              <label class="form-label">Current password</label>
              <input class="form-control">
            </div>
            <div class="form-element form-element">
              <label class="form-label">New password</label>
              <input class="form-control">
            </div>
            <div class="form-element form-element">
              <label class="form-label">Confirm new password</label>
              <input class="form-control">
            </div>
          </div>
        </article>

        <article class="update-info">
          <input  type="submit" value="Update" class="submit">
        </article>


      </section>

	</div>
	<!-- END:.profile -->
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  computed: {
    ...mapGetters([
      'getUsername'
    ])
  }
}
</script>

<style src='@/assets/scss/components/profile.scss' lang='scss' scoped />
