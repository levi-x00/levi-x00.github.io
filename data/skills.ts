export const skillGroups = [
  {
    title: "Cloud & DevOps",
    capabilities: [
      "Designing and operating cloud infrastructure on AWS and GCP",
      "Shipping serverless workloads with Lambda and the Serverless Framework",
      "Infrastructure as code with Terraform, containers with Docker and Podman, orchestration with Kubernetes and Argo CD",
      "Secure multi-account AWS Landing Zone and EKS platforms for AI/ML workloads",
    ],
    softwareSkills: [
      { skillName: "AWS", iconifyTag: "logos:aws" },
      { skillName: "GCP", iconifyTag: "logos:google-cloud" },
      { skillName: "Terraform", iconifyTag: "logos:terraform" },
      { skillName: "Docker", iconifyTag: "logos:docker-icon" },
      { skillName: "Kubernetes", iconifyTag: "logos:kubernetes" },
      { skillName: "Serverless", iconifyTag: "logos:serverless" },
      { skillName: "Linux", iconifyTag: "logos:linux-tux" },
    ],
  },
  {
    title: "CI/CD & Automation",
    capabilities: [
      "Building CI/CD pipelines with GitLab, GitHub, Jenkins, and AWS CodePipeline",
      "GitOps delivery with Argo CD and configuration automation with Ansible",
      "Automating everything with Python, Bash, and PowerShell",
    ],
    softwareSkills: [
      { skillName: "Argo CD", iconifyTag: "devicon:argocd" },
      { skillName: "Jenkins", iconifyTag: "devicon:jenkins" },
      { skillName: "CodePipeline", iconifyTag: "logos:aws-codepipeline" },
      { skillName: "GitLab", iconifyTag: "logos:gitlab" },
      { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
      { skillName: "Ansible", iconifyTag: "logos:ansible" },
      { skillName: "Git", iconifyTag: "logos:git" },
    ],
  },
  {
    title: "Scripting & Programming",
    capabilities: [
      "Production automation and tooling in Python, Bash, and PowerShell",
      "Service-side JavaScript with Node.js",
    ],
    softwareSkills: [
      { skillName: "Python", iconifyTag: "logos:python" },
      { skillName: "Bash", iconifyTag: "logos:bash" },
      { skillName: "PowerShell", iconifyTag: "vscode-icons:file-type-powershell" },
      { skillName: "Node.js", iconifyTag: "logos:nodejs-icon" },
    ],
  },
  {
    title: "Security & Observability",
    capabilities: [
      "Shifting security left with DevSecOps practices and cloud security hardening",
      "Monitoring and observability with Datadog, Grafana, Prometheus, and TrueWatch",
      "Code quality and security scanning with Sonarqube",
      "Pivoting into cybersecurity and agentic AI: teaching agents to break what I used to build",
    ],
    softwareSkills: [
      { skillName: "Datadog", iconifyTag: "logos:datadog" },
      { skillName: "Grafana", iconifyTag: "logos:grafana" },
      { skillName: "Prometheus", iconifyTag: "logos:prometheus" },
      { skillName: "Sonarqube", iconifyTag: "devicon:sonarqube" },
    ],
  },
];