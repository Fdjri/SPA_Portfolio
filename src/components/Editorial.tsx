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
          <h3 className="op-ed-title">The Philosophy of Clean Code</h3>
          <div className="byline">Opinion by Fadjri</div>
          
          <div className="text-justify">
            <p className="drop-cap">
              In the sprawling landscape of modern software engineering, there exists a profound temptation 
              to prioritize speed over elegance. Yet, true craftsmanship lies in the meticulous architecting of code 
              that not only functions but reads like prose.
            </p>
            <p>
              I began my journey as a developer with a simple belief: user interfaces should not merely display data; 
              they should communicate it. This portfolio is an expression of that belief—a deliberate choice to step away 
              from the ubiquitous, generic layouts that populate the web, and instead embrace a classic, 
              typographically driven aesthetic.
            </p>
            <p>
              When I'm not obsessing over the perfect CSS grid alignment or fine-tuning React rendering cycles, 
              I am usually exploring the latest advancements in web standards, striving to bridge the gap between 
              engineering constraints and design aspirations.
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
              Fadjri is a specialized Frontend Developer with a keen eye for elite UI/UX design. 
              With extensive experience in React, Next.js, and modern CSS architectures, Fadjri 
              focuses on building highly polished, responsive applications. 
            </p>
            <p className="bio-text">
              Based in Jakarta, available for freelance and full-time opportunities.
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
