<template>
 <div class="container-fluid pl-5 pr-5 mxl-md-5 mr-md-5 mb-5">
   <div class="row">
     <div class="col-lg-12 mx-auto mb-5">
      <div class="card">
        <div class="row">
         <div class="col-lg-2">
            
        </div>
        <div class="col-lg-3 my-md-2 py-5">
        <div class="card-header border-1">
            <img style="width:100%" :src="product.thumbnail">
        </div>
        </div>

        <div class="col-lg-3 m-0">
        <div class="card-block py-5">
            <h3 class="card-title text-secondary"> {{product.title}} </h3>
            <p class="card-text"> {{product.summary}} </p>
            <h5 class="text-info">Price: {{product.price}} </h5>
             <label class="text-secondary" for="quantity">Quantity</label>
            <input name="quantity" min="1" type="number" class="quantity" v-model="product.quantity">
            <button class="btn btn-success btn-sm" @click="addToCart()">ADD TO BAG</button>
                   
          <div class="mt-3">     
            <router-link to="/men" class="btn btn-outline-info btn-sm"><i class="fa fa-angle-left"></i> Continue Shopping</router-link>
            <router-link to="/cart" class="btn btn-outline-info btn-sm ml-3"> Shopping Cart <i class="fa fa-angle-right"></i></router-link>
          </div> 
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
      product: {}
      // quantity: 1
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
        console.log(item);
    },
    getStory(slug, version) {
      storyapi.get('cdn/stories/' + this.$route.params.manid, {  // manid from router.js
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
  // width: 100%;
  // height: 560px;
  overflow: hidden;
}

.card-block .card-text{
  white-space: pre-wrap;
  word-break: normal;
}

.quantity{
  width: 50px;
  padding: 0.2%;
  margin: 4%;
}

</style>
