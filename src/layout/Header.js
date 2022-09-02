import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { FaCartPlus } from "react-icons/fa"

const Header = () => {
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount)

  return (
    <div className="bg-amber-900 h-20 w-full fixed top-0 left-0 z-10">
      <header className="h-full flex items-center justify-between container mx-auto px-2">
        <div>
          <Link
            to="/"
            className="text-yellow-300 font-bold uppercase text-xl flex items-center gap-2"
          >
            <img src="./ww-icon.svg" alt="ww icon" className="h-8" />
            WW
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6 items-center">
            <li>
              <Link to="/products" className="text-white font-bold uppercase">
                Store
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="bg-yellow-300 text-amber-900 px-4 py-2 rounded flex items-center gap-2"
              >
                <FaCartPlus size={24} />
                <p className=" text-amber-900 font-bold">{cartTotalAmount}</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
