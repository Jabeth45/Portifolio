import BrandMark from "./BrandMark.jsx";

const links = [
  { label: "Home", href: "#home", hideOnPhone: true },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="navbar container">
      <a href="#home" className="logo">
        <BrandMark />
        <span>yabets-melese</span>
      </a>
      <nav aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={link.hideOnPhone ? "hide-on-phone" : undefined}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
