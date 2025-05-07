import { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedinIn, FaGithub, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className={`contact-content ${visible ? 'visible' : ''}`}>
          <div className="contact-card-container">
            <div className="contact-card">
              <div className="contact-header">
                <h3 className="contact-title">Let's Connect</h3>
                <p className="contact-text">
                  Feel free to reach out if you're looking for a developer/pentester, have a question, or just want to connect.
                </p>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon-container">
                    <FaMapMarkerAlt className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <h4>Location</h4>
                    <p>Jakarta, Indonesia</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon-container">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:nadiarahmadinaaristawati@gmail.com" className="contact-link">
                        nadiarahmadinaaristawati@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon-container">
                    <FaGithub className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <h4>GitHub</h4>
                    <p>
                      <a 
                        href="https://github.com/nadiarahmadinaa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        github.com/nadiarahmadinaa <FaArrowRight className="link-arrow" />
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon-container">
                    <FaLinkedinIn className="contact-icon" />
                  </div>
                  <div className="contact-info">
                    <h4>LinkedIn</h4>
                    <p>
                      <a 
                        href="https://linkedin.com/in/nadiarahmadinaa" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="contact-link"
                      >
                        linkedin.com/in/nadiarahmadinaa <FaArrowRight className="link-arrow" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="contact-footer">
                <div className="contact-social">
                  <a 
                    href="https://github.com/nadiarahmadinaa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="social-btn"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://linkedin.com/in/nadiarahmadinaa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="social-btn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a 
                    href="mailto:nadiarahmadinaaristawati@gmail.com"
                    aria-label="Email"
                    className="social-btn"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;