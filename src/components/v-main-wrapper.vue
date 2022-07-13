<template>
    <div class="v-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>  
</template>
<script>
    export default{
        name: 'v-main-wrapper',
        components:{

        },
        props: {

        },
        data(){
            return{
                title: "Online Shop",
            }
        },
        computed:{
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