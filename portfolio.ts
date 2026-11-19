import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Levi",
  title: "Hi all, I'm Levi",
  description:
    "I'm a Senior DevOps Engineer based in Jakarta, Indonesia, who enjoys cloud and automation. My work spans cloud, DevSecOps, and serverless. Now I'm pivoting into cybersecurity and agentic AI: teaching agents to break what I used to build. Simple beats clever. Open to freelance, hybrid, and remote roles.",
};

export const openSource = {
  githubUserName: "levi-x00",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:m.r.pahlevi00@gmail.com",
  linkedin: "https://www.linkedin.com/in/levi137/",
  github: "https://github.com/levi-x00",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "SENIOR DEVOPS ENGINEER WHO AUTOMATES THE CLOUD AND BREAKS IT ON PURPOSE",
  data: [
    {
      title: "Cloud & DevOps",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json",
      skills: [
        emoji("⚡ Designing and operating cloud infrastructure on AWS"),
        emoji("⚡ Building CI/CD pipelines with GitLab, GitHub, and AWS CodePipeline"),
        emoji("⚡ Automating everything with Python, Bash, and PowerShell"),
        emoji("⚡ Shipping serverless workloads with Lambda and the Serverless Framework"),
        emoji("⚡ Infrastructure as code with Terraform, containers with Docker and Podman, orchestration with Kubernetes and Argo CD"),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Lambda",
          iconifyTag: "logos:aws-lambda",
        },
        {
          skillName: "Serverless",
          iconifyTag: "logos:serverless",
        },
        {
          skillName: "Terraform",
          iconifyTag: "logos:terraform",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "logos:kubernetes",
        },
        {
          skillName: "Argo CD",
          iconifyTag: "devicon:argocd",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Bash",
          iconifyTag: "logos:bash",
        },
        {
          skillName: "PowerShell",
          iconifyTag: "vscode-icons:file-type-powershell",
        },
        {
          skillName: "Node.js",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "GitLab",
          iconifyTag: "logos:gitlab",
        },
        {
          skillName: "CodePipeline",
          iconifyTag: "logos:aws-codepipeline",
        },
        {
          skillName: "VS Code",
          iconifyTag: "vscode-icons:file-type-vscode",
        },
      ],
    },
    {
      title: "Security & Observability",
      lottieAnimationFile: "/lottie/build.json",
      skills: [
        emoji("⚡ Shifting security left with DevSecOps practices and cloud security hardening"),
        emoji("⚡ Monitoring and observability with Datadog, Grafana, and TrueWatch"),
        emoji("⚡ Pivoting into cybersecurity and agentic AI: teaching agents to break what I used to build"),
      ],
      softwareSkills: [
        {
          skillName: "Datadog",
          iconifyTag: "logos:datadog",
        },
        {
          skillName: "Grafana",
          iconifyTag: "logos:grafana",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Cloud & Infrastructure",
    progressPercentage: "90",
  },
  {
    Stack: "CI/CD & Automation",
    progressPercentage: "90",
  },
  {
    Stack: "Scripting & Programming",
    progressPercentage: "85",
  },
  {
    Stack: "Security & Observability",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [];

export const experience: ExperienceType[] = [];

export const projects: ProjectType[] = [];

export const feedbacks: FeedbackType[] = [];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Levi | Senior DevOps Engineer",
  description: greetings.description,
  author: "Levi",
  image: "https://avatars.githubusercontent.com/levi-x00",
  url: "https://levi-x00.github.io",
  keywords: [
    "Levi",
    "levi-x00",
    "Senior DevOps Engineer",
    "Cloud Security",
    "DevSecOps",
    "Serverless",
    "Jakarta",
    "Portfolio",
  ],
};
