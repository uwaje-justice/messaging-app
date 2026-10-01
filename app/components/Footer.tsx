import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "About", href: "/about" },
      { label: "Get Started", href: "/register" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Sign Up", href: "/register" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-outline-variant bg-surface">
      <div className="wrap">
        {/* Main footer */}
        <div className="grid gap-12 py-12 md:grid-cols-[1.5fr_2fr] lg:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary text-on-primary">
                <span className="font-heading text-lg font-bold">M</span>
              </div>

              <span className="font-heading text-lg font-bold text-on-surface">
                Messaging App
              </span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-on-surface/60">
              A simple messaging experience for staying connected, sharing
              moments, and keeping conversations in one place.
            </p>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="mt-5 inline-flex size-9 items-center justify-center rounded-lg border border-outline-variant text-on-surface/60 transition-colors hover:bg-surface-container hover:text-on-surface"
            >
              <SiGithub className="size-4" />
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map(({ title, links }) => (
              <div key={title}>
                <h3 className="font-heading text-sm font-bold text-on-surface">
                  {title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-on-surface/60 transition-colors hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-outline-variant py-6 text-sm text-on-surface/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Messaging App. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <MessageCircle className="size-4" />
            <span>Stay connected.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
