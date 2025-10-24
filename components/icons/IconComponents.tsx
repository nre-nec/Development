
import React from 'react';

export const PdfIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.267 14.68c-.184 0-.399-.055-.578-.16l-3.23-1.94c-.4-.24-.659-.69-.659-1.16v-3.84c0-.47.259-.92.659-1.16l3.23-1.94a1.2 1.2 0 011.157 0l3.23 1.94c.4.24.659.69.659 1.16v3.84c0 .47-.259.92-.659 1.16l-3.23 1.94c-.179.105-.394.16-.578.16zm.12-9.52l-2.58 1.55v3.1l2.58 1.55 2.58-1.55v-3.1l-2.58-1.55zM15.733 20.32h-7.466a1.2 1.2 0 010-2.4h7.466a1.2 1.2 0 010 2.4zM21 9.52l-3.23-1.94a1.2 1.2 0 00-1.157 0L13.38 9.52a1.2 1.2 0 00-.659 1.16v3.84c0 .47.259.92.659 1.16l3.232 1.94a1.2 1.2 0 001.156 0L21 16.62c.4-.24.659-.69.659-1.16v-3.84a1.2 1.2 0 00-.659-1.16z" />
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
  </svg>
);

export const WebIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.75 13.96c.25.13.42.2.46.3.05.1.03.48-.16.73-.2.25-.9.68-1.28.73-.38.05-1.03.03-1.5-.16-.45-.2-2.3-1.1-2.3-1.1s-1.4-1.25-1.48-2.12c-.08-.88.5-1.4.6-1.58.12-.2.2-.24.3-.38.1-.14.15-.22.22-.34.07-.12.03-.22-.03-.3-.06-.08-.14-.14-.28-.2-.14-.05-1.2-.55-1.2-.55s-.3-.13-.5-.03c-.2.1-.4.3-.5.48-.1.2-.13.43-.13.6 0 .18-.05.95.4 1.58.43.63 1.5 2.2 3.25 2.95.8.35 1.1.43 1.5.43.4 0 .9-.15 1.1-.3.2-.15.2-.3.2-.4s-.04-.1-.1-.18zM12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18.5a8.5 8.5 0 110-17 8.5 8.5 0 010 17z" />
    </svg>
);

export const SuggestionsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12H8v-2h4v2zm2-3H8v-2h6v2zm2-3H8V6h8v2z" />
    </svg>
);
