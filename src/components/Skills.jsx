import { useState, useEffect, useRef } from 'react';
import { 
  FaPython, FaJava, FaCode, FaServer, FaDatabase, FaLaptopCode, 
  FaTools, FaShieldAlt, FaMicrochip, FaStar, FaPhp
} from 'react-icons/fa';
import { 
  SiDjango, SiReact, SiTailwindcss, SiPostgresql, SiDocker, 
  SiGit, SiJavascript, SiFlutter, SiArduino
} from 'react-icons/si';

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { 
          name: 'Python', 
          proficiency: 'Advanced', 
          icon: <FaPython />, 
          description: 'Used for web backend development with Django, data analysis, and automation scripts.',
          projects: ['RosoJogja Backend', 'CTF Challenges', 'Jakarta Smart City Project', 'Kepepet E-Wallet Backend']
        },
        { 
          name: 'Java', 
          proficiency: 'Intermediate', 
          icon: <FaJava />, 
          description: 'Used for object-oriented programming and application development.',
          projects: ['Academic Projects']
        },
        { 
          name: 'JavaScript', 
          proficiency: 'Intermediate', 
          icon: <SiJavascript />, 
          description: 'Used for frontend development with React and interactive web features.',
          projects: ['RosoJogja Frontend', 'Portfolio Website']
        },
        { 
          name: 'C', 
          proficiency: 'Basic', 
          icon: <FaCode />, 
          description: 'Used for low-level programming and system operations.',
          projects: ['Arduino & AVR Projects']
        },
        { 
          name: 'PHP', 
          proficiency: 'Basic', 
          icon: <FaPhp />, 
          description: 'Used for Bitrix24 customization.',
          projects: ['Bitrix24 Projects']
        }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FaLaptopCode />,
      skills: [
        { 
          name: 'ReactJS', 
          proficiency: 'Intermediate', 
          icon: <SiReact />, 
          description: 'Used for building dynamic and responsive user interfaces.',
          projects: ['Portfolio Website', 'Kepepet E-Wallet Frontend']
        },
        { 
          name: 'Tailwind CSS', 
          proficiency: 'Intermediate', 
          icon: <SiTailwindcss />, 
          description: 'Used for modern, utility-first styling and responsive design.',
          projects: ['RosoJogja Web Interface', 'Jakarta Smart City Project']
        },
        { 
          name: 'Flutter', 
          proficiency: 'Intermediate', 
          icon: <SiFlutter />, 
          description: 'Used for cross-platform mobile app development.',
          projects: ['RosoJogja Mobile App']
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <FaServer />,
      skills: [
        { 
          name: 'Django', 
          proficiency: 'Advanced', 
          icon: <SiDjango />, 
          description: 'Used for building robust web backends with Python.',
          projects: ['RosoJogja', 'Jakarta Smart City Webinar System', 'Kepepet E-Wallet Backend']
        },
        { 
          name: 'PostgreSQL', 
          proficiency: 'Intermediate', 
          icon: <SiPostgresql />, 
          description: 'Used for relational database management.',
          projects: ['Kepepet E-Wallet Backend']
        }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: <FaTools />,
      skills: [
        { 
          name: 'Git', 
          proficiency: 'Advanced', 
          icon: <SiGit />, 
          description: 'Used for version control and collaborative development.',
          projects: ['All Projects']
        },
        { 
          name: 'Docker', 
          proficiency: 'Intermediate', 
          icon: <SiDocker />, 
          description: 'Used for containerization and deployment.',
          projects: ['Kepepet E-Wallet App']
        }
      ]
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      icon: <FaShieldAlt />,
      skills: [
        { 
          name: 'CTF Competitions', 
          proficiency: 'Intermediate', 
          icon: <FaShieldAlt />, 
          description: 'Experience in cybersecurity competitions and creating challenges.',
          projects: ['COMPFEST 16 CTF']
        },
        { 
          name: 'Digital Forensics', 
          proficiency: 'Intermediate', 
          icon: <FaShieldAlt />, 
          description: 'Experience in memory forensics and steganography.',
          projects: ['CTF Challenges Development']
        },
        { 
          name: 'Web Exploitation', 
          proficiency: 'Intermediate', 
          icon: <FaShieldAlt />, 
          description: 'Knowledge of web security vulnerabilities and countermeasures.',
          projects: ['CTF Challenges']
        }
      ]
    },
    {
      id: 'iot',
      title: 'IoT & Embedded',
      icon: <FaMicrochip />,
      skills: [
        { 
          name: 'Arduino', 
          proficiency: 'Intermediate', 
          icon: <SiArduino />, 
          description: 'Used for IoT prototyping and physical computing projects.',
          projects: ['Digital Twin Dashboard', 'Plant Monitoring System']
        },
        { 
          name: 'AVR Microcontrollers', 
          proficiency: 'Intermediate', 
          icon: <FaMicrochip />, 
          description: 'Experience with AVR ATmega for embedded systems.',
          projects: ['Digital Twin Dashboard','Smart Home System']
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setActiveSkill(skillCategories[0].id);
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

  const activeCategory = skillCategories.find(cat => cat.id === activeSkill);

  const renderProficiencyStars = (proficiency) => {
    const proficiencyMap = {
      'Advanced': 3,
      'Intermediate': 2,
      'Basic': 1
    };
    
    const starsCount = proficiencyMap[proficiency] || 2;
    const stars = [];
    
    for (let i = 0; i < 3; i++) {
      stars.push(
        <FaStar 
          key={i} 
          className={`proficiency-star ${i < starsCount ? 'filled' : 'empty'}`} 
        />
      );
    }
    
    return (
      <div className="proficiency-stars">
        {stars}
        <span className="proficiency-text">{proficiency}</span>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className={`skills-content ${visible ? 'visible' : ''}`}>
          <div className="skills-categories">
            {skillCategories.map((category) => (
              <div 
                key={category.id}
                className={`skill-category ${activeSkill === category.id ? 'active' : ''}`}
                onClick={() => setActiveSkill(category.id)}
              >
                <div className="skill-category-icon">{category.icon}</div>
                <div className="skill-category-name">{category.title}</div>
              </div>
            ))}
          </div>
          
          <div className="skills-details">
            {activeCategory && (
              <div className="skills-detail-content">
                <h3 className="skills-detail-title">
                  <span className="skill-icon">{activeCategory.icon}</span>
                  {activeCategory.title}
                </h3>
                
                <div className="skill-cards">
                  {activeCategory.skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-card-header">
                        <div className="skill-icon-large">{skill.icon}</div>
                        <h4 className="skill-name">{skill.name}</h4>
                        {renderProficiencyStars(skill.proficiency)}
                      </div>
                      
                      <p className="skill-description">{skill.description}</p>
                      
                      {skill.projects?.length > 0 && (
                        <div className="skill-projects">
                          <h5>Projects:</h5>
                          <div className="project-tags">
                            {skill.projects.map((project, idx) => (
                              <span key={idx} className="project-tag">{project}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className={`languages-section ${visible ? 'visible' : ''}`}>
          <h3 className="languages-title">Languages</h3>
          <div className="languages-container">
            <div className="language-card">
              <div className="language-flag">🇮🇩</div>
              <div className="language-details">
                <h4 className="language-name">Indonesian</h4>
                <div className="language-level">Native</div>
              </div>
            </div>
            
            <div className="language-card">
              <div className="language-flag">🇬🇧</div>
              <div className="language-details">
                <h4 className="language-name">English</h4>
                <div className="language-level">Fluent</div>
                <div className="language-scores">
                  <span className="language-score">TOEFL ITP: 617/677</span>
                  <span className="language-score">Duolingo: 150/160</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;