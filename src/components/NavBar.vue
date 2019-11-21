<template>
 <div class="conatiner">
  <div class="row">
    <div class="col-lg-12" id="navbar">
    <nav class="navbar navbar-expand-md navbar-light ">
     <router-link to='/' class="navbar-brand">Fashion</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
       
            <li class="nav-item">
                <router-link class="nav-link" to="/women">WOMEN</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/men">MEN</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/kids">KIDS</router-link>
            </li>

             <li class="nav-item">
                <router-link to="/cart" class="nav-link"><i class="fas fa-cart-plus"></i><span class="itemNumber" id="itemCount"> {{countItems}} </span></router-link>
            </li>

            <li class="nav-item">
                <router-link to="/about" class="nav-link">ABOUT</router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" to="/login">SIGN IN</router-link>
            </li>
            </ul>
        </div>
    </nav>

   </div>
  </div>
</div>
</template>

<script>
import {store} from '../store.js'
export default {
    computed: {
        countItems() {
            return this.$store.state.cartData.length
        }
    }

}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Movu;
  src: url('../../public/fonts/movu.otf');
}
.navbar {
  z-index: 10;
  background: transparent;
   margin: 0 6.3%;
  .navbar-brand{
      font-size: 3.5rem;
      font-family: Movu;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #e83e8c;
    }
  }
  .itemNumber{
      font-size: 1rem;
      background-color: #e83e8c;
      width: 20px;
      height: 20px;
      padding-right: 5px;
      padding-left: 1px;
      margin-right: 30px;
      top: 29px;
      color: aliceblue;
      border: 2px solid #ddd;
      border-radius: 50%;
      text-align: center;
  }

}
 
/* Large screens ----------- */
@media only screen and (min-width : 1824px) {
    #navbar{
        margin-left: 14.3%;
        padding-right: 29.5%;
    }
}
 
</style>




