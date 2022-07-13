<template>
    <div class="v-cart-item">
       <p>{{item_data.name}}</p>
       <p>Price: {{item_data.price}} P</p>
    </div>
    <div class="v-cart-item__count">
        aaa
        <p>{{cart_item_data.count}}</p>
    </div>  
    <button
        @click="deleteFromCart"
    >DELETE</button>
</template>
<script>
    export default{
        name: 'v-cart-item',
        components:{

        },
        props: {
            cart_item_data:{
                type: Object,
                default (){
                    return {}
                }
            }
        },
        data(){
            return{
               item_data: this.cart_item_data,

            }
        },
        computed:{
            
        },
        methods: {
            deleteFromCart(){
                this.$emit('deleteFromCart')
            },
        },
        watch:{
            
        },
        mounted(){

            this.item_data =  this.cart_item_data;
            this.item_data['count'] = 1;
        },

    }
</script>
<style  > 
    .v-cart-item{
        border: #000 solid  1px;
        border-radius: 2vh;
        padding: 2vh;
    }
</style>