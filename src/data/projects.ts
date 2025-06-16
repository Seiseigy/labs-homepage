
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Network Visualizer",
    description: "Interactive web application for visualizing neural network architectures with React and D3.js.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "TypeScript", "Python"],
    githubUrl: "https://github.com/seilabs/neural-viz",
    liveUrl: "https://neural-viz.seilabs.dev",
    featured: true
  },
  {
    id: 2,
    title: "Distributed Task Queue",
    description: "High-performance distributed task queue system with Redis backend and auto-scaling capabilities.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: ["Go", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/seilabs/task-queue",
    featured: true
  },
  {
    id: 3,
    title: "Real-time Collaboration Platform",
    description: "Slack-like platform with real-time messaging, file sharing, and video calls using modern web tech.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "WebRTC"],
    githubUrl: "https://github.com/seilabs/collab-platform",
    liveUrl: "https://collab.seilabs.dev",
    featured: true
  },
  {
    id: 4,
    title: "AI Code Assistant",
    description: "VS Code extension providing intelligent code suggestions using OpenAI's API for better development.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    technologies: ["TypeScript", "VS Code API", "OpenAI", "Node.js"],
    githubUrl: "https://github.com/seilabs/ai-assistant",
    featured: false
  }
];
