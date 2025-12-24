
import { PORTFOLIO_DATA } from "../constants";

/**
 * Static Mock Service
 * This replaces the live Gemini API to allow for 100% free static hosting.
 */

const STATIC_RESPONSES = [
  "That's a great question! Zakie's expertise in AI and Cybersecurity allows him to approach that from a unique perspective.",
  "You can find more details about that in the Projects section of this portfolio.",
  "Zakie is particularly interested in how LLMs can be used to automate threat detection in real-time.",
  "Based on his B.Tech studies at CMR University, Zakie has a strong foundation in both neural networks and network security."
];

export const getGeminiResponse = async (userMessage: string, chatHistory: any[]) => {
  const input = userMessage.toLowerCase();
  
  // Simulated delay for "AI thinking" feel
  await new Promise(resolve => setTimeout(resolve, 800));

  // Keyword-based routing for a realistic demo feel
  if (input.includes('project') || input.includes('work')) {
    return `Zakie has worked on several key projects including ${PORTFOLIO_DATA.projects[0].title} and ${PORTFOLIO_DATA.projects[1].title}. (Demo Mode: Static Response)`;
  }
  
  if (input.includes('skill') || input.includes('stack') || input.includes('code')) {
    return `Zakie is proficient in Python, PyTorch, and TensorFlow, with a focus on security tools. (Demo Mode: Static Response)`;
  }

  if (input.includes('contact') || input.includes('email') || input.includes('hire')) {
    return `You can reach Zakie at ${PORTFOLIO_DATA.email} or find him on LinkedIn. He is graduating in 2025!`;
  }

  if (input.includes('deepfake') || input.includes('aegis')) {
    return "Project Aegis is Zakie's flagship deepfake detection system using CNN architectures to identify facial artifacts.";
  }

  // Random fallback
  return STATIC_RESPONSES[Math.floor(Math.random() * STATIC_RESPONSES.length)] + " (Static Demo Mode)";
};
