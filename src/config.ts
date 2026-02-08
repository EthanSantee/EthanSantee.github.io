export const siteConfig = {
  name: "Ethan Santee",
  title: "Software Developer",
  description: "Portfolio website of Ethan Santee",
  accentColor: "#1d4ed8",
  profilePicture: "/ProfilePicture.jpg",
  social: {
    email: "esantee@clemson.edu",
    linkedin: "https://www.linkedin.com/in/ethan-santee-141517387",
    github: "https://github.com/EthanSantee",
  },
  aboutMe:
    "Hi! I'm a Computer Science undergraduate at Clemson University who enjoys turning ideas into working code. I've built projects in Python, Java, C, and C++, ranging from games to AI-powered tools. I enjoy tackling edge cases and complex logic, and I frequently participate in hackathons. Alongside my projects, I work as a teaching assistant, helping students debug code and understand core programming concepts.",
  skills: ["Python", "C/C++", "Java", "Javascript", "React", "Git/GitHub"],
  projects: [
    {
      name: "AI File Organizer",
      description:
        "A smart file organization tool built during Clemson’s 24-hour hackathon that uses AI to reduce manual file cleanup. The system analyzes file names, content, and file types to group related files and automatically organize them into folders. The project uses a Python-based Flask backend that integrates the Google Gemini API for file classification, along with a React frontend for the user interface.",
      link: "chrome://dino",
      //image: "/ai-file-organizer.png",
      skills: ["Python", "Gemini", "Flask", "React", "Git"],
    },
    {
      name: "Othello",
      description:
        "Developed a fully functional version of the board game Othello in Java as part of a four person team. Implemented core game logic and used JUnit to create automated tests, while collaborating through Git based version control.",
      link: "chrome://dino",
      image: "/OthelloCode2.png",
      skills: ["Java", "JUnit", "Git"],
    },
    {
      name: "FTC Robot",
      description:
        "Led programming for a robotics team of seven students, developing Java code to control autonomous navigation and object manipulation on a competition field. Focused on reliable scoring routines and on field performance.",
      //image: "/ftc-robot.png",
      link: "chrome://dino",
      skills: ["Java"],
    },
  ],
  experience: [
    {
      company: "Clemson Creative Inquiry - Wearables in Cars",
      title: "Undergraduate Research Assistant",
      dateRange: "Jan 2025 - Present",
      bullets: [
        "Contributing to a research project studying the effects of smartwatches and AR/VR wearables on drivers.",
        "Building software to integrate smartwatches with a computer system, allowing researchers to send and manage notifications during experiments.",
      ],
    },
    {
      company: "Clemson Creative Inquiry - LLM-Driven Robotics",
      title: "Undergraduate Research Assistant",
      dateRange: "Jan 2025 - Present",
      bullets: [
        "Working with a research group to deploy an OpenVLA (vision-language-action) model on a robotic arm, exploring how vision-language models can control real world robotic tasks.",
      ],
    },
    {
      company: "Clemson School of Computing",
      title: "Undergraduate Teaching Assistant",
      dateRange: "Aug 2025 - Present",
      bullets: [
        "Supported over 100 students by assisting with debugging, and answering conceptual questions",
        "Developed multiple autograders to streamline the process of student grading",
        "Leading lab sessions for Clemson's introductory C/C++ course and Python course covering the fundamentals of object-oriented programming",
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
        "Named to the President’s or Dean’s List each semester",
      ],
    }
  ],
};
