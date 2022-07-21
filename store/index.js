import { fetchCartItem } from "@/api";
// import cart from "~/pages/cart";


// constants
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

// store
export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    // const newCartItem = {
    //   ...cartItem,
    //   imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    // }
    console.log("before-state", state.cartItems)
    state.cartItems.push(cartItem)
    console.log("after-state", state.cartItems)
  },
  setCartItems(state, cartItems) {
    console.log("before", state.cartItems)

    state.cartItems = cartItems
    console.log("after", state.cartItems)

  }
}

export const actions = {
  // 아래처럼 하는 건 es6의 동적 키-값 정의 방식
  async [FETCH_CART_ITEMS]({ commit }) { // context.commit인데 distructuring으로 commit만.
    const { data } = await fetchCartItem()
    commit('setCartItems', data)
    // commit('setCartItems', data.map(item => ({
    //   ...item,
    //     imageUrl: `${item.imageUrl}?random=${Math.random()}`
    // })))
  }
}
