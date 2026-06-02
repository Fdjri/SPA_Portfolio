'use client';

import React, { useRef, useState } from 'react';
import './NewsGrid.css';
import FeaturedCarousel from './FeaturedCarousel';
import BlueprintCarousel from './BlueprintCarousel';

import { ProjectData } from '../types';

interface NewsGridProps {
  onProjectSelect?: (project: ProjectData) => void;
}

export default function NewsGrid({ onProjectSelect }: NewsGridProps) {
  // Local static project data array for SPA routing
  const LOCAL_PROJECTS: Record<string, ProjectData> = {
    'paudinsani': {
      id: 'paudinsani',
      title: 'Paudinsani Management System',
      category: 'WEB SYSTEMS & PORTALS',
      date: 'June 2, 2026',
      author: 'By Fadjri',
      description: 'An integrated administrative dashboard built to manage student records, financial operations, and daily attendance. The system significantly reduces manual paperwork while providing school administrators with clear, actionable data insights.',
      features: [
        'Real-time student database and attendance tracking',
        'Secure role-based authentication for admins and teachers',
        'Automated monthly financial calculation and reporting',
        'Responsive dashboard interface'
      ],
      framework: 'Laravel / PHP',
      images: ['/images/projects/web/paudinsani/dashboardadmin.jpg']
    },
    'dashboard-parking': {
      id: 'dashboard-parking',
      title: 'Dashboard Parking Management',
      category: 'WEB SYSTEMS & PORTALS',
      date: 'May 15, 2026',
      author: 'By Fadjri',
      description: 'A comprehensive parking management dashboard designed to monitor vehicle entry/exit flows, calculate revenue, and manage parking slot availability in real time.',
      features: [
        'Live monitoring of parking slot occupancy',
        'Automated parking fee calculation based on duration',
        'Detailed daily and monthly revenue reporting',
        'Export capabilities for accounting purposes'
      ],
      framework: 'Next.js / React',
      images: ['/images/projects/web/dashboard-parking.jpg'] // Placeholder image
    },
    'bpsrw': {
      id: 'bpsrw',
      title: 'BPS RW Community Management App',
      category: 'MOBILE APPLICATION',
      date: 'April 10, 2026',
      author: 'By Fadjri',
      description: 'The development of this community management system was born out of a critical necessity to modernize local governance. By transitioning away from archaic paper-based ledgers to a centralized digital database, neighborhood administrators can now orchestrate resident data with unprecedented accuracy and speed.',
      features: [
        'Digital resident registry and documentation',
        'Automated neighborhood dues collection tracker',
        'Push notifications for community announcements',
        'Mobile-first architecture'
      ],
      framework: 'Flutter / Dart',
      images: ['/images/projects/mobile/bpsrw/splash.jpg']
    },
    'academix': {
      id: 'academix',
      title: 'Academix',
      category: 'WEB SYSTEMS & PORTALS',
      date: 'March 20, 2026',
      author: 'By Fadjri',
      description: 'A comprehensive academic management system designed to streamline university administrative processes. It manages student enrollments, course scheduling, and grading with a high-performance backend.',
      features: ['Student Enrollment', 'Course Scheduling', 'Grading System'],
      framework: 'Next.js',
      images: ['/images/placeholder1.jpg']
    },
    'cuyperpus': {
      id: 'cuyperpus',
      title: 'Cuyperpus',
      category: 'WEB SYSTEMS & PORTALS',
      date: 'February 15, 2026',
      author: 'By Fadjri',
      description: 'A modern library management application enabling efficient book tracking and member reservations.',
      features: ['Book Tracking', 'Member Reservations', 'Due Date Alerts'],
      framework: 'React',
      images: ['/images/placeholder1.jpg']
    },
    'kaizen-db': {
      id: 'kaizen-db',
      title: 'Kaizen DB Engine',
      category: 'DATABASE & ARCHITECTURE',
      date: 'January 10, 2026',
      author: 'By Fadjri',
      description: 'A lightweight, highly optimized database engine built for fast, embedded read-heavy workloads.',
      features: ['High-speed Reads', 'Embedded Engine', 'Memory Optimization'],
      framework: 'C++',
      images: ['/images/placeholder1.jpg']
    },
    'sepatuku': {
      id: 'sepatuku',
      title: 'Sepatuku',
      category: 'E-COMMERCE',
      date: 'December 5, 2025',
      author: 'By Fadjri',
      description: 'A responsive e-commerce storefront for a sneaker brand with integrated payment gateways.',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway Integration'],
      framework: 'Next.js / Stripe',
      images: ['/images/placeholder1.jpg']
    },
    'tixgo-web': {
      id: 'tixgo-web',
      title: 'Tixgo Web',
      category: 'WEB SYSTEMS & PORTALS',
      date: 'November 11, 2025',
      author: 'By Fadjri',
      description: 'A scalable online ticketing platform handling high-concurrency event bookings seamlessly.',
      features: ['High Concurrency', 'Seat Selection', 'Digital Ticketing'],
      framework: 'Vue.js / Node.js',
      images: ['/images/placeholder1.jpg']
    },
    'espj': {
      id: 'espj',
      title: 'eSPJ Financial Reporting Utility',
      category: 'MOBILE APPLICATION',
      date: 'October 1, 2025',
      author: 'By Fadjri',
      description: 'An enterprise financial reporting utility for mobile devices, enabling quick and secure submission of financial documents.',
      features: ['Document Upload', 'Approval Workflows', 'Secure Encryption'],
      framework: 'Flutter',
      images: ['/images/projects/mobile/espj/splash.jpg']
    },
    'eujiemisi': {
      id: 'eujiemisi',
      title: 'e-Uji Emisi Vehicle Tracking',
      category: 'MOBILE APPLICATION',
      date: 'September 15, 2025',
      author: 'By Fadjri',
      description: 'A mobile application for tracking vehicle emissions data to help environmental agencies monitor air quality compliance.',
      features: ['Emission Data Logging', 'Compliance Checking', 'Reporting Dashboard'],
      framework: 'Flutter',
      images: ['/images/projects/mobile/eujiemisi/home.jpg']
    },
    'mysimplelocation': {
      id: 'mysimplelocation',
      title: 'My Simple Location Geo-Tagging',
      category: 'MOBILE APPLICATION',
      date: 'August 20, 2025',
      author: 'By Fadjri',
      description: 'A geolocation app that allows users to tag, save, and share their favorite locations using Google Maps integration.',
      features: ['GPS Tracking', 'Location Saving', 'Social Sharing'],
      framework: 'Flutter / Google Maps',
      images: ['/images/projects/mobile/mysimplelocation/getlocation.jpg']
    },
    'tixgomobile': {
      id: 'tixgomobile',
      title: 'TixGo Mobile Event Ticketing',
      category: 'MOBILE APPLICATION',
      date: 'July 10, 2025',
      author: 'By Fadjri',
      description: 'The mobile companion app for the TixGo platform, allowing users to browse events and purchase tickets on the go.',
      features: ['Event Browsing', 'Mobile Payments', 'QR Code Tickets'],
      framework: 'Flutter',
      images: ['/images/projects/mobile/tixgomobile/category.jpg']
    }
  };

  // Mock total projects data count to conditionally render the "View All" link
  const totalProjects = 15;
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

  const handleCardClick = (e: React.MouseEvent, projectId?: string) => {
    // If the user was dragging the slider, prevent the click from navigating
    if (hasDragged) {
      e.preventDefault();
      return;
    }
    // Otherwise, trigger SPA state update if we have a matching project ID
    e.preventDefault();
    if (onProjectSelect && projectId && LOCAL_PROJECTS[projectId]) {
      onProjectSelect(LOCAL_PROJECTS[projectId]);
    } else {
      // Fallback for elements not fully mapped yet
      alert('Project detail implementation is ready. Please map this specific project in LOCAL_PROJECTS array.');
    }
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
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" className="tool-logo" />
                <span className="tool-label">Flutter</span>
              </div>
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" alt="Dart" className="tool-logo" />
                <span className="tool-label">Dart</span>
              </div>
            </div>
          </div>

          <div className="registry-category">
            <h4 className="category-name">Web & Backend Systems</h4>
            <div className="tool-list">
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" className="tool-logo" />
                <span className="tool-label">Laravel</span>
              </div>
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="tool-logo" />
                <span className="tool-label">PHP</span>
              </div>
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="tool-logo" />
                <span className="tool-label">Next.js</span>
              </div>
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="tool-logo" />
                <span className="tool-label">React</span>
              </div>
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="tool-logo" />
                <span className="tool-label">JavaScript</span>
              </div>
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="tool-logo" />
                <span className="tool-label">Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div className="registry-category">
            <h4 className="category-name">Database Engines</h4>
            <div className="tool-list">
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="tool-logo" />
                <span className="tool-label">MySQL</span>
              </div>
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg" alt="MariaDB" className="tool-logo" />
                <span className="tool-label">MariaDB</span>
              </div>
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQL" className="tool-logo" />
                <span className="tool-label">SQL</span>
              </div>
            </div>
          </div>

          <div className="registry-category">
            <h4 className="category-name">Design & Interfaces</h4>
            <div className="tool-list">
              <div className="tool-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="tool-logo" />
                <span className="tool-label">Figma</span>
              </div>
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
            {[
              { id: 'academix', title: 'Academix', desc: 'A comprehensive academic management system designed to streamline university administrative processes.' },
              { id: 'cuyperpus', title: 'Cuyperpus', desc: 'A modern library management application enabling efficient book tracking and member reservations.' },
              { id: 'dashboard-parking', title: 'Dashboard Parking', desc: 'Real-time parking management dashboard providing live occupancy metrics and revenue tracking.' }
            ].map((item, index) => (
              <React.Fragment key={`left-${index}`}>
                <article className="text-article">
                  <h4 className="small-headline">
                    <a href="#" className="headline-link" onClick={(e) => handleCardClick(e, item.id)}>
                      {item.title}
                    </a>
                  </h4>
                  <p className="snippet">{item.desc}</p>
                  <span className="read-more-text" onClick={(e) => handleCardClick(e, item.id)} style={{ cursor: 'pointer' }}>Read More &rarr;</span>
                </article>
                {index < 2 && <div className="article-divider"></div>}
              </React.Fragment>
            ))}
          </div>

          <div className="web-col-center">
            <article className="featured-web-article">
              <img
                src="/images/projects/web/paudinsani/dashboardadmin.jpg"
                alt="Paudinsani Admin Dashboard"
                className="featured-image-slot"
                style={{ width: '100%', height: 'auto', aspectRatio: 'auto' }}
              />
              <h3 className="featured-headline">
                <a href="#" className="headline-link" onClick={(e) => handleCardClick(e, 'paudinsani')}>
                  Paudinsani Management System Revolutionizes Early Education Administration
                </a>
              </h3>
              <p className="featured-summary">
                An integrated administrative dashboard built to manage student records, financial operations, and daily attendance. The system significantly reduces manual paperwork while providing school administrators with clear, actionable data insights.
              </p>
            </article>
          </div>

          <div className="web-col-side side-right">
            {[
              { id: 'kaizen-db', title: 'Kaizen DB Engine', desc: 'A lightweight, highly optimized database engine built for fast, embedded read-heavy workloads.' },
              { id: 'sepatuku', title: 'Sepatuku', desc: 'A responsive e-commerce storefront for a sneaker brand with integrated payment gateways.' },
              { id: 'tixgo-web', title: 'Tixgo Web', desc: 'A scalable online ticketing platform handling high-concurrency event bookings seamlessly.' }
            ].map((item, index) => (
              <React.Fragment key={`right-${index}`}>
                <article className="text-article">
                  <h4 className="small-headline">
                    <a href="#" className="headline-link" onClick={(e) => handleCardClick(e, item.id)}>
                      {item.title}
                    </a>
                  </h4>
                  <p className="snippet">{item.desc}</p>
                  <span className="read-more-text" onClick={(e) => handleCardClick(e, item.id)} style={{ cursor: 'pointer' }}>Read More &rarr;</span>
                </article>
                {index < 2 && <div className="article-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
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
          {[
            { id: 'bpsrw', title: 'BPS RW Community Management App', meta: 'Flutter • Mobile Framework', img: 'bpsrw/splash.jpg' },
            { id: 'espj', title: 'eSPJ Financial Reporting Utility', meta: 'Flutter • Enterprise System', img: 'espj/splash.jpg' },
            { id: 'eujiemisi', title: 'e-Uji Emisi Vehicle Tracking', meta: 'Flutter • Environmental Data', img: 'eujiemisi/home.jpg' },
            { id: 'mysimplelocation', title: 'My Simple Location Geo-Tagging', meta: 'Flutter • Google Maps API', img: 'mysimplelocation/getlocation.jpg' },
            { id: 'tixgomobile', title: 'TixGo Mobile Event Ticketing', meta: 'Flutter • RESTful API Integration', img: 'tixgomobile/category.jpg' }
          ].map((project) => (
            <article className="mobile-project-card" onClick={(e) => handleCardClick(e, project.id)} key={project.id}>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <img
                  src={`/images/projects/mobile/${project.img}`}
                  alt={project.title}
                  className="mobile-image-slot"
                  style={{ objectFit: 'cover' }}
                  draggable={false}
                />
              </div>
              <h4 className="mobile-headline">{project.title}</h4>
              <div className="mobile-meta">{project.meta}</div>
            </article>
          ))}
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
