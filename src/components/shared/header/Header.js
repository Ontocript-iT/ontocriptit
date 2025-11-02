import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "./ontocript.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/aboutus", label: "About Us" },
    { path: "/services", label: "Services" },
    // { path: '/blog', label: 'Blog' },
    { path: "/technology", label: "Technology" },
    { path: "/contact", label: "Contact Us", highlight: true },
  ];

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-auto h-16 -ml-2 sm:ml-6" />
          </Link>

          <div className="items-center hidden space-x-10 md:flex">
            {navItems.map((item) => (
              <NavItem
                key={item.path}
                {...item}
                currentPath={location.pathname}
                isScrolled={isScrolled}
              />
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm bg-white shadow-2xl transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b shadow-sm">
            <Link to="/" className="flex items-center" onClick={toggleMenu}>
              <img src={logo} alt="Logo" className="w-auto h-10" />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto">
            <ul className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                      location.pathname === item.path
                        ? "bg-orange-100 text-orange-600"
                        : item.highlight
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
        />
      )}

      <div className="">
        <Outlet />
      </div>
    </header>
  );
};

const NavItem = ({
  path,
  label,
  currentPath,
  onClick,
  highlight,
  isScrolled,
}) => (
  <Link
    to={path}
    className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
      currentPath === path
        ? "text-orange-600"
        : highlight
        ? `${
            isScrolled
              ? "bg-orange-500 text-white"
              : "bg-orange-500 bg-opacity-80 text-white"
          } hover:bg-orange-600`
        : `${
            isScrolled ? "text-gray-600" : "text-blueColor"
          } hover:text-orange-600`
    }`}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Header;
