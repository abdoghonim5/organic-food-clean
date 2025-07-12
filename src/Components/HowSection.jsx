const steps = [
  {
    number: "01",
    title: "Place Your Order",
    desc: "Browse our organic range and place your order in a few easy clicks.",
  },
  {
    number: "02",
    title: "Harvest from Farm",
    desc: "We pick the freshest items straight from local organic farms.",
  },
  {
    number: "03",
    title: "Eco-Packaging",
    desc: "We use sustainable, hygienic packaging to ensure freshness.",
  },
  {
    number: "04",
    title: "Quick Delivery",
    desc: "Your order reaches your doorstep within hours, farm-fresh.",
  },
];
const HowSection = () => {
  return (
    <>
      <section className="bg-green-50 py-16 px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 ">
          {/* img */}
          <div className=" lg:w-1/2">
            <img
              src="https://i.pinimg.com/736x/86/2d/7a/862d7a0f74ff3067da1557a963899397.jpg"
              alt="How it works"
              className="w-full rounded-lg shadow-lg h-auto"
            />
          </div>
          {/* content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {steps.map((step, index) => (
                <div key={index} className="step">
                  <h3 className="text-green-600 text-3xl">{step.number}</h3>
                  <h4 className="text-gray-900 text-lg">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HowSection;
