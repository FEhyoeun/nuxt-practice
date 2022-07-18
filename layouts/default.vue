<template>
  <div>
    <header>
      <h1>{{ $route.name }} 페이지!</h1>
      <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/mainComponent">메인 페이지</NuxtLink>
      <NuxtLink to="/product">상품 페이지</NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
}
</script>

<style scoped>

</style>
