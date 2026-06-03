'use client';

import React, { useState, useEffect } from 'react';
import './ProjectDetail.css';

interface ProjectDetailProps {
  onBack: () => void;
  project?: any; // Kept so NewspaperApp passes props without breaking
}

export default function ProjectDetail({ onBack, project }: ProjectDetailProps) {
  const [selectedShowcase, setSelectedShowcase] = useState<{ url: string, caption: string } | null>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedShowcase(null);
    }
  };
  const images = project?.images || [];
  const title = project?.title || 'Project Headline Placeholder Goes Here';
  const description = project?.description || ['This is the manual project description.'];
  const features = project?.features || [];
  const framework = project?.framework || 'Next.js';

  // NEW SPLITTING LOGIC
  const splashIndex = images.findIndex((img: string) => img.toLowerCase().includes('mockup.jpg'));
  const mainImage = splashIndex !== -1 ? images[splashIndex] : (images.length > 0 ? images[0] : '');
  const showcaseImages = images.filter((img: string, idx: number) => {
    if (splashIndex !== -1) return idx !== splashIndex;
    return idx !== 0;
  });

  useEffect(() => {
    // Scroll to top when mounted
    window.scrollTo(0, 0);
  }, []);

  // Extract the first letter for the dropcap on the FIRST paragraph only
  const firstParagraph = description[0] || '';
  const firstLetter = firstParagraph.charAt(0);
  const restOfFirstParagraph = firstParagraph.substring(1);
  const remainingParagraphs = description.slice(1);

  return (
    <article className="project-detail-view">
      {/* 1. Header & Meta Section */}
      <div className="pd-header-meta">
        <button className="pd-back-btn" onClick={onBack}>
          &larr; Back to Projects
        </button>
        <div className="pd-meta-row">
          <span className="pd-category">{project?.category || 'CATEGORY / SECTOR'}</span>
          <span className="pd-divider">|</span>
          <span className="pd-author">{project?.author || 'By Fadjri'}</span>
        </div>
        <h1 className="pd-headline">{title}</h1>
        <div className="pd-date">{project?.date || 'Published: June 2, 2026'}</div>
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
  );
}
