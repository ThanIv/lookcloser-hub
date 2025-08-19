import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

interface SidebarButton extends HTMLAnchorElement {
  getAttribute: (name: string) => string | null;
}

const DocSidebarSwitch: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const buttons = document.querySelectorAll<SidebarButton>('.sidebar-switch');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const sidebarId = button.getAttribute('data-sidebar');
        if (sidebarId) {
          localStorage.setItem('activeSidebar', sidebarId);
          const href = button.getAttribute('href');
          if (href) {
            window.location.href = href;
          }
        }
      });
    });

    const activeSidebar = localStorage.getItem('activeSidebar') || getSidebarFromPath(pathname);
    if (activeSidebar) {
      document.documentElement.setAttribute('data-sidebar', activeSidebar);
    }

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
    };
  }, [pathname]);

  function getSidebarFromPath(path: string): string {
    if (path.includes('/course/')) return 'courseSidebar';
    if (path.includes('/guides/')) return 'guidesSidebar';
    if (path.includes('/reference/')) return 'referenceSidebar';
    return 'courseSidebar';
  }

  return null;
};

export default DocSidebarSwitch;