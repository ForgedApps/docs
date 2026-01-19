'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Featurebase?: (action: string, options?: Record<string, unknown>) => void;
  }
}

export function FeaturebaseWidget() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Load Featurebase SDK
    const script = document.createElement('script');
    script.src = 'https://do.featurebase.app/js/sdk.js';
    script.id = 'featurebase-sdk';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Featurebase) {
        window.Featurebase('initialize_messenger_widget', {
          organization: 'forgedapps',
          placement: 'right',
          theme: 'auto',
        });
      }
    };

    return () => {
      const existingScript = document.getElementById('featurebase-sdk');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}
