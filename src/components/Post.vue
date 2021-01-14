<template>
  <main role="main" class="main">

    <div class="container post">

      <div class="row mx-0" v-if="load">

        <div class="col-md-6 p-0">
          <img :src="'/images/' + post.image" alt="">
        </div>

        <div class="col-md-6 p-0 post-box d-flex">
          <div class="post-card align-self-center">
            <p class="date-post">{{post.created_at}}</p> 
            <p class="author">{{post.author}}</p>
            <h3 class="title">{{post.title}}</h3>
          </div>
        </div>

        <div class="post-text" >
          <p v-for="(t, index) in this.post.text" v-bind:value="t" :key="index">{{t}}</p>
        </div>

      </div>

    </div>
  
  </main>
</template>

<script>
import { BlogService } from '@/services/Blog.service'

export default {
  name: 'post',

  data() {
    return {
        id: this.$route.params.id,
        post: [],
        load: false
    }
  },

  async mounted () {
    const id = this.$route.params.id
    try {
      let { post } = await BlogService.getPost(id)

      let res = post.text.split("\n");
      post['text'] = res

      const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      let date = new Date(post.created_at);
      date = months[date.getMonth()] +' '+ date.getDate() +', '+ date.getFullYear()
      post['created_at'] = date

      this.post = post
      this.load = true

    } catch (e) {
      console.error(e)
    }
  },

}
</script>

<style scoped>

  .main { 
    margin-top: 10rem;
  }

  .main .container{
    margin-right: 16%;
    margin-left: 16%;
    padding: 0;
    width: fit-content;
  }

  .post-card {
    padding-top: 1.4rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .post-card .date-post, .author, .title {
    margin-bottom: 2.4rem;
  }

  .post-card .date-post {
    font-size: .9rem;
    font-style: normal;
    font-weight: normal;
  }

  .post-text {
    background-color: #fff;
    padding: 6rem 12.5rem 10rem 12.5rem;
    margin-bottom: 10rem;
  }

  .post-text p {
    font-size: 1.2rem;
    font-weight: 500;
  }

</style>
