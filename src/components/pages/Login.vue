<template>
  <div id="app" class="app login">
    <div class="wrapper">
      <Authorization-header />
      <main class="main">
        <div class="center">
          <div class="main-title" v-if="isShown">Lloyd's is the world's specialist insurance and reinsurance market</div>
          <a href="#" class="main-video" @click.prevent="playVideo" v-if="isShown">
            <div class="main-video-start"></div>
            <div class="main-video-label">Watch Dominic Christian (CEO - Aon UK Ltd, Chair - Inclusion@Lloyd's) talking about the importance of diversity and inclusion</div>
          </a>
          <div class="main-text" v-if="isShown">
            <div class="main-text-left">
              <p>With expertise earned over centuries, Lloyd's is the foundation of the insurance industry and the future of it. Led by expert underwriters and brokers in more than 200 territories, the Lloyd's market develops the essential, complex and critical insurance needed to underwrite human progress.</p>
              <p>Backed by diverse global capital and excellent financial ratings, Lloyd's works with a global network of over 4000 insurance professionals to grow the insured world - building resilience for businesses and local communities and strengthening economic growth around the world.</p>
            </div>
            <div class="main-text-right">
              <p>As a result the Lloyd's market attracts the world's best insurance talent and wants to continue to attract diverse talent from a wide variety of backgrounds. This commitment is led by Inclusion@Lloyd's, an initiative where the Corporation of Lloyd's and organisations in the Lloyd's market work in partnership to embrace and embed diversity in their individual businesses by widening perspectives and sharing best practice.</p>
              <p>This portal, developed with the Clear Company, provides access to practical resources and examples of best practice to support the Lloyd's market increase diversity and embed inclusive practices within their organisations.</p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="main-video-player" v-show="!isShown">
            <video controls id="video">
              <source src="../../assets/video/ClearAssuredVideo.mp4" type="video/mp4">
              <track kind="subtitles" srclang="en" src="../../assets/video/sub/captions.srt" default>
            </video>
          </div>
        </div>
      </main>
      <div class="push"></div>
    </div>
    <footer class="front-footer">
      <div class="center">

        <div class="user-area" :class="{error: isError}">
          <input type="text" name="" placeholder="Email" v-model="formInfo.username"/>
          <input type="password" name="" placeholder="Password" v-model="formInfo.password"/>
          <input type="submit" name="" value="Login" @click.prevent="sendFormRequest"/>
          <router-link :to="{path: '/forgot-password'}" class="user-area-lost-password">Lost your password?</router-link>
        </div>
        <ul data-v-85022b8e="" class="front-footer-social-list">
          <li data-v-85022b8e="" class="front-footer-social-list__item">
            <a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yOTMgMzg4LjI4OSAyNCAxNy43MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjkzIDM4OC4yODkgMjQgMTcuNzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNmZmY7fQ0KPC9zdHlsZT4NCjxwYXRoIGlkPSJGaWxsLTEiIGNsYXNzPSJzdDAiIGQ9Ik0tMjc2Ljg0MSwzOTcuNzg5bC02LjQyOSwzLjhjLTAuNDk3LDAuMjk0LTEuMTI1LTAuMDY2LTEuMTI1LTAuNjQ1di03LjYNCgljMC0wLjU3OSwwLjYyOC0wLjkzOSwxLjEyNS0wLjY0NWw2LjQyOSwzLjhDLTI3Ni4zNTEsMzk2Ljc4OC0yNzYuMzUxLDM5Ny40OTktMjc2Ljg0MSwzOTcuNzg5IE0tMjY5LjM5NiwzOTAuNDQ2DQoJYy0wLjA4NC0wLjY5OS0wLjc1Mi0xLjM1Ny0xLjQ2OC0xLjQ1OGMtNi44NDgtMC45MzItMTMuNDIzLTAuOTMyLTIwLjI3MSwwYy0wLjcxNiwwLjEwMS0xLjM4NCwwLjc2LTEuNDY4LDEuNDU4DQoJYy0wLjUyOSw0LjQ1LTAuNTI5LDguOTQ2LDAsMTMuMzk2YzAuMDg0LDAuNjk5LDAuNzUyLDEuMzU4LDEuNDY4LDEuNDU4YzYuODQ4LDAuOTMyLDEzLjQyMywwLjkzMiwyMC4yNzEsMA0KCWMwLjcxNi0wLjEwMSwxLjM4NC0wLjc2LDEuNDY4LTEuNDU4Qy0yNjguODY4LDM5OS4zOTItMjY4Ljg2OCwzOTQuODk1LTI2OS4zOTYsMzkwLjQ0NiIvPg0KPC9zdmc+DQo=" alt="youtube" class="front-footer-social-list__icon" width="14" height="10">
            </a>
          </li>
          <li data-v-85022b8e="" class="front-footer-social-list__item">
            <a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3LjY2OCAxNC42NjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDcuNjY4IDE0LjY2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0UyRTJFMjt9DQo8L3N0eWxlPg0KPHBhdGggaWQ9IkZpbGwtNCIgY2xhc3M9InN0MCIgZD0iTTYuMTE1LDIuNDc1QzYuNTcsMi40NTgsNy4wMjUsMi40Nyw3LjQ4MSwyLjQ3aDAuMTg3VjAuMTA2QzcuNDI2LDAuMDgzLDcuMTcxLDAuMDQ4LDYuOTE4LDAuMDM1DQoJYy0wLjQ2Ny0wLjAyLTAuOTM1LTAuMDQzLTEuNDAyLTAuMDMyYy0wLjcxMywwLjAxNS0xLjM4OCwwLjE4OC0xLjk3OCwwLjYxQzIuODYyLDEuMDk4LDIuNDkxLDEuNzgxLDIuMzQ5LDIuNTg2DQoJQzIuMjkxLDIuOTE3LDIuMjc1LDMuMjYyLDIuMjY3LDMuNTk5QzIuMjU0LDQuMTMsMi4yNjQsNC42NTksMi4yNjUsNS4xOXYwLjE5OUgwdjIuNjRoMi4yNTF2Ni42MzVoMi43NTJWOC4wNGgyLjI0NQ0KCWMwLjExNC0wLjg3OSwwLjIyOC0xLjc0NywwLjM0NS0yLjY1MmMtMC4xOCwwLTAuMzQyLTAuMDAyLTAuNTA1LDBjLTAuNjM4LDAuMDAzLTIuMTAzLDAtMi4xMDMsMHMwLjAwNi0xLjMwOSwwLjAyMS0xLjg3Ng0KCUM1LjAyOSwyLjczNCw1LjQ5MSwyLjQ5Nyw2LjExNSwyLjQ3NSIvPg0KPC9zdmc+DQo=" alt="facebook" class="front-footer-social-list__icon" width="7.7" height="14.7">
            </a>
          </li>
          <li data-v-85022b8e="" class="front-footer-social-list__item">
            <a data-v-85022b8e="" href="#" class="front-footer-social-list__link">
              <img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNS44MjggMTIuODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1LjgyOCAxMi44NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0UyRTJFMjt9DQo8L3N0eWxlPg0KPHBhdGggaWQ9IkZpbGwtOSIgY2xhc3M9InN0MCIgZD0iTTQuNzk5LDEwLjA2NGMtMS42OS0wLjA1OS0yLjc0Ny0xLjI3LTMuMDI2LTIuMjU0QzIuMjQ0LDcuOSwyLjcwNyw3Ljg4MiwzLjE2Nyw3Ljc2OA0KCWMwLjAxMy0wLjAwMywwLjAyNC0wLjAxLDAuMDQ3LTAuMDIxYy0wLjkxNS0wLjIxMy0xLjYyMi0wLjcwMi0yLjExMy0xLjQ5QzAuNzc3LDUuNzMzLDAuNjIxLDUuMTYsMC42MjYsNC41MzENCglDMS4wODIsNC43NzQsMS41Niw0LjkxLDIuMDczLDQuOTI0Yy0wLjY4OC0wLjQ5Ni0xLjE1LTEuMTQyLTEuMzM5LTEuOTdjLTAuMTg3LTAuODI1LTAuMDY2LTEuNjEsMC4zNDktMi4zNTENCglDMi44NDQsMi42NzMsNS4wNzIsMy44MSw3Ljc5MSwzLjk5N2MtMC4wMTgtMC4xMy0wLjA0LTAuMjQyLTAuMDUzLTAuMzU2QzcuNjQ4LDIuODc2LDcuOCwyLjE2NCw4LjIxNSwxLjUxNw0KCUM4LjczMSwwLjcwNyw5LjQ3LDAuMjAzLDEwLjQyLDAuMDQ5YzEuMDk0LTAuMTc5LDIuMDQ5LDAuMTMzLDIuODQ3LDAuOTA2YzAuMDU0LDAuMDUyLDAuMDk4LDAuMDY4LDAuMTczLDAuMDUyDQoJYzAuNjY4LTAuMTQ2LDEuMjk5LTAuMzg2LDEuODkyLTAuNzI4YzAuMDEzLTAuMDA4LDAuMDI4LTAuMDE1LDAuMDQyLTAuMDIxYzAuMDAzLTAuMDAyLDAuMDA4LTAuMDAyLDAuMDIxLTAuMDAyDQoJYy0wLjI1NiwwLjc1NC0wLjcyNSwxLjMzNy0xLjM5MiwxLjc2N2MwLjYzLTAuMDcsMS4yMzEtMC4yMzcsMS44MTEtMC40ODdjMC4wMDUsMC4wMDYsMC4wMDksMC4wMTEsMC4wMTMsMC4wMTUNCgljLTAuMTI0LDAuMTYyLTAuMjQ0LDAuMzI5LTAuMzc0LDAuNDg3Yy0wLjM0NSwwLjQyNS0wLjc0MSwwLjc5OS0xLjE4MiwxLjEyMWMtMC4wMzgsMC4wMjgtMC4wNTUsMC4wNTMtMC4wNTQsMC4xMDMNCgljMC4wMTgsMC40ODIsMCwwLjk2Mi0wLjA2LDEuNDQxYy0wLjEyNSwxLjAwOS0wLjQwNywxLjk3MS0wLjgzOSwyLjg5MWMtMC40NDYsMC45NS0xLjAyNiwxLjgwNi0xLjc1OCwyLjU2DQoJYy0xLjIzOSwxLjI3OC0yLjczMiwyLjEwNC00LjQ3LDIuNDg3Yy0wLjU5NiwwLjEzMS0xLjIsMC4xOTctMS44MTIsMC4yMTVjLTEuODc1LDAuMDU0LTMuNjA5LTAuNDExLTUuMjAzLTEuMzk0DQoJQzAuMDU1LDExLjQ0OSwwLjAzNSwxMS40MzUsMCwxMS40MTJjMS4xMzUsMC4xMjEsMi4yMTQtMC4wMjQsMy4yNTMtMC40NDhDMy44MDUsMTAuNzM4LDQuMzE2LDEwLjQ0MSw0Ljc5OSwxMC4wNjQiLz4NCjwvc3ZnPg0K" alt="twitter" class="front-footer-social-list__icon" width="15.8" height="12.9">
            </a>
          </li>
          <li data-v-85022b8e="" class="front-footer-social-list__item">
            <a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMy4zMDcgMTMuMjU3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMy4zMDcgMTMuMjU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRTJFMkUyO30NCjwvc3R5bGU+DQo8ZyBpZD0iWE1MSURfNDBfIj4NCgk8cmVjdCBpZD0iWE1MSURfNDdfIiB4PSIwLjIxOSIgeT0iNC40MDIiIGNsYXNzPSJzdDAiIHdpZHRoPSIyLjc2MSIgaGVpZ2h0PSI4Ljg1NSIvPg0KCTxwYXRoIGlkPSJYTUxJRF80OF8iIGNsYXNzPSJzdDAiIGQ9Ik0xLjYsMEMwLjcxNCwwLDAsMC43MTcsMCwxLjU5NWMwLDAuODgxLDAuNzE0LDEuNTk3LDEuNiwxLjU5Nw0KCQljMC44ODIsMCwxLjU5OS0wLjcxNiwxLjU5OS0xLjU5N0MzLjE5OSwwLjcxNywyLjQ4MiwwLDEuNiwweiIvPg0KCTxwYXRoIGlkPSJYTUxJRF80OV8iIGNsYXNzPSJzdDAiIGQ9Ik0xMC4wMDEsNC4xODJjLTEuMzQyLDAtMi4yNDIsMC43MzQtMi42MSwxLjQyOUg3LjM1NHYtMS4yMUg0LjcxdjguODU1aDIuNzU1VjguODc1DQoJCWMwLTEuMTU0LDAuMjE5LTIuMjcxLDEuNjU1LTIuMjcxYzEuNDEyLDAsMS40MzMsMS4zMjEsMS40MzMsMi4zNDh2NC4zMDVoMi43NTVWOC4zOTlDMTMuMzA3LDYuMDE0LDEyLjc5Myw0LjE4MiwxMC4wMDEsNC4xODJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==" alt="linkedIn" class="front-footer-social-list__icon" width="20" height="12">
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
  <!--<div>-->
    <!--<Authorization-header />-->
    <!--<main class="main">-->
      <!--<div class="main-container">-->
        <!--<h1>Lloyd’s is the world’s specialist insurance and reinsurance market</h1>-->
      <!--</div>-->
      <!--<section class="wrapper flex-container wrap">-->
        <!--<div class="flex-block">-->
          <!--<p>With expertise earned over centuries, Lloyd’s is the foundation of the insurance industry and the future of-->
            <!--it. Led by expert underwriters and brokers in more than 200 territories, the Lloyd’s market develops the-->
            <!--essential, complex and critical insurance needed to underwrite human progress.</p>-->
          <!--<p>Backed by diverse global capital and excellent financial ratings, Lloyd’s works with a global network of-->
            <!--over 4000 insurance professionals to grow the insured world – building resilience for businesses and local-->
            <!--communities and strengthening economic growth around the world. </p>-->
        <!--</div>-->
        <!--<div class="flex-block">-->
          <!--<p>As a result the Lloyd’s market attracts the world’s best insurance talent and wants to continue to attract-->
            <!--diverse talent from a wide variety of backgrounds. This commitment is led by Inclusion@Lloyd’s, an-->
            <!--initiative where the Corporation of Lloyd’s and organisations in the Lloyd’s market work in partnership-->
            <!--to embrace and embed diversity in their individual businesses by widening perspectives and sharing best-->
            <!--practice.</p>-->
          <!--<p>This portal, developed with the Clear Company, provides access to practical resources and examples of best-->
            <!--practice to support the Lloyd’s market increase diversity and embed inclusive practices within their-->
            <!--organisations.</p>-->
        <!--</div>-->
      <!--</section>-->
      <!--<article class="footer">-->
        <!--<section class="wrapper bottom flex-container">-->
          <!--<div class="footer-form flex">-->
            <!--<form>-->
              <!--<input type="email" class="form email" placeholder="Email" v-model="formInfo.username">-->
              <!--<input type="" class="form password" placeholder="Password" v-model="formInfo.password">-->
              <!--<button type="button" class="form login" @click="sendFormRequest()">Login</button>-->
              <!--<router-link :to="{path: '/forgot-password'}" class="lost-password">Lost you password?</router-link>-->
            <!--</form>-->
          <!--</div>-->
          <!--<div class="foter-icon flex">-->
            <!--<ul class="front-footer-social-list">-->
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="https://www.youtube.com/user/UKClearKit" target="_blank" class="front-footer-social-list__link">-->
                  <!--<img-->
                          <!--width="14"-->
                          <!--height="10"-->
                          <!--src="../../assets/img/main/footer/svg/youtube.svg"-->
                          <!--alt="youtube"-->
                          <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <!--&lt;!&ndash;<li class="front-footer-social-list__item">&ndash;&gt;-->
                <!--&lt;!&ndash;<a href="#" class="front-footer-social-list__link">&ndash;&gt;-->
                  <!--&lt;!&ndash;<img&ndash;&gt;-->
                          <!--&lt;!&ndash;width="12.5"&ndash;&gt;-->
                          <!--&lt;!&ndash;height="12.5"&ndash;&gt;-->
                          <!--&lt;!&ndash;src="../../assets/img/main/footer/svg/instagram.svg"&ndash;&gt;-->
                          <!--&lt;!&ndash;alt="instagram"&ndash;&gt;-->
                          <!--&lt;!&ndash;class="front-footer-social-list__icon" />&ndash;&gt;-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->
              <!--&lt;!&ndash;</li>&ndash;&gt;-->
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="https://www.youtube.com/user/UKClearKit" target="_blank" class="front-footer-social-list__link">-->
                  <!--<img-->
                          <!--width="7.7"-->
                          <!--height="14.7"-->
                          <!--src="../../assets/img/main/footer/svg/facebook.svg"-->
                          <!--alt="facebook"-->
                          <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="https://twitter.com/@TheClearCo" target="_blank" class="front-footer-social-list__link">-->
                  <!--<img-->
                          <!--width="15.8"-->
                          <!--height="12.9"-->
                          <!--src="../../assets/img/main/footer/svg/twitter.svg"-->
                          <!--alt="twitter"-->
                          <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <!--&lt;!&ndash;<li class="front-footer-social-list__item">&ndash;&gt;-->
                <!--&lt;!&ndash;<a href="#" class="front-footer-social-list__link">&ndash;&gt;-->
                  <!--&lt;!&ndash;<img&ndash;&gt;-->
                          <!--&lt;!&ndash;width="20"&ndash;&gt;-->
                          <!--&lt;!&ndash;height="12"&ndash;&gt;-->
                          <!--&lt;!&ndash;src="../../assets/img/main/footer/svg/googlePlus.svg"&ndash;&gt;-->
                          <!--&lt;!&ndash;alt="googlePlus"&ndash;&gt;-->
                          <!--&lt;!&ndash;class="front-footer-social-list__icon" />&ndash;&gt;-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->
              <!--&lt;!&ndash;</li>&ndash;&gt;-->
              <!--<li class="front-footer-social-list__item">-->
                <!--<a href="https://www.linkedin.com/company/the-clear-company/" target="_blank" class="front-footer-social-list__link">-->
                  <!--<img-->
                          <!--width="20"-->
                          <!--height="12"-->
                          <!--src="../../assets/img/main/footer/svg/linkedIn.svg"-->
                          <!--alt="linkedIn"-->
                          <!--class="front-footer-social-list__icon" />-->
                <!--</a>-->
              <!--</li>-->
              <!--&lt;!&ndash;<li class="front-footer-social-list__item">&ndash;&gt;-->
                <!--&lt;!&ndash;<a href="#" class="front-footer-social-list__link">&ndash;&gt;-->
                  <!--&lt;!&ndash;<img&ndash;&gt;-->
                          <!--&lt;!&ndash;width="11.7"&ndash;&gt;-->
                          <!--&lt;!&ndash;height="15.1"&ndash;&gt;-->
                          <!--&lt;!&ndash;src="../../assets/img/main/footer/svg/pinterest.svg"&ndash;&gt;-->
                          <!--&lt;!&ndash;alt="pinterest"&ndash;&gt;-->
                          <!--&lt;!&ndash;class="front-footer-social-list__icon" />&ndash;&gt;-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->
              <!--&lt;!&ndash;</li>&ndash;&gt;-->
              <!--</ul>-->
          <!--</div>-->
        <!--</section>-->
      <!--</article>-->
    <!--</main>-->
    <!--&lt;!&ndash;<div class="login">&ndash;&gt;-->
      <!--&lt;!&ndash;<popup :title="title" :description="description" :modal="true">&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash; popup-body &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<template slot="body">&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash; .form &ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;<form action="#" class="form" @submit.prevent="submit">&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash; .form-element &ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="form-element">&ndash;&gt;-->
              <!--&lt;!&ndash;<input type="text" name="User Name" v-model="formInfo.username" data-vv-as='"User Name"' class="form-control" v-validate="'required'" placeholder="User Name" />&ndash;&gt;-->
              <!--&lt;!&ndash;<div v-if="errors.has('User Name')" class="form-errors">{{ errors.first('User Name') }}</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash; END:.form-element &ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash; .form-element &ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="form-element">&ndash;&gt;-->
              <!--&lt;!&ndash;<input type="password" name="PasswordFirst" v-model="formInfo.password" data-vv-as='"PasswordFirst"' class="form-control" v-validate="'required'" placeholder="Password" />&ndash;&gt;-->
              <!--&lt;!&ndash;<div v-if="errors.has('PasswordFirst')" class="form-errors">{{ errors.first('PasswordFirst') }}</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash; END:.form-element &ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash; .form-element &ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="form-element">&ndash;&gt;-->
              <!--&lt;!&ndash;<input type="hidden" name="PasswordSecond" :value="secondPasswordComputed" />&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash; END:.form-element &ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;<button type="submit" class="form-control form-submit">Login</button>&ndash;&gt;-->
            <!--&lt;!&ndash;<form-messages :messages="formServerMessages" />&ndash;&gt;-->
          <!--&lt;!&ndash;</form>&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash; END:.form &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;</template>&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash; END:popup-body &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash; popup-footer &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;<template slot="footer">&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash; popup-infolinks &ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;<ul class="popup-infolinks">&ndash;&gt;-->
            <!--&lt;!&ndash;<li class="popup-infolinks__item">&ndash;&gt;-->
              <!--&lt;!&ndash;<router-link class="popup-infolinks__link" :to="{name: 'forgot-password'}">Forgot password?</router-link>&ndash;&gt;-->
            <!--&lt;!&ndash;</li>&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;<li class="popup-infolinks__item">&ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash;<router-link class="popup-infolinks__link" :to="{name: 'register'}">Not registered yet?</router-link>&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;</li>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;</ul>&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash; END:popup-infolinks &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;</template>&ndash;&gt;-->
        <!--&lt;!&ndash;&lt;!&ndash; END:popup-footer &ndash;&gt;&ndash;&gt;-->
      <!--&lt;!&ndash;</popup>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--</div>-->
</template>

<script>
import { mapActions } from 'vuex'
import api from '@/api'
import forms from '@/mixins/forms'
import Popup from '@/components/common/Popup'
import FormMessages from '@/components/common/FormMessages'
import AuthorizationHeader from '@/components/main/common/AuthorizationHeader'

export default {
  name: 'login',
  mixins: [forms],
  data () {
    return {
      title: 'Login to your account',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium sed necessitatibus enim recusandae sunt numquam, ducimus asperiores laborum! Reprehenderit!',
      formInfo: {
        username: null,
        password: null,
        grant_type: 'password',
        client_id: '2_659vq9a3czggcws88wcws8s4kc8gc8gcss4wog4cwcsk08ggkg',
        client_secret: '5ncmjzrt9ps8808cskk8ogwwgwkgks8ggc0kskg0cw48s08ks4'
      },
      secondPassword: null,
      isShown: true,
      isError: false
    }
  },
  computed: {
    secondPasswordComputed () {
      return this.formInfo.password
    }
  },
  methods: {
    ...mapActions([
      'redirect',
      'getRoles',
      'getCompanies'
    ]),
    sendFormRequest () {
      let auth = {
        grant_type: 'password',
        client_id: this.formInfo.client_id,
        client_secret: this.formInfo.client_secret,
        username: this.formInfo.username,
        password: this.formInfo.password
      }
      this.$http.post(api.URLS.login, auth)
      .then((res) => {
        this.isError = false
        console.log('sendFormRequest', res)
        localStorage.setItem('token', res.body.access_token)

        this.getRoles()
        this.getCompanies()

        this.$store.commit('authLoginSuccess')
        let headers = { headers: {'Authorization': `Bearer ${res.body.access_token}`} }
        this.$http.put(api.URLS.profile, {}, headers)
        .then((res) => {
          console.log(res)
          this.$http.put(api.URLS.userLastLogin + res.body.id, {}, headers)
          .then((res) => {
            console.log('Last login', res)
          })
          .catch((err) => {
            return err
          })
          console.log(res)
          let username = res.body.username ? res.body.username : ''
          localStorage.setItem('username', username)
          this.submitSuccess(res.body)
          this.$store.commit('authLoginSetUsername', username)
          this.redirect()
        })
        .catch((err) => {
          return err
        })
      })
      .catch((err) => {
        this.isError = true
        this.submitErrors(err.bodyText)
        console.log(err)
      })
    },
    playVideo () {
      this.isShown = false
      document.getElementById('video').play()
    }
  },
  created () {
    document.title = 'Clear Assured – the Inclusive Recruitment Standard'
  },
  components: {
    Popup,
    FormMessages,
    AuthorizationHeader
  }
}
</script>
<!--<style src="@/assets/scss/main/login.scss" lang="scss" scoped></style>-->
<style src="@/assets/scss/main/loginForAllPage.scss" lang="scss" scoped></style>
