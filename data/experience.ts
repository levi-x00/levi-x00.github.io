export const experience: {
  company: string;
  role: string;
  date: string;
  employmentType: string;
  companyLogo: string;
  desc: string;
  descBullets?: string[];
}[] = [
  {
    company: "PT Innovation Cloud Service Compute",
    role: "DevOps Architect",
    date: "Sept 2024 - Present",
    employmentType: "Full-Time",
    companyLogo: "/img/icons/common/innovationcloud.svg",
    desc: "Architecting secure multi-account AWS platforms and EKS foundations for AI/ML workloads, with reusable infrastructure modules and automated delivery.",
    descBullets: [
      "Architected AWS Landing Zone using Terraform for secure multi-account environments.",
      "Designed EKS platform for AI/ML workloads with scalability and cost optimization.",
      "Standardized infrastructure using reusable Terraform modules, improving deployment efficiency.",
      "Led ECS to EKS migration and built CI/CD pipelines using GitHub Actions and AWS CodePipeline.",
    ],
  },
  {
    company: "Feedloop",
    role: "DevOps Engineer Lead",
    date: "Apr 2023 - Apr 2024",
    employmentType: "Full-Time",
    companyLogo: "/img/icons/common/feedloop.svg",
    desc: "Led infrastructure provisioning pipelines and cloud cost optimization for a product team running ECS and EKS on AWS.",
    descBullets: [
      "Led design and implementation of CI/CD pipelines for infrastructure provisioning (VPC, Transit Gateway, ECS, EKS) using AWS CodePipeline.",
      "Optimized CI/CD performance by reducing S3 synchronization time, improving deployment speed.",
      "Implemented cost optimization via automated Lambda scheduling for non-production resources.",
      "Automated Nginx configuration deployment and SageMaker endpoint provisioning using CodePipeline and Lambda.",
    ],
  },
  {
    company: "SEON Technologies",
    role: "DevOps Engineer",
    date: "Sept 2022 - Feb 2023",
    employmentType: "Full-Time",
    companyLogo: "/img/icons/common/seon.svg",
    desc: "Improved Terraform-based AWS provisioning and kept application delivery reliable through TeamCity and CodeDeploy pipelines.",
    descBullets: [
      "Enhanced Terraform-based infrastructure provisioning for AWS, improving maintainability and scalability.",
      "Maintained and improved CI/CD pipelines using TeamCity and AWS CodeDeploy for reliable application delivery.",
    ],
  },
  {
    company: "Cloud Comrade",
    role: "Cloud Consultant",
    date: "Jun 2021 - Aug 2022",
    employmentType: "Full-Time",
    companyLogo: "/img/icons/common/cloudcomrade.svg",
    desc: "Designed and deployed AWS network and storage foundations for clients, automating CloudFormation delivery with Jenkins.",
    descBullets: [
      "Designed and deployed AWS infrastructure including VPC, Transit Gateway, EC2, RDS, and secure SFTP solutions.",
      "Implemented Jenkins pipelines to automate CloudFormation deployments across environments.",
      "Automated Nexus repository provisioning using Infrastructure as Code (CloudFormation).",
    ],
  },
  {
    company: "Xtremax",
    role: "System Engineer",
    date: "Oct 2017 - Jun 2021",
    employmentType: "Full-Time",
    companyLogo: "/img/icons/common/xtremax.svg",
    desc: "Automated multi-cloud provisioning and built serverless security alerting, centralized logging, and monitoring for production systems.",
    descBullets: [
      "Automated AWS and GCP infrastructure provisioning using Infrastructure as Code (CloudFormation, Deployment Manager).",
      "Built serverless security alerting and centralized logging (Lambda, GuardDuty, OpenSearch).",
      "Managed monitoring (Zabbix), SFTP migration to AWS File Gateway, and reporting with BigQuery/Data Studio.",
    ],
  },
];