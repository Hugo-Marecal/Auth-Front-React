import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex bg-black justify-around items-center text-xs text-white bottom-0 h-[5vh]">
      <p className="">© 2024 Gestinvest.</p>
      <Link to="/politique-de-confidentialité" className="">
        Politique de confidentialité
      </Link>
      <Link to="/condition-utilisation" className="">
        Conditions d&apos;utilisation
      </Link>
    </footer>
  );
};
export default Footer;
