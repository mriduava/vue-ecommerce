<template>
    <div class="container-fluid h-70 px-0" id="#front">
      <div class="row h-100 justify-content-center align-items-center">

        <div class="col-md-10 ml-3 mt-2">
            <h1 class="front-title">
              Happiness is...
            </h1>
            <p>
              Receiving what you order online.
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
  .container-fluid{
    background-image: url("../../public/img/fashion.jpg");
    background-size: cover;
      background-attachment: fixed;
    margin-top: -7rem !important;
    width: 100%;
    height: 100vh;
    text-align: left;
    overflow: hidden;
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