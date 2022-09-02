import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import CartItem from "../components/CartItem"
import formatCurrency from "../utilities/formatCurrency"

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart)
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice)
  const dispatch = useDispatch()
  return (
    <section className="bg-neutral-200 min-h-screen pt-20 px-2 pb-2 flex flex-col gap-2">
      <h2 className="text-center text-amber-900 font-bold text-4xl my-2">
        CART
      </h2>
      <div className="flex flex-col gap-2 container mx-auto">
        {cart.length > 0 ? (
          <ul className="flex flex-col gap-2 container mx-auto">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <p className="text-center">No intems in cart.</p>
        )}
        {cart.length > 0 && (
          <div className="max-w-4xl w-full mx-auto flex flex-col items-end gap-2">
            <p className="bg-amber-900 text-yellow-300 font-bold px-4 py-2 rounded w-full text-center">
              Total Price: {formatCurrency(cartTotalPrice)}
            </p>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-700 text-white px-6 py-2 rounded w-full font-bold"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
