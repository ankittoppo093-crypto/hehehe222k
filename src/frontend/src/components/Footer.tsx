import { Link } from "@tanstack/react-router";
import { Heart, Youtube } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img
                src="/assets/generated/logo-transparent.dim_200x200.png"
                alt="hehehe222k logo"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-fire-orange/60"
              />
              <span className="font-display font-bold text-base fire-gradient-text">
                hehehe222k
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free Fire gameplay videos with fun matches, cool moments, and
              entertaining clips.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">
              Pages
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-fire-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="font-display font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">
              Join the Squad
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to stay updated on new Free Fire content!
            </p>
            <a
              href="https://youtube.com/@hehehe222k?si=TsxMjLpCTkuRt2a5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md fire-gradient text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 glow-orange-sm"
            >
              <Youtube className="w-4 h-4" />
              Subscribe Now
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} hehehe222k. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with <Heart className="inline w-3 h-3 text-fire-orange" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fire-orange/80 hover:text-fire-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
