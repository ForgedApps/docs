import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { withBasePath } from '@/lib/base-path';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <img
          src={withBasePath('/images/branding/forgedapps-logo-light.png')}
          alt="Forged Apps"
          className="h-6 dark:hidden"
        />
        <img
          src={withBasePath('/images/branding/forgedapps-logo-dark.png')}
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
