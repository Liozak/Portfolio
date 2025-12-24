
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Mohammed Zakie Sayyed",
  title: "AI/ML Engineer & Cybersecurity Enthusiast",
  bio: "Final-year B.Tech CSE student at CMR University specializing in AI/ML. I am passionate about leveraging machine learning to solve complex security challenges, ranging from real-time threat detection to deepfake analysis.",
  email: "sayyedzakie10@gmail.com",
  socials: {
    github: "https://github.com/Liozak",
    linkedin: "https://www.linkedin.com/in/zakie-sayyed",
    twitter: "https://twitter.com/zakie_sayyed"
  },
  skills: [
    { name: "Python", level: 95, category: "Frontend" }, // Logic: Programming
    { name: "SQL", level: 85, category: "Frontend" },
    { name: "Java", level: 80, category: "Frontend" },
    { name: "C++", level: 70, category: "Frontend" },
    
    { name: "PyTorch / TensorFlow", level: 88, category: "Backend" }, // Logic: AI/ML
    { name: "Scikit-Learn", level: 90, category: "Backend" },
    { name: "NLP / CNNs", level: 85, category: "Backend" },
    { name: "LLMs / RAG", level: 82, category: "Backend" },
    
    { name: "Network Security", level: 88, category: "Tools" }, // Logic: Cybersecurity
    { name: "Intrusion Detection", level: 90, category: "Tools" },
    { name: "Phishing Analysis", level: 92, category: "Tools" },
    { name: "Log Correlation", level: 80, category: "Tools" },
    
    { name: "Git & GitHub", level: 90, category: "Soft Skills" }, // Logic: DevTools/MLOps
    { name: "Docker / Linux", level: 85, category: "Soft Skills" },
    { name: "Flask / FastAPI", level: 85, category: "Soft Skills" },
    { name: "MLflow", level: 75, category: "Soft Skills" }
  ],
  projects: [
    {
      id: "1",
      title: "Phishing Website Detection System",
      description: "Addressing the high volume of malicious URLs by building a robust ML classification system.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "Scikit-Learn", "API Integration"],
      link: "#",
      github: "https://github.com/Liozak"
    },
    {
      id: "2",
      title: "Project Aegis: Deepfake Detection",
      description: "Developing an incident dashboard to detect and report AI-generated media manipulation in real-time.",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800",
      tags: ["Deep Learning", "Computer Vision", "Dashboard"],
      link: "#",
      github: "https://github.com/Liozak"
    },
    {
      id: "3",
      title: "Multi-Modal RAG Analytics",
      description: "Building an intelligent system to extract and analyze information from vast unstructured datasets using RAG pipelines.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
      tags: ["NLP", "Vector DB", "Gemini API"],
      link: "#",
      github: "https://github.com/Liozak"
    },
    {
      id: "4",
      title: "Cloud Attack Simulator",
      description: "Simulating common infrastructure attacks to test detection engine capabilities and response automation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      tags: ["Network Security", "Python", "Cloud"],
      link: "#",
      github: "https://github.com/Liozak"
    }
  ],
  experience: [
    {
      company: "CMR University, Bangalore",
      role: "BTech in Computer Science (Specialization in AI/ML)",
      period: "Oct 2022 - Present",
      description: "Maintaining strong academic standing with a focus on Artificial Intelligence, Neural Networks, and Network Security."
    },
    {
      company: "Google / Coursera",
      role: "Google Cybersecurity Professional Certificate",
      period: "2024",
      description: "Completed professional training covering security foundations, Linux, Python for security, and incident response."
    },
    {
      company: "Academic Projects & Research",
      role: "Student Developer",
      period: "2023 - Present",
      description: "Actively developing open-source security tools and implementing machine learning models for anomaly detection and pattern recognition."
    }
  ]
};
