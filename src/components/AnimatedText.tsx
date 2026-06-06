'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register plugins early
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 1. TYPEWRITER EFFECT (For uppercase section headers)
export const TypewriterText = ({ text, className, as: Component = 'span', ...props }: { text: string, className?: string, as?: any, [key: string]: any }) => {
  const containerRef = useRef(null);
  const chars = text.split('');

  useGSAP(() => {
    gsap.fromTo('.tw-char',
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.05,
        stagger: 0.03,
        ease: "steps(1)", // Snaps character visibility like a typewriter
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <Component className={className} aria-label={text} ref={containerRef} {...props}>
      {chars.map((char, i) => (
        <span key={i} className="tw-char" aria-hidden="true" style={{ visibility: 'hidden' }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Component>
  );
};

// 2. INK-BLEED EFFECT (For major article headlines)
export const InkBleedText = ({ text, className, as: Component = 'span', ...props }: { text: string, className?: string, as?: any, [key: string]: any }) => {
  const containerRef = useRef(null);
  const words = text.split(" ");

  useGSAP(() => {
    gsap.fromTo('.ink-word',
      { filter: 'blur(10px)', opacity: 0 },
      {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 0.8,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <Component className={className} aria-label={text} ref={containerRef} {...props}>
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <span className="ink-word" aria-hidden="true" style={{ display: 'inline-block', willChange: 'filter, opacity', filter: 'blur(10px)', opacity: 0 }}>
            {word}
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </Component>
  );
};

// 3. SPLIT-LINE TEXT REVEAL (For body paragraphs)
export const SplitLineText = ({ text, className, as: Component = 'p', ...props }: { text: string, className?: string, as?: any, [key: string]: any }) => {
  const containerRef = useRef(null);
  const words = text.split(" ");

  useGSAP(() => {
    gsap.fromTo('.split-word-inner',
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.015,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <Component className={className} aria-label={text} ref={containerRef} {...props}>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <span className="split-word-inner" style={{ display: 'inline-block', willChange: 'transform, opacity', transform: 'translateY(15px)', opacity: 0 }}>
            {word}
          </span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Component>
  );
};
