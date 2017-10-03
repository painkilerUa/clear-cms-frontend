<template>
  <div class="w1">
    <div class="wrap-admin">
      <app-header />
      <inform-msgs />
      <!-- .admin -->
      <div class="admin">
        <!-- .myContainer -->
        <!--<div class="myContainer">-->
        <!--<h1>{{getUsername}}</h1>-->
        <!--<ul style="list-style:none">-->
        <!--<li>-->
        <!--<router-link :to="{name: 'admin'}">Admin</router-link>-->
        <!--</li>-->
        <!--<br />-->
        <!--<li>-->
        <!--<router-link :to="{name: 'management'}">Management</router-link>-->
        <!--</li>-->
        <!--<br />-->
        <!--<li>-->
        <!--<router-link :to="{name: 'articles-list'}">Articles List</router-link>-->
        <!--</li>-->
        <!--<br />-->
        <!--<li>-->
        <!--<router-link :to="{name: 'categories'}">Categories</router-link>-->
        <!--</li>-->
        <!--<br />-->
        <!--<li>-->
        <!--<router-link :to="{name: 'tags'}">Topics</router-link>-->
        <!--</li>-->
        <!--<br />-->
        <!--<li>-->
        <!--<router-link :to="{name: 'users'}">Users</router-link>-->
        <!--</li>-->
        <!--<br />-->
        <!--<li>-->
        <!--<router-link :to="{name: 'security-configuration'}">Security Configuration</router-link>-->
        <!--</li>-->
        <!--</ul>-->
        <router-view />
        <!--</div>-->
        <!-- END:.myContainer -->
      </div>
      <!-- END:.admin -->
    </div>
    <footer class="footer">
      <div class="footer-inner">
        <ul class="footer-inner-list">
          <li>
            <router-link :to="{name: 'users'}">Terms and conditions</router-link>
          </li>
          <li>
            <router-link :to="{name: 'users'}">Privacy statement</router-link>
          </li>
          <li>
            <router-link :to="{name: 'users'}">Accessibility section</router-link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '@/components/common/AppHeader'
import ConfPopup from '@/components/common/ConfPopup'
import InformMsgs from '@/components/common/InfomMsgs'

export default {
  name: 'admin',
  computed: {
    ...mapGetters([
      'getUsername'
    ])
  },
  components: {
    AppHeader,
    ConfPopup,
    InformMsgs
  }
}
</script>

<style scoped lang="scss">
  .w1 {
    display: table;
    table-layout: fixed;
    height: 100%;
    width: 100%;
  }
  .wrap-admin {
    display: table-row;
  }
  .admin {
    max-width: 1300px;
    margin: 0 auto;
    padding: 50px 0;
  }
  .footer {
    display: table-footer-group;
    background-color: #141414;
    .footer-inner {
      display: table-cell;
      height: 1%;
      .footer-inner-list {
        font-size: 0;
        line-height: 0;
        vertical-align: middle;
        text-align: center;
        padding: 20px 0;
        margin: 0;
        li {
          display: inline-block;
          padding: 5px 30px;
          a {
            color: #fff;
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
    }
  }
</style>
