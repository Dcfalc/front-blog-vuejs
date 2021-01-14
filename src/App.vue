<template>

  <div id="app">

    <modal-contact :show="showModal" @close="showModal = false"/>
    
    <Menu :show="showModal" @open="showModal = true"/>

    <router-view></router-view>

  </div>
</template>

<script>

import Menu from './components/shared/Menu';
import Contact from './components/shared/Contact';

export default {
  name: 'App',
  components: {
    Menu,
    'modal-contact' : Contact
  },
  data () {
    return {
      showModal: false,
    }
  },
}
</script>

<style>
  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: 'Rubik';
    background: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
  }

  /* Remove scrollbar space */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* POSTS */

  .post img {
    max-width:100%;
    height: auto;
  }

  .post-box {
    background-color: #fff;
  }

  .post-card .author, .text {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: normal;
  }

  .post-card .title{
    color: #F1A10A;
    font-size: 1.7rem;
    line-height: 1.8rem;;
    font-style:normal;
    font-weight: bold;
  }

  /* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */

</style>
