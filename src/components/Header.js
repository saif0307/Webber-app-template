import { Link } from "react-router-dom";
import Button  from "./Button";

const Header = () => {
  return (
    <div style={{margin:'30px auto 0 auto'}} className="flex flex-wrap justify-between max-w-screen-xl h-16 align-middle">
      {/* Logo */}
      <div>
        <img alt="Webber Logo" src="./images/logo.png" />
      </div>
      <div style={{maxWidth:'341px'}} className="flex gap-7 space-between items-center text-base">
        {/* Links naviagtion */}
        <Link to="/">Overview</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/casestudies">Case Studies</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      {/* Button */}
      <div className="flex justify-items-center items-center">
          <Button name={"Sign In"} color='bg-lt-blue' textColor="text-ft-blue" hover="bg-hr-blue" />
      </div>
    </div>
  );
};

export default Header;
