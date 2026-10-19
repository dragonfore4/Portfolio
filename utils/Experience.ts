export type Experience = {
    company: string;
    url: string;
    role: string;
    period: string;
    summary: string;
    tags: string[];
    logo: string;
    logoContain?: boolean;
    current?: boolean;
};

export const EXPERIENCES: Experience[] = [
    {
        company: "IBM",
        url: "https://www.ibm.com",
        role: "Application Developer",
        period: "2026 – Present",
        summary:
            "Working in the DevOps field on the KTB project.",
        tags: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Ansible"],
        logo: "/logos/ibm-blue.svg",
        logoContain: true,
        current: true,
    },
    {
      company: "TTB Bank",
      url: "https://www.ttbbank.com",
      role: "DevOps Engineer Intern",
      period: "Jan – Apr 2026",
      summary:
      "Standardized CI/CD pipelines on shared Jenkins libraries, moved services to hardened RHEL images, and built an ELK dashboard for request and error visibility.",
      tags: ["Jenkins", "Docker", "RHEL", "ELK", "NestJS"],
      logo: "/logos/ttb.png",
    },
    {
        company: "IBM",
        url: "https://www.ibm.com",
        role: "Platform Engineer Intern",
        period: "Jun – Nov 2025",
        summary:
            "Built proofs of concept for clients and led a CSR fish-detection project with Kasetsart University.",
        tags: ["Terraform", "Instana", "watsonx Orchestrate"],
        logo: "/logos/ibm.jpg",
    },
];

export const VOLUNTEERING: Experience[] = [
    {
        company: "SAP",
        url: "https://www.sap.com",
        role: "Master Trainer, ASEAN Data Science Explorers",
        period: "Feb – Nov 2024",
        summary:
            "Taught SAP Analytics Cloud and low-code app building to young people across ASEAN.",
        tags: ["SAP Analytics Cloud", "SAP Build Apps"],
        logo: "/logos/sap.png",
    },
];
