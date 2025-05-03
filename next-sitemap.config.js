/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://mohammed-deeb.github.io/cv",
  generateRobotsTxt: true,
  exclude: ["./projects/project-*"],
  outDir: './out',
};

module.exports = config;