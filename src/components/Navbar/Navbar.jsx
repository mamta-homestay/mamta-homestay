import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import "./Navbar.css";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Videos", href: "#videos" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect when the user scrolls down the page.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu after clicking a navigation link.
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      } ${menuOpen ? "navbar-menu-open" : ""}`}
    >
      <div className="navbar-container">
        {/* BRAND / LOGO */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Mamta Homestay home"
        >
          <span className="navbar-logo-wrapper">
            {/* Logo shown when the navbar is transparent */}
            <img
              src="/Logo-White.png"
              alt="Mamta Homestay"
              className="navbar-logo navbar-logo-light"
            />

            {/* Logo shown when the navbar has a background */}
            <img
              src="/Logo.png"
              alt=""
              aria-hidden="true"
              className="navbar-logo navbar-logo-dark"
            />
          </span>

          <span className="navbar-brand-text">
            <span className="brand-name">Mamta Homestay</span>

            <span className="brand-caption">A HOME IN THE HILLS</span>
          </span>
        </a>

        {/* NAVIGATION LINKS */}
        <nav
          className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile enquiry button */}
          <a href="#contact" className="navbar-mobile-cta" onClick={closeMenu}>
            Enquire Now
            <ArrowUpRight size={16} />
          </a>
        </nav>

        {/* DESKTOP ENQUIRY BUTTON */}
        <a href="#contact" className="navbar-cta">
          Enquire Now
          <ArrowUpRight size={16} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="navbar-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="navbar-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
