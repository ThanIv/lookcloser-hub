import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '8fe'),
    exact: true
  },
  {
    path: '/blog/5-common-myths-we-believe-online',
    component: ComponentCreator('/blog/5-common-myths-we-believe-online', '570'),
    exact: true
  },
  {
    path: '/blog/5-cool-sites-to-learn-about-media-and-information-literacy',
    component: ComponentCreator('/blog/5-cool-sites-to-learn-about-media-and-information-literacy', '360'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/how-to-spot-sake-news-in-3-easy-steps',
    component: ComponentCreator('/blog/how-to-spot-sake-news-in-3-easy-steps', 'a5c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/factChecking',
    component: ComponentCreator('/blog/tags/factChecking', '8cf'),
    exact: true
  },
  {
    path: '/blog/tags/fakeNews',
    component: ComponentCreator('/blog/tags/fakeNews', '487'),
    exact: true
  },
  {
    path: '/blog/tags/mediaLiteracy',
    component: ComponentCreator('/blog/tags/mediaLiteracy', '7ab'),
    exact: true
  },
  {
    path: '/blog/tags/onlineMyths',
    component: ComponentCreator('/blog/tags/onlineMyths', '86c'),
    exact: true
  },
  {
    path: '/learn-more/',
    component: ComponentCreator('/learn-more/', 'b27'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/resource/',
    component: ComponentCreator('/resource/', 'eed'),
    exact: true
  },
  {
    path: '/webinar/',
    component: ComponentCreator('/webinar/', 'd0a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '89d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6c0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a77'),
            routes: [
              {
                path: '/docs/crs1mdl1lsn1',
                component: ComponentCreator('/docs/crs1mdl1lsn1', 'cd6'),
                exact: true
              },
              {
                path: '/docs/crs1mdl1lsn2',
                component: ComponentCreator('/docs/crs1mdl1lsn2', 'c4b'),
                exact: true
              },
              {
                path: '/docs/crs1mdl1lsn3',
                component: ComponentCreator('/docs/crs1mdl1lsn3', '7ef'),
                exact: true
              },
              {
                path: '/docs/crs1mdl1lsn4',
                component: ComponentCreator('/docs/crs1mdl1lsn4', '577'),
                exact: true
              },
              {
                path: '/docs/crs1mdl2lsn1',
                component: ComponentCreator('/docs/crs1mdl2lsn1', '0c6'),
                exact: true
              },
              {
                path: '/docs/crs1mdl2lsn2',
                component: ComponentCreator('/docs/crs1mdl2lsn2', 'd1b'),
                exact: true
              },
              {
                path: '/docs/crs1mdl2lsn3',
                component: ComponentCreator('/docs/crs1mdl2lsn3', 'f6c'),
                exact: true
              },
              {
                path: '/docs/crs1mdl2lsn4',
                component: ComponentCreator('/docs/crs1mdl2lsn4', '313'),
                exact: true
              },
              {
                path: '/docs/crs1mdl3lsn1',
                component: ComponentCreator('/docs/crs1mdl3lsn1', 'dea'),
                exact: true
              },
              {
                path: '/docs/crs1mdl3lsn2',
                component: ComponentCreator('/docs/crs1mdl3lsn2', '92d'),
                exact: true
              },
              {
                path: '/docs/crs1mdl3lsn3',
                component: ComponentCreator('/docs/crs1mdl3lsn3', 'e3d'),
                exact: true
              },
              {
                path: '/docs/crs1mdl3lsn4',
                component: ComponentCreator('/docs/crs1mdl3lsn4', '24d'),
                exact: true
              },
              {
                path: '/docs/crs1mdl4lsn1',
                component: ComponentCreator('/docs/crs1mdl4lsn1', '74b'),
                exact: true
              },
              {
                path: '/docs/crs1mdl4lsn2',
                component: ComponentCreator('/docs/crs1mdl4lsn2', '62f'),
                exact: true
              },
              {
                path: '/docs/crs1mdl4lsn3',
                component: ComponentCreator('/docs/crs1mdl4lsn3', 'e5a'),
                exact: true
              },
              {
                path: '/docs/crs1mdl4lsn4',
                component: ComponentCreator('/docs/crs1mdl4lsn4', '281'),
                exact: true
              },
              {
                path: '/docs/crs2mdl1lsn1',
                component: ComponentCreator('/docs/crs2mdl1lsn1', '792'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl1lsn2',
                component: ComponentCreator('/docs/crs2mdl1lsn2', '267'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl2lsn1',
                component: ComponentCreator('/docs/crs2mdl2lsn1', '889'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl3lsn1',
                component: ComponentCreator('/docs/crs2mdl3lsn1', '0c2'),
                exact: true
              },
              {
                path: '/docs/crs2mdl3lsn2',
                component: ComponentCreator('/docs/crs2mdl3lsn2', '575'),
                exact: true
              },
              {
                path: '/docs/crs2mdl3lsn3',
                component: ComponentCreator('/docs/crs2mdl3lsn3', 'f71'),
                exact: true
              },
              {
                path: '/docs/crs2mdl3lsn4',
                component: ComponentCreator('/docs/crs2mdl3lsn4', '784'),
                exact: true
              },
              {
                path: '/docs/crs2mdl4lsn1',
                component: ComponentCreator('/docs/crs2mdl4lsn1', '35a'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl4lsn2',
                component: ComponentCreator('/docs/crs2mdl4lsn2', 'a06'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl4lsn3',
                component: ComponentCreator('/docs/crs2mdl4lsn3', '8d1'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl5lsn1',
                component: ComponentCreator('/docs/crs2mdl5lsn1', '78d'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl6lsn1',
                component: ComponentCreator('/docs/crs2mdl6lsn1', '24b'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl6lsn2',
                component: ComponentCreator('/docs/crs2mdl6lsn2', '93d'),
                exact: true,
                sidebar: "course2"
              },
              {
                path: '/docs/crs2mdl6lsn3',
                component: ComponentCreator('/docs/crs2mdl6lsn3', '7e4'),
                exact: true,
                sidebar: "course2"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
