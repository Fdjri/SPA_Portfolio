'use client';

import React, { useRef } from 'react';
import Masthead from './Masthead';
import './NewspaperApp.css';
import FrontPage from './FrontPage';
import Editorial from './Editorial';
import NewsGrid from './NewsGrid';
import Classifieds from './Classifieds';
import { ProjectData } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function NewspaperApp() {
  const appRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Target all horizontal divider lines across the newspaper layout
    const dividers = gsap.utils.toArray<HTMLElement>(
      '.section-divider, .divider-thin, .divider-thick, .divider-double, .article-divider, .pd-showcase-divider'
    );
    
    dividers.forEach((divider) => {
      // Set initial state
      gsap.set(divider, { 
        transformOrigin: 'left center', 
        scaleX: 0 
      });

      // Create scroll-triggered animation
      gsap.to(divider, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: divider,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        }
      });
    });
  }, { scope: appRef });

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="newspaper-app container" ref={appRef}>
      <Masthead />
      
      <nav className="newspaper-nav">
        <ul className="nav-links">
          <li>
            <button 
              className="nav-btn"
              onClick={() => scrollToSection('front')}
            >
              Front Page
            </button>
          </li>
          <li>
            <button 
              className="nav-btn"
              onClick={() => scrollToSection('editorial')}
            >
              Op-Ed
            </button>
          </li>
          <li>
            <button 
              className="nav-btn"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className="nav-btn"
              onClick={() => scrollToSection('classifieds')}
            >
              Classifieds
            </button>
          </li>
        </ul>
      </nav>

      <main className="newspaper-content">
        <section id="front" className="page-section">
          <FrontPage />
        </section>
        
        <div className="section-divider"></div>
        
        <section id="editorial" className="page-section">
          <Editorial />
        </section>
        
        <div className="section-divider"></div>
        
        <section id="projects" className="page-section">
          <NewsGrid />
        </section>
        
        <div className="section-divider"></div>
        
        <section id="classifieds" className="page-section">
          <Classifieds />
        </section>
      </main>
      
      <footer className="newspaper-footer">
        <div className="divider-double"></div>
        <p>&copy; {new Date().getFullYear()} Fadjri's Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
