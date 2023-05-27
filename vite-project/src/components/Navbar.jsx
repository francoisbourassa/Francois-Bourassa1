import { useState } from "react";
import { navLinks } from "../constants";
import { logo, menu , close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    < nav className="flex items-center justify-between w-full py-6 navbar">
      { <img src={logo} alt="Francois Bourassa" className="w-[124px] h-[32px]" /> }
     
      <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
  {navLinks.map((nav, index) => (
    <a
      key={nav.id}
      href={`#${nav.id}`}
      className={`font-poppins font-normal cursor-pointer text-[16px] ${
        active === nav.title ? "text-white" : "text-red"
      } ${index === navLinks.length - 1 ? "mr-20" : "mr-10"}`}
      onClick={() => setActive(nav.title)}
    >
      {nav.title}
    </a>
  ))}
</ul>

      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
