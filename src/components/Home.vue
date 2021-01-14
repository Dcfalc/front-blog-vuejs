<template>
  <main role="main" class="main">
    <div class="post">

      <div v-for="(post, index) in this.posts" v-bind:value="post" :key="index">

        <div class="row mx-0">
          
          <div class="p-0 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-2"> 
            <img :src="'./images/' + post[0].image"  alt="">
          </div>

          <div class="p-0 post-box d-flex col-12 col-sm-12 col-md-8 col-lg-8 col-xl-4">
            <post-card :post="post[0]"/>
          </div>

          <div v-if="post[1]" class="p-0 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-2">
            <img :src="'./images/' + post[1].image"  alt="">
          </div>
          
          <div class="p-0 post-box d-flex col-12 col-sm-12 col-md-8 col-lg-8 col-xl-4">
            <post-card :post="post[1]"/>
          </div>

        </div>

        <div v-if="post[2]" class="row mx-0">

          <div class="col-md-4 p-0"></div>

          <div class="col-md-4 p-0">
            <img :src="'./images/' + post[2].image"  alt="">
          </div>

          <div class="col-md-4 p-0 post-box d-flex">
            <post-card :post="post[2]"/>
          </div>

        </div>

        <div v-if="post[3]" class="row mx-0">
          
          <div class="p-0 post-box d-flex col-12 col-sm-12 col-md-8 col-lg-8 col-xl-4">
            <post-card :post="post[3]"/>
          </div>

          <div class="p-0 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-2"> 
            <img :src="'./images/' + post[3].image"  alt="">
          </div>

          <div v-if="post[4]" class="p-0 post-box d-flex col-12 col-sm-12 col-md-8 col-lg-8 col-xl-4">
            <post-card :post="post[4]"/>
          </div>

          <div v-if="post[4]" class="p-0 col-12 col-sm-12 col-md-4 col-lg-4 col-xl-2"> 
            <img :src="'./images/' + post[4].image"  alt="">
          </div>

        </div>

        <div v-if="post[5]" class="row mx-0">

          <div class="col-md-4 p-0">
            <img :src="'./images/' + post[5].image"  alt="">
          </div>

          <div class="col-md-4 p-0 post-box d-flex">
            <post-card :post="post[5]"/>
          </div>

          <div class="col-md-4 p-0"></div>

        </div>

      </div>
    </div>
  </main>
</template>

<script>
import { BlogService } from '@/services/Blog.service'
import PostCard from './shared/PostCard.vue';

export default {
  name: 'Home',

  components: {
    'post-card' : PostCard
  },

  data () {
    return {
      posts: [],
    }
  },

  async mounted () {
    try {
      const { posts } = await BlogService.getPosts()
      
      var corte = 6;

      for (var i = 0; i < posts.length; i = i + corte) {
        this.posts.push(posts.slice(i, i + corte));
      }

    } catch (e) {
      console.error(e)
    }
  },

}
</script>

<style>

  .main { 
    margin-top: 8rem;
  }

  .post .row {
    margin-bottom: 4rem;
  }

  .post-box {
    position:relative;
  }

  .post-card {
    padding-top: 1.4rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .btt {
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    bottom: 2rem;
    right: 2rem;
  }

</style>

