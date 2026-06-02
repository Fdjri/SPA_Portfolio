'use client';

import React, { useState } from 'react';
import './NewsGrid.css';
import './FeaturedCarousel.css';

export default function BlueprintCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blueprints = [
    {
      id: 1,
      imgSrc: '/images/projects/uiux/banksampah/mockup.jpg',
      caption: 'Fig. 1 — Bank Sampah UI/UX Prototype prioritizing user flow and accessibility.',
      title: 'Case Study Notes: Bank Sampah',
      notes: [
        { label: 'Objective:', text: 'Overhaul waste management interface to improve daily active engagement.' },
        { label: 'Research:', text: 'Conducted 20+ user interviews to identify friction points in navigation.' },
        { label: 'Typography:', text: 'Switched to a variable sans-serif font for increased readability on mobile devices.' },
        { label: 'Outcome:', text: '35% increase in task completion rates within the first month of deployment.' }
      ]
    },
    {
      id: 2,
      imgSrc: '/images/projects/uiux/nutrimate/mockup.jpg',
      caption: 'Fig. 2 — NutriMate mobile-first health tracking architecture.',
      title: 'Case Study Notes: NutriMate',
      notes: [
        { label: 'Objective:', text: 'Design an intuitive platform for nutrition and health tracking.' },
        { label: 'Prototyping:', text: 'Iterated through 5 distinct UX patterns using high-fidelity Figma prototypes.' },
        { label: 'Optimization:', text: 'Consolidated a 4-step logging process into a single, dynamic view.' },
        { label: 'Outcome:', text: 'User logging speed improved by 22 seconds on average.' }
      ]
    },
    {
      id: 3,
      imgSrc: '/images/projects/uiux/silika/mockup.jpg',
      caption: 'Fig. 3 — Silika enterprise visualization dashboard featuring high-contrast UI.',
      title: 'Case Study Notes: Silika',
      notes: [
        { label: 'Objective:', text: 'Design a scalable charting interface for massive datasets.' },
        { label: 'Accessibility:', text: 'Implemented strict WCAG AAA color contrast ratios for data segments.' },
        { label: 'Architecture:', text: 'Developed a modular component library for reusable widget states.' },
        { label: 'Outcome:', text: 'Successfully adopted across major internal organizational teams.' }
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
              <img 
                key={bp.id} 
                src={bp.imgSrc} 
                alt={bp.title} 
                className="blueprint-slide" 
                style={{ objectFit: 'contain', backgroundColor: '#f9f9f9', border: '1px solid var(--text-color)' }}
              />
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
