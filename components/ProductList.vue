<template>
  <div>
    {{products}}
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "ProductList",
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data
    return {products} // 객체 축약 문법. user: user임. asyncData에서는 이 return에 있는 값을 this.xxx 할 필요 없이 data처럼 사용할 수 있음.
    // 여기서 this를 사용할 수 없는 건 asyncData는 페이지가 그려지기 전에(컴포넌트가 생성되기 이전에) 호출되는 메소드이므로 this로 접근할 수 없음
  },
}
</script>

<style scoped>

</style>
