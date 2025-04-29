import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import TypewriterComponent from 'typewriter-effect';

const Hero = ({ setActiveSection }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToContact = () => {
    setActiveSection('contact');
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className={`hero-text ${visible ? 'visible' : ''}`}>
          <h4 className="hero-greeting mono">Hi there, I'm</h4>
          <h1 className="hero-name">Nadia Rahmadina Aristawati</h1>
          
          <div className="hero-title">
            <TypewriterComponent
              options={{
                strings: [
                  'Computer Science Student',
                  'Full-stack Developer',
                  'Cybersecurity Enthusiast',
                  'IoT Project Developer'
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: 'typewriter-text',
                cursorClassName: 'typewriter-cursor'
              }}
            />
          </div>

          <p className="hero-description">
            Building secure web applications and solving complex problems with a passion for cybersecurity, 
            web development, and IoT systems.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a 
              href="/Nadia_Rahmadina_Resume.pdf" 
              className="btn btn-outline" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com/nadiarahmadinaa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/nadiarahmadinaa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="mailto:nadiarahmadinaaristawati@gmail.com" 
              className="social-link"
              aria-label="Email Address"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className={`hero-image ${visible ? 'visible' : ''}`}>
          <div className="pattern-bg"></div>
          <div className="tech-nodes">
            <div className="node node-1">Python</div>
            <div className="node node-2">Django</div>
            <div className="node node-3">React</div>
            <div className="node node-4">CTF</div>
            <div className="node node-5">IoT</div>
            <div className="node node-6">Java</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;