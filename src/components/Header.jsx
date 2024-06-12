import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { reqLogout } from "../Api/reqAxios";

const NavLinks = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Link to="/">Home</Link>
      {isLoggedIn ? <Link to="/account">Account</Link> : null}
    </>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await reqLogout();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="flex flex-wrap items-center justify-between bg-black top-0 p-[1.5em] sticky">
      <Link to="/">
        <img className="w-20" src="../assets/logo.png" alt="logo" />
      </Link>
      <nav className="text-white flex items-center justify-end w-1/3">
        <div className="hidden w-full justify-between lg:flex lg:justify-evenly">
          <NavLinks />
        </div>
        <div className="mr-4 border border-white shadow-lg  py-2 px-4 rounded-full hover:border-black">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Connexion</Link>
          )}
        </div>
        <div className="flex items-center lg:hidden">
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
