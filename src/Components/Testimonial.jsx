import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Oliver Bennett",
    comment: "The veggies were so fresh and packed beautifully. Love it!",
    img: "https://i.pinimg.com/736x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg",
  },
  {
    name: "Amelia Brooks",
    comment: "Quick delivery & top-notch quality. Highly recommend!",
    img: "https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg",
  },
  {
    name: "Charlotte Harris",
    comment: "Finally, a brand I can trust for real organic produce.",
    img: "https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg",
  },
  {
    name: "James Walker",
    comment: "Organic, fresh, and affordable. My family loves it!",
    img: "https://i.pinimg.com/736x/25/33/8f/25338f488af2c45912c15ebab325e363.jpg",
  },
];

const Testimonial = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  //make a deferent slider settings like Testimonial variable
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className=" bg-white py-16 px-4">
        <h2 className="text-center text-3xl text-gray-900 my-20">
          What Our Customer Says
        </h2>
        <div className="slider-container max-w-6xl mx-auto ">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 py-8 ">
                <div className="bg-green-50 p-6 rounded-lg shadow-lg text-center h-full">
                  <img
                    className="mx-auto w-40 h-36 rounded-lg mb-5"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <h3 className="text-gray-900 font-bold   ">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 mt-5  text-sm">
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
