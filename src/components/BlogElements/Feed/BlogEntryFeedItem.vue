<script setup>

    const props = defineProps([
        'title', 
        'content', 
        'tags'
    ])
</script>

<template>
    <div class="blog-post-feed-item">
        <div class="blog-post-feed-item_header">
            <router-link :to="'/thoughts/1'">
            <h3 class="title title-bold dark-text">
                {{props.title}}
            </h3>
            </router-link>
        </div>
        <div class="blog-post-feed-item_body">
            <p class="description description_regular">
                 {{props.content}}
            </p>
        </div>
        <div class="blog-post-feed-item_footer" v-for= "tag in props.tags" :key="tag">
            <p class="extra-info">
                {{props.tags}}
            </p>
        </div>
    </div>
    
</template>