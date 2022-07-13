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
       /> 
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
            ])
        },
        methods: {
             ...mapActions([
                'DELETE_FROM_CARD'
            ]),
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
</style>