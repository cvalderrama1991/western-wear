import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import formCurrency from "../utilities/formatCurrency"
import { addToCart, increaseCartItem } from "../features/cart/cartSlice"

const SingleProduct = () => {
  const products = useSelector((state) => state.products.products)
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const cart = useSelector((state) => state.cart.cart)
  const isProductInCart = cart.find((item) => item.id === product.id)
  const dispatch = useDispatch()

  return (
    <section className="pt-24 h-screen bg-neutral-200 px-2 flex flex-col items-center justify-center">
      <div className="flex flex-col rounded max-w-2xl bb-white">
        <div className="relative">
          <img
            src={`..western-wear/${product.image}`}
            alt={product.name}
            className="max-h-[600px] w-full"
          />
        </div>
        <div className="flex flex-col gap-2 m-2">
          <h3 className="font-bold text-2xl">{product.name}</h3>
          <p className="text-neutral-600">{product.desc}</p>
          <p className="font-bold">{formCurrency(product.price)}</p>
          {isProductInCart ? (
            <button
              className="border-2 border-amber-900 text-amber-900 font-bold rounded px-6 py-2 max-w-max active:scale-x-95"
              onClick={() => dispatch(increaseCartItem(isProductInCart.id))}
            >
              Add More
            </button>
          ) : (
            <button
              className="bg-amber-900 text-yellow-300 font-bold px-6 py-2 rounded max-w-max active:scale-x-95"
              onClick={() => dispatch(addToCart(product))}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
export default SingleProduct
