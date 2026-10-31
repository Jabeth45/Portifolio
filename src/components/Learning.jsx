import { profile } from "../data/profile.js";

export default function Learning() {
  const { learning } = profile;

  return (
    <section className="learning container" aria-labelledby="learning-title">
      <span className="learning-icon" aria-hidden="true">↗</span>
      <div>
        <h3 id="learning-title">{learning.title}</h3>
        <p>{learning.text}</p>
      </div>
    </section>
  );
}
