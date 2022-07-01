import { defineStore } from 'pinia'
import app from '../Services/firebase.js'

console.log(app)

export const blogEntriesStore = defineStore({
    id:'blogEntries', 
    state: () => ({
      posts: [
        {
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
      }
      ]
    }), 
    getters: {
      doubleCount: (state) => state.counter * 2
    },
    actions: {
      increment() {
        this.counter++
      }
    }
  })