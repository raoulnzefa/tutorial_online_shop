import axios from 'axios';
import { createStore } from 'vuex'

let store = createStore({
    state() {
        return {
            products: [],
            cart: [],
        }

    },
    mutations: {

        SET_PRODUCT_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART_TO_STATE: (state, product) => {
            if (state.cart.length) {
                let isProductExist = false;
                state.cart.map(function(item) {
                    if (item.article === product.article) {
                        isProductExist = true;
                        item.count++;
                    }
                });
                if (!isProductExist) {
                    state.cart.push(product)
                }
            } else {
                state.cart.push(product)
            }

        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({ commit }) {
            return axios('http://localhost:3000/products', {
                    method: "GET"
                })
                .then((products) => {

                    commit('SET_PRODUCT_TO_STATE', products.data);
                    return products;
                })
                .catch((Error) => {
                    console.log(Error);
                    return Error;
                })
        },
        ADD_TO_CART({ commit }, product) {
            commit('SET_CART_TO_STATE', product);
        },
        DELETE_FROM_CARD({ commit }, index) {
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products
        },
        CART(state) {
            return state.cart
        }
    },


});
export default store;