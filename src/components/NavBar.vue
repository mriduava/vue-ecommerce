<template>
 <div class="conatiner">
    <nav class="navbar navbar-expand-lg navbar-light px-sm-5 mx-md-5">
     <router-link to='/' class="navbar-brand" href="#">Fashion</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
       
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
                <router-link to="/about" class="nav-link">ABOUT</router-link>
            </li>

            <li class="nav-item">
                <a class="nav-link">SIGN IN</a>
            </li>
            </ul>
        </div>
    </nav>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Movu;
  src: url('../../public/fonts/movu.otf');
}
.navbar {
//   padding: 20px;
  z-index: 10;
  background: transparent;
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
}

</style>




