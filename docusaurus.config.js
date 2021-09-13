const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Ryan Cook\'s Web Lounge',
  tagline: 'Livin\' life hard',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ryanmatcook', // Usually your GitHub org/user name.
  projectName: 'mrrmc-blog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
        title: 'Ryan Cook\'s Web Lounge',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Paragliding Blogs',
          },
          {to: '/programming blogs', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/RyanMatCook/mrrmc-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Paragliding',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Find Me',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ryan-matthew-cook-931007/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCjSHbe0_L0q2rbQ9KwFchjQ',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/mr.rmcook/',
              },
            ],
          },
          {
            title: 'Programming',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RyanMatCook/mrrmc-site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ryan\'s Lounge, Built with Docusaurus.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
    }),
});
