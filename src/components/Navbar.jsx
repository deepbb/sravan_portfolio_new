"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/aboutme" },
    { name: "Personal Lifestyle", href: "/personal-lifestyle" },
    { name: "Professional Lifestyle", href: "/professional-lifestyle" },
    { name: "Gallery", href: "/gallery" },
    { name: "Work With Me", href: "/workwithme" },
  ];
  return (
    <div className={isOpen ? "navbar-expanded" : "navbar"}>
      <div className="navbar-wrapper">
        <div className="logo-hamburger-container">
          <div className="logo-container">
            <Image
              src="/logo.png"
              width={50}
              height={65}
              alt="Picture of the author"
            />
          </div>
          <div className="hamburger">
            {/* {isOpen ? <button>close</button> : <button>open</button>} */}
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ff6900" />
          </div>
        </div>

        <div className={isOpen ? "menu-items-expanded" : "menu-items"}>
          {/*
                   Home
                   About me
                   Personal Lifestyle
                   Professional Lifestyle
                   Gallery
                   Work With Me
                   */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                style={{ textDecorationLine: "none" }}
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                <li
                  className={`${isActive ? "list-items-first" : "list-items"}`}
                >
                  {link.name}
                </li>
              </Link>
            );
          })}
          {/* <li className="list-items">Blogs</li> */}
          {/* <Link style={{ textDecorationLine: "none" }} href="/getintouch">
            <li className="list-items">Get In Touch</li>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
