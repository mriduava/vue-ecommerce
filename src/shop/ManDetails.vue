<template>
 <div class="container-fluid pl-5 pr-5 mxl-md-5 mr-md-5">
   <div class="row">
     <div class="col-lg-10 mx-auto">
      <div class="card flex-row flex-wrap f-cont">
        <div class="card-header border-1">
            <img style="width:100%" :src="product.thumbnail">
        </div>
        <div class="card-block p-3">
            <h3 class="card-title text-secondary"> {{product.title}} </h3>
            <p class="card-text"> {{product.summary}} </p>
            <h5 class="text-info">Price: {{product.price}} </h5>
             <label for="quantity">Quantity</label>
            <input name="quantity" min="1" type="number" class="quantity" v-model="quantity">
            <button class="btn btn-success btn-sm" @click="addToCart()">ADD TO BAG</button>
            <p>
              <router-link to="/men">CONTINUE SHOPPING</router-link>
            </p>
        </div>
        <div class="w-100"></div>
        <!-- <div class="card-footer w-100 text-muted">
            FOOTER
        </div> -->
     </div>
     </div>
   </div>

 </div>
</template>

<script>
import Vue from "vue";
import {store} from '../store.js'
import StoryblokClient from 'storyblok-js-client'
import Cart from './Cart'
// import {eventBus} from '../main';
import { log } from 'util';

const token = 'vzwC59CqmD9irvJTGSQVKAtt';
let storyapi = new StoryblokClient({
  accessToken: token
}) 
export default {
  name: 'ManDetails',
  components: {
    Cart
  },
  data () {
    return {
      product: {},
      quantity: 1,
      sendData: []
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
    addToCart(){
        let item = {product: this.product, quantity: this.quantity};
        // this.$emit('cart-item', item);
        // this.sendData.push(item)
        this.$store.state.sendData.push(item)
        console.log(this.sendData);
    },
    getStory(slug, version) {
      storyapi.get('cdn/stories/' + this.$route.params.manid, {
        version: 'draft'
        // starts_with: 'men/'
      })
      .then(res => {
          // console.log(res.data.story.content);          
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
.card-header{
  height: 420px;
  overflow: hidden;
}

.quantity{
  width: 50px;
  padding: 0.5%;
  margin: 4%;
}

</style>
