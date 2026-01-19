import { LegalLayout } from '@/components/legal-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Forged Apps LLC services.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Use">
      <h2>Introduction</h2>
      <p>
        Welcome to Forged Apps LLC ("Forged Apps," "we," "our," or "us"). These Terms of Use
        ("Terms") govern your access to and use of our applications, services, and website
        (collectively, the "Services"). By accessing or using our Services, you agree to be bound
        by these Terms.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using our Services, you acknowledge that you have read, understood, and
        agree to be bound by these Terms. If you do not agree to these Terms, you must not access
        or use our Services.
      </p>

      <h2>Service Description</h2>
      <p>
        Our Services are applications designed to extend and enhance Atlassian products through
        the Forge platform. These Services are intended for use within Atlassian products and are
        subject to Atlassian's Marketplace Terms of Use in addition to these Terms.
      </p>

      <h2>User Responsibilities</h2>
      <p>When using our Services, you agree to:</p>
      <ul>
        <li>Comply with all applicable laws and regulations</li>
        <li>Maintain the security of your account credentials</li>
        <li>Use the Services only for their intended purpose</li>
        <li>Not attempt to circumvent any limitations or security measures</li>
        <li>Not use the Services in any way that could damage or impair their functionality</li>
      </ul>

      <h2>Intellectual Property Rights</h2>
      <h3>Our Rights</h3>
      <ul>
        <li>All intellectual property rights in the Services belong to Forged Apps</li>
        <li>
          Our software, code, documentation, and related materials are protected by copyright and
          other laws
        </li>
        <li>Our trademarks, logos, and brand features are our intellectual property</li>
      </ul>

      <h3>Your Rights</h3>
      <ul>
        <li>
          We grant you a limited, non-exclusive, non-transferable license to use our Services
        </li>
        <li>This license is subject to these Terms and any applicable subscription terms</li>
        <li>You may not copy, modify, distribute, sell, or lease any part of our Services</li>
      </ul>

      <h2>Data and Privacy</h2>
      <p>
        Your use of our Services is also governed by our{' '}
        <Link href="/legal/privacy">Privacy Policy</Link>. By using our Services, you agree to
        the collection and use of information as detailed in the Privacy Policy.
      </p>

      <h2>Third-Party Services and Platforms</h2>
      <h3>Atlassian Platform</h3>
      <ul>
        <li>Our Services operate on Atlassian's Forge platform</li>
        <li>Your use of Atlassian products is governed by Atlassian's terms and conditions</li>
        <li>
          We are not responsible for Atlassian's services or any changes they make to their
          platform
        </li>
      </ul>

      <h3>Other Integrations</h3>
      <ul>
        <li>Our Services may integrate with other third-party services</li>
        <li>These services are subject to their own terms and conditions</li>
        <li>We are not responsible for third-party services or their availability</li>
      </ul>

      <h2>Subscription and Payments</h2>
      <h3>Licensing</h3>
      <ul>
        <li>Our Services may require a paid subscription</li>
        <li>
          Pricing details are available on our dedicated{' '}
          <Link href="/tech-radar/pricing">Pricing</Link> page
        </li>
        <li>
          All payments are securely processed directly through our payment provider,{' '}
          <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">
            Stripe
          </a>
        </li>
      </ul>

      <h3>Refunds</h3>
      <ul>
        <li>Refund requests are handled according to Atlassian Marketplace policies</li>
        <li>We may consider refunds on a case-by-case basis for exceptional circumstances</li>
      </ul>

      <h2>Warranty Disclaimer</h2>
      <p>
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
        WHETHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
        ERROR-FREE, OR COMPLETELY SECURE.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, FORGED APPS SHALL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
        REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Forged Apps and its officers, directors,
        employees, and agents from any claims, damages, losses, liabilities, and expenses arising
        from your use of the Services or violation of these Terms.
      </p>

      <h2>Service Level Agreement</h2>
      <h3>Service Performance</h3>
      <ul>
        <li>Target system uptime of 99% outside of scheduled maintenance windows</li>
        <li>Scheduled maintenance windows will be communicated in advance whenever possible</li>
        <li>User interface and API operations are optimized for efficient performance</li>
      </ul>

      <h3>Business Continuity</h3>
      <ul>
        <li>Regular system backups are maintained</li>
        <li>Recovery procedures are in place to restore service in the event of disruption</li>
      </ul>

      <h3>Support Services</h3>
      <ul>
        <li>
          Support Hours: Monday through Friday, 9:00 AM to 5:00 PM Pacific Time (PT), excluding
          U.S. federal holidays
        </li>
        <li>
          Support requests are handled through our ticketing system and prioritized based on
          severity and impact
        </li>
        <li>
          Support channels: Email:{' '}
          <a href="mailto:support@forgedapps.com">support@forgedapps.com</a>, Support portal (for
          paid subscribers)
        </li>
      </ul>

      <h2>Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. We will notify users of material changes through
        our Services or via email. Your continued use of the Services after such modifications
        constitutes acceptance of the updated Terms.
      </p>

      <h2>Termination</h2>
      <ul>
        <li>
          We may suspend or terminate your access to the Services for violations of these Terms
        </li>
        <li>
          You may terminate your use of the Services at any time by uninstalling our applications
        </li>
        <li>Upon termination, relevant sections of these Terms will survive</li>
      </ul>

      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State
        of Delaware, without regard to its conflict of law provisions.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have questions about these Terms, please contact us at{' '}
        <a href="mailto:support@forgedapps.com">support@forgedapps.com</a>
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        <em>Last Updated: March 7, 2025</em>
      </p>
    </LegalLayout>
  );
}
