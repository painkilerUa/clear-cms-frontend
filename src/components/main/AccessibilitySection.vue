<template>
  <main class="main" :style="{color: color}">
    <h1 :style="{color: color}">Accessibility</h1>
    <section>
      <h4>Accessibility statement</h4>
      <p>We have used our best endeavours to make our web site as accessible as possible by adhering sensibly and practically to the Web Content Accessibility Guidelines (WCAG) produced by the World Wide Web Consortium (W3C). We have aimed for AA compliance but have not adhered to some elements that are no longer relevant or have since been shown to hinder accessibility.
      </p>
      <p>Listed below are the steps we have taken to achieve this. We know this list is not exhaustive, so if you experience any difficulties with our site, please contact us and we'll do what we can to make it easier for everyone to access.</p>
    </section>
    <section>
      <h4>Browsers and operating systems</h4>
      <p>The website has been developed to support a range of current web browsers and operating systems, plus previous versions of Internet Explorer (11), Microsoft Edge, Google Chrome, Mozilla Firefox, Safari and Opera.</p>
    </section>
    <section>
      <h4>Accessibility standards</h4>
      <p>We have aimed for AA compliance for the bulk of the website’s functionality, but have ensure A compliance as a minimum throughout. Any aspects of functionality that do not comply with AA have been used because they are the most appropriate format for that particular type of content. In certain areas the site uses JavaScript to enrich the user experience.</p>
    </section>
    <section>
      <h4>Site navigation</h4>
      <p>The content of the website is keyboard friendly, and the Tab key can be used as the main method of navigating pages. It is screen-reader friendly and is developed using semantic markup and headings within the HTML to reinforce the meaning of all content. We've avoided using access keys to create shortcuts to common pages, as they can often interfere with the default keyboard shortcuts of modern browsers.</p>
    </section>
    <section>
      <h4>Understanding</h4>
      <p>All content is arranged logically and we have tried to make all instructions within the site as clear as possible, using descriptive links to tell you where you are going when you click on them.</p>
    </section>
    <section>
      <h4>Appearance</h4>
      <p>Text resizes according to user preference. Colour contrast between foreground and background has been carefully selected and tested using industry-standard. The site has also been checked using colour blindness simulators to ensure that the content is easily navigable for people with deuteranopia and protonopia visual impairment.</p>
    </section>
    <section>
      <h4>Images</h4>
      <p>Where we use images, we always include alternative text to describe the images so that those people who cannot see the image can read the text using a screen reader.</p>
    </section>
    <section>
      <h4>Sound</h4>
      <p>For any aspects of the site where sound is used, we've provided an alternative means to access this content for users with hearing impairments. This may include transcripts of audio-content or subtitles.
      </p>
      <p>You can also speech enable this website by downloading Chrome Vox (in Google Chrome), NVDA or any other specialist software that will read this website out for you.</p>
    </section>
    <section class="last-section">
      <h4>Further help and advice</h4>
      <p>If you have a visual impairment, we recommend that you visit the RNIB website for specialist advice about screen readers, screen magnifiers and other devices that can make using digital devices easier and more enjoyable. We also recommend the AbilityNet’s My Computer My Way web site, which provides a wealth of advice on how to make the most of the accessibility functions on your computer or device.
      </p>
      <p>AbilityNet also provide a free service to individuals with disabilities to assess their computing needs. Call free on 0800 269 545 for more information.</p>
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
