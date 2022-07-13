<template>
    <div class="v-main-wrapper">
        <p>{{title}}</p>
        <vCatalogVue></vCatalogVue>
        <vCartVue
            v-if="CART.length"
            :cart_data="CART"
        />
    </div>  
</template>
<script>
    import vCatalogVue from './v-catalog.vue'
    import vCartVue from './v-cart.vue'
    import { mapGetters } from 'vuex'
    export default{
        name: 'v-main-wrapper',
        components:{
            vCatalogVue,
            vCartVue,

        },
        props: {

        },
        data(){
            return{
                title: "Main wrapper",
            }
        },
        computed:{
            ...mapGetters([
                'CART'
            ]),
        },
        methods: {

        },
        watch:{},
        mounted(){

        },

    }
</script>
<style > 
    .v-main-wrapper{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>