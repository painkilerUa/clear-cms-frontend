<template>
  <main class="main">
    <div data-v-6f1f4672="" class="page-banner page-banner--content"></div>
    <!-- .content-main -->
    <div class="content-main" v-if="this.content">
      <!-- .myContainer -->
      <div class="myContainer">
        <h1 class="article-page-title">{{content.title}}</h1>
        <!-- .content-main-inner -->
        <div class="content-main-inner">
          <aside class="content-sidebar">
            <!-- .content-sidebar-section -->
            <section class="content-sidebar-section content-sidebar-section--accent" v-if="thingsToConsider.length">
              <h3 class="content-sidebar-section-title">Things to consider</h3>
              <ul class="article-list">
                <li class="article-list__item" v-for="item in thingsToConsider">
                  <a :href="'/content/' + item.id" class="article-list__link">{{item.title}}</a>
                </li>
                <!--<li class="article-list__item">-->
                  <!--<a href="#" class="article-list__link">Assesments</a>-->
                <!--</li>-->
                <!--<li class="article-list__item">-->
                  <!--<a href="#" class="article-list__link">Reasonable Adjustments</a>-->
                <!--</li>-->
                <!--<li class="article-list__item">-->
                  <!--<a href="#" class="article-list__link">Language And Tone</a>-->
                <!--</li>-->
                <!--<li class="article-list__item">-->
                  <!--<a href="#" class="article-list__link">Inclusive Job Descriptions</a>-->
                <!--</li>-->
                <!--<li class="article-list__item">-->
                  <!--<a href="#" class="article-list__link">Mental Health</a>-->
                <!--</li>-->
              </ul>
            </section>
            <!-- END:.content-sidebar-section -->

            <!-- .content-sidebar-section -->
            <section class="content-sidebar-section"  v-if="thingsToDo.length">
              <h3 class="content-sidebar-section-title">Things to do</h3>
              <ul class="article-list">
                <li class="article-list__item" v-for="item in thingsToDo">
                  <a :href="'/content/' + item.id" class="article-list__link">{{item.title}}</a>
                </li>
                <!--<li class="article-list__item article-list__item&#45;&#45;tooltip">-->
                  <!--<button type="button" class="article-list__tooltip">-->
                    <!--<img-->
                      <!--width="11.9px"-->
                      <!--height="11.7px"-->
                      <!--class="article-list__tooltip-icon"-->
                      <!--src="../../assets/img/content/exclamation-mark.svg"-->
                      <!--alt="tooltip" />-->
                  <!--</button>-->
                  <!--<a href="#" class="article-list__link">Targeting diverse talent</a>-->
                <!--</li>-->
                <!--<li class="article-list__item">-->
                  <!--<a href="#" class="article-list__link">Unconscious Bias Training</a>-->
                <!--</li>-->
                <!--<li class="article-list__item">-->
                  <!--<a href="#" class="article-list__link">Disability Basics</a>-->
                <!--</li>-->
              </ul>
            </section>
            <!-- END:.content-sidebar-section -->
          </aside>
          <!-- .content-info -->
          <div class="content-info">
            <!-- .content-info-imgwrap -->
            <div class="content-info-imgwrap">
              <!--<img-->
                <!--class="content-info-img"-->
                <!--src="http://via.placeholder.com/650x365/A7EAF1/087280?text=Image%20/%20video%20placeholder"-->
                <!--alt="content-info-img"-->
                <!--v-if="!content.image_path"/>-->
              <img :src="mainImgPath" alt="main-content-img" v-if="content.image_path">
            </div>
            <!-- END:.content-info-imgwrap -->
            <!-- .article-download -->
            <div class="article-download" v-if="typeExistingResource === 'resource'">
              <!-- article-download-list -->
              <ul class="article-download-list">
                <li class="article-download-list__item" v-for="resource in existedResources">
                  <a :href="resource.link" target="_blank" class="article-download-list__link">
                    <svg version="1.1" width="20" height="20" class="article-download-list__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-390 292.198 17.802 17.802" style="enable-background:new -390 292.198 17.802 17.802;" xml:space="preserve">
                      <g id="Key-information-B-Home-Desktop" transform="translate(-803.000000, -395.000000)">
                        <g id="Page-1" transform="translate(803.000000, 395.000000)">
                          <g id="Clip-2">
                          </g>
                          <path id="Fill-1" d="M-375.118,301.111c0,0.197-0.069,0.382-0.208,0.521l-4.197,4.196l-1.054,1.054
                            c-0.14,0.14-0.325,0.209-0.522,0.209s-0.383-0.069-0.522-0.208l-1.054-1.055l-4.195-4.196c-0.14-0.139-0.21-0.324-0.21-0.521
                            s0.07-0.382,0.209-0.521l1.054-1.055c0.139-0.139,0.325-0.22,0.521-0.22c0.197,0,0.383,0.081,0.522,0.22l2.19,2.19v-5.818
                            c0-0.406,0.336-0.741,0.741-0.741h1.484c0.406,0,0.741,0.336,0.741,0.741v5.818l2.191-2.19c0.138-0.139,0.324-0.208,0.521-0.208
                            s0.382,0.069,0.521,0.208l1.055,1.055C-375.188,300.729-375.118,300.913-375.118,301.111 M-372.198,301.099
                            c0-4.914-3.987-8.901-8.901-8.901s-8.901,3.987-8.901,8.901s3.987,8.901,8.902,8.901
                            C-376.185,310-372.198,306.013-372.198,301.099"/>
                        </g>
                      </g>
                    </svg>
                    <span class="article-download-list__link-text">{{resource.title}}</span>
                  </a>
                </li>
                <!--<li class="article-download-list__item">-->
                  <!--<a href="#" class="article-download-list__link">-->
                    <!--<svg version="1.1" width="20" height="20" class="article-download-list__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-390 292.198 17.802 17.802" style="enable-background:new -390 292.198 17.802 17.802;" xml:space="preserve">-->
                      <!--<g id="Key-information-B-Home-Desktop" transform="translate(-803.000000, -395.000000)">-->
                        <!--<g id="Page-1" transform="translate(803.000000, 395.000000)">-->
                          <!--<g id="Clip-2">-->
                          <!--</g>-->
                          <!--<path id="Fill-1" d="M-375.118,301.111c0,0.197-0.069,0.382-0.208,0.521l-4.197,4.196l-1.054,1.054-->
                            <!--c-0.14,0.14-0.325,0.209-0.522,0.209s-0.383-0.069-0.522-0.208l-1.054-1.055l-4.195-4.196c-0.14-0.139-0.21-0.324-0.21-0.521-->
                            <!--s0.07-0.382,0.209-0.521l1.054-1.055c0.139-0.139,0.325-0.22,0.521-0.22c0.197,0,0.383,0.081,0.522,0.22l2.19,2.19v-5.818-->
                            <!--c0-0.406,0.336-0.741,0.741-0.741h1.484c0.406,0,0.741,0.336,0.741,0.741v5.818l2.191-2.19c0.138-0.139,0.324-0.208,0.521-0.208-->
                            <!--s0.382,0.069,0.521,0.208l1.055,1.055C-375.188,300.729-375.118,300.913-375.118,301.111 M-372.198,301.099-->
                            <!--c0-4.914-3.987-8.901-8.901-8.901s-8.901,3.987-8.901,8.901s3.987,8.901,8.902,8.901-->
                            <!--C-376.185,310-372.198,306.013-372.198,301.099"/>-->
                        <!--</g>-->
                      <!--</g>-->
                    <!--</svg>-->
                    <!--<span class="article-download-list__link-text">Download document here</span>-->
                  <!--</a>-->
                <!--</li>-->
                <!--<li class="article-download-list__item">-->
                  <!--<a href="#" class="article-download-list__link">-->
                    <!--<svg version="1.1" width="20" height="20" class="article-download-list__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-390 292.198 17.802 17.802" style="enable-background:new -390 292.198 17.802 17.802;" xml:space="preserve">-->
                      <!--<g id="Key-information-B-Home-Desktop" transform="translate(-803.000000, -395.000000)">-->
                        <!--<g id="Page-1" transform="translate(803.000000, 395.000000)">-->
                          <!--<g id="Clip-2">-->
                          <!--</g>-->
                          <!--<path id="Fill-1" d="M-375.118,301.111c0,0.197-0.069,0.382-0.208,0.521l-4.197,4.196l-1.054,1.054-->
                            <!--c-0.14,0.14-0.325,0.209-0.522,0.209s-0.383-0.069-0.522-0.208l-1.054-1.055l-4.195-4.196c-0.14-0.139-0.21-0.324-0.21-0.521-->
                            <!--s0.07-0.382,0.209-0.521l1.054-1.055c0.139-0.139,0.325-0.22,0.521-0.22c0.197,0,0.383,0.081,0.522,0.22l2.19,2.19v-5.818-->
                            <!--c0-0.406,0.336-0.741,0.741-0.741h1.484c0.406,0,0.741,0.336,0.741,0.741v5.818l2.191-2.19c0.138-0.139,0.324-0.208,0.521-0.208-->
                            <!--s0.382,0.069,0.521,0.208l1.055,1.055C-375.188,300.729-375.118,300.913-375.118,301.111 M-372.198,301.099-->
                            <!--c0-4.914-3.987-8.901-8.901-8.901s-8.901,3.987-8.901,8.901s3.987,8.901,8.902,8.901-->
                            <!--C-376.185,310-372.198,306.013-372.198,301.099"/>-->
                        <!--</g>-->
                      <!--</g>-->
                    <!--</svg>-->
                    <!--<span class="article-download-list__link-text">Download document here longer name that doesn’t fit in a row, so we’ll display...</span>-->
                  <!--</a>-->
                <!--</li>-->
              </ul>
              <!-- END:article-download-list -->
            </div>
            <!-- END:.article-download -->
            <div class="article-video" v-if="typeExistingResource === 'video'">
              <div class="article-video-resource" v-for="resource in existedResources">
                <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/ztYSwVOma2M" frameborder="0" allowfullscreen></iframe>-->
                <iframe :src="resource.link"></iframe>
              </div>
            </div>
            <!-- .article-content -->
            <section class="article-content">
              <h3 class="article-content-title">Key information</h3>
              <!-- .article-content-area -->
              <div class="article-content-area" v-html="content.content">
                <!--<ul>-->
                  <!--<li>Anxiety is a feeling of unease, such as worry or fear, that can be mild or severe.</li>-->
                  <!--<li>People often experience physical, psychological and behavioural symptoms when they feel anxious or stressed.</li>-->
                  <!--<li>There are steps you can take to create a supportive environment. By helping an anxious candidate feel more comfortable you will help them perform better</li>-->
                  <!--<li>Try to put the candidate at ease when they arrive by being professional and friendly this can be as simple as offering to get them a drink</li>-->
                  <!--<li>Make sure your interview room is quiet, comfortable and easy to get to</li>-->
                <!--</ul>-->
                <!--<p>Cerion reri alitiniae preiciet voloribus exera eosam faces estis de nonsequatem idessum  ute strum volore, nimolen dolesse ctemqui offic to veliber ibuscium ulpa dolendist harum  in eate molorero coreperum fuga.-->
                <!--Dis doles cient, ipsa nisi int omnihic imustio doloris asa quibea sed qui ali a pelesto reprerchit audam invel ipsanda eriorectur tiscil moluptatur ani hit eatis ped ene aut offi c temquos etum dipidelenis qui omni omnihic tesequid erferuntiu  m re ex et volorum rerum res.</p>-->

                <!--<p>Cerion reri alitiniae preiciet voloribus exera eosam faces estis de nonsequatem idessum  ute strum volore, nimolen dolesse ctemqui offic to veliber ibuscium ulpa dolendist harum  in eate molorero coreperum fuga. </p>-->
              </div>
              <!-- END:.article-content-area -->
            </section>
            <!-- END:.article-content -->
          </div>
          <!-- END:.content-info -->
        </div>
        <!-- END:.content-main-inner -->
      </div>
      <!-- END:.myContainer -->
    </div>
    <!-- END:.content-main -->
  </main>
