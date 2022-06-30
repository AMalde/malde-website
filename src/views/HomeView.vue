<script setup lang="ts">
//import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>

    <div class="wrapper">
      <section class="page-description">
          <h1>
            I <a href="/thoughts"><b class="bold-text">write</b></a> to make sense of the world, 
            and <a href="/design"><b class="bold-text">design</b></a> to try to make it better. 
            Occationaly I <a href="/podcast"><b class="bold-text">interview</b></a> really smart and interesting people.
          </h1>
        </section>

        <section class="blog-post-feed-items light-theme">
          <div class="blog-post-feed-item">
            <div class="blog-post-feed-item_header">
              <router-link :to="'/thoughts/1'">
                <h3 class="title title-bold dark-text">
                  Title of the Blog Post
                </h3>
              </router-link>
            </div>
            <div class="blog-post-feed-item_body">
                <p class="description description_regular">
                  There isnt much to say yet, but usually I dont have that much to say anyway. I like to design things, think about har things, and solv problems that I think are worth solving. Something more and more than that. Yeah I’m just so fucking special learn from me and such and such.
                </p>
            </div>
            <div class="blog-post-feed-item_footer">
              <p class="extra-info">
                something 
              </p>
            </div>
          </div>
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


</style>
