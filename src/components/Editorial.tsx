import React from 'react';
import './Editorial.css';

export default function Editorial() {
  return (
    <div className="editorial-section">
      <header className="editorial-header">
        <h2>Op-Ed & Editorial</h2>
        <div className="divider-thick"></div>
      </header>
      
      <div className="editorial-content">
        <div className="editorial-column main-op-ed">
          <h3 className="op-ed-title">The Philosophy of Clean Code</h3>
          <div className="byline">Opinion by Aji</div>
          
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
            <div className="notice-badge">
              <div className="notice-image halftone-1"></div>
              <div className="notice-content">
                <span className="notice-name">Certified Application Developer</span>
                <span className="notice-meta">Issued by Global Tech Authority<br/>Verified ID: 10293</span>
              </div>
            </div>
            
            <div className="notice-badge">
              <div className="notice-image halftone-2"></div>
              <div className="notice-content">
                <span className="notice-name">Advanced Frontend Architecture</span>
                <span className="notice-meta">Issued by Frontend Masters<br/>Verified ID: 8842X</span>
              </div>
            </div>

            <div className="notice-badge">
              <div className="notice-image halftone-1"></div>
              <div className="notice-content">
                <span className="notice-name">Cloud Infrastructure Expert</span>
                <span className="notice-meta">Issued by Amazon Web Services<br/>Verified ID: 7729Y</span>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="editorial-column side-op-ed">
          <div className="author-bio">
            <div className="author-portrait"></div>
            <h4>About the Author</h4>
            <p className="bio-text text-justify">
              Aji is a specialized Frontend Developer with a keen eye for elite UI/UX design. 
              With extensive experience in React, Next.js, and modern CSS architectures, Aji 
              focuses on building highly polished, responsive applications. 
            </p>
            <p className="bio-text">
              Based in Jakarta, available for freelance and full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
