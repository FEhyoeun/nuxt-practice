<template>
  <div class="app">
    <main>
      <!-- 주석된 SearchInput과 주석 처리 되지 않은 SearchInput은 같은 역할을 함. 단, 이러면 SearchInput에서 받는 props의 키가 value여야 -->
<!--      <SearchInput :search-keyword="searchKeyword" @input="updateSearchKeyword" />-->
      <SearchInput v-model="searchKeyword" @search="searchProducts" />
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex" @click="moveToDetailPage(product.id)">
          <img class="product-image" :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>

import axios from "axios";
import SearchInput from "@/components/SearchInput";
import {fetchProductByKeyword} from "@/api";

export default {
  name: "index",
  components: {SearchInput},
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data.map(item => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      } // 이렇게 쓰거나 아니면 return을 지우고 콜백 함수를 ()로 감싸면 됨
    })
    // const products = response.data // 만약 이렇게만 쓰면 같은 img가 계속 보일 것...
    return {products} // 객체 축약 문법. user: user임. asyncData에서는 이 return에 있는 값을 this.xxx 할 필요 없이 data처럼 사용할 수 있음.
    // 여기서 this를 사용할 수 없는 건 asyncData는 페이지가 그려지기 전에(컴포넌트가 생성되기 이전에) 호출되는 메소드이므로 this로 접근할 수 없음
  },
  data() {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`)
    },
    async searchProducts() {
      const response = await fetchProductByKeyword(this.searchKeyword)
      this.products = response.data.map(item => ({
        ...item,
        imageUrl: `${item.imageUrl}?readom=${Math.random()}`
      }))
    },
  },

}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
