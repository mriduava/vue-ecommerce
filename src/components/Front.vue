<template>
    <div class="container-fluid h-70 px-0" id="#front">
      <div class="row h-100 justify-content-center align-items-center">

        <div class="col-md-10 ml-1 mt-2">
            <h1 class="front-title">
              Happiness is...
            </h1>
            <p class="front-text">
              receiving what you order online.
            </p>
            <div class="shop-btn mb-3">
                <button class="btn custom-btn">Shop Online</button>
            </div>
        </div>

        <!-- <div class="col-md-8">
          <div class="graphic">
              <img class="w-100" src="#" alt="">
          </div>
        </div> -->

      </div>
    </div>
</template>

<script>
export default {
name: "Front",

};
</script>

<style scoped lang="scss">
@font-face {
  font-family: Eternal;
  src: url('../../public/fonts/eternal.ttf');
}
  .container-fluid{
    background-image: url("../../public/img/fashion.jpg");
    background-size: cover;
      background-attachment: fixed;
    margin-top: -7rem !important;
    width: 100%;
    height: 100vh;
    text-align: left;
    overflow: hidden;
    .front-title{
      margin-left: 5%;
      color: #e84393;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      font-family: Eternal;
      font-size: 8rem;
    }
    .front-text,
    & .shop-btn{
      color:#f368e0;
      margin-left: 2%;
      font-size: 1.6rem;
    }
    .btn{
      color: #f368e0;
      border: 1px solid #e84393;
      &:hover{
        background: #e84393;
        color: #fff;
      }
    }
  }
</style>