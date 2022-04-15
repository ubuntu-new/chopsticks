// axios
import axios from 'axios';

const state = () => ({
    cart: [],
    totalAmount: 0,
    totalQuantity: 0,
    orders: [],
    authUser: null,
    selectedProduct: {},
});

export const totals = (paylodArr) => {
    const totalAmount = paylodArr.map(cartArr => {
        return cartArr.price * cartArr.quantity
    }).reduce((a, b) => a + b, 0);

    const totalQuantity = paylodArr.map(cartArr => {
        return cartArr.quantity;
    }).reduce((a, b) => a + b, 0);

    return {
        amount: totalAmount.toFixed(2),
        qty: totalQuantity
    }
};
const mutations = {
    'SET_USER'(state, user) {
        state.authUser = user
    },
    'GET_ORDER'(state, payload){
        state.orders = payload
    },
    'SELECT_ITEM'(state, payload){
        // alert(payload);
        state.selectedProduct = payload
    },
    'GET_CART'(state, payload){
        state.cart = payload
        state.totalAmount = totals(payload).amount
        state.totalQuantity = totals(payload).qty
    },
    'ADD_TO_CART'(state, payload){
        state.cart = [ ...state.cart, ...payload ]
        state.totalAmount = totals(state.cart).amount
        state.totalQuantity = totals(state.cart).qty
        // state.cart.push(...payload);
    },
    'DELETE_CART'(state, id){
        const currentCartToDelete = state.cart
        const indexToDelete = currentCartToDelete.findIndex(cart => {
            return cart.id == id
        })

        state.cart = [...currentCartToDelete.slice(0, indexToDelete), ...currentCartToDelete.slice(indexToDelete + 1)]
        state.totalAmount = totals(state.cart).amount
        state.totalQuantity = totals(state.cart).qty
    },
    'UPDATE_CART'(state, payload){
        state.cart = payload

        state.totalAmount = totals(payload).amount
        state.totalQuantity = totals(payload).qty
    }, 
    'CART_EMPTY'(state){
        state.cart = []
        state.totalAmount = 0
        state.totalQuantity = 0
    }
};

const actions = {
    // nuxtServerInit is called by Nuxt.js before server-rendering every page
    nuxtServerInit({ commit }, {req}){
        if(req.session && req.session.authUser){
            commit('SET_USER', req.session.authUser)
        }
    },
    async login ({ commit }, {username, password}) {
        try {
            const { data } = await axios.post('/api/login', {username, password})
            commit('SET_USER', data)
        } catch (error) {
            if(error.response && error.response.status === 401){
                throw new Error('Wrong credentials!')
            }
            throw error
        }
    },

    async logout({ commit }) {
        await axios.post('/api/logout')
        commit('SET_USER', null)
    },

    addToCart({ commit }, payload){
        commit('ADD_TO_CART', payload)
    },

    deleteCart({ commit }, id){
        commit('DELETE_CART', id)
    },

    selectProduct({ commit }, payload){
        commit('SELECT_ITEM', payload)
    },

    updateCart({ commit }, payload){
        // console.log(payload.unit)
        const currentCartToUpdate = payload.cart
        const indexToUpdate = currentCartToUpdate.findIndex(cart => {
            return cart.id == payload.id
        })

        const newCart = {
            ...currentCartToUpdate[indexToUpdate],
            quantity: currentCartToUpdate[indexToUpdate].quantity + payload.unit
        }

        // console.log(newCart)

        const cartUpdate = [...currentCartToUpdate.slice(0, indexToUpdate), newCart, ...currentCartToUpdate.slice(indexToUpdate + 1)]
        commit('UPDATE_CART', cartUpdate)
    }, 
    cartEmpty({commit}){
        commit('CART_EMPTY')
    }
};

const getters = {
    cart(state){
        return state.cart
    },
    totalAmount(state){
        return state.totalAmount
    },
    totalQuantity(state){
        return state.totalQuantity
    },
    getOrders(state){
        return state.orders
    },
    selectedItem(state){
        return state.selectedProduct
    }
};

export default{
    state, mutations, actions, getters
};