import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Tech Radar for Compass',
  description: 'Choose the plan that fits your team. Free, Basic, and Pro plans available.',
};

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-slate-950">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
              href="/tech-radar"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Overview
            </Link>
            <Link
              href="/tech-radar/docs"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Documentation
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

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Choose the plan that fits your team's needs. Start free and upgrade as you grow.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Free Plan */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Free</h2>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold text-indigo-600">$0</span>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">forever</p>
              </div>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">10 Radar Item Limit</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">Unlimited Users</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">Full Customization</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">Data Import & Export</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/tech-radar/docs/admin-guide/getting-started"
                  className="block w-full rounded-lg border border-indigo-600 py-3 text-center font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Basic Plan - Highlighted */}
            <div className="relative rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-xl dark:bg-slate-900">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                  Popular
                </span>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Basic</h2>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold text-indigo-600">$49</span>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">per month</p>
              </div>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">Everything in Free +</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">Unlimited Radar Items</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-400">Email Support</span>
                </li>
              </ul>

              <div className="mt-8">
                <a
                  href="https://marketplace.atlassian.com/1237368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-indigo-600 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
                >
                  Subscribe Now
                </a>
              </div>
            </div>

            {/* Pro Plan - Coming Soon */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 opacity-75 dark:border-slate-800 dark:bg-slate-900">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white">
                  Coming Soon
                </span>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Pro</h2>
                <div className="mt-4">
                  <span className="text-5xl font-extrabold text-indigo-600">$199</span>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">per month</p>
              </div>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-500 dark:text-slate-500">Everything in Basic +</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-500 dark:text-slate-500">Compass Radar Items</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-500 dark:text-slate-500">Confluence Data Sync</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-500 dark:text-slate-500">Priority Support</span>
                </li>
              </ul>

              <div className="mt-8">
                <button
                  disabled
                  className="block w-full cursor-not-allowed rounded-lg bg-slate-300 py-3 text-center font-semibold text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">
            <details className="group rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 dark:text-white">
                Can I upgrade from Free to Basic plan?
                <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-600 dark:text-slate-400">
                Yes, you can upgrade from the Free plan to the Basic plan at any time. Your existing radar items will be preserved during the upgrade process.
              </div>
            </details>

            <details className="group rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 dark:text-white">
                How does billing work?
                <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-600 dark:text-slate-400">
                We bill monthly for the Basic plan. You can cancel your subscription at any time, and your access will continue until the end of your billing period.
              </div>
            </details>

            <details className="group rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 dark:text-white">
                When will the Pro plan be available?
                <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-600 dark:text-slate-400">
                We're currently working on the Pro plan which will allow Compass components to be visible on the radar.
              </div>
            </details>

            <details className="group rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 dark:text-white">
                Is there a discount for annual billing?
                <svg className="h-5 w-5 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-slate-600 dark:text-slate-400">
                Yes, we offer a 15% discount for annual billing on the Basic plan.
              </div>
            </details>
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
