<template>
    <div class="v-catalog-item">
       <p>{{product_data.name}}</p>
       <p>Price: {{product_data.price}} P</p>
       <button @click="addToCart">Add to card</button>
    </div>  
</template>
<script>
    export default{
        name: 'v-catalog-item',
        components:{

        },
        props: {
            product_data:{
                type: Object,
                default (){
                    return {}
                }
            }
        },
        data(){
            return{
               
            }
        },
        computed:{

        },
        methods: {
           
            addToCart(){
                this.$emit('addToCart', this.product_data)
            },
        },
        watch:{
            
        },
        mounted(){
            
        },

    }
</script>
<style  > 
    .v-catalog-item{
        border: #000 solid  1px;
        border-radius: 2vh;
        padding: 2vh;
    }
</style>