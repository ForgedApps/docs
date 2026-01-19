import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Radar for Compass',
  description:
    'Visually monitor your technology landscape evolution through different adoption stages over time.',
};

export default function TechRadarPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-slate-950">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/branding/forgedapps-logo-light.png"
              alt="Forged Apps"
              className="h-8 dark:hidden"
            />
            <img
              src="/images/branding/forgedapps-logo-dark.png"
              alt="Forged Apps"
              className="hidden h-8 dark:block"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/tech-radar/docs"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Documentation
            </Link>
            <Link
              href="/tech-radar/pricing"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Pricing
            </Link>
            <a
              href="https://marketplace.atlassian.com/1237368"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Marketplace
            </a>
          </div>
        </nav>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
            </svg>
            Atlassian Compass App
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Tech Radar for{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Compass
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Visually monitor your technology landscape evolution through different
            adoption stages over time. Track frameworks, tools, platforms, and methodologies
            with an interactive radar visualization.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://marketplace.atlassian.com/1237368"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700 hover:shadow-indigo-600/40"
            >
              Get on Marketplace
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <Link
              href="/tech-radar/docs"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* Overview Image */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-6">
          <img
            src="/images/tech-radar/tech-radar-overview.png"
            alt="Tech Radar Overview"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Key Features
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Interactive Visualization
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Explore your technology landscape with an interactive radar that shows
                adoption stages at a glance.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Customizable Structure
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Configure quadrants, rings, and labels to match your organization's
                technology categorization.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Data Import/Export
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Import existing data and export your radar configuration for backup or
                sharing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Tags & Filtering
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Organize items with tags and filter to find exactly what you're
                looking for.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Change Tracking
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Visual indicators show new and moved items so you can track changes
                over time.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Team Collaboration
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Share the radar with your team through Compass for aligned technology
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Get Started
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Link
              href="/tech-radar/docs/admin-guide/getting-started"
              className="group rounded-xl border border-slate-200 p-6 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/50"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                Getting Started
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Quick setup guide for Tech Radar administrators.
              </p>
            </Link>

            <Link
              href="/tech-radar/docs/user-guide"
              className="group rounded-xl border border-slate-200 p-6 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/50"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                User Guide
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Learn how to navigate and use the Tech Radar.
              </p>
            </Link>

            <Link
              href="/tech-radar/docs/admin-guide"
              className="group rounded-xl border border-slate-200 p-6 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-800 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/50"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                Admin Guide
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Advanced configuration and customization options.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/branding/forgedapps-logo-dark.png"
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
