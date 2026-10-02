import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const authLinks = [
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/register" },
];

const Header = () => {
  return (
    <header className="border-b border-outline-variant bg-surface">
      <div className="wrap flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-on-surface transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {authLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                index === 0
                  ? "rounded-lg px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-container"
                  : "rounded-lg primary-gradient px-4 py-2 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
