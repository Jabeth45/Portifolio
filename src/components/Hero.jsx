import { profile } from "../data/profile.js";

export default function Hero() {
  const { photo, cv } = profile;

  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="eyebrow">HELLO, I'M</p>
        <h1>{profile.name}</h1>
        <h2 className="role">
          {profile.role.map((part, i) => (
            <span className="role-part" key={part}>
              {part}
              {i < profile.role.length - 1 && <i aria-hidden="true">|</i>}
            </span>
          ))}
        </h2>
        <p className="intro">{profile.intro}</p>
        <div className="hero-actions">
          <a href="#projects" className="button">View Projects</a>
          {cv && (
            <a href={cv.file} download={cv.downloadName} className="button button-outline">
              Download CV
            </a>
          )}
          <a href="#contact" className="text-link">
            Contact Me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <div className="photo-ring">
          <img
            src={photo.src}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
