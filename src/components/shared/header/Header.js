import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "./ontocript.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/aboutus', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/blog', label: 'Blog' },
        { path: '/technology', label: 'Technology' },
        { path: '/contact', label: 'Contact Us', highlight: true },
    ];

    return (
        <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="mx-auto px-4">
                <nav className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </Link>

                    <div className="hidden md:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <NavItem key={item.path} {...item} currentPath={location.pathname} isScrolled={isScrolled} />
                        ))}
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden focus:outline-none"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 z-50 bg-white transform ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center p-4 border-b">
                        <span className="text-xl font-bold text-gray-800">Menu</span>
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <nav className="flex-grow overflow-y-auto">
                        <ul className="px-4 py-2">
                            {navItems.map((item) => (
                                <li key={item.path} className="py-2">
                                    <NavItem {...item} currentPath={location.pathname} onClick={toggleMenu} isScrolled={true} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="">
                <Outlet />
            </div>
        </header>
    );
};

const NavItem = ({ path, label, currentPath, onClick, highlight, isScrolled }) => (
    <Link
        to={path}
        className={`text-base font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
            currentPath === path
                ? 'text-orange-600'
                : highlight
                    ? `${isScrolled ? 'bg-orange-500 text-white' : 'bg-orange-500 bg-opacity-80 text-white'} hover:bg-orange-600`
                    : `${isScrolled ? 'text-gray-600' : 'text-blueColor'} hover:text-orange-600`
        }`}
        onClick={onClick}
    >
        {label}
    </Link>
);

export default Header;