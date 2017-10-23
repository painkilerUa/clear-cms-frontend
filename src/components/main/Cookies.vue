<template>
  <main class="main" :style="{color: color}">
    <h1 :style="{color: color}">Cookies</h1>
    <section class="last-section">
      <p>We use cookies on our website to distinguish you as a discrete user of our website so that we can provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.</p>
      <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer, if you agree. Cookies contain information that is transferred to your computer's hard drive.</p>
      <p>Cookies allow us to recognise and count the number of visitors to our website and to see how visitors have navigated our site when they visit. This helps us to improve the way our website works and to make any adjustment needed to help people find what they’re looking for</p>
      <p>Other information we may collect about you through the use of cookies includes:</p>
      <ul>
        <li>the IP address from which you access our site;</li>
        <li>the type of browser and operating system you use to access our site;/li>
        <li>the date and time you access our site</li>
        <li>the pages you visit;</li>
        <li>and the addresses of pages from where you followed a link to our site</li>
      </ul>
      <p>We use Google's Analytics service to track activity on our website. This services requires us to share data about how you have used our site with Google as described in their privacy policy. We do not correlate any information in the cookies information with data about individual users. We do not share the cookie information with any third party for advertising purposes.</p>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TermsAndConditions',
  computed: {
    ...mapGetters([
      'bgColorSpOp',
      'color',
      'selectedHightCont'
    ])
  },
  components: {
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .main {
    max-width: 960px;
    margin: 0 auto;
  }
  h1 {
    color: #087280;
    margin-top: 60px;
    margin-bottom: 15px;
  }
  h4 {
    font-size: 1.12em;
    margin: 0px 0 10px 0;
    padding: 20px 0 0 0;
  }
  .last-section {
    margin-bottom: 50px;
  }
  p {
    font-size: 0.9375rem;
  }
  ul {
    margin-left: 30px;
  }
  li {
    padding-left: 5px; font-size: 17px; line-height: 1.3; padding-bottom: 5px;
  }

</style>


var reg = new RegExp ('www|http://clearassured.co.uk|test|localhost:8080')
var parts = window.location.host.split('.')
reg.test(parts[0])
