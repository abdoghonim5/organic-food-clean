import { FaSearch } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <header className="flex flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10 bg-[#c4dbce]">
        {/* logo section  left*/}
        <div>
          <span className="text-xl font-bold"> Ghonim's OrGanic Food</span>
        </div>
        {/* navigation section center*/}
        <nav className="hidden md:flex flex-row gap-10 font-semibold ml-8">
          <a href="/" className="navHover">
            Home
          </a>
          <a href="/" className="navHover">
            Menu
          </a>
          <a href="/" className="navHover">
            About Us
          </a>
          <a href="/" className="navHover">
            Subscriptions
          </a>
          <a href="/" className="navHover">
            Recipes
          </a>
          <a href="/" className="navHover">
            Contact
          </a>
          {/* icons section Right */}
          <div className=" hidden lg:flex flex-row gap-5 ml-20">
            <span className="icons hover:bg-green-400 hover:text-white cursor-pointer">
              <FaSearch />
            </span>
            <span className="icons hover:bg-green-400 hover:text-white cursor-pointer">
              <IoMdContact />
            </span>
            <span className="icons hover:bg-green-400 hover:text-white cursor-pointer">
              <HiMiniShoppingCart />
            </span>
          </div>
        </nav>
        {/* responsive */}
        <button className="md:hidden bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out">
          Shop Now
        </button>
      </header>
    </>
  );
};
export default Navbar;
