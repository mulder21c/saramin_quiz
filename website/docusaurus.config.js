const mode = process.env.BABEL_ENV;
const root = mode === "production" ? "/saramin_quiz/" : "/";

const config = {
  title: "사람인 웹 접근성 교육",
  tagline: "",
  url: "https://mulder21c.github.io/",
  baseUrl: root,
  organizationName: "mulder21c",
  projectName: "saramin_quiz",
  deploymentBranch: "gh-pages",
  scripts: ["https://buttons.github.io/buttons.js"],
  favicon: `${root}img/saramin.png`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
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
        src: `${root}img/logo-saramin.svg`,
        srcDark: `${root}img/logo-saramin-dark.svg`,
        alt: "사람인",
      },
      items: [
        {
          to: `${root}quiz/1`,
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
    image: `${root}img/undraw_online.svg`,
    footer: {
      links: [],
      copyright: "Copyright © 2022 사람인",
      logo: {
        src: `${root}img/logo-saramin.svg`,
        srcDark: `${root}img/logo-saramin-dark.svg`,
        alt: "사람인",
      },
    },
    tableOfContents: {},
  },
};

module.exports = config;
