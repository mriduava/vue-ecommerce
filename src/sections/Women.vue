<template>
 <div class="container-fluid pl-5 pr-5 mxl-md-5 mr-md-5">
   <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6" v-for="woman in storyData" :key="woman.id">
      <div class="card">
        <div class="pro-img">
           <img :src="woman.content.thumbnail" class="card-img-top croped" alt="mridufashion">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ woman.content.title }}</h5>
          <p class="card-text">{{ woman.content.summary.substring(0,100) }}</p>
          <h5 class="price float-right text-primary">{{woman.content.price}} Kr</h5>
        </div>

        <div class="card-footer bg-light">
           <router-link to="id"><a class="btn btn-outline-warning btn-sm text-dark">LIKE</a></router-link>
           <router-link :to="'/women/' + woman.id"><a class="btn btn-outline-success btn-sm ml-2">ADD TO BAG</a></router-link>
        </div>
     </div>
    </div>
  </div>
 </div>
</template>

<script>
import StoryblokClient from 'storyblok-js-client'
import axios from "axios";
import { log } from 'util';
const token = 'YOUR_TOKEN';
let storyapi = new StoryblokClient({
  accessToken: token
}) 
export default {
  name: 'Women',

  computed: {
    storyData(){
      return this.$store.getters.allWomenData;
    }    
  },
  mounted() {
    this.$store.dispatch('getStoryWomenData')
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
