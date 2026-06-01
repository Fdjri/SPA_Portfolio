'use client';

import React, { useRef, useState } from 'react';
import './NewsGrid.css';
import FeaturedCarousel from './FeaturedCarousel';
import BlueprintCarousel from './BlueprintCarousel';

export default function NewsGrid() {
  // Mock total projects data count to conditionally render the "View All" link
  const totalProjects = 15;

  // Desktop drag-to-scroll logic for mobile dispatches
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setHasDragged(false); // Reset drag state on new click
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    
    // If the mouse has moved more than 10 pixels, consider it a drag
    if (Math.abs(walk) > 10) {
      setHasDragged(true);
    }
    
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // If the user was dragging the slider, prevent the click from navigating
    if (hasDragged) {
      e.preventDefault();
      return;
    }
    // Otherwise, it was a clean click, so trigger navigation
    alert('TODO: Navigating to Full Project Detail Page');
  };

  return (
    <div className="news-grid-section">
      <header className="section-header">
        <h2>Business & Technology</h2>
        <div className="divider-thick"></div>
      </header>
      
      <section className="machinery-registry">
        <h3 className="registry-title">Industrial Machinery & Equipment</h3>
        <p className="registry-description">
          A comprehensive registry of heavy machinery and digital instruments currently deployed for the architecture of robust software infrastructure.
        </p>
        
        <div className="registry-grid">
          <div className="registry-category">
            <h4 className="category-name">Mobile Frameworks</h4>
            <div className="tool-list">
              <span className="tool-badge">Flutter</span>
              <span className="tool-badge">Dart</span>
            </div>
          </div>
          
          <div className="registry-category">
            <h4 className="category-name">Web & Backend Systems</h4>
            <div className="tool-list">
              <span className="tool-badge">Next.js</span>
              <span className="tool-badge">React</span>
              <span className="tool-badge">Laravel</span>
              <span className="tool-badge">PHP</span>
            </div>
          </div>
          
          <div className="registry-category">
            <h4 className="category-name">Database Engines</h4>
            <div className="tool-list">
              <span className="tool-badge">MySQL</span>
              <span className="tool-badge">MariaDB</span>
              <span className="tool-badge">SQL</span>
            </div>
          </div>
          
          <div className="registry-category">
            <h4 className="category-name">Design & Interfaces</h4>
            <div className="tool-list">
              <span className="tool-badge">Figma</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-double"></div>
      
      {/* 1. Web & Backend Category */}
      <section className="category-section">
        <div className="category-header">
          <h3 className="category-title">DIGITAL ARCHITECTURE & WEB SYSTEMS</h3>
        </div>
        
        <div className="web-systems-grid">
          <div className="web-col-side side-left">
            {[1, 2, 3].map((item, index) => (
              <React.Fragment key={`left-${item}`}>
                <article className="text-article">
                  <h4 className="small-headline">
                    <a href="#" className="headline-link" onClick={(e) => { e.preventDefault(); alert('TODO: Navigating to Full Project Detail Page'); }}>
                      Local Dashboard Application Streamlines Analytics {item}
                    </a>
                  </h4>
                  <p className="snippet">Enterprise-grade admin panel providing insightful visualizations for daily operations.</p>
                  <span className="read-more-text">Read More &rarr;</span>
                </article>
                {index < 2 && <div className="article-divider"></div>}
              </React.Fragment>
            ))}
          </div>
          
          <div className="web-col-center">
            <article className="featured-web-article">
              <FeaturedCarousel />
            </article>
          </div>
          
          <div className="web-col-side side-right">
            {[1, 2, 3].map((item, index) => (
              <React.Fragment key={`right-${item}`}>
                <article className="text-article">
                  <h4 className="small-headline">
                    <a href="#" className="headline-link" onClick={(e) => { e.preventDefault(); alert('TODO: Navigating to Full Project Detail Page'); }}>
                      Legacy Systems Migration to Cloud Infrastructure {item}
                    </a>
                  </h4>
                  <p className="snippet">A comprehensive architectural shift improving server response times by 45%.</p>
                  <span className="read-more-text">Read More &rarr;</span>
                </article>
                {index < 2 && <div className="article-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {totalProjects > 7 && (
          <div className="view-all-container">
            <a href="#" className="view-all-link" onClick={(e) => { e.preventDefault(); alert('TODO: Navigating to Separate Page listing ALL Projects'); }}>
              View All Projects &rarr;
            </a>
          </div>
        )}
      </section>

      {/* 2. Mobile Apps Category */}
      <section className="category-section">
        <div className="category-header">
          <h3 className="category-title">MOBILE APPLICATION DISPATCHES</h3>
        </div>
        
        <div 
          className={`mobile-project-slider ${isDragging ? 'dragging' : ''}`}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <article className="mobile-project-card" onClick={handleCardClick}>
            <div className="mobile-image-slot halftone-1"></div>
            <h4 className="mobile-headline">Award-Winning Social App Connects Thousands</h4>
            <div className="mobile-meta">Flutter &bull; Firebase</div>
          </article>
          
          <article className="mobile-project-card" onClick={handleCardClick}>
            <div className="mobile-image-slot halftone-2"></div>
            <h4 className="mobile-headline">Fitness Tracker Redefines Personal Health Metrics</h4>
            <div className="mobile-meta">Dart &bull; SQLite</div>
          </article>
          
          <article className="mobile-project-card" onClick={handleCardClick}>
            <div className="mobile-image-slot halftone-3"></div>
            <h4 className="mobile-headline">Logistics Routing App Optimizes Delivery Chains</h4>
            <div className="mobile-meta">Flutter &bull; Google Maps API</div>
          </article>

          <article className="mobile-project-card" onClick={handleCardClick}>
            <div className="mobile-image-slot crosshatch-1"></div>
            <h4 className="mobile-headline">Vintage Camera Filter Studio Sweeps Nation</h4>
            <div className="mobile-meta">React Native &bull; WebGL</div>
          </article>
        </div>
      </section>

      {/* 3. Design & Prototypes Category */}
      <section className="category-section">
        <div className="category-header">
          <h3 className="category-title">INTERFACE BLUEPRINTS & DESIGN</h3>
        </div>
        
        <BlueprintCarousel />
      </section>
    </div>
  );
}
