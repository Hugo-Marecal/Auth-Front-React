import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex bg-black justify-around items-center text-xs text-white bottom-0 h-[5vh]">
      <p className="">© 2024 Conquest</p>
      <Link to="/privacy-policy" className="">
        Privacy Policy
      </Link>
      <Link to="/terms-of-use" className="">
        Terms Of Use
      </Link>
    </footer>
  );
};
export default Footer;
