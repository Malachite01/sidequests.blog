
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { Sling } from "hamburger-react";

import "../style.css";
import ASCIIText from "./ASCIIText";
import GlitchLink from "./GlitchLink";

// Routes
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Software", to: "/software" },
  { label: "Hardware", to: "/hardware" },
  { label: "Blog", to: "/blog" },
  { label: "Showcase", to: "/showcase" },
  { label: "Web-Rings", to: "/webRings" },
  { label: "Guestbook", to: "/guestbook" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Cacher le menu quand on scroll vers le bas, et le montrer quand on scroll vers le haut.
  useEffect(() => {
    let previousScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0 || currentScrollY < previousScrollY) {
        setIsHidden(false);
      } else if (currentScrollY > previousScrollY && currentScrollY > 80) {
        setIsHidden(true);
      }

      previousScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the menu when pressing Escape.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={`navbar ${isHidden && !isMenuOpen ? "is-hidden" : ""}`}>
      {/* Logo / Website name */}
      <Link
        to="/"
        className="navbar-logo"
        aria-label="Go to homepage"
      >
        <ASCIIText
          text="Sidequests"
          asciiFontSize={5}
          colors={["#ff6188", "#fc9867", "#ffd866"]}
          textScale={2}
          blocks={0.9}
          waves={.6}
          waveSpeed={1}
          chroma={1}
          tilt={.3}
          hueShift={1}
          scramble={0.6}
          clickRipple
          idle
          interactive={false}
          charset=" .'`^&quot;,:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"
        />
      </Link>

      {/* Mobile hamburger */}
      <div className="navbar-toggle">
        <Sling
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          size={30}
          duration={0.4}
          label={isMenuOpen ? "Close menu" : "Open menu"}
          rounded
        />
      </div>

      {/* Navigation */}
      <nav
        id="primary-navigation"
        className={`navbar-navigation ${isMenuOpen ? "is-open" : ""
          }`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {({ isActive }) => (
              <GlitchLink className={isActive ? "active" : ""}>
                {">/" + link.label}
              </GlitchLink>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
