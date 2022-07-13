<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart'}" >
            <div class="v-ctalog__link_to_cart">
                Cart: {{CART.length}}
            </div>
        </router-link>

    <vCatalogItemVue
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
       ></vCatalogItemVue>
    </div>  
</template>
<script>
    import vCatalogItemVue from './v-catalog-item.vue'
    import { mapActions, mapGetters } from 'vuex';

    export default{
        name: 'v-catalog',
        components:{
            vCatalogItemVue,
        },
        props: {

        },
        data(){
            return{
                title: 'Catalog'
            }
        },
        computed:{
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart (data){
                this.ADD_TO_CART(data)
            }
            
        },
        watch:{},
        mounted(){
            this.GET_PRODUCTS_FROM_API()
            .then(response =>{
                if(response.data){
                    console.log("DATA arrived!");
                }
            })
        },

    }
</script>
<style  > 
    .v-catalog{
        display: flex;
        flex-wrap: wrap;
        gap: 2vh;
    }
    .v-ctalog__link_to_cart{
        text-decoration: underline;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
        border: 1px solid #fafa;
        padding: 10px;
    }
</style>