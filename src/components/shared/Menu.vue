<template>
    <header>
      <div class="navbar navbar-dark box-shadow fixed-top">
        <div class="navbar-brand container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-start"><strong>Rockr Blog</strong></a>
          <div class="d-flex align-items-end">
            <router-link :to="{ name : 'home' }" :class="'navbar-brand d-flex align-items-end pr-5'">
              Posts
            </router-link>
            <a href="#" @click="$emit('open')" class="navbar-brand d-flex align-items-end">Contact</a>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    show: {
      required: true
    }
  }
}
</script>

<style>

  .navbar{
    background: rgba(44,44,44,1);
  }

  .navbar .container{
    margin-right: 15%;
    margin-left: 15%;
  }

  .navbar-brand{
    font-size: 1.8rem;
  }

</style>
