import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { FeaturebaseWidget } from '@/components/analytics/featurebase';

export const metadata: Metadata = {
  metadataBase: new URL('https://forgedapps.com'),
  title: {
    template: '%s | Forged Apps',
    default: 'Forged Apps - Developer Experience Products',
  },
  description:
    'Tools that improve developer productivity. Tech Radar for Compass, MCPflare, and more.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Forged Apps',
    description:
      'Tools that improve developer productivity. Tech Radar for Compass, MCPflare, and more.',
    images: ['/images/branding/forgedapps-logo-light.png'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GoogleAnalytics />
        <FeaturebaseWidget />
        <RootProvider
          search={{
            options: {
              type: 'static',
              api: '/static/search.json',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
