<script setup>
  import SocialMediaIcon from '@/components/StandardComponents/socialMediaIcon.vue'
  import Behance from '@/assets/img/socialMediaIcon/Behance.svg'
</script>

<template>
  <div class="wrapper">
      <section class="page-description">
        <h1>
          Most of the things I have done are spread around on the internet. I’m working on getting everything stored in one place
        </h1>

        <SocialMediaIcon
            :img="'Behance.svg'"
            :name="'Behance'"
         />
         <SocialMediaIcon
            :img="`${Behance}`"
            :name="'Instagram'"
         />
         <SocialMediaIcon
            :img="`${Behance}`"
            :name="'Dribbble'"
         />
         <SocialMediaIcon
            :img="`${Behance}`"
            :name="'Facebook'"
         />
         <SocialMediaIcon
            :img="`${Behance}`"
            :name="'Linkedin'"
         />
         <SocialMediaIcon
            :img="`${Behance}`"
            :name="'Linkedin'"
         />
        
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  
}



h1 {
    color: var(--color-text-black-700);
  }

.page-description {
  width: 100%;
  margin-top: var(--margin-large) 
}
</style>
