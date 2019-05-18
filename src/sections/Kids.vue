<template>
 <div class="container-fluid pl-5 pr-5 mxl-md-5 mr-md-5">
   <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6" v-for="man in kidsData" :key="man.id">
      <div class="card">
        <div class="pro-img">
           <img :src="man.content.thumbnail" class="card-img-top croped" alt="mridufashion">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ man.content.title }}</h5>
          <p class="card-text">{{ man.content.summary.substring(0, 100) }}</p>
          <h5 class="price float-right text-primary">{{man.content.price}} Kr</h5>
        </div>

        <div class="card-footer">
           <router-link to="id"><a class="btn btn-outline-warning btn-sm text-dark">LIKE</a></router-link>
           <router-link :to="'/men/' + man.id"><a class="btn btn-outline-success btn-sm ml-2">ADD TO BAG</a></router-link>
        </div>
     </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'Men',
  computed: {
    kidsData(){
      return this.$store.getters.allKidsData;
    }    
  },
  mounted() {
    this.$store.dispatch('getStoryKidsData')
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
