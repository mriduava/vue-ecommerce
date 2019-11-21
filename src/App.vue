<template>
  <v-app id="app">
 
    <NavBar/>
    <router-view />

 </v-app>
</template>

<script>
import ManDetails from './shop/ManDetails'
import WomanDetails from './shop/WomanDetails'
import Cart from './shop/Cart'


export default {
  name: 'app',
  components: {
    ManDetails,
    WomanDetails,
    Cart
  }

}
</script>