const Hero = () => {
  return (
    <>
      <section className="min-h-[90vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-5 lg:px-14  bg-gradient-to-r from-[#d7e8dc] to-[#c4dbce] ">
        {/* content slice */}
        <div className="text-center mt-12 md:text-start md:mt-0 space-y-5 max-w-xl">
          <h3 className="text-sm md:text-lg text-gray-700">
            Fresh From Farm to Your Plate
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Healthy Eating,
            <br />
            the Organic Way
          </h1>
          <p className="text-gray-600">
            Discover fresh, organic, and handpicked vegetables directly from
            local farms to your kitchen.
          </p>
          <button className="bg-green-600 hover:bg-green-700 hover:shadow-neutral-500 text-white font-semibold py-4 px-10 rounded-full transition duration-300 cursor-pointer ">
            Explore Menu
          </button>
        </div>
        {/*img slice  */}
        <div className="w-4/5 md:w-2/5">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="Hero image vegetables"
            className="rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-2 border-white"
          />
        </div>
      </section>
    </>
  );
};
export default Hero;
