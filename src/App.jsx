import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import HowSection from "./Components/HowSection";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Testimonial from "./Components/Testimonial";
import WhyUs from "./Components/WhyUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Products />
      <About />
      <HowSection />
      <Testimonial />
      <Footer />
    </>
  );
};
export default App;
