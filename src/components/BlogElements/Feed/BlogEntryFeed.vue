<script setup>
    import { reactive } from 'vue'
    import BlogEntryFeedItem from './BlogEntryFeedItem.vue'

        const data = reactive({
            posts: [{
                title: "this is the title of the blog post 1", 
                content: "There isnt much to say yet, but usually I dont have that much to say anyway. I like to design things, think about har things, and solv problems that I think are worth solving. Something more and more than that. ",
                tags: ["tag1", "tag2", "tag3"], 
                id: 1
            },
            {
                title: "this is the title of the blog post 2", 
                content: "There isnt much to say yet, but usually I dont have that much to say anyway. I like to design things, think about har things, and solv problems that I think are worth solving. Something more and more than that. ",
                tags: ["tag1", "tag2", "tag3"], 
                id: 2 
            },
            {
                title: "this is the title of the blog post 3", 
                content: "There isnt much to say yet, but usually I dont have that much to say anyway. I like to design things, think about har things, and solv problems that I think are worth solving. Something more and more than that. ",
                tags: ["tag1", "tag2", "tag3"], 
                id: 3
            }]
        })

</script>

<template>
    <div class="blog-feed">
        <div v-for="post in data.posts" :key="post.title">

            <BlogEntryFeedItem 
                :title="post.title"
                :content="post.content"
                :tags="post.tags"
                :id="post.id"
            />
            
        </div>
    </div>
    
</template>

<style scoped>
    .blog-feed {
        width: 100%;
        height: 400px;
        color: black; 
    }
</style>