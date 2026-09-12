import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/").at(-1);
const basePath = `/${repositoryName ?? "juri-portfolio"}`;

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: "export",
      basePath,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
