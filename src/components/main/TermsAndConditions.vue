<template>
  <main class="main" :style="{color: color}">
    <h1 :style="{color: color}">Terms and conditions</h1>
    <section>
      <h4>INTRODUCTION</h4>
      <p>This disclaimer governs your use of the CLEAR ASSURED website and by using this website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, you must not use the CLEAR ASSURED website.</p>
    </section>
    <section>
      <h4>INTELLECTUAL PROPERTY RIGHTS</h4>
      <p>Unless otherwise stated, The CLEAR ASSURED or its licensors own the intellectual property rights in the website and material on the website. Subject to the licence below, all these intellectual property rights are reserved.</p>
    </section>
    <section>
      <h4>LICENCE TO USE WEBSITE</h4>
      <p>You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions below.</p>
      <p>You must not:</p>
      <ul>
        <li>republish material from this website (including republication on another website);</li>
        <li>sell, rent or otherwise sub-license material from the website;</li>
        <li>show any material from the website in public;</li>
        <li>reproduce, duplicate, copy or otherwise exploit material on our website for a commercial purpose;</li>
        <li>edit or otherwise modify any material on the website;</li>
        <li>redistribute material from this website except where you have purchased a license from the CLEAR ASSURED to do so. Where you have purchased a license from the CLEAR ASSURED for redistribution, it may only be redistributed within your organisation and within the time period stated by your license.</li>
      </ul>
    </section>
    <section>
      <h4>LIMITATIONS OF WARRANTIES AND LIABILITY</h4>
      <p>While we endeavour to ensure that the information on this website is correct, the CLEAR ASSURED does not guarantee its completeness or accuracy; nor does it commit to ensuring that the website remains available or that the material on the website is kept up-to-date.
        To the maximum extent permitted by applicable law, the CLEAR ASSURED excludes all representations, warranties and conditions relating to this website and the use of this website (including, without limitation, any warranties implied by law of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
      </p>
      <p>Nothing in this disclaimer (or elsewhere on our website) will exclude or limit the CLEAR ASSURED’s liability for fraud, for death or personal injury caused by our negligence, or for any other liability which cannot be excluded or limited under applicable law.</p>
      <p>Subject to this, The CLEAR ASSURED’s liability to you in relation to the use of this website or under or in connection with this disclaimer, whether in contract, tort (including negligence) or otherwise, will be limited as follows:</p>
      <ul>
        <li>we will not be liable for any loss or damage of any nature;</li>
        <li>we will not be liable for any consequential, indirect or special loss or damage;</li>
        <li>we will not be liable for any loss of profit, income, revenue, anticipated savings, contracts, business, goodwill, reputation, data, or information.</li>
      </ul>
    </section>
    <section>
      <h4>VARIATION</h4>
      <p>We may revise these terms of use from time-to-time. Revised terms of use will apply to the use of the CLEAR ASSURED website from the date of the publication of the revised terms of use on the website. Please check this page regularly to ensure you are familiar with the current version.</p>
    </section>
    <section>
      <h4>ENTIRE AGREEMENT</h4>
      <p>This disclaimer, together with our privacy policy, constitutes the entire agreement between you and the THE CLEAR COMPANY LTD. in relation to your use of the CLEAR ASSURED website. It supersedes all previous agreements in respect of your use of this website.</p>
    </section>
    <section>
      <h4>LAW AND JURISDICTION</h4>
      <p>This disclaimer will be governed by and construed in accordance with English law, and any disputes relating to this disclaimer will be subject to the non-exclusive jurisdiction of the courts of England and Wales.</p>
    </section>
    <section class="last-section">
      <h4>COMPANY DETAILS</h4>
      <p>The full name of our organisation is THE CLEAR COMPANY LTD. and we are registered in England & Wales under registration number 3980437. Our VAT number is 847020248.</p>
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
