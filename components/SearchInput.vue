<template>
  <div class="input-wrapper flex">
    <input class="search-input" type="text" :value="value" @input="$emit('input', $event.target.value)" />
    <button class="btn" type="button" @click="$emit('search')">search</button>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  // model: {
  //  만약 props의 value를 다른 것으로 받고 싶다면 여기서 정의하면 됨
  // },
  props: {
    value: {
      type: String,
      default: () => '',
    },
  }
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
