<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import {fetchProductById} from "@/api/index.js";

export default {
  async asyncData({ params }) { // asyncData 안에 들어가는 건 asyncData에서 제공하는 context
    const response = await fetchProductById(params.id)
    const product = response.data
    return {product} // 이건 그냥 product라는 객체로 싸서 내보내는 거
  },
  methods: {
    addToCart() {

    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
