import React from 'react';
import './FrontPage.css';

export default function FrontPage() {
  return (
    <div className="front-page">
      <div className="headline-section">
        <h1 className="main-headline">
          The Art of Modern Engineering: Balancing Robust Code and Intuitive Design.
        </h1>
      </div>
      
      <div className="divider-thin"></div>
      
      <div className="hero-grid">
        <div className="lead-intro text-justify">
          <div className="byline">By AJI PORTFOLIO <span>&bull;</span> Exclusive</div>
          <p className="drop-cap">
            In an era defined by rapid technological shifts, the distinction between a functional application and a truly 
            memorable digital experience lies in the subtle equilibrium of engineering and aesthetics. We are witnessing a 
            renaissance where developers must act as both architects and artists, forging robust backends while crafting 
            interfaces that resonate with the end user.
          </p>
          <p>
            The modern web demands a departure from generic, bloated frameworks in favor of purposeful, meticulously 
            designed systems. This portfolio serves as a live manifesto of that ideology. By enforcing a strict monochromatic 
            palette and classic typographic hierarchy, the focus is entirely restored to the content and the seamless 
            performance of the underlying infrastructure. 
          </p>
          <p>
            True elegance in programming is found not in the complexity of the solution, but in the clarity of its execution.
            When a single-page application is engineered to maneuver effortlessly without the visual interruption of page reloads, 
            it elevates the interaction from a mere utility to a sophisticated, unbroken narrative.
          </p>
        </div>

        <aside className="tech-stack-sidebar">
          <div className="sidebar-frame">
            <h3 className="sidebar-title">Global Codebase Index</h3>
            
            <div className="github-bar-container">
              <div className="github-bar">
                <span className="bar-segment dart-bar" style={{ width: '45%' }}></span>
                <span className="bar-segment js-bar" style={{ width: '30%' }}></span>
                <span className="bar-segment php-bar" style={{ width: '15%' }}></span>
                <span className="bar-segment sql-bar" style={{ width: '10%' }}></span>
              </div>
            </div>
            
            <ul className="tech-legend">
              <li>
                <span className="legend-dot dart-dot"></span>
                <span className="legend-label">Dart <span className="legend-percent">45%</span></span>
              </li>
              <li>
                <span className="legend-dot js-dot"></span>
                <span className="legend-label">JS / TS <span className="legend-percent">30%</span></span>
              </li>
              <li>
                <span className="legend-dot php-dot"></span>
                <span className="legend-label">PHP <span className="legend-percent">15%</span></span>
              </li>
              <li>
                <span className="legend-dot sql-dot"></span>
                <span className="legend-label">SQL <span className="legend-percent">10%</span></span>
              </li>
            </ul>
          </div>
          <figcaption className="asset-caption text-justify">
            Fig. 1 &mdash; Comprehensive analysis of overall language distribution across all historical repository metrics.
          </figcaption>
        </aside>
      </div>

      <div className="divider-double"></div>
    </div>
  );
}
