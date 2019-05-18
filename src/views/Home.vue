<template>
 <div>
   
   <div class="back-image">
    <Front/>
   </div>

    <!-- <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      </v-flex>
    </v-layout> -->

    <Footer/>

  </div>
</template>

<script>
import Front from '@/components/Front'
import Footer from '@/components/Footer'


export default {
  name: "home",
  components: {
    Front,
    Footer
  }
};
</script>

<style scoped>
.back-image{
  
  /* background-image: url("../../public/img/fashion.jpg"); */
  /* background: #ddd; */
  /* margin-top: -7rem !important; */
}
</style>

