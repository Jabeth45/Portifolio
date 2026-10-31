// EDIT ME: skills shown on the page, in groups. "icon" is a key from icons.js.
// Groups and items follow the CV: Languages, Web, Databases, Security, Tools.
export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Node.js", icon: "nodejs" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    title: "Security",
    skills: [
      { name: "Linux", icon: "linux" },
      { name: "Networking", icon: "networking" },
      { name: "Burp Suite", icon: "burpsuite" },
      { name: "Nmap", icon: "nmap" },
      { name: "sqlmap", icon: "sqlmap" },
      { name: "Privilege Escalation", icon: "privesc" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
    ],
  },
];
