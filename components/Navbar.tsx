"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";

import { PiListBold, PiXBold } from "react-icons/pi";

function removeNoScroll() {
  document.body.classList.remove("no-scroll");
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-(--navbar-height)">
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 bg-neutral-100 mt-4 rounded-3xl"
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
        <div className="h-12 w-12 mr-auto">
          <Link href="/">
            <Image
              src={logo}
              alt="Olokun LLC"
              className="h-full w-auto"
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex relative isolate">
          <Link className="px-4 rounded-full relative overflow-hidden" href="/">
            Home
          </Link>
          <Link
            className="px-4 rounded-full relative overflow-hidden"
            href="/about"
          >
            About
          </Link>
          <Link
            className="px-4 rounded-full relative overflow-hidden"
            href="/capabilities"
          >
            Services
          </Link>
          <Link
            className="px-4 rounded-full relative overflow-hidden"
            href="/work"
          >
            Testimonials
          </Link>
          <Link
            href="/completecloud"
            className="px-4 rounded-full relative overflow-hidden"
          >
            Partnerships
          </Link>
          <Link
            className="px-4 rounded-full relative overflow-hidden"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
      <nav
        className={`absolute h-[calc(100vh-var(--navbar-height))] top-(--navbar-height) left-0 z-30 bg-black/20 backdrop-blur-xs w-screen md:hidden transition-all ${
          !isMenuOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        onClick={(e) => {
          const target = e.target as EventTarget & HTMLElement;
          if (target.nodeName === "NAV") setIsMenuOpen(false);
        }}
        id="mobile-nav"
        aria-label="Mobile Navigation"
      >
        <div className="w-[min(100vw,400px)] flex flex-col gap-4 p-7 bg-zinc-200 text-black h-full">
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="/capabilities"
          >
            Capabilities
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="/work"
          >
            Our Work
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="/completecloud"
          >
            CompleteCloud
          </Link>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
              removeNoScroll();
            }}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};
