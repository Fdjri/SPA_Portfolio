'use client';

import React, { useState, useEffect } from 'react';
import './ProjectDetail.css';

interface ProjectDetailProps {
  onBack: () => void;
  project?: any; // Kept so NewspaperApp passes props without breaking
}

export default function ProjectDetail({ onBack, project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fallback to static if no project is passed (shouldn't happen with the new logic, but safe)
  const images = project?.images || [];
  const title = project?.title || 'Project Headline Placeholder Goes Here';
  const description = project?.description || 'This is the manual project description.';
  const features = project?.features || [];
  const framework = project?.framework || 'Next.js';

  useEffect(() => {
    // Scroll to top when mounted
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Extract the first letter for the dropcap if description exists
  const firstLetter = description.charAt(0);
  const restOfDescription = description.substring(1);

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
              {images.length > 0 && (
                <img 
                  src={images[currentImageIndex]} 
                  alt={`Screenshot ${currentImageIndex + 1}`} 
                  className="pd-carousel-image"
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="pd-carousel-nav">
                <button onClick={prevImage} className="pd-nav-arrow">&larr;</button>
                <span className="pd-nav-counter">IMAGE {currentImageIndex + 1} OF {images.length}</span>
                <button onClick={nextImage} className="pd-nav-arrow">&rarr;</button>
              </div>
            )}
            <figcaption className="pd-carousel-caption">
              Visual preview of the deployed interface architecture.
            </figcaption>
          </div>

          <div className="pd-editorial-content text-justify">
            <p className="pd-dropcap-paragraph">
              <strong>{firstLetter}</strong>{restOfDescription}
            </p>
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
            {/* TODO: Integrate live dynamic GitHub Language API for this repository later */}
          </div>
          
        </aside>
      </div>
    </article>
  );
}
