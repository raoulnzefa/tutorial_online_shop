<template>
    <div class="v-cart-item">
       <p>{{item_data.name}}</p>
       <p>Price: {{item_data.price}} P</p>
        <div class="v-cart-item__count">
            count:
            <span @click="decrementItem">-</span>
            <p>{{cart_item_data.count}}</p>
            <span @click="incrementItem" >+</span>
        </div>  
        <button
            @click="deleteFromCart"
        >DELETE</button>
    </div>
    
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
            decrementItem (){
                this.$emit('decrementItem')
            },
            incrementItem (){
                this.$emit('incrementItem')
            },
            deleteFromCart(){
                this.$emit('deleteFromCart')
            },
        },
        watch:{
            
        },
        mounted(){
        },

    }
</script>
<style  > 
    .v-cart-item{
        display: flex;
        gap: 1vw;
        border: #000 solid  1px;
        border-radius: 2vh;
        padding: 2vh;
    }
    span{
        cursor: pointer;
    }
</style>