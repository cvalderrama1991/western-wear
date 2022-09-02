import formatCurrency from "../utilities/formatCurrency"
import { FaMinus, FaPlus, FaWindowClose } from "react-icons/fa"
import { useDispatch } from "react-redux"
import {
  increaseCartItem,
  decreaseCartItem,
  removeFromCart,
} from "../features/cart/cartSlice"

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <li className="bg-white p-2 rounded flex justify-between items-center max-w-4xl w-full mx-auto shadow">
      <div>
        <img src={item.image} alt={item.name} className="h-32" />
      </div>
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>{formatCurrency(item.price)}</p>
        <div className="flex gap-2">
          <button
            className="bg-green-400 h-8 aspect-square rounded flex items-center justify-center"
            onClick={() => dispatch(increaseCartItem(item.id))}
          >
            <FaPlus />
          </button>
          <p className="bg-neutral-200 h-8 aspect-square rounded flex items-center justify-center">
            {item.quantity}
          </p>
          <button
            className="bg-yellow-400 h-8 aspect-square rounded flex items-center justify-center"
            onClick={() => dispatch(decreaseCartItem(item.id))}
          >
            <FaMinus />
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="bg-red-400 text-white h-8 aspect-square rounded flex items-center justify-center"
        >
          <FaWindowClose />
        </button>
      </div>
    </li>
  )
}

export default CartItem
