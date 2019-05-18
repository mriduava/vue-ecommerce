<template>
    <!--Carousel Wrapper-->
<div class="container">
<div id="multi-item-example" class="carousel slide carousel-multi-item carousel-multi-item-2" data-ride="carousel">

  <!--Controls-->
  <!-- <div class="controls-top">
    <a class="black-text" href="#multi-item-example" data-slide="prev"><i class="fas fa-angle-left fa-3x pr-3"></i></a>
    <a class="black-text" href="#multi-item-example" data-slide="next"><i class="fas fa-angle-right fa-3x pl-3"></i></a>
  </div> -->
  <!--/.Controls-->

  <!--Slides-->
  <div class="carousel-inner" role="listbox">

    <!--First slide-->
    <div class="carousel-item active">
      <div class="col-md-3 mb-3" v-for="(item, index) in menData.slice(0, 4)" :item="item" :index="index" :key="item.id">
        <div class="card">
          <img class="img-fluid" :src="item.content.thumbnail" alt="Card image cap">
        </div>
      </div>
    </div>

    <!--Second slide-->
    <div class="carousel-item">
      <div class="col-md-3 mb-3" v-for="(item, index) in womenData.slice(0, 4)" :item="item" :index="index" :key="item.id">
        <div class="card">
          <img class="img-fluid" :src="item.content.thumbnail" alt="Card image cap">
        </div>
      </div>

    </div>
    <!--/.Second slide-->

    <!--Third slide-->
    <div class="carousel-item">

      <div class="col-md-3 mb-3" v-for="(item, index) in kidsData.slice(0, 4)" :item="item" :index="index" :key="item.id">
        <div class="card">
          <img class="img-fluid" :src="item.content.thumbnail" alt="Card image cap">
        </div>
      </div>

    </div>
    <!--/.Third slide-->

  </div>
  <!--/.Slides-->

</div>
<!--/.Carousel Wrapper-->
</div>
</template>

<script>
export default {
    name: 'Carousel',
    computed: {
        womenData(){
           return this.$store.getters.allWomenData;
        },
        menData(){
           return this.$store.getters.allMenData;
        },
        kidsData(){
           return this.$store.getters.allKidsData;
        }      
    },
    mounted() {
        this.$store.dispatch('getStoryMenData')
    }
}
</script>

<style scoped>
.card{
    height: 160px;
    overflow: hidden;
}
.carousel-multi-item-2 .card img {
    border-radius: 2px; 
}

@media (min-width: 768px) {
.carousel-multi-item-2 .col-md-3 {
    float: left;
    width: 25%;
    max-width: 100%; 
    } 
}

</style>
