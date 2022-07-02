<script setup>
    const props = defineProps([
        'image', 
        'name'
    ])

    const getImageUrl = (imgTitle) => {
        return new URL(`@/assets/img/SocialMediaIcon/Behance.svg`, import.meta.url).href
    }
</script>

<template>
    <div class="social-media-icon">
        <img :src="getImageUrl(image)" alt="">
        <h3>
            {{name}}
        </h3>
    </div>
</template>

<style scoped>
    .social-media-icon {
        border-radius: 10px;
        box-sizing: border-box;
        border: solid 0.5px rgba(23,23,23, 0.5);
        padding: 32px; 
        width: auto;
    }

    .social-media-icon img {
        width: 100px; 
        height: 100px;
    } 
</style>