<template>
   <div class="container-fluid pl-5 pr-5 mxl-md-5 mr-md-5 mb-5">
   <div class="row">
     <div class="col-lg-12 mx-auto mb-5" v-for="inf in info" :key="inf.id">
      <div class="card">
        <div class="row">
         <div class="col-lg-2">
            
        </div>
        <div class="col-lg-3 my-md-2 py-5">
        <div class="card-header border-1">
            <img style="width:100%" :src="inf.content.thumbnail">
        </div>
        </div>

        <div class="col-lg-3 mt-3">
        <div class="card-block py-5">
            <h3 class="card-title text-secondary">{{inf.content.title}} </h3>
            <p class="card-text">{{inf.content.summary}}</p>
          </div>
        </div>

        <div class="col-lg-4 ml-4">
        </div>

        </div>
        <div class="w-100"></div>
            
        </div>
     </div>
     </div>
   </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'About',
  data() {
    return {
      info: []
    }
  },
  mounted() {
      const token = 'vzwC59CqmD9irvJTGSQVKAtt';   
      axios.get(`https://api.storyblok.com/v1/cdn/stories?version=draft&token=${token}&starts_with=about`).then(res => {        
      console.log(res.data.stories);
      this.info = res.data.stories;  
    })
   }

}
</script>

<style scoped>
/* @font-face {
  font-family: Venise;
  src: url('../../public/fonts/venise.ttf');
}*/
.card-title{
  font-size: 2rem;
} 
.card-block{
  white-space: pre-wrap;
}

</style>

