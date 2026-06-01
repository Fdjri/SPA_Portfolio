import React from 'react';
import './Classifieds.css';

export default function Classifieds() {
  return (
    <div className="classifieds-section">
      <header className="classifieds-header">
        <h2>Classifieds</h2>
        <div className="divider-thick"></div>
      </header>
      
      <div className="classifieds-grid">
        <div className="classified-ad contact-form-ad">
          <div className="ad-header">HELP WANTED</div>
          <p className="ad-body text-justify">
            SEEKING visionary projects and forward-thinking teams. Must value clean code, modern architecture, and elegant design. Will bring expertise in React, Next.js, and creative problem-solving.
          </p>
          
          <form className="vintage-form">
            <div className="form-group">
              <label htmlFor="name">NAME / ORGANIZATION:</label>
              <input type="text" id="name" name="name" className="vintage-input" placeholder="Enter name..." />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">TELEGRAPH / EMAIL:</label>
              <input type="email" id="email" name="email" className="vintage-input" placeholder="Enter address..." />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">DISPATCH (MESSAGE):</label>
              <textarea id="message" name="message" rows={4} className="vintage-input" placeholder="Write your message here..."></textarea>
            </div>
            
            <button type="button" className="vintage-button">SEND DISPATCH</button>
          </form>
        </div>
        
        <div className="classified-ad">
          <div className="ad-header">NOTICES & ANNOUNCEMENTS</div>
          <ul className="notices-list">
            <li>
              <strong>GITHUB REPOSITORY</strong> - An extensive collection of open-source contributions and private projects available for review. 
              <br/><a href="#">github.com/aji-portfolio</a>
            </li>
            <li>
              <strong>LINKEDIN PROFILE</strong> - Professional history, endorsements, and educational background documented here.
              <br/><a href="#">linkedin.com/in/aji-portfolio</a>
            </li>
            <li>
              <strong>TWITTER / X</strong> - Daily musings on web development, UI/UX design, and technology trends.
              <br/><a href="#">@aji_dev</a>
            </li>
          </ul>
        </div>
        
        <div className="classified-ad small-ad">
          <div className="ad-header">FOR HIRE</div>
          <p className="ad-body text-justify">
            Dedicated engineer ready to bring your ideas to life. Specialized in performant web applications. Rates available upon request. Contact via the form on the left.
          </p>
        </div>
        
        <div className="classified-ad small-ad">
          <div className="ad-header">LOST & FOUND</div>
          <p className="ad-body text-justify">
            FOUND: One passion for pixel-perfect design. Lost in the world of backend algorithms, now fully recovered and integrated into full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
}
