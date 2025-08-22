import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'LookCloser Hub',
  tagline: 'Encourages critical thinking as the foundation for confident and responsible engagement in the digital world, resonating with youth and educators alike.',

  customFields: {
    titleHeader: 'Think Critically, Thrive Digitally',
    about: 'About Us',
    aboutDescription: 'LookCloser Hub is a global Community of Practice for Media and Information Literacy (MIL). We create a shared space for educators, youth, media experts, and communities to learn and exchange best practices for MIL. Our platform provides simple tools and resources to spot misinformation and encourage safe online habits. Through social media campaigns and online sessions, we connect people worldwide to collaborate and grow. Our mission is to empower everyone to share and learn MIL best practices, building a digitally smart world with a focus on truth.',
  },

  // favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'km'], // km = Khmer
    localeConfigs: {
      en: {
        label: 'English',
      },
      km: {
        label: 'ភាសាខ្មែរ',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'LookCloser Hub',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/steeamhub-logo.svg',
      // },
      items: [
        {
          to: '/resource',
          label: 'Resource',
          position: 'left',
        },
        {
          to: '/webinar',
          label: 'Webinar',
          position: 'left',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    colorMode: {
      defaultMode: 'light', // or 'dark' if you prefer dark mode
      disableSwitch: true,   // Hides the toggle button
      respectPrefersColorScheme: false, // Set to false to ignore system preferences
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/lookcloserhub',
            },
          ],
        },
        {
          title: 'Others',
          // items: [
          //   {
          //     label: 'GitHub',
          //     href: 'https://github.com/facebook/docusaurus',
          //   },
          // ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LookCloser Hub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

};

export default config;
