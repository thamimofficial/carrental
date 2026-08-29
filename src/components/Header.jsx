import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="headerBox">
      <div className="headerInner">

        {/* logo image, click go to home page */}

        <Link to="/" className="logo">
          <img src={logo} alt="POF Rental" className="logoImage" />
        </Link>

        {/* nav links in middle */}

        <nav className="navLinks">
          <Link to="/" className="navItem">
            EasyToGo
          </Link>

          <Link to="/" className="navItem">
            Car Listings
          </Link>

          <a href="#" className="navItem">
            Long Lease
          </a>

          <a href="#" className="navItem">
            Car Care
          </a>

          <a href="#" className="navItem">
            Offers
          </a>
        </nav>

        {/* user icon on right side */}

        <FaUserCircle className="userIcon" />

      </div>

      {/* css here, same way I do in other pages */}

      <style>
        {`
          .headerBox {
            background-color: #fff;
            border-bottom: 1px solid #eee;
            font-family: "Poppins", sans-serif;
          }

          .headerInner {
            max-width: 1200px;
            margin: auto;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .logo {
            text-decoration: none;
            color: #b08b45;
            display: flex;
            align-items: center;
          }

          .logoImage {
            height: 40px;
            width: auto;
          }

          .navLinks {
            display: flex;
            gap: 20px;
          }

          .navItem {
            text-decoration: none;
            color: #222;
          }

          .userIcon {
            font-size: 22px;
            color: #222;
          }
        `}
      </style>

    </header>
  );
}

export default Header;