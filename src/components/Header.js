import { Link } from "react-router-dom";
import Button  from "./Button";

const Header = () => {
  return (
    <div className="md:flex hidden mx-auto pt-8 pb-8 pl-20 pr-20 flex-wrap justify-between max-w-screen-xl h-16 align-middle">
      {/* Logo */}
      <div>
        <img alt="Webber Logo" src="./images/logo.png" />
      </div>
      <div style={{maxWidth:'341px'}} className="flex gap-7 space-between items-center text-base">
        {/* Links naviagtion */}
        <Link to="/" className="text-base font-normal text-nav-color">Overview</Link>
        <Link to="/pricing" className="text-base font-normal text-nav-color">Pricing</Link>
        <Link to="/casestudies" className="text-base font-normal text-nav-color">Case Studies</Link>
        <Link to="/faq" className="text-base font-normal text-nav-color">FAQ</Link>
      </div>
      {/* Button */}
      <div className="flex justify-items-center items-center">
          <Button name={"Sign In"} color='bg-lt-blue' textColor="text-ft-blue text-sm" hover="bg-hr-blue" />
      </div>
    </div>
  );
};

export default Header;
