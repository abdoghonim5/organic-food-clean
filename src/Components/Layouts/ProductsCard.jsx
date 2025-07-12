const ProductsCard = ({ image, title, price, oldPrice, discount, status }) => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-sm relative hover:shadow-md transition overflow-hidden">
        {/* discount badge */}
        {discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}%
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded "
        />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>

        <span>{price}$</span>
        {oldPrice && (
          <span className="line-through text-gray-500 ml-2">{oldPrice}$</span>
        )}
        {status === "soldout" && (
          <span className="text-red-500 text-sm ml-2">Sold Out</span>
        )}
        <button className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer">
          Add to Cart
        </button>
      </div>
    </>
  );
};
export default ProductsCard;
