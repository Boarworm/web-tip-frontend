"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import MenuMain from "@/components/MenuMain";
import Logo from "@/components/Logo";
import HamburgerButton from "@/components/Hamburger";
import MenuMobile from "@/components/MenuMobile";
import { createPortal } from "react-dom";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      // Set background state based on scroll position
      setHasScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full py-3 border-b border-white/5 fixed top-0 left-0 z-60 transition-all duration-1000 md:py-4 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        hasScrolled ? "bg-brand-base-800 shadow-sm" : "bg-transparent"
      } ${className}`}
    >
      <Container className="flex items-center justify-between">
        <Logo
          className=""
          color="light"
          logoSrc="/logo-light.svg"
          title=""
          showText={true}
        />
        <MenuMain className="hidden md:flex" />
        <div className="flex items-center gap-4">
          {/*<ThemeToggle className="hidden md:flex"/>*/}
          {/*<LanguagePicker className="hidden md:flex"/>*/}
          <HamburgerButton
            className="md:hidden"
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          {mounted &&
            createPortal(
              <MenuMobile
                isOpen={isMobileMenuOpen}
                closeAction={() => setIsMobileMenuOpen(false)}
              />,
              document.body
            )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
