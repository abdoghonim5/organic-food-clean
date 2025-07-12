const About = () => {
  return (
    <>
      <section className=" bg-white py-16 px-5 lg:px-20">
        <div className="flex flex-col-reverse  lg:flex-row items-center gap-10 ">
          {/* content */}
          <div className="lg:w-1/2 md:w-2/5 w-full text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 ">About US</h2>
            <p className="font-semibold text-green-600">
              Fresh. Local. Organic.
            </p>
            <p className="mt-4 text-gray-600">
              At NatureHarvest, we believe in bringing you the freshest organic
              produce directly from our partnered farmers. Our mission is to
              promote healthy living, sustainable farming, and fair trade for
              local communities.
            </p>
            <p className="mt-4 text-gray-600">
              Join us in our journey towards a healthier planet and a more
              sustainable future. Together, we can make a difference, one meal
              at a time.
            </p>
            <button className="mt-6">
              <a
                href="#"
                className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              >
                Learn More
              </a>
            </button>
          </div>
          {/* image  */}
          <div className="lg:w-1/2 md:w-3/5 w-full">
            <img
              className="w-full rounded-lg shadow-lg h-auto"
              src="https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg"
              alt="About NatureHarvest"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
