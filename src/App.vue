<template>
  <div id="app">

    <NavBar/>
    <router-view />

  </div>
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
