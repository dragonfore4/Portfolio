export const HOMELAB = {
    url: "https://architecture.homelab.sirasith.net/",
    summary:
        "A Kubernetes cluster on a single mini PC, built to learn industry-standard tooling the right way. Proxmox hosts the nodes, Argo CD keeps the cluster in sync with Git, and Traefik with cert-manager serves everything over real TLS.",
    highlights: [
        "kubeadm cluster: 1 control plane, 2 workers",
        "GitOps with Argo CD",
        "Prometheus and Grafana for monitoring",
        "HA PostgreSQL with Patroni, provisioned by Terraform",
    ],
    tags: [
        "Proxmox",
        "Kubernetes",
        "Argo CD",
        "Traefik",
        "cert-manager",
        "Prometheus",
        "Grafana",
        "PostgreSQL",
        "Terraform",
        "Tailscale",
    ],
};
