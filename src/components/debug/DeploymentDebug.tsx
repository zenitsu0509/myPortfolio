'use client';

import { useEffect, useState } from 'react';

export default function DeploymentDebug() {
  const [isClient, setIsClient] = useState(false);
  const [fonts, setFonts] = useState<string[]>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Check if fonts are loaded
    if (typeof window !== 'undefined') {
      const computedStyle = getComputedStyle(document.body);
      const bodyFont = computedStyle.fontFamily;
      setFonts([bodyFont]);
      
      console.log('Font family:', bodyFont);
      console.log('CSS variables:', {
        background: getComputedStyle(document.documentElement).getPropertyValue('--background'),
        foreground: getComputedStyle(document.documentElement).getPropertyValue('--foreground'),
        primary: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
      });
    }
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-red-500 text-white p-2 text-xs z-50 max-w-xs">
      <div>Environment: {process.env.NODE_ENV}</div>
      <div>Fonts: {fonts.join(', ')}</div>
      <div>Client: {isClient ? 'Yes' : 'No'}</div>
    </div>
  );
}
