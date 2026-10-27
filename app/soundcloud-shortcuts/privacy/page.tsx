import { LegalLayout } from '@/components/legal-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shortcuts for SoundCloud - Privacy Policy',
  description:
    'Privacy policy for the Shortcuts for SoundCloud browser extension by Forged Apps LLC. No data is collected.',
};

export default function SoundCloudShortcutsPrivacyPage() {
  return (
    <LegalLayout title="Shortcuts for SoundCloud – Privacy Policy">
      <p>
        <em>Last updated: October 27, 2026</em>
      </p>

      <h2>Summary</h2>
      <p>
        Shortcuts for SoundCloud is a browser extension by Forged Apps LLC that adds keyboard
        shortcuts and a now-playing panel for soundcloud.com. It does not collect, store, or
        transmit any personal data. Everything it does happens inside your browser.
      </p>

      <h2>What the extension accesses</h2>
      <ul>
        <li>
          <strong>The soundcloud.com tab.</strong> The extension reads the player bar on
          soundcloud.com (track title, artist, artwork, playback position, like and repost state)
          and clicks the player's own controls on your behalf. It does not read any other part of
          the page and has no access to other websites.
        </li>
        <li>
          <strong>Track waveform and artwork.</strong> To draw the waveform and show artwork in
          the now-playing panel, the extension fetches the same waveform file and artwork image
          that soundcloud.com itself loads for the current track, from SoundCloud's servers. No
          other network requests are made.
        </li>
      </ul>

      <h2>What is stored</h2>
      <ul>
        <li>
          <strong>Your settings</strong> (shortcut behavior, notification and panel preferences)
          are stored using the browser's extension storage. If you are signed in to your browser,
          the browser may sync these settings between your devices. Forged Apps never receives
          them.
        </li>
        <li>
          <strong>The current track</strong> (title, artist, artwork, playback position) is kept in
          the browser's session storage so the panel and notifications can show it. It is cleared
          when the browser closes.
        </li>
      </ul>

      <h2>What is not collected</h2>
      <p>
        The extension has no analytics, no telemetry, no accounts, no advertising, and no servers
        operated by Forged Apps. It does not collect your listening history, your SoundCloud
        account details, your browsing activity, or any identifiers.
      </p>

      <h2>Permissions</h2>
      <ul>
        <li>
          <strong>Access to soundcloud.com</strong> – to control the player and read what is
          playing.
        </li>
        <li>
          <strong>Scripting</strong> – to connect to a soundcloud.com tab that was already open
          when the extension was installed or updated.
        </li>
        <li>
          <strong>Storage</strong> – to save your settings and the current track.
        </li>
        <li>
          <strong>Notifications</strong> – to show an optional notification when a new track
          starts.
        </li>
      </ul>

      <h2>Open source</h2>
      <p>
        The complete source code is public at{' '}
        <a href="https://github.com/ForgedApps/soundcloud-shortcuts">
          github.com/ForgedApps/soundcloud-shortcuts
        </a>
        , so these statements can be verified.
      </p>

      <h2>Changes</h2>
      <p>
        If the extension's data practices ever change, this page will be updated and the change
        will be noted in the extension's release notes.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or concerns: open an issue at{' '}
        <a href="https://github.com/ForgedApps/soundcloud-shortcuts/issues">
          github.com/ForgedApps/soundcloud-shortcuts/issues
        </a>
        .
      </p>

      <p>
        Shortcuts for SoundCloud is an independent project and is not affiliated with, endorsed
        by, or sponsored by SoundCloud.
      </p>
    </LegalLayout>
  );
}
