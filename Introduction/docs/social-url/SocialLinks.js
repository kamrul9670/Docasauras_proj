import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const links = [
  { icon: <FaGithub size={24} />, label: 'GitHub', url: 'https://github.com/kamrul9670', bg: '#24292e' },
  { icon: <FaLinkedin size={24} />, label: 'LinkedIn', url: 'https://linkedin.com/in/kamrul-hasan-9a09341b8/', bg: '#0077b5' },
  { icon: <FaEnvelope size={24} />, label: 'Email Me', url: 'mailto:kamrul9670@gmail.com', bg: '#ea4335' },
  { icon: <FaTwitter size={24} />, label: 'X / Twitter', url: 'https://x.com/kamrul9670', bg: '#1DA1F2' },
];

export default function SocialLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '1rem auto', padding: '1rem' }}>
      {links.map((link, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: link.bg, color: 'white', padding: '0.8rem', borderRadius: '8px' }}>
          {link.icon}
          <a href={link.url} target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            {link.label}
          </a>
        </div>
      ))}
    </div>
  );
}
