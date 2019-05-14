<template>
<div class="container" >
    
	<table id="cart" class="table table-hover table-condensed">
        <thead>
            <tr>
                <th style="width:50%">Product</th>
                <th style="width:10%">Price</th>
                <th style="width:8%">Quantity</th>
                <th style="width:22%" class="text-center">Subtotal</th>
                <th style="width:10%"></th>
            </tr>
        </thead>
   
        <tbody v-for="item in dataItems" :key="item.id">
      
            <tr>
                <td data-th="Product">
                    <div class="row">
                        <div class="col-sm-2 hidden-xs"><img :src="item.thumbnail" alt="..." class="img-responsive w-100"/></div>
                        <div class="col-sm-10">
                            <h4 class="nomargin">{{item.title}}</h4>
                            <p>{{item.summary}}</p>
                        </div>
                    </div>
                </td>
                <td data-th="Price">{{item.price}} </td>
                <td data-th="Quantity">
                    <input type="number" class="form-control text-center" value="1">
                </td>
                <td data-th="Subtotal" class="text-center">{{item.price}}</td>
                <td class="actions" data-th="">
                    <button class="btn btn-info btn-sm"><i class="fa fa-sync"></i></button>
                    <button class="btn btn-danger btn-sm"><i class="fas fa-minus-square"></i></button>								
                </td>
            </tr>
           
        </tbody>
      
  
        <tfoot>
            <tr>
                <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center"><strong>Total </strong></td>
                <td><router-link to="/" class="btn btn-success">Checkout<i class="fas fa-angle-right"></i></router-link></td>
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
    //         cartList: ['hi']
    //     }
    // }
    // created(){
    //     eventBus.$on('cart-item', item => {
    //         this.cartList.push(item);       
    //     })  
    // }
    computed: {
        cartList() {
            return this.$store.state.sendData    
        },
        dataItems() {
            return this.$store.getters.dataItems;
        }
    }
    
}
</script>

<style scoped>
.table>tbody>tr>td, 
.table>tfoot>tr>td{
    vertical-align: middle;
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
	
	table#cart thead { display: none; }
	table#cart tbody td { display: block; padding: .6rem; min-width:320px;}
	table#cart tbody tr td:first-child { background: #333; color: #fff; }
	table#cart tbody td:before {
		content: attr(data-th); font-weight: bold;
		display: inline-block; width: 8rem;
	}
	
	table#cart tfoot td{
        display:block; 
    }
	table#cart tfoot td .btn{
        display:block;
    }
	
}

</style>
