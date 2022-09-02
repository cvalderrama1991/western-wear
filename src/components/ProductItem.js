import { Link } from "react-router-dom"
import { FaArrowAltCircleRight } from "react-icons/fa"

const ProductItem = ({ product }) => {
  return (
    <li className="rounded-xl flex flex-col shadow-md bg-white max-w-md overflow-hidden relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover h-full"
      />
      <Link
        to={`/products/${product.id}`}
        className="bg-amber-800 text-yellow-300 py-2 font-bold text-xl flex items-center justify-center gap-2 hover:bg-amber-900"
      >
        {product.name} <FaArrowAltCircleRight />
      </Link>
    </li>
  )
}

export default ProductItem
