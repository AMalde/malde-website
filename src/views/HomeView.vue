<script setup>
  import BlogEntryFeed from '../components/BlogElements/Feed/BlogEntryFeed.vue'
</script>


<template>
  <main>

    <div class="wrapper">
      <section class="page-description">
          <h1>
            I <router-link :to="'/thoughts'"><b class="bold-text">write</b></router-link> to make sense of the world, 
            and <router-link :to="'/design'"><b class="bold-text">design</b></router-link> to try to make it better. 
            Occationaly I <router-link :to="'/podcast'"><b class="bold-text">interview</b></router-link> really smart and interesting people. <b class="bold-text">This page is currently being built.</b>
          </h1>
        </section>

        <section class="blog-post-feed-items light-theme">
          <BlogEntryFeed />

          <button class="secondary-button centered">
            See More
          </button>
        </section>
      </div>
  </main>
</template>

<style scoped>

.page-description {
  width: 100%;
  margin-top: var(--margin-large) 
}

.page-description a {
  font-size: var(--font-size-large);
  line-height: 1.5;
  color: var(--color-text-black);
  background-color: hsla(160, 100%, 37%, 0.2);


  border-radius: 100px;
  padding: 5px 20px;
  margin: -10px -10px;
}

.blog-post-feed-items {
  margin-top: var(--margin-large);
  margin-bottom: var(--margin-large);
  width: 100%;
}

.blog-post-feed-item {
  width: 100%;
  height: auto;  
}

.blog-post-feed-item .blog-post-feed-item_header {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: var(--padding-32)
}

.blog-post-feed-item .blog-post-feed-item_body {
  width: 100%;
  height: auto;
  box-sizing: border-box;

  padding-bottom: var(--padding-32)
}

.blog-post-feed-item .blog-post-feed-item_footer {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

  h1 {
    color: var(--color-text-black-700);
  }

  .bold-text {
    font-weight: 900;
    color: var(--color-text-black-900);
    cursor: pointer;
  }

  .blog-post-feed-items
  .secondary-button {
    margin-top: var(--margin-medium);
  }


</style>
