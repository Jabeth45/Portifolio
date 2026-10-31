import BrandMark from "./BrandMark.jsx";
import { profile } from "../data/profile.js";

// No name here on purpose: it is already in the navbar and the hero.
export default function Footer() {
  return (
    <footer className="footer container">
      <a href="#home" className="footer-mark" aria-label="Back to top">
        <BrandMark />
      </a>
      <div className="footer-note">
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
        <p className="footer-sub">Designed &amp; built in {profile.location}</p>
      </div>
      <a href="#home" className="footer-top">
        Back to top <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
