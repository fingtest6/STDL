// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '奇点科技文档库',
  tagline: 'Singularity Technology Document Library',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.rduteam.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fingtest6/STDL/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'logs',
        path: 'logs',
        routeBasePath: 'logs',
        sidebarPath: './sidebarslogs.js',
        editUrl: 'https://github.com/fingtest6/STDL/blob/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'other',
        path: 'other',
        routeBasePath: 'other',
        sidebarPath: './sidebarslogs.js',
        editUrl: 'https://github.com/fingtest6/STDL/blob/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Disclaimers',
        path: 'Disclaimers',
        routeBasePath: 'Disclaimers',
        sidebarPath: './sidebarslogs.js',
        editUrl: 'https://github.com/fingtest6/STDL/blob/main/',
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      customCss: require.resolve('./src/css/custom.css'),
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '奇点科技文档库',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '角色档案',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            docsPluginId: "logs",
            label: '调查记录',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            docsPluginId: "other",
            label: '其他',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            docsPluginId: "Disclaimers",
            label: '免责声明',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '角色档案',
                to: '/docs/intro',
              },
              {
                label: '调查记录',
                to: '/logs/intro',
              },
              {
                label: '其他',
                to: '/other/事件/intro',
              },
              {
                label: '免责声明',
                to: '/Disclaimers',
              },
            ],
          },
          {
            title: '关于我们',
            items: [
            ],
          },
          {
            title: '更多',
            items: [
            ],
          },
        ],
        copyright: `© 2025 什亭之人 | 本网站原创内容依 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" rel="license">CC BY-NC-SA 4.0</a> 授权，第三方内容权利归原作者所有,该网站使用Docusaurus制作`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
