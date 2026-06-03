'use client';

import React, { useState, useEffect, use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { LOCAL_PROJECTS } from '../../../data/projectsData';
import '../../../components/ProjectDetail.css';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [selectedShowcase, setSelectedShowcase] = useState<{url: string, caption: string} | null>(null);

  const unwrappedParams = use(params);
  const project = LOCAL_PROJECTS[unwrappedParams.slug];

  useEffect(() => {
    // Scroll to top when mounted
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    notFound();
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedShowcase(null);
    }
  };

  const images = project.images || [];
  const title = project.title || 'Project Headline Placeholder Goes Here';
  const description = project.description || ['This is the manual project description.'];
  const features = project.features || [];
  const framework = project.framework || 'Next.js';

  // NEW SPLITTING LOGIC
  const splashIndex = images.findIndex((img: string) => img.toLowerCase().includes('mockup.jpg'));
  const mainImage = splashIndex !== -1 ? images[splashIndex] : (images.length > 0 ? images[0] : '');
  const showcaseImages = images.filter((img: string, idx: number) => {
    if (splashIndex !== -1) return idx !== splashIndex;
    return idx !== 0;
  });

  // Extract the first letter for the dropcap on the FIRST paragraph only
  const firstParagraph = description[0] || '';
  const firstLetter = firstParagraph.charAt(0);
  const restOfFirstParagraph = firstParagraph.substring(1);
  const remainingParagraphs = description.slice(1);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
      <article className="project-detail-view">
        {/* 1. Header & Meta Section */}
        <div className="pd-header-meta">
          <button className="pd-back-btn" onClick={() => router.push('/')}>
            &larr; Back to Projects
          </button>
          <div className="pd-meta-row">
            <span className="pd-category">{project.category || 'CATEGORY / SECTOR'}</span>
            <span className="pd-divider">|</span>
            <span className="pd-author">{project.author || 'By Fadjri'}</span>
          </div>
          <h1 className="pd-headline">{title}</h1>
          <div className="pd-date">{project.date || 'Published: June 2, 2026'}</div>
        </div>

        {/* 2. Asymmetric 2-Column Main Layout */}
        <div className="pd-main-grid">

          {/* Left Column (Wide) */}
          <div className="pd-left-col">
            <div className="pd-carousel-wrapper">
              <div className="pd-carousel-frame">
                {mainImage && (
                  <img
                    src={mainImage}
                    alt="Primary interface and dashboard overview"
                    className="pd-carousel-image"
                  />
                )}
              </div>
              <div className="pd-carousel-caption">
                Fig. 1 — Primary interface and dashboard overview for the deployed system.
              </div>
            </div>

            <div className="pd-editorial-content text-justify">
              <p className="pd-dropcap-paragraph">
                <strong>{firstLetter}</strong>{restOfFirstParagraph}
              </p>
              {remainingParagraphs.map((para: string, idx: number) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right Sidebar Column (Narrow) */}
          <aside className="pd-right-col">

            <div className="pd-widget">
              <h3 className="pd-widget-title">KEY FEATURES</h3>
              <ul className="pd-features-list">
                {features.length > 0 ? (
                  features.map((feat: string, idx: number) => <li key={idx}>{feat}</li>)
                ) : (
                  <li>No features listed yet.</li>
                )}
              </ul>
            </div>

            <div className="pd-widget">
              <h3 className="pd-widget-title">TECH STACK</h3>
              <div className="pd-frameworks">
                <ul className="pd-features-list">
                  <li>{framework}</li>
                </ul>
              </div>
            </div>

            {project.languages && project.languages.length > 0 && (
              <div className="pd-widget">
                <h3 className="pd-widget-title">LANGUAGES</h3>
                <div className="pd-languages-container">
                  <div className="pd-languages-bar" style={{ display: 'flex', height: '8px', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
                    {project.languages.map((lang: any, idx: number) => (
                      <div 
                        key={idx} 
                        style={{ 
                          width: `${lang.percentage}%`, 
                          backgroundColor: lang.color
                        }} 
                        title={`${lang.name} ${lang.percentage}%`}
                      />
                    ))}
                  </div>
                  <ul className="pd-languages-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {project.languages.map((lang: any, idx: number) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', fontSize: '0.85rem', fontFamily: 'var(--font-sans)' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: lang.color, marginRight: '6px', display: 'inline-block' }}></span>
                        <strong style={{ marginRight: '4px', color: '#333' }}>{lang.name}</strong>
                        <span style={{ color: '#666' }}>{lang.percentage}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {project.links && (project.links.code || project.links.demo) && (
              <div className="pd-resources-widget">
                <h3 className="pd-resources-title">PROJECT RESOURCES</h3>
                <div className="pd-resources-list">
                  {project.links.code && (
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="pd-resource-link">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#121212" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      <span className="pd-resource-text">Open Source Repository</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="pd-resource-link">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span className="pd-resource-text">Watch Video Demonstration</span>
                    </a>
                  )}
                </div>
              </div>
            )}

          </aside>
        </div>

        {/* 3. Visual Showcase Section */}
        <div className="pd-showcase-divider"></div>
        <section className="pd-showcase-section">
          <h2 className="pd-showcase-title">EXHIBIT DISPATCHES & VISUAL EVIDENCE</h2>
          <div className="pd-showcase-grid">
            {showcaseImages.map((imgUrl: string, idx: number) => {
              const caption = `Fig. ${idx + 2} — Visual archive record of deployed architecture.`;
              return (
                <figure 
                  className="pd-showcase-item" 
                  key={idx} 
                  onClick={() => setSelectedShowcase({ url: imgUrl, caption })}
                >
                  <div className="pd-showcase-img-wrapper">
                    <img src={imgUrl} alt={`Showcase Exhibit ${idx + 1}`} className="pd-showcase-img" />
                  </div>
                  <figcaption className="pd-showcase-caption">{caption}</figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        {/* Archive-Themed Modal Pop-up */}
        {selectedShowcase && (
          <div className="pd-modal-overlay" onClick={handleBackdropClick}>
            <div className="pd-modal-content">
              <div className="pd-modal-header">Official Archive Record Verification</div>
              <img 
                src={selectedShowcase.url} 
                alt={selectedShowcase.caption} 
                className="pd-modal-image" 
              />
              <div className="pd-modal-caption">{selectedShowcase.caption}</div>
              <button className="pd-modal-close" onClick={() => setSelectedShowcase(null)}>
                [ Close Archive Registry ]
              </button>
            </div>
          </div>
        )}

      </article>
    </div>
  );
}
