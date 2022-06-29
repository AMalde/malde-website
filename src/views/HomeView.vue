<script setup lang="ts">
//import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>

    <div class="wrapper">
      <section class="page-description">
          <h1>
            There isnt much to say yet, but usually I dont have that much to say anyway. 
            I like to design things, think about har things, and solv problems that I think are worth solving. 
            Something more and more than that. 
            Yeah I’m just so fucking special learn from me and such and such. 
          </h1>
        </section>

        <section class="blog-post-feed-items">
          <div class="blog-post-feed-item">
            <div class="blog-post-feed-item_header">
              <h3 class="title title-bold">
                Title of the Blog Post
              </h3>
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
  background: red; 
  padding-bottom: var(--padding-32)
  
}

.blog-post-feed-item .blog-post-feed-item_body {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: blue; 

  padding-bottom: var(--padding-32)
}

.blog-post-feed-item .blog-post-feed-item_footer {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: green; 
}



  h1 {
    color: var(--color-text-black);
  }


</style>
