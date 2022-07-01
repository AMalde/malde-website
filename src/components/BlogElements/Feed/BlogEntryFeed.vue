<script setup lang="ts">

</script>

<template>
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
    
</template>