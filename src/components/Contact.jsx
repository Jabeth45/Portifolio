import { profile } from "../data/profile.js";

export default function Contact() {
  const { contact, links, cv } = profile;

  return (
    <section className="contact container" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">03 / CONTACT</p>
      <h2 id="contact-title">
        {contact.title}
        <span>.</span>
      </h2>
      <p>{contact.text}</p>
      <div className="contact-links">
        <a href={links.github} target="_blank" rel="noreferrer noopener">
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a href={links.email}>
          Email <span aria-hidden="true">↗</span>
        </a>
        {cv && (
          <a href={cv.file} download={cv.downloadName}>
            CV <span aria-hidden="true">↓</span>
          </a>
        )}
      </div>
    </section>
  );
}
