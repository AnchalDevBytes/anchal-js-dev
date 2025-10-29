"use client";
import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Experience",
    "OpenSource",
    "Project",
    "About",
    "Contact",
  ];

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-3 left-0 w-full z-50 flex justify-center items-center px-4">
      <nav
        className="hidden md:flex p-1 gap-1 border rounded-full border-white/15 bg-white/10 backdrop-blur"
        aria-label="main navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.toLowerCase()}
            href={`#${item.toLowerCase()}`}
            className={
              activeLink === item.toLowerCase()
                ? "nav-items nav-items-active"
                : "nav-items"
            }
            onClick={() => handleClick(item.toLowerCase())}
            aria-current={
              activeLink === item.toLowerCase() ? "page" : undefined
            }
            aria-label={`View ${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="md:hidden flex items-center justify-between w-full">
        <button
          className="ml-auto p-2 rounded-md bg-white/10 border border-white/15"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <RxCrossCircled className="w-5 h-5 text-white" />
          ) : (
            <IoMenu className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[90%] bg-[#191B1F] border border-white/15 rounded-2xl shadow-lg flex flex-col items-center gap-3 py-4 md:hidden backdrop-blur-lg">
          {navItems.map((item) => (
            <a
              key={item.toLowerCase()}
              href={`#${item.toLowerCase()}`}
              className={`text-white px-4 py-2 rounded-lg transition-all duration-300 ${
                activeLink === item.toLowerCase()
                  ? "bg-white/20 font-semibold"
                  : "hover:bg-white/10"
              }`}
              onClick={() => handleClick(item.toLowerCase())}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