</template>

<script>
import api from '@/api'

export default {
  name: 'index',
  data () {
    return {
      content: null
    }
  },
  computed: {
    mainImgPath () {
      return this.content.image_path ? api.staticServerURL + this.content.image_path : ''
    },
    thingsToConsider () {
      return this.content.children ? this.content.children.filter(item => item.is_article) : []
    },
    thingsToDo () {
      return this.content.children ? this.content.children.filter(item => !item.is_article) : []
    },
    typeExistingResource () {
      return this.content.content_type.form.type
    },
    existedResources () {
      switch (this.content.content_type.form.type) {
        case 'resource':
          return resource(this.content.formResource)
        case 'video':
          return video(this.content.formResource)
      }
      function resource (existedResources) {
        if (!existedResources) return []
        return existedResources.map((item) => {
          return {
            title: item.name ? item.name : 'File.pdf',
            link: item.path ? `${api.staticServerURL}${item.path}` : item.link
          }
        })
      }
      function video (existedResources) {
        if (!existedResources) return []
        return existedResources.map((item) => {
          let linkPart = item.link.split('/')
          let link
          if (linkPart[2].indexOf('youtu') !== -1) {
            link = `${linkPart[0]}//www.youtube.com/embed/${linkPart[3]}`
          }
          if (linkPart[2].indexOf('vimeo') !== -1) {
            link = `${linkPart[0]}//player.vimeo.com/video/${linkPart[3]}`
          }
          return {
            link
          }
        })
      }
    }
  },
  methods: {
    getArticleById () {
      this.$http.get(`${api.URLS.content}/${this.$route.params.id}`, api.headersAuthSettings)
        .then((res) => {
          this.content = res.body
          console.log(res)
        })
        .catch((err) => console.error(err))
    }
  },
  watch: {
    '$route.params.id' () {
      this.getArticleById()
    }
  },
  mounted () {
    this.getArticleById()
  }
}
</script>

<style src="@/assets/scss/main/content.scss" lang="scss" scoped/>
