'use client';
import React, { useState, useEffect } from 'react';
import './FrontPage.css';

interface GithubLanguage {
  name: string;
  percentage: number;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Dart: '#0175C2',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  PHP: '#777BB4',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#701516',
  Go: '#00ADD8',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Others: '#999999'
};

const getLangColor = (lang: string) => LANGUAGE_COLORS[lang] || '#121212';

export default function FrontPage() {
  const [languages, setLanguages] = useState<GithubLanguage[]>([]);

  const headlineText = "The Art of Modern Engineering: Balancing Robust Code and Intuitive Design.";
  const headlineWords = headlineText.split(" ");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const res = await fetch('/api/github-languages');
        if (!res.ok) throw new Error('Failed to fetch from GitHub API');
        const data = await res.json();
        setLanguages(data.languages || []);
      } catch (error) {
        console.error(error);
        // Fallback in case of API rate limit errors without a token
        setLanguages([
          { name: 'Dart', percentage: 45 },
          { name: 'JavaScript', percentage: 30 },
          { name: 'PHP', percentage: 15 },
          { name: 'SQL', percentage: 10 }
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchLanguages();
  }, []);

  return (
    <div className="front-page">
      <div className="headline-section">
        <h1 className="main-headline" aria-label={headlineText}>
          {headlineWords.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className="headline-word"
                aria-hidden="true"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {word}
              </span>
              {index < headlineWords.length - 1 ? ' ' : ''}
            </React.Fragment>
          ))}
        </h1>
      </div>
      
      <div className="divider-thin"></div>
      
      <div className="hero-grid">
        <div className="lead-intro text-justify">
          <div className="byline">By FADJRI PORTFOLIO <span>&bull;</span> Exclusive</div>
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
              {loading ? (
                <div className="github-bar skeleton-bar"></div>
              ) : (
                <div className="github-bar">
                  {languages.map(lang => (
                    <span 
                      key={lang.name}
                      className="bar-segment" 
                      style={{ 
                        width: `${lang.percentage}%`, 
                        backgroundColor: getLangColor(lang.name) 
                      }}
                      title={`${lang.name}: ${lang.percentage}%`}
                    ></span>
                  ))}
                </div>
              )}
            </div>
            
            <ul className="tech-legend">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <li key={i}>
                    <span className="legend-dot skeleton-dot"></span>
                    <span className="legend-label skeleton-text"></span>
                  </li>
                ))
              ) : (
                languages.map(lang => (
                  <li key={lang.name}>
                    <span 
                      className="legend-dot" 
                      style={{ backgroundColor: getLangColor(lang.name) }}
                    ></span>
                    <span className="legend-label">
                      {lang.name} <span className="legend-percent">{lang.percentage}%</span>
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
          <figcaption className="asset-caption text-justify">
            Fig. 1 &mdash; Live dynamic analysis of overall language distribution across all public repository metrics.
          </figcaption>
        </aside>
      </div>

      <div className="divider-double"></div>
    </div>
  );
}
