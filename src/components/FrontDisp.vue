<template>
       <!-- <div class="container"> -->
        <!-- <h4 class="text-center poiret text-info">ATTRACTIVE COLLECTIONS</h4> -->
        <div class="row mt-4 d-flex mx-auto">

          <div class="col-lg-4 col-md-6 col-sm-12"  v-for="(item, index) in womenData.slice(1, 2)" :item="item" :index="index" :key="item.id">
            <div class="mt-2 portrait">
                <router-link to="/women"><img class="w-100" :src="item.content.thumbnail" style="width: 100%;"></router-link>
            </div>
          </div>

          <div class="col-lg-4 col-md-12 col-sm-12 mt-2 order-2">
            <div class="row d-flex" v-for="(item, index) in menData.slice(2, 4)" :item="item" :index="index" :key="item.id">
                <div class="col-lg-12 col-md-6 col-sm-12">
                    <div class="women_g">
                        <router-link to="/men"><img class="w-100" :src="item.content.thumbnail"></router-link>
                    </div>
                </div>
          </div> 
          </div> 

          <div class="col-lg-4 col-md-12 col-sm-12 mt-2 order-3">
            <div class="row d-flex" v-for="(item, index) in womenData.slice(2, 4)" :item="item" :index="index" :key="item.id">
                <div class="col-lg-12 col-md-6 col-sm-12">
                    <div class="women_g">
                        <router-link to="/women"><img class="w-100" :src="item.content.thumbnail"></router-link>
                    </div>
                </div>
          </div> 
        </div>   

      </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'FrontDisp',
    computed: {
        womenData(){
           return this.$store.getters.allWomenData;
        },
        menData(){
           return this.$store.getters.allMenData;
        }     
    }

}
</script>



<style lang="scss" scoped>
.portrait{
    width: 100%;
    // height: 200px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    &:hover{
       opacity: 0.6;
	   filter: grayscale(50%);
    }
    img{
        margin-top: 2%;
    }
}
.women_g{
    margin: 2%;
    height: 142px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    &:hover{
       opacity: 0.6;
	   filter: grayscale(50%);
    }
}

</style>
