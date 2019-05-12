<template>
 <div class="container-fluid pl-5 pr-5 mxl-md-5 mr-md-5">
   <div class="row">
     <div class="col-8">

    
    <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img style="width: 100%" :src="product.thumbnail">
        </div>
        <div class="card-block p-3">
            <h3 class="card-title text-secondary">hi</h3>
            <p class="card-text">Hel</p>
            <h5 class="text-primary">Hi</h5>
            <a href="#" class="btn btn-warning">ADD TO BAG</a>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
            FOOTER
        </div>
    </div>

     </div>
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
  name: 'ManDetails',
  data () {
    return {
      // image: '',
      // title: '',
      // price: '',
      // content: '',
      product: {}   
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
        this.getStory.filter('men', 'draft')
      } else {
        this.getStory('men', 'draft')
      }
    })
  },
  methods: {
    getStory(slug, version) {
      storyapi.get('cdn/stories/' + this.$route.params.manid, {
        version: 'draft'
        // starts_with: 'men/'
      })
      .then(res => {
          console.log(res.data.story.content);          
          return this.product = res.data.story.content
        
      });
    //   .catch((error) => {
    //     console.log(error);
    //   })
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-img{
    width: 100%;
    height: 250px;
    overflow: hidden;
}
</style>
