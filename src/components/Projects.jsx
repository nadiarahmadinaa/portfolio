import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaMicrochip, FaDocker, FaGitlab } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiFlutter, SiArduino, SiKubernetes, SiReact, SiC, SiJavascript, SiSpringboot, SiPostgresql } from 'react-icons/si';

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 'rosojogja',
      title: 'RosoJogja',
      description: 'A cross-platform food ordering system to streamline restaurant, admin, and customer interactions. Developed for both web and mobile platforms.',
      image: '/project-rosojogja.png', 
      category: 'web',
      technologies: ['Django', 'Flutter', 'JavaScript', 'Tailwind CSS', 'Git'],
      icons: [<SiDjango key="django" />, <SiFlutter key="flutter" />, <SiTailwindcss key="tailwind" />,<FaGithub key="github" />],
      links: [
        {
          url: 'https://github.com/PBP-242-D11/roso-jogja',
          icon: <FaGithub />,
          label: 'GitHub'
        }
      ],
      featured: true,
      award: 'Top Project Award (Out of 80+ Teams)'
    },
    {
      id: 'rizzerve',
      title: 'RIZZerve',
      description: 'A web-based restaurant management system.',
      image: '/project-rosojogja.png', 
      category: 'web',
      technologies: ['Springboot', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Git', 'AWS EC2', 'ReactJS', 'Prometheus', 'Grafana'],
      icons: [<SiSpringboot key="springboot" />, <SiPostgresql key="postgresql" />, <FaDocker key="docker" />, <SiTailwindcss key="tailwind" />,<FaGithub key="github" />],
      links: [
        {
          url: 'https://github.com/orgs/Advprog2025-B08/repositories',
          icon: <FaGithub />,
          label: 'GitHub'
        }
      ],
      featured: true,
    },
    {
      id: 'kepepet-ewallet',
      title: 'Kepepet E-Wallet App',
      description: 'A secure e-wallet application, simulating connections with other multiservices such as bank.',
      image: '/project-kepepet.png',
      category: 'web',
      technologies: ['Django', 'ReactJS', 'Gitlab Workflows', 'Docker', 'Kubernetes', 'Rest API'],
      icons: [<SiDjango key="django" />, <SiReact key="react" />, <SiKubernetes key="kubernetes" />,<FaDocker key="docker" />,<FaGitlab key="gitlab" />],
      links: [
        {
          url: 'https://kelompok-19-kepepet-fe.pkpl.cs.ui.ac.id/',
          icon: <FaExternalLinkAlt />,
          label: 'Live Demo'
        }
      ],
      featured: true
    },
    {
      id: 'webinar-system',
      title: 'Webinar System',
      description: 'A webinar system capable of handling creating events, registration, attendance, and automatic certificate generation.',
      image: '/project-kepepet.png',
      category: 'web',
      technologies: ['Django', 'Javascript', 'Tailwind CSS', 'Github'],
      icons: [<SiDjango key="django" />, <SiJavascript key="javascript" />, <SiTailwindcss key="tailwind" />,<FaGithub key="github" />],
      links: [
        {
          url: 'https://github.com/nadiarahmadinaa/webinar-system-v2',
          icon: <FaGithub />,
          label: 'GitHub'
        }
      ],
      featured: true
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Monitoring Dashboard',
      description: 'A smart home dashboard implementing digital twin technology to monitor and control environmental conditions in real time.',
      image: '/project-digital-twin.png', 
      category: 'iot',
      technologies: ['Arduino', 'AVR ATmega', 'Microchip Studio', 'Python'],
      icons: [<SiArduino key="arduino" />, <FaPython key="python" />, <FaMicrochip key="microchip" />],
      links: [
      ],
      featured: true
    },
    {
      id: 'plant-monitoring-system',
      title: 'Plant Monitoring System',
      description: 'A fully functional plant monitoring system with sensors and actuators to keep the balance in moisture and temperature.',
      image: '/project-digital-twin.png', 
      category: 'iot',
      technologies: ['Arduino', 'C'],
      icons: [<SiArduino key="arduino" />, <FaMicrochip key="microchip" />,<SiC key="c" />],
      links: [
        {
          url: 'https://www.researchgate.net/publication/370046164_Designing_Plant_Monitoring_System_Using_Arduino',
          icon: <FaExternalLinkAlt />,
          label: 'Research Paper'
        }
      ],
      featured: true
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
        threshold: 0.2,
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
    <section id="projects" ref={sectionRef} className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className={`projects-filter ${visible ? 'visible' : ''}`}>
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Web Dev
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'iot' ? 'active' : ''}`}
            onClick={() => setActiveCategory('iot')}
          >
            IoT
          </button>
        </div>
        
        <div className={`projects-grid ${visible ? 'visible' : ''}`}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <div className="project-placeholder">
                  {/* Will be replaced with actual image */}
                  <div className="project-category">{project.category.toUpperCase()}</div>
                </div>
                <div className="project-links">
                  {project.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.award && <div className="project-award">{project.award}</div>}
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <div className="tech-icons">
                    {project.icons.map((icon, index) => (
                      <span key={index} className="tech-icon">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`projects-cta ${visible ? 'visible' : ''}`}>
          <a 
            href="https://github.com/nadiarahmadinaa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;