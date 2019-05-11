<template>
 <div>
    <!-- <NavBar/> -->
    {{msg}}
    <div v-for="woman in story" :key="woman.id">
        {{woman.content.title}}
    </div>


 </div>
</template>

<script>
import StoryblokClient from 'storyblok-js-client'
import { log } from 'util';
const token = 'vzwC59CqmD9irvJTGSQVKAtt';
let storyapi = new StoryblokClient({
  accessToken: token
}) 
export default {
  name: 'Women',
  data () {
    return {
      msg: 'Women Collections',
      story: { }
    }
  },
    created () {
    window.storyblok.init({
      accessToken: token
    })
    window.storyblok.on('change', () => {
      this.getStory('men', 'draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory.filter('women', 'draft')
      } else {
        this.getStory('women', 'draft')
      }
    })
  },
    methods: {
    getStory(slug, version) {
      storyapi.get('cdn/stories/', {
        version: 'draft',
        starts_with: 'kids/'
      })
      .then((response) => {
        console.log(response.data.stories);
        
        this.story = response.data.stories
      })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    }
  }
}
</script>

<style>

</style>
