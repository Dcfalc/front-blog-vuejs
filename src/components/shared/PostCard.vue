<template>
    <div class="d-flex">
        <div class="post-card align-self-center">
            <p class="author pb-3 m-0">{{post.author}}</p>
            <h3 class="title">{{post.title}}</h3>
            <p class="text">{{post.text}}</p>
        </div>

        <div class="btt">
            <router-link :to="{ name : 'post', params: { id: post.id} }">
                <img src="/images/double-arrow.svg" alt="">
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      required: true
    }
  }
}
</script>
