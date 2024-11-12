import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IGO Docs',
  tagline: 'Документация ',
  favicon: 'img/favicon.ico',

  url: 'https://github.com',
  baseUrl: '/documentation_burse_project/',

  organizationName: 'IGO-enviroment',
  projectName: 'documentation_burse_project',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/IGO-enviroment',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/IGO-enviroment',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'IGO',
      logo: {
        alt: 'IGO Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://github.com/IGO-enviroment',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Основное',
          items: [
            {
              label: 'Документация',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Полезные ссылки',
          items: [
            {
              label: 'Макеты',
              href: 'https://www.figma.com/design/dfWhWr7v9nPaxEbuFY114a/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9-APP?node-id=0-1&t=WwNTheElkJ7uRtNN-1',
            },
            {
              label: 'Github',
              href: 'https://github.com/IGO-enviroment',
            },
          ],
        },
        {
          title: 'Контакты',
          items: [
            {
              label: 'Telegram',
              href: 'https://web.telegram.org/',
            },
            {
              label: 'VK',
              href: 'https://web.telegram.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
