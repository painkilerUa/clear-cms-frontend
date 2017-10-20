<template>
  <div id="app" class="app login">
    <div class="wrapper">
      <Authorization-header />
      <main class="main">
        <div class="center">
          <div class="main-title">Lloyd's is the world's specialist insurance and reinsurance market</div>
          <a href="#" class="main-video">
            <div class="main-video-start"></div>
            <div class="main-video-label">Watch Dominic Christian (CEO - Aon UK Ltd, Chair - Inclusion@Lloyd's) talking about the importance of diversity and inclusion</div>
          </a>
          <div class="main-text">
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
        </div>
      </main>
      <div class="push"></div>
    </div>
    <footer class="front-footer">
      <div class="center flex" >
        <div class="successfull-msg" v-if="isSent">
          Your request was received. If the email you entered is associated with a user, you will receive an email with instructions to reset your password.
        </div>
        <div class="user-area lost" v-if="!isSent">
          <div class="lost-pass-label" v-html="notificationMsg">
          </div>
          <input type="text" name="" placeholder="Email" v-model="formInfo.email"/>
          <input type="submit" name="" value="Submit" @click="sendFormRequest"/>
        </div>
        <ul data-v-85022b8e="" class="front-footer-social-list"><li data-v-85022b8e="" class="front-footer-social-list__item"><a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yOTMgMzg4LjI4OSAyNCAxNy43MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjkzIDM4OC4yODkgMjQgMTcuNzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNmZmY7fQ0KPC9zdHlsZT4NCjxwYXRoIGlkPSJGaWxsLTEiIGNsYXNzPSJzdDAiIGQ9Ik0tMjc2Ljg0MSwzOTcuNzg5bC02LjQyOSwzLjhjLTAuNDk3LDAuMjk0LTEuMTI1LTAuMDY2LTEuMTI1LTAuNjQ1di03LjYNCgljMC0wLjU3OSwwLjYyOC0wLjkzOSwxLjEyNS0wLjY0NWw2LjQyOSwzLjhDLTI3Ni4zNTEsMzk2Ljc4OC0yNzYuMzUxLDM5Ny40OTktMjc2Ljg0MSwzOTcuNzg5IE0tMjY5LjM5NiwzOTAuNDQ2DQoJYy0wLjA4NC0wLjY5OS0wLjc1Mi0xLjM1Ny0xLjQ2OC0xLjQ1OGMtNi44NDgtMC45MzItMTMuNDIzLTAuOTMyLTIwLjI3MSwwYy0wLjcxNiwwLjEwMS0xLjM4NCwwLjc2LTEuNDY4LDEuNDU4DQoJYy0wLjUyOSw0LjQ1LTAuNTI5LDguOTQ2LDAsMTMuMzk2YzAuMDg0LDAuNjk5LDAuNzUyLDEuMzU4LDEuNDY4LDEuNDU4YzYuODQ4LDAuOTMyLDEzLjQyMywwLjkzMiwyMC4yNzEsMA0KCWMwLjcxNi0wLjEwMSwxLjM4NC0wLjc2LDEuNDY4LTEuNDU4Qy0yNjguODY4LDM5OS4zOTItMjY4Ljg2OCwzOTQuODk1LTI2OS4zOTYsMzkwLjQ0NiIvPg0KPC9zdmc+DQo=" alt="youtube" class="front-footer-social-list__icon" width="14" height="10"></a></li> <li data-v-85022b8e="" class="front-footer-social-list__item"><a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yOTMgMzg3Ljk1NiAyNCAyNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjkzIDM4Ny45NTYgMjQgMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNFMkUyRTI7fQ0KPC9zdHlsZT4NCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMjcyLjk4NSwzODcuOTU2aC0xNi4wMzFjLTIuMTkxLDAtMy45ODQsMS43OTMtMy45ODQsMy45ODR2MTYuMDMxYzAsMi4xOTIsMS43OTMsMy45ODUsMy45ODQsMy45ODVoMTYuMDMxDQoJYzIuMTkyLDAsMy45ODUtMS43OTMsMy45ODUtMy45ODVsLTAuMDAxLTE2LjAzMUMtMjY5LjAwMSwzODkuNzQ5LTI3MC43OTQsMzg3Ljk1Ni0yNzIuOTg1LDM4Ny45NTZ6IE0tMjg1LjMxNywzOTguNDU2aDguNjM0DQoJYzAuMTYzLDAuNDcsMC4yNTMsMC45NzUsMC4yNTMsMS41YzAsMi41Mi0yLjA1LDQuNTctNC41Nyw0LjU3Yy0yLjUyLDAtNC41Ny0yLjA1LTQuNTctNC41Nw0KCUMtMjg1LjU3MSwzOTkuNDMxLTI4NS40ODEsMzk4LjkyNi0yODUuMzE3LDM5OC40NTZ6IE0tMjcyLjAwMSwzOTguNDU3djUuOTk4djNjMCwwLjgyNS0wLjY3NSwxLjUtMS41LDEuNWgtMTUNCgljLTAuODI1LDAtMS41LTAuNjc1LTEuNS0xLjV2LTN2LTUuOTk4di0wLjAwMWgyLjM0NmMtMC4xMDgsMC40ODMtMC4xNjYsMC45ODQtMC4xNjYsMS41YzAsMy43NiwzLjA1OSw2LjgyLDYuODIsNi44Mg0KCWMzLjc2LDAsNi44Mi0zLjA1OSw2LjgyLTYuODJjMC0wLjUxNi0wLjA1OC0xLjAxNy0wLjE2Ni0xLjVoMi4zNDZWMzk4LjQ1N3ogTS0yNzIuMDAxLDM5My4yMDZjMCwwLjQxMi0wLjMzOCwwLjc1LTAuNzUsMC43NWgtMS41DQoJYy0wLjQxMiwwLTAuNzUtMC4zMzgtMC43NS0wLjc1di0xLjVjMC0wLjQxMiwwLjMzOC0wLjc1LDAuNzUtMC43NWgxLjVjMC40MTIsMCwwLjc1LDAuMzM4LDAuNzUsMC43NVYzOTMuMjA2eiIvPg0KPC9zdmc+DQo=" alt="instagram" class="front-footer-social-list__icon" width="12.5" height="12.5"></a></li> <li data-v-85022b8e="" class="front-footer-social-list__item"><a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA3LjY2OCAxNC42NjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDcuNjY4IDE0LjY2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0UyRTJFMjt9DQo8L3N0eWxlPg0KPHBhdGggaWQ9IkZpbGwtNCIgY2xhc3M9InN0MCIgZD0iTTYuMTE1LDIuNDc1QzYuNTcsMi40NTgsNy4wMjUsMi40Nyw3LjQ4MSwyLjQ3aDAuMTg3VjAuMTA2QzcuNDI2LDAuMDgzLDcuMTcxLDAuMDQ4LDYuOTE4LDAuMDM1DQoJYy0wLjQ2Ny0wLjAyLTAuOTM1LTAuMDQzLTEuNDAyLTAuMDMyYy0wLjcxMywwLjAxNS0xLjM4OCwwLjE4OC0xLjk3OCwwLjYxQzIuODYyLDEuMDk4LDIuNDkxLDEuNzgxLDIuMzQ5LDIuNTg2DQoJQzIuMjkxLDIuOTE3LDIuMjc1LDMuMjYyLDIuMjY3LDMuNTk5QzIuMjU0LDQuMTMsMi4yNjQsNC42NTksMi4yNjUsNS4xOXYwLjE5OUgwdjIuNjRoMi4yNTF2Ni42MzVoMi43NTJWOC4wNGgyLjI0NQ0KCWMwLjExNC0wLjg3OSwwLjIyOC0xLjc0NywwLjM0NS0yLjY1MmMtMC4xOCwwLTAuMzQyLTAuMDAyLTAuNTA1LDBjLTAuNjM4LDAuMDAzLTIuMTAzLDAtMi4xMDMsMHMwLjAwNi0xLjMwOSwwLjAyMS0xLjg3Ng0KCUM1LjAyOSwyLjczNCw1LjQ5MSwyLjQ5Nyw2LjExNSwyLjQ3NSIvPg0KPC9zdmc+DQo=" alt="facebook" class="front-footer-social-list__icon" width="7.7" height="14.7"></a></li> <li data-v-85022b8e="" class="front-footer-social-list__item"><a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNS44MjggMTIuODYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE1LjgyOCAxMi44NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0UyRTJFMjt9DQo8L3N0eWxlPg0KPHBhdGggaWQ9IkZpbGwtOSIgY2xhc3M9InN0MCIgZD0iTTQuNzk5LDEwLjA2NGMtMS42OS0wLjA1OS0yLjc0Ny0xLjI3LTMuMDI2LTIuMjU0QzIuMjQ0LDcuOSwyLjcwNyw3Ljg4MiwzLjE2Nyw3Ljc2OA0KCWMwLjAxMy0wLjAwMywwLjAyNC0wLjAxLDAuMDQ3LTAuMDIxYy0wLjkxNS0wLjIxMy0xLjYyMi0wLjcwMi0yLjExMy0xLjQ5QzAuNzc3LDUuNzMzLDAuNjIxLDUuMTYsMC42MjYsNC41MzENCglDMS4wODIsNC43NzQsMS41Niw0LjkxLDIuMDczLDQuOTI0Yy0wLjY4OC0wLjQ5Ni0xLjE1LTEuMTQyLTEuMzM5LTEuOTdjLTAuMTg3LTAuODI1LTAuMDY2LTEuNjEsMC4zNDktMi4zNTENCglDMi44NDQsMi42NzMsNS4wNzIsMy44MSw3Ljc5MSwzLjk5N2MtMC4wMTgtMC4xMy0wLjA0LTAuMjQyLTAuMDUzLTAuMzU2QzcuNjQ4LDIuODc2LDcuOCwyLjE2NCw4LjIxNSwxLjUxNw0KCUM4LjczMSwwLjcwNyw5LjQ3LDAuMjAzLDEwLjQyLDAuMDQ5YzEuMDk0LTAuMTc5LDIuMDQ5LDAuMTMzLDIuODQ3LDAuOTA2YzAuMDU0LDAuMDUyLDAuMDk4LDAuMDY4LDAuMTczLDAuMDUyDQoJYzAuNjY4LTAuMTQ2LDEuMjk5LTAuMzg2LDEuODkyLTAuNzI4YzAuMDEzLTAuMDA4LDAuMDI4LTAuMDE1LDAuMDQyLTAuMDIxYzAuMDAzLTAuMDAyLDAuMDA4LTAuMDAyLDAuMDIxLTAuMDAyDQoJYy0wLjI1NiwwLjc1NC0wLjcyNSwxLjMzNy0xLjM5MiwxLjc2N2MwLjYzLTAuMDcsMS4yMzEtMC4yMzcsMS44MTEtMC40ODdjMC4wMDUsMC4wMDYsMC4wMDksMC4wMTEsMC4wMTMsMC4wMTUNCgljLTAuMTI0LDAuMTYyLTAuMjQ0LDAuMzI5LTAuMzc0LDAuNDg3Yy0wLjM0NSwwLjQyNS0wLjc0MSwwLjc5OS0xLjE4MiwxLjEyMWMtMC4wMzgsMC4wMjgtMC4wNTUsMC4wNTMtMC4wNTQsMC4xMDMNCgljMC4wMTgsMC40ODIsMCwwLjk2Mi0wLjA2LDEuNDQxYy0wLjEyNSwxLjAwOS0wLjQwNywxLjk3MS0wLjgzOSwyLjg5MWMtMC40NDYsMC45NS0xLjAyNiwxLjgwNi0xLjc1OCwyLjU2DQoJYy0xLjIzOSwxLjI3OC0yLjczMiwyLjEwNC00LjQ3LDIuNDg3Yy0wLjU5NiwwLjEzMS0xLjIsMC4xOTctMS44MTIsMC4yMTVjLTEuODc1LDAuMDU0LTMuNjA5LTAuNDExLTUuMjAzLTEuMzk0DQoJQzAuMDU1LDExLjQ0OSwwLjAzNSwxMS40MzUsMCwxMS40MTJjMS4xMzUsMC4xMjEsMi4yMTQtMC4wMjQsMy4yNTMtMC40NDhDMy44MDUsMTAuNzM4LDQuMzE2LDEwLjQ0MSw0Ljc5OSwxMC4wNjQiLz4NCjwvc3ZnPg0K" alt="twitter" class="front-footer-social-list__icon" width="15.8" height="12.9"></a></li> <li data-v-85022b8e="" class="front-footer-social-list__item"><a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxOC4yODEgMTEuNTU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOC4yODEgMTEuNTU1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRTJFMkUyO30NCjwvc3R5bGU+DQo8ZyBpZD0iWE1MSURfOThfIj4NCgk8cGF0aCBpZD0iWE1MSURfOTlfIiBjbGFzcz0ic3QwIiBkPSJNNS43OCw0LjYxOEM1Ljc3OCw0LjY1Miw1Ljc3NSw0LjY4Myw1Ljc3NSw0LjcxYzAsMC43MDYsMC4wMDIsMi4yMzEsMC4wMDIsMi4yMzFoMy4wOTgNCgkJYzAsMC4yMjktMC4yNzEsMS4xNTItMS4xMzgsMS43MzhDNy4yMyw5LjAyMSw2LjY1OSw5LjE3OSw2LjA1NSw5LjIxOEM1LjYyOSw5LjI0NSw1LjIxLDkuMjAyLDQuNzk5LDkuMDcyDQoJCUMzLjUwOCw4LjY1OCwyLjU0Niw3LjQ5LDIuNDE0LDYuMDY5Yy0wLjAzMi0wLjM1MS0wLjAwOS0wLjcwMiwwLjA3LTEuMDQ4QzIuODY4LDMuMzQsNC40NjQsMi4wOTMsNi4yOSwyLjM2Mg0KCQljMC44MSwwLjEyLDEuMjc2LDAuNDU2LDEuNzAxLDAuODE5YzAuNTU5LTAuNTYsMS4xMTQtMS4xMTMsMS42ODMtMS42ODNDOS41MzYsMS4zOTgsOS4yMTcsMS4wNzQsOC42NDgsMC43NDYNCgkJQzcuOCwwLjI1Niw2Ljg4NCwwLjAxMSw1LjkwNCwwQzUuNzE5LTAuMDAyLDUuNTM0LDAuMDA5LDUuMzUsMC4wMThDNS4wMjYsMC4wMyw0LjcwOSwwLjA4Niw0LjM5NiwwLjE2NQ0KCQlDMy4xNDQsMC40ODUsMi4xMDUsMS4xNCwxLjI5MiwyLjE0MkMwLjUwOSwzLjEwNCwwLjA4OSw0LjIxLDAuMDExLDUuNDQ0Yy0wLjAzMywwLjUyMywwLjAwNywxLjA0NCwwLjEyMywxLjU1Ng0KCQljMC4zMjUsMS40MzEsMS4wNzcsMi41ODcsMi4yNjQsMy40NTNjMC45MTksMC42NzMsMS45NTQsMS4wMzEsMy4wOSwxLjA5M2MwLjYzOCwwLjAzNCwxLjI3My0wLjAyNSwxLjg5Ny0wLjE4Nw0KCQljMS4xNi0wLjMwMywyLjEyMy0wLjkwNywyLjg0Ni0xLjg3YzEuMDQ5LTEuMzkyLDEuMzAyLTMuMTc2LDAuOTkzLTQuODdINS43OHoiLz4NCgk8cG9seWdvbiBpZD0iWE1MSURfMTAwXyIgY2xhc3M9InN0MCIgcG9pbnRzPSIxOC4yMjMsNC42OTMgMTYuMjYyLDQuNjkzIDE2LjI2MiwyLjczNSAxNi4yNjIsMi42NzggMTYuMjA0LDIuNjc4IDE0Ljc0MSwyLjY3OCANCgkJMTQuNjgyLDIuNjc4IDE0LjY4MiwyLjczNSAxNC42ODIsNC42OTMgMTIuNzIsNC42OTMgMTIuNjY0LDQuNjkzIDEyLjY2NCw0Ljc1IDEyLjY2NCw2LjIxMiAxMi42NjQsNi4yNzEgMTIuNzIsNi4yNzEgDQoJCTE0LjY4Miw2LjI3MSAxNC42ODIsOC4yMyAxNC42ODIsOC4yODcgMTQuNzQxLDguMjg3IDE2LjIwNCw4LjI4NyAxNi4yNjIsOC4yODcgMTYuMjYyLDguMjMgMTYuMjYyLDYuMjcxIDE4LjIyMyw2LjI3MSANCgkJMTguMjgxLDYuMjcxIDE4LjI4MSw2LjIxMiAxOC4yODEsNC43NSAxOC4yODEsNC42OTMgCSIvPg0KPC9nPg0KPC9zdmc+DQo=" alt="googlePlus" class="front-footer-social-list__icon" width="20" height="12"></a></li> <li data-v-85022b8e="" class="front-footer-social-list__item"><a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMy4zMDcgMTMuMjU3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMy4zMDcgMTMuMjU3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRTJFMkUyO30NCjwvc3R5bGU+DQo8ZyBpZD0iWE1MSURfNDBfIj4NCgk8cmVjdCBpZD0iWE1MSURfNDdfIiB4PSIwLjIxOSIgeT0iNC40MDIiIGNsYXNzPSJzdDAiIHdpZHRoPSIyLjc2MSIgaGVpZ2h0PSI4Ljg1NSIvPg0KCTxwYXRoIGlkPSJYTUxJRF80OF8iIGNsYXNzPSJzdDAiIGQ9Ik0xLjYsMEMwLjcxNCwwLDAsMC43MTcsMCwxLjU5NWMwLDAuODgxLDAuNzE0LDEuNTk3LDEuNiwxLjU5Nw0KCQljMC44ODIsMCwxLjU5OS0wLjcxNiwxLjU5OS0xLjU5N0MzLjE5OSwwLjcxNywyLjQ4MiwwLDEuNiwweiIvPg0KCTxwYXRoIGlkPSJYTUxJRF80OV8iIGNsYXNzPSJzdDAiIGQ9Ik0xMC4wMDEsNC4xODJjLTEuMzQyLDAtMi4yNDIsMC43MzQtMi42MSwxLjQyOUg3LjM1NHYtMS4yMUg0LjcxdjguODU1aDIuNzU1VjguODc1DQoJCWMwLTEuMTU0LDAuMjE5LTIuMjcxLDEuNjU1LTIuMjcxYzEuNDEyLDAsMS40MzMsMS4zMjEsMS40MzMsMi4zNDh2NC4zMDVoMi43NTVWOC4zOTlDMTMuMzA3LDYuMDE0LDEyLjc5Myw0LjE4MiwxMC4wMDEsNC4xODJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==" alt="linkedIn" class="front-footer-social-list__icon" width="20" height="12"></a></li> <li data-v-85022b8e="" class="front-footer-social-list__item"><a data-v-85022b8e="" href="#" class="front-footer-social-list__link"><img data-v-85022b8e="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yNzUuOTY1IDM4OS4yMTQgMTEuNzAxIDE1LjA4NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjc1Ljk2NSAzODkuMjE0IDExLjcwMSAxNS4wODY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNFMkUyRTI7fQ0KPC9zdHlsZT4NCjxwYXRoIGlkPSJGaWxsLTI1IiBjbGFzcz0ic3QwIiBkPSJNLTI3MS4wNzMsMzk5LjA1NWMtMC4wMTIsMC4wNDMtMC4wMjQsMC4wNzktMC4wMzMsMC4xMTZjLTAuNTU1LDIuMTcyLTAuNjE2LDIuNjU0LTEuMTg3LDMuNjYyDQoJYy0wLjI3MiwwLjQ3OS0wLjU3OCwwLjkzMy0wLjkxNywxLjM2N2MtMC4wMzksMC4wNDktMC4wNzUsMC4xMTMtMC4xNSwwLjA5OWMtMC4wODUtMC4wMTktMC4wOS0wLjA5My0wLjEtMC4xNjENCgljLTAuMDkxLTAuNjU5LTAuMTQyLTEuMzIxLTAuMTItMS45ODdjMC4wMjktMC44NjgsMC4xMzctMS4xNjUsMS4yNTctNS44NjhjMC4wMTctMC4wNzMtMC4wMDItMC4xMzMtMC4wMjYtMC4xOTYNCgljLTAuMjY4LTAuNzI0LTAuMzIxLTEuNDU2LTAuMDg3LTIuMTk5YzAuNTA3LTEuNjA0LDIuMzI5LTEuNzI3LDIuNjQ3LTAuNDAzYzAuMTk3LDAuODE4LTAuMzIzLDEuODg5LTAuNzIxLDMuNDczDQoJYy0wLjMyOSwxLjMwNywxLjIxLDIuMjM2LDIuNTI4LDEuMjgxYzEuMjE0LTAuODc5LDEuNjg2LTIuOTg3LDEuNTk2LTQuNDgxYy0wLjE3Ny0yLjk3OC0zLjQ0OS0zLjYyMi01LjUyNC0yLjY2Mw0KCWMtMi4zOCwxLjA5OC0yLjkyMSw0LjA0My0xLjg0Nyw1LjM4OWMwLjEzNywwLjE3LDAuMjQyLDAuMjc1LDAuMTk3LDAuNDQ5Yy0wLjA3LDAuMjcxLTAuMTMxLDAuNTQyLTAuMjA2LDAuODENCgljLTAuMDU1LDAuMTk5LTAuMjIyLDAuMjcyLTAuNDI0LDAuMTljLTAuMzk2LTAuMTU5LTAuNzI2LTAuNDEzLTAuOTk0LTAuNzQyYy0wLjkxMi0xLjEyOC0xLjE3NC0zLjM1OSwwLjAzMy01LjI0OQ0KCWMxLjMzNi0yLjA5MywzLjgyMi0yLjkzOCw2LjA5My0yLjY4MmMyLjcxMSwwLjMwOSw0LjQyNSwyLjE1Nyw0Ljc0NSw0LjI1NWMwLjE0NiwwLjk1NSwwLjA0MSwzLjMxMy0xLjMwMyw0Ljk3Nw0KCWMtMS41NDYsMS45MTUtNC4wNTIsMi4wNDEtNS4yMDgsMC44NjdDLTI3MC45MTMsMzk5LjI2OC0yNzAuOTg1LDM5OS4xNjMtMjcxLjA3MywzOTkuMDU1Ii8+DQo8L3N2Zz4NCg==" alt="pinterest" class="front-footer-social-list__icon" width="11.7" height="15.1"></a></li></ul>
      </div>
    </footer>
  </div>
</template>

<script>
import api from '@/api'
import forms from '@/mixins/forms'
import Popup from '@/components/common/Popup'
import FormMessages from '@/components/common/FormMessages'
import AuthorizationHeader from '@/components/main/common/AuthorizationHeader'

export default {
  name: 'forgot-password',
  mixins: [forms],
  data () {
    return {
      isSent: false,
      notificationMsg: 'Enter your email address and you will be sent<br />instructions on how to reset your password.',
      resetToken: '',
      title: 'Forgot Password',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium sed necessitatibus enim recusandae sunt numquam, ducimus asperiores laborum! Reprehenderit!',
      formInfo: {
        email: ''
      }
    }
  },
  methods: {
    resetRedirect () {
      this.$router.push({name: 'reset', params: {token: this.resetToken}})
    },
    submitSuccess (res) {
      this.formServerMessages.success.push(res)
    },
    submitErrors (err) {
      this.formServerMessages.errors.push(err)
    },
    sendFormRequest () {
      this.$http.post(api.URLS.forgotPassword, JSON.stringify(this.formInfo))
      .then((res) => {
        this.isSent = true
//        this.notificationMsg = res.body
        console.log(res)
        this.submitSuccess(res.body)
      })
      .catch((err) => { this.submitErrors(err.body) })
    }
  },
  components: {
    Popup,
    FormMessages,
    AuthorizationHeader
  }
}
</script>
<style>
  .main {
    overflow: hidden;
  }
  .login .clear {clear:both; display:block;}
  .login .wrapper {min-height:100%; margin:0 0 -108px 0; background:url('http://eromagency.com/tmp/tcc/img/login-hero.jpg') 50% calc(50% + 62px) no-repeat; background-size:cover;}
  .login .center {width:60%; max-width:1152px; margin:0 auto; min-width:320px;}
  .login .front-header {height:62px; background:#ffffff;}
  .login .logo-link {float:left; margin:18px 0 18px 0;}
  .login .front-header-capabilities {float:right; padding:21px 0 21px 0;}
  .login .front-header-capabilities-colors img,
  .login .front-header-capabilities-colors img {width:20px; margin-right:-4px;}
  .login .main {color:#ffffff;}
  .login .main-title {padding:120px 70px 0 70px; font-size:29pt; text-transform:uppercase; font-weight:bold; text-align:center;}
  .login .main-video {display:block; margin:90px auto 0 auto; width:54%; padding:15px 0 20px 0; color:#ffffff; text-decoration:none;}
  .login .main-video-start {width:57px; height:57px; margin:0 auto; background:url('http://eromagency.com/tmp/tcc/img/play.svg') 0 0 no-repeat;}
  .login .main-video-label {font-size:13pt; font-weight:bold; padding:35px 0 0 0; text-align:center;}
  .login .main-text {font-size:12pt; padding:120px 40px 30px 40px;}
  .login .main-text-left {width:47%; float:left; margin:0 6% 0 0;}
  .login .main-text-right {width:47%; float:right;}
  .login .push {height:108px;}
  .login .front-footer {height:108px; background:#1c1c1d;}
  .login .user-area {float:left; margin:35px 0 30px 0;}
  .login input {font-family:Arial; font-size:12pt; float:left; margin:0 20px 0 0; height:40px; border:none; box-sizing:border-box; padding:10px; display:block;}
  .login input::-webkit-input-placeholder {color:#000000;}
  .login input:-moz-placeholder {color:#000000; opacity:1;}
  .login input::-moz-placeholder {color:#000000; opacity:1;}
  .login input:-ms-input-placeholder {color:#000000;}
  .login input::-ms-input-placeholder {color:#000000;}
  .login input[type=text], .login .user-area input[type=password] {width:240px; background:#ffffff; color:#000000;}
  .login input[type=submit] {width:105px; background:#257281; color:#ffffff; font-weight:bold; text-transform:uppercase; font-size:12pt;}
  .login .user-area.error input[type=text], .login .user-area.error input[type=password], .login .main-reset.error input[type=text], .login .main-reset.error input[type=password] {border:2px solid #d8656a;}
  .login .user-area-lost-password {font-size:10pt; color:#257281; line-height:40px;}
  .login .front-footer-social-list {float:right; margin:40px 0 35px 0;}
  .login .front-footer-social-list li {margin-right:7px; float:left;}
  .login .front-footer-social-list a {width:30px; height:30px;}
  .login .lost-pass-label {float:left; font-size:11pt; color:#ffffff; padding:0 40px 0 0; line-height:14pt;}
  .login .user-area.lost-error .lost-pass-label {color:#d8656a; padding-top:10px;}
  .login .user-area.lost-success .lost-pass-label {color:#22b6cd;}
  .login .main-reset {padding:80px 0 0 0;}
  .login .main-reset input {float:none; margin:0 auto 20px auto;}
  .login .main-reset input[type=submit] {background:#000000; margin-top:20px;}
  .login .main-reset-label {text-align:center; font-size:16pt; padding:40px 0 0 0;}
  .login .main-video-player {margin:100px 0 0 0;}
  .login .main-video-player video {width:100%; height:auto;}

  @media (max-width: 1750px) {
    .login .center {width:80%;}
  }

  @media (max-width: 1320px) {
    .login .center {width:90%;}
  }

  @media (max-width: 1160px) {
    .login .center {width:auto; padding:0 10px;}
  }

  @media (max-width: 1160px) {
    .login .front-footer-social-list {display:none;}
  }

  @media (max-width: 800px) {
    .login .front-header {height:75px; background:#ffffff;}
    .login .front-header .center {padding:0;}
    .login .logo-link {margin:23px 0 18px 0;}
    .login .logo-img {width:266px; height:31px;}
    .login .logo-link {margin-left:30px;}
    .login .front-header-capabilities {display:none;}
    .login .main-title {font-size:21pt; padding:20px 10px 0 10px;}
    .login .main-video {margin:0; width:100%; padding:15px 0 20px 0;}
    .login .main-video-label {font-size:14pt; padding:25px 0 0 0;}
    .login .main-text {padding:30px 0 10px 0;}
    .login .main-text-left {width:100%;}
    .login .main-text-right {width:100%;}
    .login .push {height:225px;}
    .login .front-footer {position:fixed; width:100%; left:0; bottom:0; height:auto;}
    .login .user-area {margin:20px 0; width:100%; text-align:center;}
    .login .user-area input {float:none; margin:0 auto 20px auto;}
    .login .user-area-lost-password {line-height:normal;}
    .login .lost-pass-label {float:none; padding:0 0 20px 0;}
    .login .user-area.lost input[type=submit], .login .user-area.lost-error input[type=submit] {margin-bottom:0;}
  }
  .center {
  }
  .successfull-msg {
    padding: 20px 0 20px 0;
    color: #22b6cd;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
</style>
