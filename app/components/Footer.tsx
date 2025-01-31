"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-green-900 text-cream py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo and Name */}
        <div className="mb-4 md:mb-0">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">South Side Brews</h2>
            <p className="text-sm opacity-75">Coffee & Nature Together</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mb-4 md:mb-0 ">
          <ul className="flex flex-col md:flex-row gap-4 text-sm">
            <Link
              className="transition hover:underline hover:text-blushPeach duration-200"
              href="#scheduleTime"
            >
              <span>Open Hours</span>
            </Link>
            <Link
              className="transition border-white hover:underline hover:text-blushPeach  duration-200"
              href="#menu"
            >
              <span>Menu</span>
            </Link>
            <Link
              className="transition border-white hover:underline hover:text-blushPeach duration-200"
              href="#order"
            >
              <span>Order for Pickup</span>
            </Link>
            <Link
              className="transition border-white hover:underline hover:text-blushPeach duration-200"
              href="#booking"
            >
              <span>Book Our Cafe</span>
            </Link>
            <Link
              className="transition border-white hover:underline hover:text-blushPeach duration-200"
              href="#contact"
            >
              <span>Contact Us</span>
            </Link>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex gap-4 text-xl items-center ">
          <a
            onClick={() => {
              window.open("https://utak.io/store/southsidebrews")!.focus();
            }}
            className="hover:text-lightGreen opacity-50 hover:opacity-100 duration-300 ease-in-out hover:cursor-pointer"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-lightGreen opacity-50 hover:opacity-100 duration-300 ease-in-out hover:cursor-pointer"
          >
            <FaInstagram />
          </a>
          {/* Copyright */}
          <div className="text-center text-xs opacity-75">
            &copy; {new Date().getFullYear()} South Side Brews. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
