<template>
 <div class="conatiner">
    <nav class="navbar navbar-expand-lg navbar-light px-lg-5 mx-lg-5">
     <router-link to='/' class="navbar-brand ml-4">Fashion</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-lg-3 pr-1">
       
            <li class="nav-item">
                <router-link class="nav-link" to="/men">MEN</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/women">WOMEN</router-link>
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
  .navbar-brand{
      font-size: 3.5rem;
      font-family: Movu;
    //   margin-left: 4%;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #e83e8c;
    }
  }
  .itemNumber{
    //   position: absolute;
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

</style>




