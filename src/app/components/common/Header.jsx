"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import MegaMenu from "./megamenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle(
      "overflow-hidden",
      isMenuOpen || isMegaMenuOpen
    );
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen, isMegaMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItemClass = (path) =>
    `relative py-2 transition-all duration-300 group ${
      pathname === path ? "text-primary" : "text-secondary hover:text-primary"
    }`;

  const navItemBorderClass = (path) =>
    `absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
      pathname === path ? "bg-primary" : "bg-transparent group-hover:bg-primary"
    }`;

  return (
    <header className="sticky top-0 left-0 w-full z-100 bg-white shadow-sm">
      {/* === Top Bar === */}
      <div className="bg-primary border-b border-primary/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-12 text-sm font-light text-white">
          {/* --- Contact Info --- */}
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2">
              <FiPhone className="text-secondary" />
              <span className="cursor-pointer hover:text-secondary transition-colors">
                +971-2-xxxxx
              </span>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineEmail className="text-secondary" />
              <span className="cursor-pointer hover:text-secondary transition-colors">
                info@Dentalclinic.com
              </span>
            </span>
          </div>

          {/* --- Social Icons --- */}
          <div className="hidden md:flex items-center gap-4">
            {[RiFacebookFill, FaXTwitter, LuInstagram, RxLinkedinLogo].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-secondary hover:text-primary hover:scale-110 transition-transform"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* === Navbar === */}
      <nav className="relative">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex justify-between items-center h-20">
          {/* === Logo === */}
          <Link
            href="/"
            className="shrink-0 text-secondary font-semibold text-lg tracking-wide"
          >
            DENTAL CLINIC
          </Link>

          {/* === Desktop Nav === */}
          <ul className="hidden lg:flex items-center gap-10 text-[16px] font-medium tracking-wide">
            <li>
              <Link href="/" className={navItemClass("/")}>
                Home <span className={navItemBorderClass("/")} />
              </Link>
            </li>
            <li>
              <Link href="/about" className={navItemClass("/about")}>
                About <span className={navItemBorderClass("/about")} />
              </Link>
            </li>
            <li className="relative flex items-center group">
              <MegaMenu setIsMegaMenuOpen={setIsMegaMenuOpen} />
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
                  pathname.startsWith("/services")
                    ? "bg-primary"
                    : "bg-transparent group-hover:bg-primary"
                }`}
              ></span>
            </li>
            <li>
              <Link href="/contact" className={navItemClass("/contact")}>
                Contact <span className={navItemBorderClass("/contact")} />
              </Link>
            </li>
          </ul>

          {/* === Mobile Toggle === */}
          <button
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer text-secondary focus:outline-none"
          >
            {!isMenuOpen && <AlignRight size={30} />}
          </button>
        </div>

        {/* === Mobile Menu === */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-secondary z-200 text-white flex flex-col px-6 pt-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-primary font-semibold text-lg"
                >
                  DENTAL CLINIC
                </Link>
                <button
                  onClick={closeMenu}
                  className="text-white hover:text-primary transition-colors"
                >
                  <IoCloseSharp size={30} />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg font-medium text-white mb-8">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-2 transition-all duration-300 ${
                        pathname === item.href
                          ? "text-primary border-b-2 border-primary"
                          : "hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
