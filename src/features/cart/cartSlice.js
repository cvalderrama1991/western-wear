import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
  cartTotalAmount: 0,
  cartTotalPrice: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push({ ...action.payload, quantity: 1 })
      state.cartTotalAmount = state.cart.reduce(
        (total, item) => (total = total + item.quantity),
        0
      )
      state.cartTotalPrice = state.cart.reduce(
        (total, item) => (total = total + item.quantity * item.price),
        0
      )
    },
    increaseCartItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload)
      item.quantity++
      state.cartTotalAmount = state.cart.reduce(
        (total, item) => (total = total + item.quantity),
        0
      )
      state.cartTotalPrice = state.cart.reduce(
        (total, item) => (total = total + item.quantity * item.price),
        0
      )
    },
    decreaseCartItem(state, action) {
      const cartItem = state.cart.find((item) => item.id === action.payload)
      if (cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload)
      }
      state.cartTotalAmount = state.cart.reduce(
        (total, item) => (total = total + item.quantity),
        0
      )
      state.cartTotalPrice = state.cart.reduce(
        (total, item) => (total = total + item.quantity * item.price),
        0
      )
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
      state.cartTotalAmount = state.cart.reduce(
        (total, item) => (total = total + item.quantity),
        0
      )
      state.cartTotalPrice = state.cart.reduce(
        (total, item) => (total = total + item.quantity * item.price),
        0
      )
    },
    clearCart(state) {
      state.cart = []
      state.cartTotalAmount = 0
      state.cartTotalPrice = 0
    },
  },
})
export const {
  addToCart,
  increaseCartItem,
  decreaseCartItem,
  removeFromCart,
  clearCart,
  checkout,
} = cartSlice.actions

export default cartSlice.reducer
