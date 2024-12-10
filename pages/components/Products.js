import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../lib/CartContext";
// Utility function to format price with a comma for thousands
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function Products({ products }) {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold tracking-tight text-text">
          Our Latest Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {products?.length > 0 &&
            products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="group block overflow-hidden border border-accent rounded-xl border-opacity-10">
                  <div className="p-1">
                    <div className="relative h-[300px] sm:h-[300px]">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="absolute inset-0 h-full w-full object-contain opacity-100 group-hover:opacity-0 rounded-md"
                      />
                      <Link href={"/products/" + product._id}>
                      <img
                        src={product.images[1]}
                        alt={product.title}
                        className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100 rounded-md"
                      />
                      </Link>
                    </div>

                    <div className="relative  p-3 border-t">
                      <Link href={"/products/" + product._id}>
                        <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 truncate">
                          {product.title}
                        </h3>
                      </Link>

                      <div className="mt-1.5 flex items-center justify-between text-text">

                        <Link
                           href={"/products/" + product._id}
                          class=" w-full flex items-center divide-x rounded-lg border border-primary bg-primary text-center text-md font-medium text-white shadow-sm hover:bg-gray-100"
                        >
                          <div class="flex items-center space-x-2 py-2.5 px-3">
                            <span className="text-white text-center text-[18px]">ON SPECIAL {"R" + formatPrice(product.price)}</span>
                          </div>
                          {/* <div class="py-2.5 px-3">18</div> */}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
