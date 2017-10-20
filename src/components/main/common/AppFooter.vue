<template>
  <footer class="front-footer">
    <!-- .front-footer-top -->
    <div class="front-footer-top">
      <!-- .myContainer -->
      <div class="myContainer">
        <!-- .front-footer-top__inner -->
        <div class="front-footer-top__inner">
          <!-- .front-footer-info -->
          <div class="front-footer-info">
            <p>The Clear Company, The Base, <br /> 20 Dallam Lane, Warrington, <br /> Cheshire, WA2 7NG</p>
            <a href="tel:08452930963" class="front-footer-phone">0845 2930963</a>
          </div>
          <!-- END:.front-footer-info -->
          <!-- .front-footer-social -->
          <div class="front-footer-social">
            <h4 class="front-footer-social__title">Join us on...</h4>
            <ul class="front-footer-social-list">
              <li class="front-footer-social-list__item">
                <a href="https://www.youtube.com/user/UKClearKit" target="_blank" class="front-footer-social-list__link">
                  <img
                    width="14"
                    height="10"
                    src="../../../assets/img/main/footer/svg/youtube.svg"
                    alt="youtube"
                    class="front-footer-social-list__icon" />
                </a>
              </li>
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="#" class="front-footer-social-list__link">-->
                  <!--<img-->
                    <!--width="12.5"-->
                    <!--height="12.5"-->
                    <!--src="../../../assets/img/main/footer/svg/instagram.svg"-->
                    <!--alt="instagram"-->
                    <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <li class="front-footer-social-list__item">
                <a href="https://www.facebook.com/TheClearCompany" target="_blank" class="front-footer-social-list__link">
                  <img
                    width="7.7"
                    height="14.7"
                    src="../../../assets/img/main/footer/svg/facebook.svg"
                    alt="facebook"
                    class="front-footer-social-list__icon" />
                </a>
              </li>
              <li class="front-footer-social-list__item">
                <a href="https://twitter.com/@TheClearCo" target="_blank" class="front-footer-social-list__link">
                  <img
                    width="15.8"
                    height="12.9"
                    src="../../../assets/img/main/footer/svg/twitter.svg"
                    alt="twitter"
                    class="front-footer-social-list__icon" />
                </a>
              </li>
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="#" class="front-footer-social-list__link">-->
                  <!--<img-->
                    <!--width="20"-->
                    <!--height="12"-->
                    <!--src="../../../assets/img/main/footer/svg/googlePlus.svg"-->
                    <!--alt="googlePlus"-->
                    <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <li class="front-footer-social-list__item">
                <a href="https://www.linkedin.com/company/the-clear-company/" target="_blank" class="front-footer-social-list__link">
                  <img
                    width="20"
                    height="12"
                    src="../../../assets/img/main/footer/svg/linkedIn.svg"
                    alt="linkedIn"
                    class="front-footer-social-list__icon" />
                </a>
              </li>
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="#" class="front-footer-social-list__link">-->
                  <!--<img-->
                    <!--width="11.7"-->
                    <!--height="15.1"-->
                    <!--src="../../../assets/img/main/footer/svg/pinterest.svg"-->
                    <!--alt="pinterest"-->
                    <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
            </ul>
          </div>
          <!-- END:.front-footer-social -->
        </div>
        <!-- END:.front-footer-top__inner -->
      </div>
      <!-- END:.myContainer -->
    </div>
    <!-- END:.front-footer-top -->

    <!-- .front-footer-links -->
    <div class="front-footer-links">
      <!-- .myContainer -->
      <div class="myContainer">
        <!-- .front-footer-links__inner -->
        <div class="front-footer-links__inner">
          <!-- front-footer-links-list -->
          <ul class="front-footer-links-list">
            <li class="front-footer-links-list__item">
              <router-link :to="{ path: '/terms-and-conditions' }" class="front-footer-links-list__link">Terms and conditions</router-link>
            </li>
            <li class="front-footer-links-list__item">
              <router-link :to="{ path: '/privacy-statement' }" class="front-footer-links-list__link">Privacy statement</router-link>
            </li>
            <li class="front-footer-links-list__item">
              <router-link :to="{ path: '/accessibility-section' }" class="front-footer-links-list__link">Accessibility section</router-link>
            </li>
            <li class="front-footer-links-list__item">
              <router-link :to="{ path: '/cookies' }" class="front-footer-links-list__link">Cookies</router-link>
            </li>
          </ul>
          <!-- END:front-footer-links-list -->
        </div>
        <!-- END:.front-footer-links__inner -->
      </div>
      <!-- END:.myContainer -->
    </div>
    <!-- END:.front-footer-links -->

    <!-- <div class="col-md-5 col-md-offset-4 block-icon col-sm-5 col-sm-offset-3">
      <p>Join us on...</p>
      <a href="#"><img src="../../../assets/img/main/footer/icon/youtube.png" alt="youtube" /></a>
      <a href="#"><img src="../../../assets/img/main/footer/icon/picasso.png" alt="picasso" /></a>
      <a href="#"><img src="../../../assets/img/main/footer/icon/facebook.png" alt="facebook" /></a>
      <a href="#"><img src="../../../assets/img/main/footer/icon/twitter.png" alt="twitter" /></a>
      <a href="#"><img src="../../../assets/img/main/footer/icon/google_plus.png" alt="google_plus" /></a>
      <a href="#"><img src="../../../assets/img/main/footer/icon/in.png" alt="in" /></a>
      <a href="#"><img src="../../../assets/img/main/footer/icon/pinit.png" alt="pinit" /></a>
    </div> -->
    <!-- <div class="line_bottom"></div> -->
    <!-- <div class="container footer">
      <div class="row">
        <div class="col-md-12 terms">
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy statement</a>
          <a href="#">Accessibility section</a>
        </div>
      </div>
    </div> -->
  </footer>
</template>

<script>
// import AppHeader from '@/components/main/common/AppHeader'

export default {
  name: 'user-header',
  computed: {
  },
  components: {
  },
  mounted () {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/59b658fec28eca75e461f521/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  }
}
</script>

<style src="@/assets/scss/main/common/footer.scss" lang="scss" scoped/>
