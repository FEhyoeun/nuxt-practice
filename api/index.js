import axios from "axios";

const products = axios.create({
  baseURL: 'http://localhost:3000/products'
})

const carts = axios.create({
  baseURL: 'http://localhost:3000/carts'
})

function fetchProductById(id) {
  return products.get(`/${id}`)
}

function fetchProductByKeyword(keyword) {
  return products.get(`/`, {
    params: {
      name_like: keyword
    }
  })
}

// carts
function fetchCartItem() {
  return carts.get('/')
}

function createCartItem(cartItem) {
  return carts.post('/', cartItem)
}

export { fetchProductById, fetchProductByKeyword, fetchCartItem, createCartItem }
