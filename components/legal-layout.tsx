import Link from 'next/link';
import type { ReactNode } from 'react';
import { withBasePath } from '@/lib/base-path';

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
}

export function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={withBasePath('/images/branding/forgedapps-logo-light.png')}
              alt="Forged Apps"
              className="h-8 dark:hidden"
            />
            <img
              src={withBasePath('/images/branding/forgedapps-logo-dark.png')}
              alt="Forged Apps"
              className="hidden h-8 dark:block"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/tech-radar"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Tech Radar
            </Link>
          </div>
        </nav>
      </div>

      {/* Banner Image */}
      <div className="h-64 w-full overflow-hidden">
        <img
          src={withBasePath('/images/branding/forging_apps.png')}
          alt="Forged Apps Banner"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <section className="flex-1 bg-white py-12 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">
            {title}
          </h1>
          <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:mt-8 prose-h2:text-2xl prose-h3:text-xl prose-a:text-indigo-600 dark:prose-a:text-indigo-400">
            {children}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={withBasePath('/images/branding/forgedapps-logo-dark.png')}
                alt="Forged Apps"
                className="h-6"
              />
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <Link href="/legal/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="/legal/security" className="hover:text-white">
                Security
              </Link>
              <Link href="/legal/dpa" className="hover:text-white">
                DPA
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Forged Apps LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
