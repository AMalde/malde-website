<script setup>
    import { reactive } from 'vue'
    import BlogEntryFeedItem from './BlogEntryFeedItem.vue'

        const data = reactive({
            posts: [{
                title: "this is the title of the blog post 1", 
                content: "this is the content of the blog post",
                tags: ["tag1", "tag2", "tag3"] 
            },
            {
                title: "this is the title of the blog post 2", 
                content: "this is the content of the blog post",
                tags: ["tag1", "tag2", "tag3"] 
            },
            {
                title: "this is the title of the blog post 3", 
                content: "this is the content of the blog post",
                tags: ["tag1", "tag2", "tag3"] 
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