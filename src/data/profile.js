// EDIT ME: personal info used by the hero, contact section and footer.
// Wording matches the CV (Yabets_Melese_CV_Resume.pdf). Change both together.
export const profile = {
  name: "Yabets Melese",

  // The headline from the CV, one entry per segment. The hero joins them with " | ".
  role: ["Software Engineer", "Cybersecurity · Penetration Testing", "Full-Stack Developer"],

  intro:
    "Third-year Software Engineering student at Arba Minch University. I build full-stack apps and security tools, and I test web apps for security gaps. Looking for a software development internship, with a growing focus on cybersecurity.",

  // Put a square photo (600x600 or bigger) in /public and update src, width and height.
  photo: {
    src: "/profile.webp",
    width: 200,
    height: 200,
    alt: "Portrait of Yabets Melese",
  },

  // CV button stays hidden while this is null.
  // To turn it on: copy your PDF into /public, then use:
  // cv: { file: "/Yabets-Melese-CV.pdf", downloadName: "Yabets-Melese-CV.pdf" },
  // Note: the CV lists a phone number, so publish a copy without it.
  cv: null,

  links: {
    github: "https://github.com/Jabeth45",
    email: "mailto:meleseyabets@gmail.com",
  },

  learning: {
    title: "Currently learning",
    text: "Going deeper into web application security and penetration testing while building full-stack projects. Cybersecurity trained through the INSA Summer Camp (CTC), 5th batch.",
  },

  contact: {
    title: "Let's connect",
    text: "Open to a software development internship and to working on projects together. Get in touch.",
  },

  // Shown in the footer.
  location: "Addis Ababa, Ethiopia",
};
