/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dhia Elhack Nsibi",
  title: "Hi all, I'm Dhia",
  subTitle: emoji(
    "Engineering student in Telecommunications passionate about Java / Full Stack development, CI/CD automation, and Linux systems 🚀. Building robust applications, automating pipelines, and turning complex problems into clean software. Currently seeking a 6-month Final-Year Internship (PFE) starting February 2027."
  ),
  resumeLink: process.env.PUBLIC_URL + "/Resume.pdf", // served from the public/ folder
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dhiaelhack",
  linkedin: "https://www.linkedin.com/in/nsibi-dhia-elhack-01290b245/",
  gmail: "nsibidhiaelhack@gmail.com",
  gitlab: "https://gitlab.com/nsibidhiaelhack",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "ENGINEERING STUDENT FOCUSED ON JAVA / FULL STACK DEVELOPMENT, CI/CD & LINUX SYSTEMS",
  skills: [
    emoji(
      "⚡ Build full-stack applications with Java, Angular, Node.js and modern web frameworks"
    ),
    emoji(
      "⚡ Develop and automate secure CI/CD pipelines with GitLab CI, Docker, SonarQube and OWASP ZAP"
    ),
    emoji(
      "⚡ Design and implement Linux/POSIX systems programming — shells, IPC, process management"
    ),
    emoji(
      "⚡ Design and emulate enterprise network architectures (MPLS/VPN, OSPF, BGP) and security monitoring platforms"
    ),
    emoji(
      "⚡ Build AI-powered applications including RAG-based assistants and computer vision pipelines"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c/c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs / express",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3 / sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "linux / bash",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "networking",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "cybersecurity",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "ai / ml",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Engineering School of Sousse (ENISo)",
      logo: require("./assets/images/ENISO-Image.webp"),
      subHeader:
        "Engineering Degree in progress — Embedded Telecommunications Engineering (GTE), Telecommunications Networks",
      duration: "September 2024 - Present",
      desc: "Bizerte / Sousse, Tunisia",
      descBullets: []
    },
    {
      schoolName: "Preparatory Institute for Engineering Studies of Gabès (IPEIG)",
      logo: require("./assets/images/IPEIG.webp"),
      subHeader: "Preparatory Classes — Physics & Technology (Techno/T track)",
      duration: "September 2022 - 2024",
      desc: "Gabès, Tunisia",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development (Java / JS / Angular)", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps & CI/CD (GitLab CI, Docker, SonarQube)",
      progressPercentage: "80%"
    },
    {
      Stack: "Networks, Systems & Cybersecurity",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Network & Systems Administration Intern",
      company: "SOTULUB (Tunisian Lubricants Company)",
      companylogo: require("./assets/images/sotulub-200x200.png.webp"),
      date: "Jul 2026 – Aug 2026",
      desc: "IT Infrastructure / Networks",
      descBullets: [
        "Participated in the administration and monitoring of the company's network and systems infrastructure",
        "Assisted with troubleshooting and maintenance of IT infrastructure components"
      ]
    },
    {
      role: "Software Development Intern (Network Monitoring)",
      company: "SOTETEL (Tunisian Telecommunications Company)",
      companylogo: require("./assets/images/SOTETEL.jpg"),
      date: "Jul 2025 – Aug 2025",
      desc: "Data Center & Network Administration",
      descBullets: [
        "Contributed to the development of a network-monitoring software component within the data center team",
        "Collaborated with network administrators to align monitoring tools with operational requirements"
      ]
    },
    {
      role: "Founder & President",
      company: "ACM ENISo Student Chapter",
      companylogo: require("./assets/images/acm-logo.jpg"),
      date: "2025 – Present",
      desc: "Led the official affiliation of the ACM student chapter and helped establish its organizational structure.",
      descBullets: [
        "Organized programming and technical events for the student community"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/Huginn Watch.jpeg"),
      projectName: "HuginnWatch — Network & Server Security Monitoring",
      projectDesc:
        "Designed and evaluated a FastAPI/Streamlit monitoring platform with vulnerability scanning (Nmap), alerting, and telemetry-based anomaly detection.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/dhiaelhack" }
      ]
    },
    {
      image: require("./assets/images/Agentic RAG Assistant.jpg"),
      projectName: "Agentic RAG Assistant",
      projectDesc:
        "Developed a LangChain ReAct-based document question-answering system; investigated retrieval quality, agent tool usage, and failure modes using Pinecone and LangSmith.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/dhiaelhack" }
      ]
    },
    {
      image: require("./assets/images/VPN-MPLS Network Architecture.jpeg"),
      projectName: "VPN-MPLS Network Architecture",
      projectDesc:
        "Designed and emulated a multi-site MPLS/VPN backbone using GNS3, Docker, and FRRouting; configured OSPF, BGP, and MP-BGP, and validated routing and label switching.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/dhiaelhack" }
      ]
    },
    {
      image: require("./assets/images/DevSecOps .jpeg"),
      projectName: "Secure DevSecOps CI/CD Pipeline",
      projectDesc:
        "Developed a full-stack platform with an automated GitLab CI/Docker pipeline integrating SonarQube and OWASP ZAP for code quality and security-risk assessment.",
      footerLink: [
        { name: "GitLab", url: "https://gitlab.com/nsibidhiaelhack" }
      ]
    },
    {
      image: require("./assets/images/LAS-Shell.jpg"),
      projectName: "LAS Shell — POSIX Unix Shell in C",
      projectDesc:
        "Implemented a POSIX-compliant Unix shell in C under Linux: process management, IPC, pipelines, I/O redirection, signals, background jobs, command history and aliases.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/dhiaelhack" }
      ]
    },
    {
      image: require("./assets/images/Real-Time GSm.jpeg"),
      projectName: "Real-Time GSM/GPS Vehicle Tracking System",
      projectDesc:
        "Designed an embedded vehicle-tracking system using GSM/GPS modules (SIM800L), secure position transmission, live mapping, and trip history.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/dhiaelhack" }
      ]
    },
    {
      image: require("./assets/images/Intelligent Facial Recognition Application.jpeg"),
      projectName: "Intelligent Facial Recognition Application",
      projectDesc:
        "Built a real-time facial detection and recognition pipeline using Flask, OpenCV, and TensorFlow, trained and tested on customized image data.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/dhiaelhack" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, activities, and extracurricular contributions",

  achievementsCards: [
    {
      title: "NVIDIA Deep Learning Institute — NLP",
      subtitle:
        "Certified by the NVIDIA Deep Learning Institute in Natural Language Processing (NLP).",
      image: require("./assets/images/nvidia_logo.jpeg"),
      imageAlt: "NVIDIA Deep Learning Institute Logo",
      footerLink: [{ name: "Certificate", url: "" }]
    },
    {
      title: "Eureka Club",
      subtitle: "Active member contributing to tech community initiatives.",
      image: require("./assets/images/eureka.jpg"),
      imageAlt: "Eureka Club Logo",
      footerLink: []
    },
    {
      title: "Orange Digital Center Club",
      subtitle: "Active member contributing to tech community initiatives.",
      image: require("./assets/images/orange.jpg"),
      imageAlt: "Orange Digital Center Logo",
      footerLink: []
    },
    {
      title: "Hackathon Participant",
      subtitle: "Participant in embedded systems, IoT, and AI hackathons.",
      image: require("./assets/images/hackaton.jpg"),
      imageAlt: "Hackathon Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I love sharing what I learn 🎙️"),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking for a 6-month Final-Year Internship (PFE) from February 2027 in Java / Full Stack Development or CI-CD. Feel free to reach out!",
  number: "",
  email_address: "nsibidhiaelhack@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", // Replace with your twitter username without @, or leave and set display false
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be displayed as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
