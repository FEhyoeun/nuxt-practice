<template>
  <div class="list-wrapper">
    <ul>
      <li
        class="list-item"
        v-for="cartItem in $store.state.cartItems"
        :key="cartItem.id"
      >
        <img class="thuFmbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
        <div class="description">
          <p>{{ cartItem.name }}</p>
          <span>{{ cartItem.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from "@/store";

export default {
  name: "CartList",
  // async asyncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS) // 이러면 안 됨. why? page component가 아니라서!
  // }
  async fetch() {
    await this.$store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>
