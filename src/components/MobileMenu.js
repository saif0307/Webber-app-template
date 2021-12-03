import { Link } from "react-router-dom";

const MobileMenu = () => {
    
    return (
        <div style={{height:'100vh',opacity:'0.5'}} className="w-full md:hidden flex flex-col justify-center items-center gap-5 h-4/5 bg-plan-color">
            <Link to="/" className="text-xl text-white fon font-bold hover:bg-pri-color3">Overview</Link>
            <Link to="/pricing" className="text-xl text-white fon font-bold hover:bg-pri-color3">Pricing</Link>
            <Link to="/casestudies" className="text-xl text-white fon font-bold hover:bg-pri-color3">Case Studies</Link>
            <Link to="/faq" className="text-xl text-white font-bold hover:bg-pri-color3">FAQ</Link>
        </div>
    )
}
export default MobileMenu