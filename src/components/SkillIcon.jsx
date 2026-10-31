import { createElement } from "react";
import { icons } from "../data/icons.js";

// Renders one icon from icons.js. Brand logos are filled, line icons are stroked.
export default function SkillIcon({ name, className = "skill-icon" }) {
  const icon = icons[name];
  if (!icon) return null;

  if (icon.type === "brand") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d={icon.path} />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icon.shapes.map(([tag, attrs], i) => createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
