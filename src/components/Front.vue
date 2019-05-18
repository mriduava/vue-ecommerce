<template>
    <div class="container p-0" id="#front">
      <div class="row d-flex">

        <div class="col-lg-4 front-caption pl-5 pt-5 mt-5 pb-0">
            <h1 class="front-title">
              Happiness is...
            </h1>
            <p class="front-text">
              receiving what you order online.
            </p>
            <div class="shop-btn">
                <button class="btn custom-btn">Shop Online</button>
            </div>
        </div>

        <!-- TO DISPLAY FRONT IMAGES -->
        <div class="col-lg-8 mb-0">
          <FrontDisp/>
        </div>

        <div class="d-block">
        <div class="row my-5 pb-4">
            <div class="col-8 mx-auto">
                <div class="card-body text-center">
                    <h2 class="card-title poiret">TOP QUALITY AT A GREAT PRICE</h2>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Velit nisi molestiae eligendi officiis 
                        cum repudiandae, soluta, voluptas ipsum possimus nam 
                        dolores error doloribus dicta nesciunt sit autem cupiditate 
                        necessitatibus earum.
                    </p>
                </div>
            </div>
        </div>
      </div>  

      </div>
      
      <!-- TO DISPLAY CAROUSEL -->
        <h1 class="poiret text-secondary text-center">RECENT COLLECTIONS</h1>
      <div class="row">
       
        <div class="col-lg-12">

          <Carousel/>

        </div>
      </div>
      

    </div>
</template>

<script>
import Carousel from './Carousel.vue'
import FrontDisp from './FrontDisp.vue'
export default {
name: "Front",
components: {
  Carousel,
  FrontDisp
},
// data() {
//   return limitation = 1
// },
  computed: {
    storyData(){
      return this.$store.getters.allStoryData;
    }    
  }

};
</script>

<style scoped lang="scss">
@font-face {
  font-family: Eternal;
  src: url('../../public/fonts/eternal.ttf');
}

  .container{
    // background-image: url("../../public/img/fashion.jpg");
    background-color: #fff;
    // background-size: cover;
    // background-attachment: fixed;
    // margin-top: -7rem !important;
    width: 100%;
    text-align: left;
    overflow: hidden;
    border: 2px solid #e4e4e4;
    .front-caption{

      .front-title{
      margin-left: 2.5%;
      margin-top: 2%;
      padding-top: 2.5%;
      padding-left: 5.7%;
      color: #e84393;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      font-family: Eternal;
      font-size: 7rem;
    }
    .front-text,
    & .shop-btn{
      color:#f368e0;
      margin-left: 2%;
      font-size: 1.6rem;
    }
  }

    .btn{
      color: #f368e0;
      border: 1px solid #e84393;
      &:hover{
        background: #e84393;
        color: #fff;
      }
    }

  }
</style>