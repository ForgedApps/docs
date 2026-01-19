import { LegalLayout } from '@/components/legal-layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Policy',
  description: 'Security Policy for Forged Apps LLC - Our commitment to protecting your data.',
};

export default function SecurityPage() {
  return (
    <LegalLayout title="Security Policy">
      <h2>Introduction</h2>
      <p>
        At Forged Apps LLC ("Forged Apps," "we," "our," or "us"), security is a top priority.
        This Security Policy outlines our commitment to protecting your data and maintaining the
        security of our applications. Our services are built on Atlassian's Forge platform,
        providing enterprise-grade security through a shared responsibility model.
      </p>

      <h2>Platform Security</h2>
      <h3>Forge Platform</h3>
      <ul>
        <li>Our applications run entirely on Atlassian's Forge platform</li>
        <li>Applications are isolated in secure AWS Lambda environments</li>
        <li>All communications are encrypted using industry-standard protocols</li>
        <li>Platform security is continuously monitored and maintained by Atlassian</li>
      </ul>

      <h3>Data Residency</h3>
      <ul>
        <li>All application processing occurs within Atlassian's secure infrastructure</li>
        <li>Data residency follows Atlassian's regional data hosting policies</li>
        <li>No customer data is stored outside the Forge platform</li>
      </ul>

      <h2>Data Security</h2>
      <h3>Data Storage</h3>
      <ul>
        <li>We maintain a minimal data footprint</li>
        <li>No customer-specific data is stored permanently</li>
        <li>All temporary data processing follows Forge platform security guidelines</li>
      </ul>

      <h3>Data Transmission</h3>
      <p>Limited external data transmission only for:</p>
      <ul>
        <li>Customer support services</li>
        <li>Payment processing (Stripe)</li>
        <li>Anonymous product analytics</li>
      </ul>

      <h3>Data Privacy</h3>
      <ul>
        <li>No personal information is collected or stored</li>
        <li>Analytics data is anonymized and aggregated</li>
        <li>Full compliance with GDPR and other privacy regulations</li>
        <li>Data Processing Agreement available upon request</li>
      </ul>

      <h2>Access Control</h2>
      <h3>Authentication</h3>
      <ul>
        <li>All authentication is handled through Atlassian's secure systems</li>
        <li>Multi-factor authentication support via Atlassian account settings</li>
        <li>No direct access to user credentials or sessions</li>
      </ul>

      <h3>Authorization</h3>
      <ul>
        <li>Strict adherence to principle of least privilege</li>
        <li>Role-based access control through Atlassian permissions</li>
        <li>Regular access review and validation</li>
      </ul>

      <h2>Compliance and Standards</h2>
      <h3>Security Frameworks</h3>
      <ul>
        <li>Compliance with Atlassian's security requirements</li>
        <li>Regular security assessments and reviews</li>
        <li>Adherence to industry best practices</li>
      </ul>

      <h3>Certifications</h3>
      <ul>
        <li>Leverages Atlassian's platform certifications</li>
        <li>Compliant with Forge security standards</li>
        <li>Regular security compliance monitoring</li>
      </ul>

      <h2>Incident Response</h2>
      <h3>Security Incidents</h3>
      <ul>
        <li>Comprehensive incident response plan</li>
        <li>Immediate notification of security incidents</li>
        <li>Coordination with Atlassian security team when required</li>
      </ul>

      <h3>Reporting Security Issues</h3>
      <p>
        If you discover a security vulnerability, please report it to us immediately at{' '}
        <a href="mailto:support@forgedapps.com">support@forgedapps.com</a>.
      </p>

      <h2>Business Continuity</h2>
      <h3>Disaster Recovery</h3>
      <ul>
        <li>Automated backup through Forge platform</li>
        <li>Business continuity planning</li>
      </ul>

      <h3>Service Reliability</h3>
      <ul>
        <li>99.9% target uptime</li>
        <li>Automated monitoring and alerting</li>
        <li>Regular performance optimization</li>
      </ul>

      <h2>Security Controls</h2>
      <h3>Application Security</h3>
      <ul>
        <li>Secure development lifecycle</li>
        <li>Regular code security reviews</li>
        <li>Automated security testing</li>
        <li>Vulnerability management program</li>
      </ul>

      <h3>Infrastructure Security</h3>
      <ul>
        <li>Managed by Atlassian Forge platform</li>
        <li>Regular security patches and updates</li>
        <li>Network security monitoring</li>
        <li>DDoS protection</li>
      </ul>

      <h2>Third-Party Security</h2>
      <h3>Vendor Management</h3>
      <p>We carefully select and monitor our third-party service providers:</p>
      <ul>
        <li>Stripe for payment processing (PCI DSS compliant)</li>
        <li>Featurebase for customer support (GDPR compliant)</li>
        <li>Google Analytics for analytics (Data privacy compliant)</li>
      </ul>

      <h3>Integration Security</h3>
      <ul>
        <li>Secure API implementations</li>
        <li>Regular security reviews of integrations</li>
        <li>Minimal data sharing with third parties</li>
      </ul>

      <h2>Contact Information</h2>
      <p>For security-related inquiries or to report security issues:</p>
      <ul>
        <li>
          Email: <a href="mailto:support@forgedapps.com">support@forgedapps.com</a>
        </li>
        <li>Response Time: Within 24 hours</li>
      </ul>

      <h2>Changes to Security Policy</h2>
      <p>
        We regularly review and update our security policies. Major changes will be communicated
        to all users through our application interfaces and via email.
      </p>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        <em>Last Updated: March 25, 2025</em>
      </p>
    </LegalLayout>
  );
}
