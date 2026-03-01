import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Youtube } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/assets/generated/logo-transparent.dim_200x200.png"
            alt="hehehe222k logo"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-fire-orange/60 group-hover:ring-fire-orange transition-all"
          />
          <span className="font-display font-bold text-lg fire-gradient-text tracking-tight">
            hehehe222k
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-fire-orange"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-fire-orange/10 rounded-md"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Subscribe CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://youtube.com/@hehehe222k?si=TsxMjLpCTkuRt2a5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-md fire-gradient text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 glow-orange-sm hover:glow-orange"
          >
            <Youtube className="w-4 h-4" />
            Subscribe
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border bg-card overflow-hidden"
          >
            <ul className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "text-fire-orange bg-fire-orange/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="https://youtube.com/@hehehe222k?si=TsxMjLpCTkuRt2a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 mt-2 rounded-md fire-gradient text-white font-semibold text-sm"
                >
                  <Youtube className="w-4 h-4" />
                  Subscribe on YouTube
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
