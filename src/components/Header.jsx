import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/account">Account</Link>
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex flex-wrap items-center justify-between bg-black top-0 p-[1.5em] sticky">
      <Link to="/">
        <img className="w-20" src="../assets/logo.png" alt="logo" />
      </Link>
      <nav className="text-white flex items-center justify-end w-1/3">
        <div className="hidden w-full md:flex justify-between">
          <NavLinks />
        </div>
        <div className="mr-4 border border-white shadow-lg  py-2 px-4 rounded-full hover:border-black">
          <Link to="/login">Connexion</Link>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <X color="white" size="2em" />
            ) : (
              <Menu color="white" size="2em" />
            )}
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div className="text-gray-300 text-lg flex flex-col items-center basis-full gap-2 mt-6 pt-5 border-t border-gray-500/50">
          <NavLinks />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
