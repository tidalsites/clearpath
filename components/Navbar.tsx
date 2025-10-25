"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "@/public/logo_white.svg";
import Image from "next/image";

import { PiListBold, PiXBold } from "react-icons/pi";
import { ContactBar } from "./ContactBar";

function removeNoScroll() {
  document.body.classList.remove("no-scroll");
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-theme text-background backdrop-blur-4xl z-30 w-full">
      <ContactBar />
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2"
        aria-label="Primary Navigation"
      >
        <button
          onClick={() => {
            if (isMenuOpen) {
              removeNoScroll();
            }

            if (!isMenuOpen) {
              document.body.classList.add("no-scroll");
            }

            setIsMenuOpen((prev) => !prev);
          }}
          aria-controls="mobile-nav"
          aria-label="Mobile Menu Toggle"
        >
          {isMenuOpen ? (
            <PiXBold className="text-zinc-200 text-4xl w-fit px-4 md:hidden" />
          ) : (
            <PiListBold className="text-zinc-200 text-4xl w-fit px-4 md:hidden" />
          )}
        </button>
        <div className="hidden md:block h-12 w-12 mr-auto">
          <Link href="/">
            <Image src={logo} alt="" className="h-full w-auto" priority />
          </Link>
        </div>
        <div className="hidden md:flex relative isolate">
          <Link
            className="px-4 py-1 rounded-full relative overflow-hidden hover:bg-background hover:text-theme transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="px-4 py-1 rounded-full relative overflow-hidden hover:bg-background hover:text-theme transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            href="#partnerships"
            className="px-4 py-1 rounded-full relative overflow-hidden hover:bg-background hover:text-theme transition-colors"
          >
            Partnerships
          </Link>
          <Link
            className="px-4 py-1 rounded-full relative overflow-hidden hover:bg-background hover:text-theme transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      </nav>
      <nav
        className={`absolute h-page-height-mobile left-0 z-30 bg-background/80 backdrop-blur-xs w-screen md:hidden transition-all ${
          !isMenuOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        onClick={(e) => {
          const target = e.target as EventTarget & HTMLElement;
          if (target.nodeName === "NAV") setIsMenuOpen(false);
        }}
        id="mobile-nav"
        aria-label="Mobile Navigation"
      >
        <div className="w-[min(100vw,400px)] flex flex-col gap-4 p-7 text-theme uppercase text-lg h-full">
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="#about"
          >
            About
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="#services"
          >
            Services
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="#partnerships"
          >
            Partnerships
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="#contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};
