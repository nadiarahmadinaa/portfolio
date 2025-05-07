import { useState, useEffect, useRef } from 'react';
import { FaCode, FaShieldAlt, FaMicrochip } from 'react-icons/fa';

const About = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className={`about-content ${visible ? 'visible' : ''}`}>
          <div className="about-image">
          <div className="image-container">
            <div className="image-frame"></div>
            <div className="image-placeholder">
              <img 
                src="/images/personal-photo.png" 
                alt="Nadia Rahmadina" 
                className="profile-image"
              />
              <div className="image-overlay">
                <div className="code-bg">&lt;/&gt;</div>
              </div>
            </div>
          </div>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-value">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-value">3+</span>
                <span className="stat-label">Years Coding</span>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <p>
              I'm a self-driven Computer Science student at the University of Indonesia with a strong foundation in software engineering and cybersecurity.
            </p>
            
            <p>
              My journey in technology began with a passion for solving complex problems, which has led me to explore diverse areas from full-stack web development to IoT projects and cybersecurity challenges.
            </p>
            
            <div className="interests">
              <h3>My Interests</h3>
              <div className="interests-container">
                <div className="interest-card">
                  <div className="interest-icon">
                    <FaCode />
                  </div>
                  <h4>Web Development</h4>
                  <p>Building secure and responsive web applications with modern frameworks</p>
                </div>
                
                <div className="interest-card">
                  <div className="interest-icon">
                    <FaShieldAlt />
                  </div>
                  <h4>Cybersecurity</h4>
                  <p>Participating in CTF competitions and exploring digital forensics</p>
                </div>
                
                <div className="interest-card">
                  <div className="interest-icon">
                    <FaMicrochip />
                  </div>
                  <h4>IoT Systems</h4>
                  <p>Creating smart solutions with Arduino and embedded systems</p>
                </div>
              </div>
            </div>
            
            <div className="education">
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-year">2023 - Present</div>
                <div className="education-details">
                  <h4>Bachelor of Computer Science</h4>
                  <p>University of Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;