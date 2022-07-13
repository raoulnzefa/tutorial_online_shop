<template>
    <div class="v-cart">
        <router-link :to="{name: 'catalog'}" >
            <div class="v-ctalog__link_to_cart">
                Back to catalog
            </div>
        </router-link>
        <p v-if="CART.length == 0">cart is empty</p>
       <vCartItemVue
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart ="deleteFromCart(index)"
        @decrementItem = "decrement(index)"
        @incrementItem = "increment(index)"
       /> 
       <div class="v-cart__total">
        <p>Total:</p>
        <p>{{cartTotlaCost}} Р.</p>
       </div>    
    </div>  
</template>

<script>
    import vCartItemVue from './v-cart-item.vue'
    import { mapActions, mapGetters } from 'vuex'

    export default{
        name: 'v-cart',
        components:{
            vCartItemVue
        },
        props: {
            // cart_data:{
            //     type: Array,
            //     default(){
            //         return []
            //     }
            // },
        },
        data(){
            return{
               title: 'Cart',
               cart_data:{
                type: Array,
                    default(){
                        return []
                    }
                },
            }
        },
        computed:{
            ...mapGetters([
                "CART",
            ]),
            cartTotlaCost(){
                let result =[];
                if (this.CART.length){
                    for (let item of this.CART){
                   result.push(item.price*item.count)
                }
                result = result.reduce(function(sum, curr){
                    return sum+curr;
                })
                return result
                }
                return 0
            },

        },
        methods: {
             ...mapActions([
                'DELETE_FROM_CARD',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM',
            ]),
            increment(index){
                this.INCREMENT_CART_ITEM(index)
            },
            decrement(index){
                this.DECREMENT_CART_ITEM(index)
            },
            deleteFromCart(index){
                console.log(index);
                this.DELETE_FROM_CARD(index)
            },
        },
        watch:{},
        mounted(){
            this.cart_data = this.CART
        },

    }
</script>
<style > 
    .v-cart{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
    }
    .v-cart__total{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(86, 171, 190);
        color: #fff;
        padding: 20px;
    }
</style>