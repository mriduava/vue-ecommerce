<template>
<div class="container p-0" id="#front">
  <div class="row d-flex">
  <main class="">
    <div class="container wow fadeIn">
      <h2 class="mb-4 h2 text-center">Checkout form</h2>
      <div class="row">
        <div class="col-md-8 mb-4">

          <div class="card">
            <form class="card-body">
              <div class="row">
                <div class="col-md-6 mb-0">
                  <div class="md-form ">
                    <label for="firstName" class="">First name</label>
                    <input type="text" id="firstName" class="form-control">                    
                  </div>
                </div>
 
                <div class="col-md-6 mb-4">
                  <div class="md-form">
                    <label for="lastName" class="">Last name</label>
                    <input type="text" id="lastName" class="form-control">                    
                  </div>
                </div>
              </div>
  
              <div class="md-form mb-3">
                <label for="email" class="">Email</label>
                <input type="text" id="email" class="form-control" placeholder="name@email.com">                
              </div>

              <div class="md-form mb-3">
                <label for="address" class="">Address</label>
                <input type="text" id="address" class="form-control" placeholder="1234 Main St">                
              </div>

              <div class="md-form mb-3">
                <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite">
              </div>

              <div class="row">

                <div class="col-lg-4 col-md-12 mb-4">
                  <label for="country">Country</label>
                  <select class="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>Sweden</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-3">
                  <label for="state">City</label>
                  <select class="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-3">
                  <label for="zip">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required>
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div>

              </div>

              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="same-address">
                <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info">
                <label class="custom-control-label" for="save-info">Save this information for next time</label>
              </div>

              <hr>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                  <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                  <label class="custom-control-label" for="paypal">Paypal</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required>
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required>
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-2">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div class="col-md-3 mb-2">
                  <label for="cc-expiration">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr class="mb-4"> -->
              <button class="btn btn-outline-success btn-lg btn-block" type="submit">Continue to checkout</button>

            </form>
          </div>

        </div>
        <div class="col-md-4 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill"> {{countItems}} </span>
          </h4>
          <ul class="list-group mb-3 z-depth-1" >
            <li class="list-group-item d-flex justify-content-between lh-condensed" v-for="(item) in checkItems" :key="item.id">
              <div>
                <h6 class="my-0"> {{item.title}} </h6>
                <small class="text-muted">{{item.summary.substring(10, 30)}}</small>
              </div>
              <span class="text-muted">{{item.price}} kr</span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </main>

 </div>
</div>
</template>

<script>
export default {
  name: 'Checkout',
  computed: {
     checkItems() {
        return this.$store.getters.cartItems;
     },
     countItems() {
        return this.$store.state.cartData.length
     }
  }
}
</script>

<style>

</style>
