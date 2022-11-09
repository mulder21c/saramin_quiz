const mode = process.env.BABEL_ENV;

const config = {
  title: "사람인 웹 접근성 교육",
  tagline: "",
  url: "https://mulder21c.github.io/",
  baseUrl: mode === "production" ? "/saramin_quiz/" : "/",
  organizationName: "mulder21c",
  projectName: "saramin_quiz",
  deploymentBranch: "gh-pages",
  scripts: ["https://buttons.github.io/buttons.js", "/js/scriptHelper.js"],
  favicon: "../img/logo-teach-access.svg",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: "../src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    navbar: {
      logo: {
        src: "../img/logo-teach-access.svg",
        srcDark: "../img/logo-teach-access-dark.svg",
        alt: "Teach Access",
      },
      items: [
        {
          to: "/",
          label: "퀴즈",
          position: "left",
        },
        {
          to: "https://sri-fe1.notion.site/Web-Accessibility-101-f9fbf1776dcc4641a5858cdd1d5432c5",
          label: "웹 접근성 101",
          position: "left",
        },
        {
          to: "https://sri-fe1.notion.site/7f63c1d4dff04051b4fff1390628f99c",
          label: "사람인 웹 접근성 가이드",
          position: "left",
        },
      ],
    },
    image: "../img/undraw_online.svg",
    footer: {
      links: [],
      copyright: "Copyright © 2021 Teach Access",
      logo: {
        src: "../img/logo-teach-access.svg",
        srcDark: "../img/logo-teach-access-dark.svg",
        alt: "Teach Access",
      },
    },
    tableOfContents: {},
  },
};

module.exports = config;
