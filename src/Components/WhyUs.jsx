import { GiFarmer } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { SiCodefresh } from "react-icons/si";

const WhyUs = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* first card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ">
              <div className=" flex items-center justify-center mb-4 text-6xl text-green-600">
                <SiCodefresh />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fresh Produce</h3>
              <p>
                We source our vegetables directly from local farms, ensuring
                freshness and quality.
              </p>
            </div>
            {/* second card */}

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <div className=" flex items-center justify-center mb-4 text-6xl text-green-600">
                <MdHealthAndSafety />
              </div>
              <h3 className="text-xl font-semibold mb-4">Organic & Healthy</h3>
              <p>
                All our products are 100% organic, free from harmful pesticides
                and chemicals.
              </p>
            </div>
            {/* third card */}

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <div className=" flex items-center justify-center mb-4 text-6xl text-green-600">
                <GiFarmer />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Sustainable Practices
              </h3>
              <p>
                We follow sustainable farming practices to protect the
                environment and support local communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyUs;
