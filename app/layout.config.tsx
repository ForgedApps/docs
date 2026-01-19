import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <img
          src="/images/branding/forgedapps-logo-light.png"
          alt="Forged Apps"
          className="h-6 dark:hidden"
        />
        <img
          src="/images/branding/forgedapps-logo-dark.png"
          alt="Forged Apps"
          className="hidden h-6 dark:block"
        />
      </div>
    ),
  },
  links: [
    {
      text: 'Tech Radar',
      url: '/tech-radar',
      active: 'nested-url',
    },
    {
      text: 'MCPflare',
      url: '/mcpflare',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/forgedapps',
      external: true,
    },
  ],
  githubUrl: 'https://github.com/forgedapps',
};
