import Link from 'next/link';
import type { Metadata } from 'next';
import { withBasePath } from '@/lib/base-path';

export const metadata: Metadata = {
  title: 'Kaddy - A home for your personal apps',
  description:
    'Build personal apps with AI. Each has an assistant that remembers you, and they all live in one familiar place.',
};

export default function KaddyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-slate-50 dark:from-orange-950/30 dark:via-amber-950/20 dark:to-slate-950">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
            <Link
              href="/mcpflare"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              MCPflare
            </Link>
          </div>
        </nav>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">
            <img
              src={withBasePath('/images/kaddy/kaddy-mark.svg')}
              alt=""
              className="h-4 w-4 rounded-sm"
            />
            A home for your personal apps
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Build the apps{' '}
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              only you need
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Describe what would help — a meal planner, a reading list, a project
            tracker — and AI builds it. Each app has an assistant that remembers
            you, and they all live in one familiar place.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://kaddy.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700 hover:shadow-orange-600/40"
            >
              Claim your space
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
            <a
              href="https://kaddy.diy/guides/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Read the guides
            </a>
          </div>

          <figure className="mx-auto mt-14 max-w-4xl">
            <img
              src={withBasePath('/images/kaddy/kaddy-home-apps.webp')}
              alt="Kaddy shown as a home whose rooms are personal apps: a meal planner, personal growth, friends, and space for your next app."
              className="rounded-2xl shadow-xl dark:hidden"
              width={1536}
              height={1024}
            />
            <img
              src={withBasePath('/images/kaddy/kaddy-home-apps-dark.webp')}
              alt="Kaddy shown as a home whose rooms are personal apps: a meal planner, personal growth, friends, and space for your next app."
              className="hidden rounded-2xl shadow-xl dark:block"
              width={1536}
              height={1024}
            />
            <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Apps built and designed by you, for you, in one familiar place.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Different rooms. One familiar home.
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Open Kaddy once and move between your apps, instead of setting up a
              project for every idea
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                No Code Required
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Describe what you want in plain language and Kaddy builds a first
                version. Use it, then ask for changes where it doesn&apos;t work the
                way you expected.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Talk It Through Out Loud
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Open a live voice call with an app and just talk — interrupt it
                mid-sentence if you need to. It&apos;s the same conversation as the
                chat, so what you say out loud is remembered either way.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Apps That Remember You
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Tell your meal planner you cook for two and its assistant remembers
                next time. You can read and edit what each app remembers.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Routines That Run Themselves
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Put an app on a schedule — Sunday morning, every weekday at six — and
                its assistant does the work without you. The reply is waiting in your
                chat when you next look.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Built-In MCP Server
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Kaddy speaks MCP, so Claude and other AI assistants can create, edit,
                and publish your apps from wherever you already work.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Keep a Way Back
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Try a new layout or add a feature, then return to an earlier version
                if you prefer it. Your data is backed up separately from your apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16 dark:bg-orange-900">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start with your first app.
          </h2>
          <p className="mt-4 text-lg text-orange-100">
            Choose the name your Kaddy lives at, then build something you&apos;ll
            actually open.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://kaddy.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-orange-600 shadow-lg transition hover:bg-orange-50"
            >
              Claim your space
            </a>
            <a
              href="https://kaddy.diy/examples/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              See app ideas
            </a>
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
