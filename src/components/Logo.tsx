import { Link } from "react-router-dom";
import logo from "@/assets/gichuri-logo.jpeg";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="Gichuri & Partners"
        className="h-[40px] w-auto"
      />
    </Link>
  );
};

export default Logo;
