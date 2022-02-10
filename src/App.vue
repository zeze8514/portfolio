<template>
  <header>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/">main</router-link>
    <router-link to="/test1">test1</router-link>
    <router-link to="/test2">test2</router-link>
  </header>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>