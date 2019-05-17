<template>
  <v-app id="app">
 
    <NavBar/>
    <router-view />

 </v-app>
</template>

<script>
import ManDetails from './shop/ManDetails'
import Cart from './shop/Cart'


export default {
  name: 'app',
  components: {
    ManDetails,
    Cart
  }

}
</script>


<style lang="scss">


</style>
