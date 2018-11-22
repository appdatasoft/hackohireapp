<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <b-container class="main" fluid>
    <v-menu/>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Menu from '@/components/Menu.vue'
import HelloWorld from './components/HelloWorld.vue'
Vue.component('v-menu', Menu)
export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
<link src='../vendor/bootstrap/css/bootstrap.min.css'/>
<link src='../vendor/simple-line-icons/css/simple-line-icons.css'/>
<link src='../vendor/bootstrap/css/bootstrap.min.css'/>
<link src='../device-mockups/device-mockups.min.css'/>
<link src='../css/lato.css'/>
<link src='../css/multi.css'/>
<link src='../css/cataraman.css'/>
<link src='../css/new-age.min.css'/>
<style>
@import '~bootstrap/dist/css/bootstrap.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
body {
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding: 40px;
}
.signout {
  background-color: #ededed;
  margin: 0;
  padding: 11px 0px 1px;
}
.main{
  margin: 0;
  padding: 0;
}

.fa-icon {
    top: .125em;
    position: relative;
}

.b-main-content {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
}

.b-form-1 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: .2rem;
}

</style>
