'use client';

import React, { useState } from 'react';
import './FeaturedCarousel.css';

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of distinct major projects
  const projects = [
    {
      id: 1,
      styleClass: 'crosshatch-1',
      title: 'Revolutionary E-Commerce Platform Surpasses Expectations',
      summary: 'A robust, fully responsive storefront featuring advanced filtering, real-time inventory tracking, and a seamless checkout experience built purely on Next.js and Stripe. This massive architectural overhaul resulted in a 40% conversion rate increase across all major demographics.'
    },
    {
      id: 2,
      styleClass: 'crosshatch-2',
      title: 'Enterprise Analytics Dashboard Redefines Data Visualization',
      summary: 'An intricate, high-performance data processing interface offering real-time metric updates. Utilizing WebSockets and advanced D3 charting, the platform drastically reduced cognitive load for corporate executives analyzing quarterly growth.'
    },
    {
      id: 3,
      styleClass: 'halftone-1',
      title: 'Global Social Network Scales to Handle Millions of Concurrent Users',
      summary: 'A heavily optimized edge-computed social hub built to facilitate frictionless cross-border communication. Implementing an innovative caching layer reduced median latency by 60%, maintaining a highly stable and fluid user experience globally.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[currentIndex];

  return (
    <div className="featured-carousel-container">
      <div className="carousel-view">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className={`carousel-slide ${project.styleClass}`}></div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-btn" aria-label="Previous project">
          &#8592;
        </button>
        <span className="carousel-pagination">
          REPORT {currentIndex + 1} OF {projects.length}
        </span>
        <button onClick={nextSlide} className="carousel-btn" aria-label="Next project">
          &#8594;
        </button>
      </div>

      <div className="carousel-content-wrapper">
        <h3 className="featured-headline">
          <a href="#" className="headline-link" onClick={(e) => { e.preventDefault(); alert('TODO: Navigating to Full Project Detail Page'); }}>
            {activeProject.title}
          </a>
        </h3>
        <p className="featured-summary text-justify">
          {activeProject.summary}
        </p>
        <a href="#" className="read-more-link bold-link" onClick={(e) => { e.preventDefault(); alert('TODO: Navigating to Full Project Detail Page'); }}>
          View Full Report &rarr;
        </a>
      </div>
    </div>
  );
}
