import { LegalLayout } from '@/components/legal-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Forged Apps LLC - Our commitment to protecting your privacy.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <h2>Introduction</h2>
      <p>
        Forged Apps LLC ("we," "our," or "us") is committed to protecting your privacy and
        ensuring the security of information related to your use of our services. This Privacy
        Policy outlines our practices regarding data collection, use, and protection, with an
        emphasis on collecting only what is strictly necessary for providing and improving our
        services.
      </p>

      <h2>Our Data Privacy Commitment</h2>
      <p>
        At Forged Apps LLC, we have deliberately designed our systems and services to minimize
        data collection. We only collect information that is necessary for:
      </p>
      <ul>
        <li>Troubleshooting and improving our services</li>
        <li>Responding to your support requests</li>
        <li>Understanding how our applications are used to improve them</li>
      </ul>

      <h2>Information We Collect</h2>
      <p>We collect limited information in specific circumstances:</p>

      <h3>Technical Data</h3>
      <ul>
        <li>Error logs and crash reports to help us identify and fix issues</li>
        <li>Basic usage analytics to understand how our applications are used</li>
        <li>Technical diagnostics when troubleshooting problems</li>
      </ul>

      <h3>Communication Data</h3>
      <ul>
        <li>Contact information you provide when submitting support requests</li>
        <li>Feedback form submissions</li>
        <li>Communication preferences</li>
      </ul>
      <p>
        All technical data is collected anonymously where possible, and we never collect more
        information than is necessary to resolve issues or improve our services.
      </p>

      <h2>How We Use Information</h2>
      <p>We use collected information solely for:</p>
      <ul>
        <li>Identifying and fixing software issues</li>
        <li>Improving our applications and services</li>
        <li>Responding to your support requests</li>
        <li>Communicating important updates about our services</li>
      </ul>

      <h2>Third-Party Services</h2>
      <p>Our applications are built for Atlassian's product suite. While using our applications:</p>
      <ul>
        <li>Core data processing occurs within your Atlassian instance</li>
        <li>We do not have access to your Atlassian instance data</li>
        <li>We collect only necessary diagnostic information for troubleshooting</li>
      </ul>

      <h2>Data Protection and Security</h2>
      <p>We maintain robust security measures to protect any information we collect:</p>
      <ul>
        <li>Compliance with latest security standards</li>
        <li>Zero trust architecture</li>
        <li>Active vulnerability monitoring</li>
        <li>Strict access controls and authentication</li>
      </ul>

      <h2>Data Retention</h2>
      <p>We retain technical and diagnostic data only for as long as necessary to:</p>
      <ul>
        <li>Resolve reported issues</li>
        <li>Improve our services</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>
        Support communication records are retained as needed to provide ongoing support and
        maintain service quality.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy to reflect changes in our practices or for legal
        compliance. Any updates will be posted on this page with a revised "Last Updated" date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about our Privacy Policy or security practices, or if you wish to
        exercise any of your data rights, you can contact us at{' '}
        <a href="mailto:support@forgedapps.com">support@forgedapps.com</a>
      </p>

      <h2>Data Processing Agreement</h2>
      <p>
        For customers requiring a Data Processing Agreement (DPA) for GDPR compliance, please
        contact us at <a href="mailto:support@forgedapps.com">support@forgedapps.com</a>. We will
        provide a DPA that covers our roles as data processor, security measures, sub-processors,
        data subject rights, and international data transfers.
      </p>

      <h2>Legal Compliance</h2>
      <p>
        This Privacy Policy complies with applicable data protection laws including GDPR, state
        privacy laws, and industry standards. We are committed to protecting your privacy rights
        and maintaining transparency about our data practices.
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        <em>Last Updated: January 18, 2026</em>
      </p>
    </LegalLayout>
  );
}
