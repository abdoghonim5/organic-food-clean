import { useState } from "react";
import products from "../data/ProductsData";
import ProductsCard from "./Layouts/ProductsCard";

const categories = [
  "FOOD & DRINKS",
  "FRESH FRUITS",
  "VEGETABLES",
  "DRIED FOODS & NUTS",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("FOOD & DRINKS");
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <>
      <section className="bg-gray-50 pb-10 px-5 lg:px-14 mt-20">
        <h2 className="text-gray-800 mb-10 text-5xl text-center ">
          Our Products
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-5 mb-10 text-green-600">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={` pb-1 border-b-2 ${
                selectedCategory == category
                  ? "border-green-600"
                  : "border-transparent"
              } hover:border-green-400 transition`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product, index) => (
            <ProductsCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              status={product.status}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default Products;
