import { Route, Routes } from "react-router-dom"
import Container from "./layout/Container"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import Main from "./layout/Main"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"

const App = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Routes>
          <Route path="/western-wear" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Main>
      <Footer />
    </Container>
  )
}

export default App
