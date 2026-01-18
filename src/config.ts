export const siteConfig = {
  name: "Ethan Santee",
  title: "Software Engineer",
  description: "Portfolio website of Ethan Santee",
  accentColor: "#1d4ed8",
  social: {
    email: "esantee@clemson.edu",
    linkedin: "https://www.linkedin.com/in/ethan-santee-141517387",
    github: "https://github.com/EthanSantee",
  },
  aboutMe:
    "Hi! I'm a Computer Science undergraduate at Clemson University who enjoys turning ideas into working code. I've built projects in Python, Java, C, and C++, ranging from games to AI-powered tools. I enjoy tackling edge cases and complex logic, and I frequently participate in hackathons. Alongside my projects, I work as a teaching assistant, helping students debug code and understand core programming concepts.",
  skills: ["Python", "C/C++", "Java", "Javascript", "React", "Node.js", "Git/GitHub"],
  projects: [
    {
      name: "AI File Organizer",
      description:
        "A smart file organization tool built during Clemson’s 24-hour hackathon that uses AI to reduce manual file cleanup. The system analyzes file names, content, and file types to group related files and automatically organize them into folders. The project uses a Python-based Flask backend that integrates the Google Gemini API for file classification, along with a React frontend for the user interface.",
      link: "chrome://dino",
      skills: ["Python", "Gemini", "Flask", "React", "Node.js", "Git"],
    },
    {
      name: "Othello",
      description:
        "",
      link: "chrome://dino",
      skills: ["Java", "JUnit", "Git"],
    },
    {
      name: "FTC Robot",
      description:
        "",
      link: "chrome://dino",
      skills: ["Java"],
    },
  ],
  experience: [
    {
      company: "Clemson School of Computing",
      title: "Undergraduate Teaching Assistant",
      dateRange: "Aug 2025 - Present",
      bullets: [
        "Supported over 100 students by assisting with debugging, and answering conceptual questions",
        "Developed multiple autograders to streamline the process of student grading",
        "Led lab sessions for Clemson's introductory C/C++ course and Python course covering the fundamentals of object-oriented programming",
      ],
    },
    {
      company: "Clemson Creative Inquiry",
      title: "Undergraduate Research Assistant",
      dateRange: "Jan 2025 - Present",
      bullets: [
        "",
        "",
        "",
      ],
    },
  ],
  education: [
    {
      school: "Clemson University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2024 - 2027",
      achievements: [
        "Current 3.93 GPA",
        "Dean's List all semesters",
      ],
    }
  ],
};
