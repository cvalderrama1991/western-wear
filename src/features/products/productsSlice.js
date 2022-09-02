import { createSlice } from "@reduxjs/toolkit"
import data from "../../data"

const initialState = {
  products: data,
}

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
})

export default productsSlice.reducer
