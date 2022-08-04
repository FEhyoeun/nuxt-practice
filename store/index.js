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
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  }
}

export const actions = {
  // 아래처럼 하는 건 es6의 동적 키-값 정의 방식
  async [FETCH_CART_ITEMS]({ commit }) { // context.commit인데 distructuring으로 commit만.
    const { data } = await fetchCartItem()
    // commit('setCartItems', data)
    commit('setCartItems', data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    })))
  },
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS) // 이렇게 하면 아래 주석 처리한 내용들 필요 없음. 이렇게 actions에 함수를 따로 빼서 관리하는 게 좋음.
    // const { data } = await fetchCartItem()
    // // commit('setCartItems', data)
    // storeContext.commit('setCartItems', data.map(item => ({
    //   ...item,
    //   imageUrl: `${item.imageUrl}?random=${Math.random()}`
    // })))
  // }
}
