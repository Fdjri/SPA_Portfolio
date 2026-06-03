'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './NewsGrid.css';
import './FeaturedCarousel.css';
import { LOCAL_PROJECTS } from '../data/projectsData';

export default function BlueprintCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map to the active slide index state (0: Bank Sampah, 1: SILIKA, 2: Nutrimate)
  const projectIds = ['bank-sampah-ui', 'silika-ui', 'nutrimate-ui'];
  
  // Custom captions for the canvas side as per the original layout
  const captions = [
    'Fig. 1 — Bank Sampah UI/UX Prototype prioritizing user flow and accessibility.',
    'Fig. 2 — Silika enterprise visualization dashboard featuring high-contrast UI.',
    'Fig. 3 — NutriMate mobile-first health tracking architecture.'
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectIds.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projectIds.length) % projectIds.length);
  };

  const activeProjectId = projectIds[currentIndex];
  const currentProject = LOCAL_PROJECTS[activeProjectId];

  return (
    <div className="design-blueprints-grid">
      <div className="canvas-side">
        <div className="blueprint-view">
          <div 
            className="blueprint-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectIds.map((id) => {
              const proj = LOCAL_PROJECTS[id];
              // Find the mockup image, or fallback to the first image
              const mockupImg = proj.images.find(img => img.includes('mockup')) || proj.images[0];
              return (
                <img 
                  key={id} 
                  src={mockupImg} 
                  alt={proj.title} 
                  className="blueprint-slide" 
                  style={{ objectFit: 'contain', backgroundColor: '#f9f9f9', border: '1px solid var(--text-color)' }}
                />
              );
            })}
          </div>
        </div>
        
        <figcaption className="canvas-caption">
          {captions[currentIndex]}
        </figcaption>

        <div className="blueprint-navigation">
          <button onClick={prevSlide} className="carousel-btn" aria-label="Previous blueprint">&#8592;</button>
          <span className="carousel-pagination">Blueprint {currentIndex + 1} of {projectIds.length}</span>
          <button onClick={nextSlide} className="carousel-btn" aria-label="Next blueprint">&#8594;</button>
        </div>
      </div>
      
      <div className="notes-side" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <h4 className="notes-title">Case Study Notes: {currentProject.title}</h4>
        <ul className="bulleted-notes" style={{ flexGrow: 1 }}>
          <li><strong>Objective:</strong> {currentProject.objective}</li>
          <li><strong>Research:</strong> {currentProject.research}</li>
          <li><strong>Typography:</strong> {currentProject.typography}</li>
          <li><strong>Outcome:</strong> {currentProject.outcome}</li>
        </ul>
        
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link 
            href={`/projects/${currentProject.id}`}
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--text-color)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '1px',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            [ READ FULL DISPATCH &rarr; ]
          </Link>
        </div>
      </div>
    </div>
  );
}
