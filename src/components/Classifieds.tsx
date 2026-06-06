'use client';

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Classifieds.css';
import { TypewriterText, SplitLineText } from './AnimatedText';

type GigType = 'react-rookie' | 'laravel-flutter-pro';

export default function Classifieds() {
  const [activeGigType, setActiveGigType] = useState<GigType>('react-rookie');
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formElementData = new FormData(formRef.current);
    const namaVal = formElementData.get('nama') as string;
    const emailVal = formElementData.get('email') as string;
    const messageVal = formElementData.get('isi_email') as string;

    setIsSending(true);

    const templateParams = {
      from_name: namaVal,
      from_email: emailVal,
      message: messageVal
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          setIsSending(false);
          setIsSuccess(true);
          formRef.current?.reset();
          
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000);
        },
        (error) => {
          setIsSending(false);
          alert('Failed to dispatch. The telegraph lines are down.');
        }
      );
  };

  return (
    <div className="classifieds-section" style={{ background: 'transparent' }}>
      <header className="classifieds-header">
        <TypewriterText as="h2" text="Classifieds" />
        <div className="divider-thick"></div>
      </header>
      
      <div className="classifieds-grid" style={{ background: 'transparent' }}>
        <div 
          className="classified-ad contact-form-ad"
          onClick={() => setActiveGigType('react-rookie')}
        >
          <TypewriterText as="div" className="ad-header" text="HELP WANTED" />
          <SplitLineText 
            className="ad-body text-justify" 
            style={{ marginBottom: '0.5rem' }} 
            text="FRONT-END APPRENTICESHIP & JUNIOR ROLES SOUGHT — Ambitious final-year Information Technology student actively seeking high-velocity front-end exposure to solidify production-level competencies in React and the Next.js paradigm. Currently transitioning core architectural skills from battle-tested monolithic systems (Laravel) and cross-platform mobile engineering (Flutter) into complex component state management. Looking to join engineering squads that value clean programmatic logic over library gatekeeping. Ready to deploy, eager to break things, and built to scale." 
          />
          
          <div style={{
            marginTop: 'auto',
            padding: '1.25rem',
            border: '2px dashed #121212',
            backgroundColor: '#ffffff',
            position: 'relative'
          }}>
            <div style={{
              fontStyle: 'italic',
              fontSize: '0.75rem',
              color: '#333',
              marginBottom: '1rem',
              textAlign: 'center',
              letterSpacing: '0.5px'
            }}>
              ✂ Cut along the dotted line to dispatch your inquiry
            </div>

            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0', fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#121212', fontSize: '0.9rem' }}>
                ✓ DISPATCH RECEIVED. WE WILL SOON COMPLY.
              </div>
            ) : (
              <form className="vintage-form" ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <input 
                  type="text" 
                  name="nama" 
                  className="vintage-input" 
                  placeholder="Your Name / Organization" 
                  required 
                  style={{ border: '1px solid #121212', padding: '0.65rem', background: 'transparent', fontFamily: 'var(--font-sans)', color: '#121212', fontSize: '0.85rem' }}
                />

                <input 
                  type="email" 
                  name="email" 
                  className="vintage-input" 
                  placeholder="your.email@agency.com" 
                  required 
                  style={{ border: '1px solid #121212', padding: '0.65rem', background: 'transparent', fontFamily: 'var(--font-sans)', color: '#121212', fontSize: '0.85rem' }}
                />
                
                <textarea 
                  name="isi_email" 
                  rows={4} 
                  className="vintage-input" 
                  placeholder="Write your gig offer or project inquiry here..." 
                  required 
                  style={{ border: '1px solid #121212', padding: '0.65rem', background: 'transparent', fontFamily: 'var(--font-sans)', color: '#121212', fontSize: '0.85rem', resize: 'vertical' }}
                ></textarea>
                
                <button 
                  type="submit" 
                  disabled={isSending}
                  style={{
                    background: '#121212',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.85rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    cursor: isSending ? 'not-allowed' : 'pointer',
                    opacity: isSending ? 0.7 : 1,
                    transition: 'opacity 0.2s ease',
                    marginTop: '0.25rem'
                  }}
                  onMouseEnter={(e) => { if (!isSending) e.currentTarget.style.opacity = '0.85'; }}
                  onMouseLeave={(e) => { if (!isSending) e.currentTarget.style.opacity = '1'; }}
                >
                  {isSending ? 'SENDING...' : 'DISPATCH INQUIRY'}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="classified-ad">
          <TypewriterText as="div" className="ad-header" text="NOTICES & ANNOUNCEMENTS" />
          <ul className="notices-list">
            <li>
              <strong>GITHUB ARCHIVE</strong> - Central index of open-source software, fullstack architectures, and production-ready mobile repos.
              <br/><a href="https://github.com/Fdjri" target="_blank" rel="noopener noreferrer">github.com/Fdjri</a>
            </li>
            <li>
              <strong>LINKEDIN NETWORK</strong> - Formal engineering identity, academic milestones at Universitas Brawijaya, and certified core competencies.
              <br/><a href="https://www.linkedin.com/in/sholihul-fadjri-triwibowo-220480289/?locale=en_US" target="_blank" rel="noopener noreferrer">linkedin.com/in/sholihul-fadjri</a>
            </li>
            <li>
              <strong>INSTAGRAM DISPATCH</strong> - Direct social node for casual updates, instant peer networking, and immediate DM inquiries.
              <br/><a href="https://www.instagram.com/fdjritw/" target="_blank" rel="noopener noreferrer">instagram.com/fdjritw</a>
            </li>
            <li>
              <strong>YOUTUBE BROADCAST</strong> - Visual video documentation tracking technical project breakdowns and my software engineering journey.
              <br/><a href="https://www.youtube.com/@fdjritw" target="_blank" rel="noopener noreferrer">youtube.com/@fdjritw</a>
            </li>
          </ul>
        </div>
        
        <div className="classified-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div 
            className="classified-ad small-ad" 
            style={{ height: 'fit-content', cursor: 'pointer' }}
            onClick={() => setActiveGigType('laravel-flutter-pro')}
          >
            <TypewriterText as="div" className="ad-header" text="FOR HIRE" />
            <SplitLineText 
              className="ad-body text-justify" 
              style={{ marginBottom: 0 }} 
              text="PRODUCTION-READY LARAVEL/FLUTTER DEV FOR HIRE — Relational database mastery, clean state architectures. Fast deployment guaranteed. No junior hand-holding required." 
            />
          </div>
          
          <div className="classified-ad small-ad" style={{ height: 'fit-content' }}>
            <TypewriterText as="div" className="ad-header" text="LOST & FOUND" />
            <SplitLineText 
              className="ad-body text-justify" 
              style={{ marginBottom: 0 }} 
              text="FOUND: One passion for pixel-perfect design. Lost in the world of backend algorithms, now fully recovered and integrated into full-stack development." 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
