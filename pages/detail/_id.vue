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
        <button type="button" @click="addToCart">카트에 담기</button>
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
  head() {
    return {
      title: `Shopping Item Detail - ${this.product.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name}입니다.`,
        },
      ],
      head: {
        title: '상품 상세 페이지',
        meta: [
          {
            hid: 'og:title',
            property: 'og:title',
            content: '상품 상세 페이지',
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: '상품의 상세 정보를 확인해보세요',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: 'http://placeimg.com/640/480/fashion',
          },
        ],
      },
    }
  },
  methods: {
    addToCart() {
      // const response = await this.$store.dispatch('FETCH_CART_ITEMS', this.product)
      // console.log(response)
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart')
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
