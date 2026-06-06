'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './NewsGrid.css';
import FeaturedCarousel from './FeaturedCarousel';
import BlueprintCarousel from './BlueprintCarousel';
import { TypewriterText, InkBleedText, SplitLineText } from './AnimatedText';

import { ProjectData, LOCAL_PROJECTS } from '../data/projectsData';

export default function NewsGrid() {

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

  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent, projectId?: string) => {
    // If the user was dragging the slider, prevent the click from navigating
    if (hasDragged) {
      e.preventDefault();
      return;
    }
    // Otherwise, trigger Next.js App Router navigation
    e.preventDefault();
    if (projectId && LOCAL_PROJECTS[projectId]) {
      router.push(`/projects/${projectId}`);
    } else {
      // Fallback for elements not fully mapped yet
      alert('Project detail implementation is ready. Please map this specific project in LOCAL_PROJECTS array.');
    }
  };

  return (
    <div className="news-grid-section">
      <header className="section-header">
        <TypewriterText as="h2" text="Business & Technology" />
        <div className="divider-thick"></div>
      </header>

      <section className="machinery-registry">
        <InkBleedText as="h3" className="registry-title" text="Industrial Machinery & Equipment" />
        <SplitLineText
          className="registry-description"
          text="A comprehensive registry of heavy machinery and digital instruments currently deployed for the architecture of robust software infrastructure."
        />

        <div className="registry-grid">
          <div className="registry-category">
            <InkBleedText as="h4" className="category-name" text="Mobile Frameworks" />
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
            <InkBleedText as="h4" className="category-name" text="Web & Backend Systems" />
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
            <InkBleedText as="h4" className="category-name" text="Database Engines" />
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
            <InkBleedText as="h4" className="category-name" text="Design & Interfaces" />
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
          <TypewriterText as="h3" className="category-title" text="DIGITAL ARCHITECTURE & WEB SYSTEMS" />
        </div>

        <div className="web-systems-grid">
          <div className="web-col-side side-left">
            {[
              { id: 'academix', shortDesc: 'A comprehensive Object-Oriented Java academic management system designed to streamline university administrative processes and dynamic KRS registries.' },
              { id: 'cuyperpus', shortDesc: 'A modern Native PHP library management application enabling efficient book tracking, automated fine calculations, and secure member reservations.' },
              { id: 'dashboard-parking', shortDesc: 'Real-time automated IoT parking management dashboard providing live occupancy telemetry metrics and spatial oversight.' }
            ].map((item, index) => {
              const project = LOCAL_PROJECTS[item.id];
              return (
                <React.Fragment key={`left-${index}`}>
                  <article className="text-article">
                    <h4 className="small-headline">
                      <InkBleedText
                        as="a"
                        href="#"
                        className="headline-link"
                        onClick={(e: any) => handleCardClick(e, item.id)}
                        text={project?.title || item.id}
                      />
                    </h4>
                    {project?.framework && (
                      <div style={{ fontSize: '0.8rem', color: '#555', fontStyle: 'italic', marginBottom: '8px' }}>
                        {project.framework}
                      </div>
                    )}
                    <SplitLineText className="snippet" text={item.shortDesc} />
                    <span className="read-more-text" onClick={(e) => handleCardClick(e, item.id)} style={{ cursor: 'pointer' }}>Read More &rarr;</span>
                  </article>
                  {index < 2 && <div className="article-divider"></div>}
                </React.Fragment>
              );
            })}
          </div>

          <div className="web-col-center">
            <article className="featured-web-article" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <img
                src={LOCAL_PROJECTS['paudinsani']?.images[2] || "/images/projects/web/paudinsani/dashboardadmin.jpg"}
                alt="Paudinsani Admin Dashboard"
                className="featured-image-slot"
                style={{ width: '100%', height: 'auto', aspectRatio: 'auto' }}
              />
              <h3 className="featured-headline">
                <InkBleedText
                  as="a"
                  href="#"
                  className="headline-link"
                  onClick={(e: any) => handleCardClick(e, 'paudinsani')}
                  text={LOCAL_PROJECTS['paudinsani']?.title || 'PAUD INSANI Management System'}
                />
              </h3>
              {LOCAL_PROJECTS['paudinsani']?.framework && (
                <div style={{ fontSize: '0.9rem', color: '#555', fontStyle: 'italic', marginBottom: '12px' }}>
                  {LOCAL_PROJECTS['paudinsani'].framework}
                </div>
              )}
              <SplitLineText
                className="featured-summary"
                style={{ flexGrow: 1 }}
                text="An integrated administrative dashboard built to manage student records, financial tuition operations, and daily attendance. The system significantly reduces manual paperwork while providing school administrators with clear, actionable data insights backed by a robust MySQL relational database."
              />

              <div style={{ marginTop: 'auto' }}>
                <div className="border border-dashed border-[#121212] rounded-none bg-white py-3 px-4 flex flex-wrap gap-4 justify-between" style={{ margin: '24px 0' }}>
                  <div className="text-xs tracking-wider font-mono text-[#121212]">
                    <strong>DATA 01:</strong> 100+ Active Students
                  </div>
                  <div className="text-xs tracking-wider font-mono text-[#121212]">
                    <strong>DATA 02:</strong> 85% Paperwork Reduction
                  </div>
                  <div className="text-xs tracking-wider font-mono text-[#121212]">
                    <strong>DATA 03:</strong> Database: MySQL
                  </div>
                </div>

                <div className="border-t-2 border-b-2 border-[#121212] py-4" style={{ marginBottom: '24px' }}>
                  <p className="text-xl md:text-2xl italic font-serif text-center text-[#121212] leading-relaxed">
                    "A revolutionary monolithic leap forward in streamlining early childhood educational logistics and automating municipal compliance data."
                  </p>
                </div>

                <div className="text-center" style={{ marginTop: '24px', marginBottom: '8px' }}>
                  <Link
                    href="/projects/paudinsani"
                    style={{
                      fontFamily: 'var(--font-serif), serif',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: '#121212',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
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
            </article>
          </div>

          <div className="web-col-side side-right">
            {[
              { id: 'kaizen-db', shortDesc: 'A high-performance Laravel tracking ecosystem and optimized MySQL relational schema built for logging fast, read-heavy sales logistics.' },
              { id: 'sepatuku', shortDesc: 'A responsive Laravel e-commerce storefront for a sneaker brand featuring complex inventory mapping and integrated checkout gateways.' },
              { id: 'tixgo-web', shortDesc: 'A scalable, highly concurrent online ticketing platform orchestrating synchronous data flow across cinema, travel, and hotel reservations.' }
            ].map((item, index) => {
              const project = LOCAL_PROJECTS[item.id];
              return (
                <React.Fragment key={`right-${index}`}>
                  <article className="text-article">
                    <h4 className="small-headline">
                      <InkBleedText
                        as="a"
                        href="#"
                        className="headline-link"
                        onClick={(e: any) => handleCardClick(e, item.id)}
                        text={project?.title || item.id}
                      />
                    </h4>
                    {project?.framework && (
                      <div style={{ fontSize: '0.8rem', color: '#555', fontStyle: 'italic', marginBottom: '8px' }}>
                        {project.framework}
                      </div>
                    )}
                    <SplitLineText className="snippet" text={item.shortDesc} />
                    <span className="read-more-text" onClick={(e) => handleCardClick(e, item.id)} style={{ cursor: 'pointer' }}>Read More &rarr;</span>
                  </article>
                  {index < 2 && <div className="article-divider"></div>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Mobile Apps Category */}
      <section className="category-section">
        <div className="category-header">
          <TypewriterText as="h3" className="category-title" text="MOBILE APPLICATION DISPATCHES" />
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
            { id: 'bpsrw', img: 'bpsrw/splash.jpg' },
            { id: 'espj', img: 'espj/splash.jpg' },
            { id: 'eujiemisi', img: 'eujiemisi/home.jpg' },
            { id: 'mysimplelocation', img: 'mysimplelocation/getlocation.jpg' },
            { id: 'tixgomobile', img: 'tixgomobile/category.jpg' }
          ].map((item) => {
            const project = LOCAL_PROJECTS[item.id];
            return (
              <article className="mobile-project-card" onClick={(e) => handleCardClick(e, item.id)} key={item.id}>
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <img
                    src={`/images/projects/mobile/${item.img}`}
                    alt={project?.title || item.id}
                    className="mobile-image-slot"
                    style={{ objectFit: 'cover' }}
                    draggable={false}
                  />
                </div>
                <InkBleedText as="h4" className="mobile-headline" text={project?.title || item.id} />
                <div className="mobile-meta">{project?.framework || 'Mobile Application'}</div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Design & Prototypes Category */}
      <section className="category-section">
        <div className="category-header">
          <TypewriterText as="h3" className="category-title" text="INTERFACE BLUEPRINTS & DESIGN" />
        </div>

        <BlueprintCarousel />
      </section>
    </div>
  );
}
