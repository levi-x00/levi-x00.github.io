---
date: '3'
title: 'Centralized Egress Architecture'
cover: './lza-centralized-egress.png'
github: 'https://github.com/levi-x00/my-devops-portfolio/tree/master/03-centralized-egress'
external: 'https://github.com/levi-x00/my-devops-portfolio/tree/master/03-centralized-egress'
tech:
  - Transit Gateway
  - AWS Network Firewall
  - Terraform
  - VPC
  - Route 53
---

Centralized internet egress architecture for multiple VPCs using AWS Transit Gateway and a shared inspection VPC with AWS Network Firewall. Reduces NAT Gateway costs and enforces consistent security policy across all workload accounts.
