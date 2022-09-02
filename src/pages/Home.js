import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="bg-neutral-200 min-h-screen grid sm:grid-cols-2 items-center justify-center pt-20 pb-2 px-2">
      <div className="flex flex-col items-center justify-center">
        <div className="grid gap-2">
          <h1 className="text-amber-900 font-bold text-2xl sm:text-4xl md:text-6xl ">
            WESTERN WEAR
          </h1>
          <p className="text-xl md:text-2xl">Find the perfect hat for you.</p>
          <div>
            <Link
              to="/products"
              className="bg-amber-900 text-yellow-300 font-bold px-6 py-2 rounded max-w-max flex"
            >
              SHOP
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="./images/cow-skull.svg"
          alt="ww skull icon"
          className="min-w-full max-h-[60vh]"
        />
      </div>
    </section>
  )
}

export default Home
