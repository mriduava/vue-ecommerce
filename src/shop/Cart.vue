<template>
<div class="container" >
    
	<table id="cart" class="table table-hover table-condensed">
        <thead>
            <tr>
                <th style="width:40%">Product</th>
                <th style="width:10%">Price</th>
                <th style="width:8%">Quantity</th>
                <th style="width:18%" class="text-center">Subtotal</th>
                <th style="width:15%">Remove</th>
            </tr>
        </thead>
   
        <tbody v-for="(item) in cartItems" :key="item.id">
      
            <tr>
                <td data-th="Product">
                    <div class="row">
                        <div class="col-sm-2 hidden-xs"><img :src="item.thumbnail" alt="..." class="img-responsive w-100"/></div>
                        <div class="col-sm-10">
                            <h4 class="nomargin">{{item.title}}</h4>
                            <p>{{item.summary.substring(0, 60)}}</p>
                        </div>
                    </div>
                </td>
                <td data-th="Price">{{item.price}} kr</td>
                <td data-th="Quantity">
                    <input name="quantity" min="1" type="number" class="quantity px-2" v-model="item.quantity">
                </td>
                <td data-th="Subtotal" class="text-center">{{(item.price*item.quantity).toFixed(2)}} kr</td>
                <td class="actions" data-th="">
                    <!-- <button class="btn btn-info btn-sm"><i class="fa fa-sync"></i></button> -->
                    <button class="btn btn-danger btn-sm px-2 mx-3" @click="removeItem()"><i class="fas fa-minus-square"></i></button>								
                </td>
            </tr>
        </tbody>
      
  
        <tfoot>
            <tr>
                <td><router-link to="/women" class="btn btn-outline-info btn-sm"><i class="fa fa-angle-left"></i> Continue Shopping</router-link></td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center">TOTAL <strong> {{total.toFixed(2)}} kr</strong></td>
                <td><router-link to="/cart/checkout" class="btn btn-success btn-sm px-4">Checkout <i class="fas fa-angle-right"></i></router-link></td>
            </tr>
        </tfoot>
 
    </table>

 </div>    
</template>

<script>
import Vue from "vue";
import ManDetails from './ManDetails'
// import {eventBus} from '../main';
export default {
    name: 'Cart',
    components: {
        ManDetails
    },
    // data() {
    //     return {
    //         quantity: 1
    //     }
    // },
    // created(){
    //     eventBus.$on('cart-item', item => {
    //         this.cartList.push(item);       
    //     })  
    // }
    methods: {
        removeItem() {
           this.$store.commit("DELETE_ITEM");
        }

    },
    computed: {
        cartList() {
            return this.$store.state.sendData    
        },
        cartItems() {
            return this.$store.getters.cartItems;
        },
        total() {
            let total = 0;
            for(let i=0; i<this.$store.getters.cartItems.length; i++){
                let item = this.$store.getters.cartItems[i];
                total += item.quantity*item.price
            }
            return total;
        }
        // removeItem(id) {
        //     this.$store.commit("DELETE_ITEM");
            // let index = this.$store.state.cartData.findIndex(item => item.id == id);
            // this.$store.state.cartdData.splice(inex, 1)
        // }
    }
    
}
</script>

<style scoped>
.table>tbody>tr>td, 
.table>tfoot>tr>td{
    vertical-align: middle;
}
.quantity{
    width: 60px;
    height: 30px;
}
@media screen and (max-width: 600px) {
    table#cart tbody td .form-control{
		width:20%;
		display: inline !important;
	}
	.actions .btn{
		width:36%;
		margin:1.5em 0;
	}
	
	.actions .btn-info{
		float:left;
	}
	.actions .btn-danger{
		float:right;
	}
	
	table#cart thead { 
        display: none; 
        }
	table#cart tbody td { 
        display: block; 
        padding: .6rem; 
        min-width:320px;}
	table#cart tbody tr td:first-child { 
        background: #333; 
        color: #fff; 
        }
	table#cart tbody td:before {
		content: attr(data-th); 
        font-weight: bold;
		display: inline-block; 
        width: 8rem;
	}
	
	table#cart tfoot td{
        display:block; 
    }
	table#cart tfoot td .btn{
        display:block;
    }
	
}

</style>
