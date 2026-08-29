import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import logo from "../assets/logo.png";

function Header() {
  // this control if mobile menu is open or close
  // true = show menu, false = hide menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="headerBox">
      <div className="headerInner">

        {/* logo image, click go to home page */}

        <Link to="/" className="logo">
          <img src={logo} alt="POF Rental" className="logoImage" />
        </Link>

        {/* nav links in middle, this hide on small screen */}

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

        {/* right side icons, box around each icon */}

        <div className="headerIcons">

          <button type="button" className="iconBox">
            <FaUserCircle />
          </button>

          {/*
            this button only work on mobile (css hide it on desktop)
            click it to open/close the small nav menu below
          */}

          <button
            type="button"
            className="iconBox mobileMenuBtn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* small dropdown menu, only show on mobile when menuOpen is true */}

      {menuOpen && (
        <nav className="mobileNav">
          <Link to="/" className="navItem" onClick={() => setMenuOpen(false)}>
            EasyToGo
          </Link>

          <Link to="/" className="navItem" onClick={() => setMenuOpen(false)}>
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
      )}

      {/*
        these 2 buttons stay stick on screen, does not move when
        user scroll down. only show on mobile (see css media query)
      */}

      <a
        href="tel:+971549957255"
        className="floatBtn floatCall"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="https://wa.me/971549957255"
        className="floatBtn floatWhatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      {/* css here, same way I do in other pages */}

      <style>
        {`
          .headerBox {
            background-color: #fff;
            border-bottom: 1px solid #eee;
            font-family: "Outfit", sans-serif;
            position: sticky;
            top: 0;
            z-index: 1000;
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
            font-family: "Outfit", sans-serif;
            font-weight: 500;
          }

          .headerIcons {
            display: flex;
            gap: 10px;
          }

          .iconBox {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #222;
            border-radius: 8px;
            background-color: #fff;
            font-size: 16px;
            cursor: pointer;
          }

          /* hide hamburger button and dropdown menu on normal desktop size */

          .mobileMenuBtn {
            display: none;
          }

          .mobileNav {
            display: none;
          }

          /* floating call + whatsapp button, hide on desktop by default */

          .floatBtn {
            display: none;
          }

          /* MOBILE STYLE, screen 768px or smaller */
          /* video they gave me show phone size layout, so I change things here */

          @media (max-width: 768px) {

            .headerInner {
              padding: 15px;
            }

            .logoImage {
              height: 32px;
            }

            /* hide the normal text links row on mobile */

            .navLinks {
              display: none;
            }

            /* now show hamburger button on mobile */

            .mobileMenuBtn {
              display: flex;
            }

            /* dropdown list show only when menuOpen true (see JSX) */

            .mobileNav {
              display: flex;
              flex-direction: column;
              gap: 15px;
              padding: 15px 20px 20px;
              border-top: 1px solid #eee;
            }

            /* now show the floating call/whatsapp buttons on mobile */
            /* position fixed = stay same spot even if page scroll */

            .floatBtn {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 48px;
              height: 48px;
              border-radius: 50%;
              position: fixed;
              right: 15px;
              z-index: 999;
              color: #fff;
              font-size: 18px;
              text-decoration: none;
              box-shadow: 0 2px 8px rgba(0,0,0,0.25);
            }

            .floatCall {
              bottom: 80px;
              background-color: #111;
            }

            .floatWhatsapp {
              bottom: 20px;
              background-color: #25d366;
            }
          }
        `}
      </style>

    </header>
  );
}

export default Header;