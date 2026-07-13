import resumeAsset from "@/assets/resume.pdf.asset.json";

export const resume = {
  name: "Praveena B",
  title: "Aspiring Software Engineer",
  intro:
    "An aspiring Software Engineer driven by curiosity and a passion for building software solutions. Interested in solving real-world problems through scalable applications, efficient algorithms, and continuous learning.",
  resumeUrl: resumeAsset.url,
  contact: {
    email: "praveenabala2907@gmail.com",
    phone: "+91-9677118724",
    linkedin: { label: "praveena-bala", url: "https://www.linkedin.com/in/praveena-bala" },
    github: { label: "Praveena-2907", url: "https://github.com/Praveena-2907" },
    location: "India",
  },
  education: [
    {
      degree: "Bachelor of Technology, Information Technology",
      school: "Anna University",
      period: "Expected 2028",
      detail: "CGPA: 8.55 / 10",
    },
    {
      degree: "Class XII",
      school: "Nazareth Matriculation School",
      period: "2024",
      detail: "Score: 96%",
    },
    {
      degree: "Class X",
      school: "Nazareth Matriculation School",
      period: "2022",
      detail: "Score: 97.6%",
    },
  ],
  skills: [
    {
      category: "Core CS",
      items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
    },
    {
      category: "Languages",
      items: ["C", "C++", "Python", "Java", "SQL"],
    },
    {
      category: "Web Technologies",
      items: ["HTML5", "CSS3", "React.js"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "Oracle Database"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ],
  projects: [
    {
      name: "SharePlate",
      tech: ["React.js", "FastAPI", "PostgreSQL", "Google Maps API"],
      points: [
        "Developed a full-stack community food rescue platform connecting food donors, NGOs, and volunteers.",
        "Implemented role-based authentication, donation management, REST APIs, and Google Maps integration for pickup coordination.",
      ],
    },
    {
      name: "AI-Based Timetable Generation System",
      subtitle: "Smart India Hackathon 2025 — Team Project",
      tech: ["Python", "Google OR-Tools", "Constraint Programming", "React.js", "FastAPI", "PostgreSQL"],
      points: [
        "Collaborated in a team to develop an AI-powered timetable generation system for multidisciplinary institutions.",
        "Contributed to designing a constraint-based scheduling solution using Google OR-Tools.",
      ],
    },
    {
      name: "Airline Route Optimizer",
      tech: ["C++", "Graphs", "Dijkstra's Algorithm", "DFS", "BFS", "DSU"],
      points: [
        "Built a graph-based route optimization system to determine optimal flight paths using Dijkstra's shortest path algorithm.",
        "Implemented DFS, BFS, and Disjoint Set Union (DSU) using STL containers for efficient graph traversal and connectivity analysis.",
      ],
    },
  ],
  certifications: [
    { name: "Data Science for Engineers", issuer: "NPTEL", note: "Elite + Top 5%" },
    { name: "Introduction to Networking", issuer: "NVIDIA", note: "" },
  ],
  achievements: [
    "2nd Prize, College-Level UI/UX Design Competition",
    "Winner, Inter-District Badminton Tournament",
    "Dakshina Bharat Hindi Prachar Sabha (DBHPS) — Completed all 8 Hindi proficiency levels",
  ],
  activities: [
    "Volunteer, Youth Red Cross",
    "Member of the Design & Website Team, Personality Development Association",
  ],
  navLinks: [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ],
};
