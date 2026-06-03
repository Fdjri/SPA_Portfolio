'use client';

import React, { useState, useEffect } from 'react';
import './Editorial.css';

export default function Editorial() {
  const [selectedCert, setSelectedCert] = useState<{file: string, name: string} | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedCert(null);
    }
  };

  return (
    <div className="editorial-section">
      <header className="editorial-header">
        <h2>Op-Ed & Editorial</h2>
        <div className="divider-thick"></div>
      </header>
      
      <div className="editorial-content">
        <div className="editorial-column main-op-ed">
          <h3 className="op-ed-title">The JavaScript Fatigue vs. Relational Sanity</h3>
          <div className="byline">Opinion by Fadjri</div>
          
          <div className="text-justify">
            <p className="drop-cap">
              It has become a peculiar modern tragedy that developers today will eagerly over-engineer a simple 
              landing page with cascading React state managers, only to wonder why their application collapses 
              under the weight of its own dependency array. We live in an era where shipping a "Hello World" 
              requires a bundler, a transpiler, and a prayer.
            </p>
            <p>
              In stark contrast, true engineering peace of mind is found in the absolute, uncompromising monolithic 
              reliability of Laravel. There is a profound relational sanity in a framework that simply works out 
              of the box without demanding an advanced degree in component lifecycles.
            </p>
            <p>
              And when it comes to mobile deployment, leave the web wrappers behind. The slick, native-compiled 
              brilliance of Flutter remains the only serious choice for heavy cross-platform architectures that doesn't 
              compromise on performance or developer dignity.
            </p>
          </div>

          <div className="divider-thin"></div>
          
          <h4 className="public-notices-title">Public Notices & Official Credentials</h4>
          
          <div className="notices-grid">
            {[
              { id: 'bnsp', file: 'bnsp.webp', name: 'Professional Certification', meta: 'Issued by BNSP' },
              { id: 'flutter', file: 'flutter.webp', name: 'Flutter Development', meta: 'Cross-platform Framework' },
              { id: 'ethical', file: 'ethicalhacking.webp', name: 'Ethical Hacking', meta: 'Advanced Security' },
              { id: 'cybersecurity', file: 'cybersecurity.webp', name: 'Cybersecurity', meta: 'Security Essentials' },
              { id: 'microsoft', file: 'microsoft.webp', name: 'Microsoft Certified', meta: 'Microsoft Office Applications' },
              { id: 'azure', file: 'azure.webp', name: 'Azure Fundamentals', meta: 'Issued by Microsoft' },
            ].map((cert) => (
              <div 
                className="notice-badge clickable-badge" 
                key={cert.id}
                onClick={() => setSelectedCert({ file: cert.file, name: cert.name })}
                role="button"
                tabIndex={0}
              >
                <img src={`/images/certificates/${cert.file}`} alt={cert.name} className="notice-image" />
                <div className="notice-content">
                  <span className="notice-name">{cert.name}</span>
                  <span className="notice-meta">{cert.meta}</span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
        <div className="editorial-column side-op-ed">
          <div className="author-bio">
            <img src="/images/me.webp" alt="Fadjri" className="author-portrait" />
            <h4>About the Author</h4>
            <p className="bio-text text-justify">
              Fadjri is an IT student developer currently treating Next.js and React as a chaotic playground 
              in an attempt to escape tutorial hell. Components are regularly being broken, and state management 
              remains a formidable, confusing adversary.
            </p>
            <p className="bio-text">
              However, make no mistake: when it comes to engineering robust, production-ready Laravel backends 
              or deploying heavy Flutter cross-platform mobile architectures, the training wheels are completely off.
            </p>
          </div>
        </div>
      </div>

      {selectedCert && (
        <div className="modal-overlay" onClick={handleBackdropClick}>
          <div className="modal-content">
            <div className="cert-modal-header">Official Archive Record Verification</div>
            <img 
              src={`/images/certificates/${selectedCert.file}`} 
              alt={selectedCert.name} 
              className="cert-modal-image" 
            />
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              [ Close Registry ]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
