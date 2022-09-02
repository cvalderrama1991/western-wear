import { useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"

const Products = () => {
  const products = useSelector((state) => state.products.products)

  return (
    <section className="min-h-screen px-2 pt-20 pb-2 bg-neutral-200">
      <h2 className="text-amber-900 text-center font-bold text-4xl my-2">
        View All Of Our Products
      </h2>
      <ul className="grid gap-2 md:grid-cols-2 xl:grid-cols-4 container mx-auto">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default Products
