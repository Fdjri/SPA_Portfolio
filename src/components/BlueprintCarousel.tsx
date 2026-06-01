'use client';

import React, { useState } from 'react';
import './NewsGrid.css';
import './FeaturedCarousel.css';

export default function BlueprintCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blueprints = [
    {
      id: 1,
      styleClass: 'crosshatch-2',
      caption: 'Fig. 1 — A comprehensive wireframe layout prioritizing user flow and accessible typography.',
      title: 'Case Study Notes: Project Alpha',
      notes: [
        { label: 'Objective:', text: 'Overhaul the legacy user dashboard to improve daily active engagement.' },
        { label: 'Research:', text: 'Conducted 20+ user interviews to identify friction points in navigation.' },
        { label: 'Typography:', text: 'Switched to a variable sans-serif font for increased readability on low-DPI displays.' },
        { label: 'Outcome:', text: '35% increase in task completion rates within the first month of deployment.' }
      ]
    },
    {
      id: 2,
      styleClass: 'halftone-2',
      caption: 'Fig. 2 — Mobile-first checkout flow with streamlined single-page architecture.',
      title: 'Case Study Notes: Beta Checkout',
      notes: [
        { label: 'Objective:', text: 'Reduce cart abandonment rates on mobile devices.' },
        { label: 'Prototyping:', text: 'Iterated through 5 distinct UX patterns using high-fidelity Figma prototypes.' },
        { label: 'Optimization:', text: 'Consolidated a 4-step process into a single, dynamic accordion view.' },
        { label: 'Outcome:', text: 'Checkout speed improved by 22 seconds on average.' }
      ]
    },
    {
      id: 3,
      styleClass: 'crosshatch-1',
      caption: 'Fig. 3 — Enterprise data visualization dashboard featuring high-contrast dark mode.',
      title: 'Case Study Notes: Gamma Analytics',
      notes: [
        { label: 'Objective:', text: 'Design a scalable charting interface for massive datasets.' },
        { label: 'Accessibility:', text: 'Implemented strict WCAG AAA color contrast ratios for data segments.' },
        { label: 'Architecture:', text: 'Developed a modular component library for reusable widget states.' },
        { label: 'Outcome:', text: 'Successfully adopted across 4 major internal organizational teams.' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blueprints.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blueprints.length) % blueprints.length);
  };

  const activeBlueprint = blueprints[currentIndex];

  return (
    <div className="design-blueprints-grid">
      <div className="canvas-side">
        <div className="blueprint-view">
          <div 
            className="blueprint-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {blueprints.map((bp) => (
              <div key={bp.id} className={`blueprint-slide ${bp.styleClass}`}></div>
            ))}
          </div>
        </div>
        
        <figcaption className="canvas-caption">
          {activeBlueprint.caption}
        </figcaption>

        <div className="blueprint-navigation">
          <button onClick={prevSlide} className="carousel-btn" aria-label="Previous blueprint">&#8592;</button>
          <span className="carousel-pagination">Blueprint {currentIndex + 1} of {blueprints.length}</span>
          <button onClick={nextSlide} className="carousel-btn" aria-label="Next blueprint">&#8594;</button>
        </div>
      </div>
      
      <div className="notes-side">
        <h4 className="notes-title">{activeBlueprint.title}</h4>
        <ul className="bulleted-notes">
          {activeBlueprint.notes.map((note, idx) => (
            <li key={idx}><strong>{note.label}</strong> {note.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
