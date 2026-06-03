'use client';

import React from 'react';
import Masthead from './Masthead';
import './NewspaperApp.css';
import FrontPage from './FrontPage';
import Editorial from './Editorial';
import NewsGrid from './NewsGrid';
import Classifieds from './Classifieds';
import { ProjectData } from '../types';

export default function NewspaperApp() {

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="newspaper-app container">
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
