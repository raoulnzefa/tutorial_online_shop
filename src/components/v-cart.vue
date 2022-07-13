<template>
    <div class="v-cart">
        <h1>CATALOg</h1>
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
    import { mapActions } from 'vuex'

    export default{
        name: 'v-cart',
        components:{
            vCartItemVue
        },
        props: {
            cart_data:{
                type: Array,
                default(){
                    return []
                }
            },
        },
        data(){
            return{
               
            }
        },
        computed:{

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

        },

    }
</script>
<style > 
    
</style>