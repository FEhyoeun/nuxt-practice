<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <CartList />
    <div>
      <button class="extra-panel">구매하기</button>
    </div>
  </div>
</template>

<script>
// import {FETCH_CART_ITEMS} from "@/store";
import CartList from "@/components/CartList";

export default {
  name: "cart",
  // async asyncData({ store }) { // nuxtServerInit을 해주면 이건 쓸 필요가 없음. why? 결국 같은 동작을 하는 거기 때문에. asyncData는 page level에서 한 거임.
  //   await store.dispatch(FETCH_CART_ITEMS)
  // }
  components: {
    CartList
  }
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
