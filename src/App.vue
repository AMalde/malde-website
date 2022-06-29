<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>

  
  <header>
    <div class="wrapper">
      <nav>
        <div class="left-navigation-section">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
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
@import '@/assets/base.css';

footer {
  width: 100%;
  min-height: 200px;
  background: blue;  
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
  margin: 0 auto 2rem;
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
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    width: 100%;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
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
</style>
