<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import app from './Services/firebase'

  export default defineComponent ({
        name: 'board',
        setup() {
            // https://composition-api.vuejs.org/api.html#template-refs
            const canvasRef = ref<HTMLCanvasElement | null>(null)
            const width: number = 100
            const height: number = 100
            // convert width and height to ref also if reactive

            onMounted(() => {
                console.log(canvasRef.value) // canvas

                //testing if firebase is present
                console.log(app)
            })

            return {
                canvasRef,
                width,
            }
        }
    })
</script>

<template>
  <div>

  
  <header>

    <canvas 
      ref="canvasRef" 
      class="canvas-background"
      :width="width" :height="height" tabindex='0'
    ></canvas>

    <div class="wrapper">
      <nav>
        <div class="left-navigation-section">
          <router-link :to="'/'">
            <img alt="Vue logo" class="logo" src="@/assets/img/logo.png" width="125" height="125" />
          </router-link>
          <RouterLink to="/thoughts">Thoughts</RouterLink>
          <RouterLink to="/design">Design</RouterLink>
        </div>
        <div class="right-navigation-section">
          <div class="hamburger"></div>
        </div>
        
      </nav>
    </div>
  </header>

   
       <RouterView />
   

    <footer>

    </footer>
  </div>
</template>

<style>
@import '@/assets/css/base.css';

footer {
  width: 100%;
  min-height: 200px;
  background: black;  
}

#app {
  max-width: 100%;
  margin: 0 auto;

  font-weight: normal;
}

header {
  max-height: 100vh;
  width: 100%;
}

.logo {
  display: block;
  height: 30px;
  width: auto;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  font-size: 18px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  position: relative; 
  top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  padding-top: var(--margin-large);

}
nav .left-navigation-section {
  display: flex;
  align-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text-black);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 18px; 
  color: var(--color-text-black); 
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    width: 100%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    width: 100%;
    font-size: 12px;
    position: relative; 
    top: 0;
    display: flex;
    
  }
}

.canvas-background {
  position: absolute;
  left: 0; 
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;    
}
</style>

