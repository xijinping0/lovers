// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '习近平与他的情人们',
  tagline: '电子全本',
  url: 'https://lovers.xijinping.one',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/xjp.jpg',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xijinping0', // Usually your GitHub org/user name.
  projectName: 'lovers', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/xijinping0/lovers/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '习近平与他的情人们',
        logo: {
          href: '/docs/toc',
          src: 'img/xjp.jpg',
        },
        items: [
          {
            href: 'https://github.com/xijinping0/lovers',
            label: '源代码',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: '其他图书',
            position: 'right',
            items: [
              {
                href: 'https://roulette.xijinping.one',
                label: '红色赌盘',
              }
            ]
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © 2016 常博洋`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'xijinping.one',
    }],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};

module.exports = config;
