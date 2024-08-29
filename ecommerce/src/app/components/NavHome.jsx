// components/Nav.js
import Link from "next/link";

const NavHome = () => {
  return (
    <nav className="nav-home">

      <a href=""><span>Best Seller</span></a> 
      <a href=""><span>New arivalls</span></a>  
      <a href=""><span>On sale</span></a> 
    </nav>  
  );
};

export default NavHome;
