<template>
  <div>
    <nav class="navbar" role="navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="@/assets/logo.png">
        </a>
        <a role="button" @click="menuOpen = !menuOpen" :class="'navbar-burger ' + (menuOpen ? 'is-active' : '')">
          <span></span><span></span><span></span>
        </a>
      </div>
      <div :class="'navbar-menu ' + (menuOpen ? 'is-active' : '')">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/users">Users</router-link>
          <router-link class="navbar-item" to="/posts">Posts</router-link>
          <router-link class="navbar-item" to="/albums">Albums</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  menuOpen = false
}

</script>
