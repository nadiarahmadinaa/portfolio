import { useState, useEffect, useRef } from 'react';
import { FaBriefcase, FaUserGraduate, FaDesktop, FaLaptopCode, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('work');
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

  const workExperience = [
    {
      title: "IT Consultant",
      company: "Aurorasoft",
      duration: "July 2025 - Present",
      description: [
        "Customized Bitrix24 PHP backend to align with client-specific business processes and logic.",
        "Created and presented pitch decks to clients, securing buy-in and successful CRM adoption.",
        "Managed client communications and led end-to-end CRM implementation, including technical documentation and post-deployment support."
      ],
      icon: <FaBriefcase />
    },
    {
      title: "IT Project Intern",
      company: "PT Astra International Tbk",
      duration: "June - August 2025",
      description: [
        "Increased AI response precision by 30% through workflow enhancements and prompt optimization.",
        "Developed and maintained Selenium-based automated test suites for AI regression testing.",
        "Cleaned and organized Excel datasets to deliver accurate inputs for RAG-based AI systems."
      ],
      icon: <FaBriefcase />
    },
    {
      title: "Junior Software Developer",
      company: "Harbour Energy",
      duration: "June - August 2025",
      description: [
        "Designed UI/UX and developed responsive frontend for a Chemical Registry web platform.",
        "Implemented automated regression testing using Pytest and Selenium, integrated within CI/CD pipelines to ensure deployment reliability.",
        "Resolved bugs and developed features across infrastructure, backend, and frontend."
      ],
      icon: <FaBriefcase />
    },
    {
      title: "IT Intern",
      company: "Jakarta Smart City",
      duration: "June - August 2024",
      description: [
        "Developed a full-stack automation platform (Django & Tailwind) to streamline webinar logistics.",
        "Ensured secure authentication and accurate data synchronization across workflows."
      ],
      icon: <FaBriefcase />
    }
  ];
  const organizationExperience = [
    {
      title: "Lead of Network, Security, and Operating System Special Interest Group",
      company: "RISTEK",
      duration: "February 2025 - Present",
      description: [
        "Led technical deep-dives and projects in digital forensics, networking, and penetration testing.",
        "Created CTF tools and automated scripts for network analysis using Bash and Python.",
        "Mentored members on TCP/IP protocols, packet analysis, and system security."
      ],
      icon: <FaLaptopCode />
    },
    {
      title: "Scientific Committee of CTF (Capture The Flag) Competition",
      company: "COMPFEST 16",
      duration: "April 2024 - Present",
      description: [
        "Conducted workshop with 100+ attendees on PCAP analysis, digital forensics, and network traces.",
        "Designed digital forensics CTF challenges simulating real-world attacks involving memory dumps (Windows, Linux, Android), suspicious file transfers, and steganography."
      ],
      icon: <FaDesktop />
    }
  ];

  const achievements = [
    {
      title: "Runner-up",
      company: "World Innovations Day Hackathon",
      duration: "May 2021",
      description: [
        "Led a team of 5 in developing and pitching a web-based solution in accordance to SDG #3 (Good Health and Well-being)."
      ],
      icon: <FaTrophy />
    },
    {
      title: "Semifinalist",
      company: "Indonesian Digital Tribe Hackathon",
      duration: "May 2022",
      description: [
        "Led a team of 4 to construct an app and IoT-based start-up idea in the agricultural sector, benefiting Indonesian farmers."
      ],
      icon: <FaTrophy />
    },
    {
      title: "Research Presenter",
      company: "2nd International Conference on Research and Development",
      duration: "November 2022",
      description: [
        "Co-wrote and presented a research paper: \"Designing Plant Monitoring System using Arduino.\""
      ],
      icon: <FaDesktop />
    }
  ];

  const education = [
    {
      title: "Bachelor of Computer Science",
      company: "University of Indonesia",
      duration: "August 2023 - Present (Expected 2027)",
      description: [
        "Current GPA: 3.95 / 4.00",
        "Focusing on Full-stack Web Development, Cybersecurity, and Internet of Things (IoT)",
        "Active in RISTEK (student organization for technology and computer science)"
      ],
      icon: <FaUserGraduate />
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className={`experience-content ${visible ? 'visible' : ''}`}>
          <div className="experience-tabs">
            <button 
              className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              <FaBriefcase /> Work Experience
            </button>
            <button 
              className={`tab-btn ${activeTab === 'organization' ? 'active' : ''}`}
              onClick={() => setActiveTab('organization')}
            >
              <FaUserGraduate /> Organization Experience
            </button>
            <button 
              className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              <FaTrophy /> Achievements
            </button>
          </div>
          
          <div className="experience-items">
            <div className={`tab-content ${activeTab === 'work' ? 'active' : ''}`}>
              <div className="timeline">
                {workExperience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-icon">{exp.icon}</div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.title}</h3>
                        <span className="company">{exp.company}</span>
                        <span className="duration">{exp.duration}</span>
                      </div>
                      <div className="timeline-body">
                        <ul>
                          {exp.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`tab-content ${activeTab === 'organization' ? 'active' : ''}`}>
              <div className="timeline">
                {organizationExperience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-icon">{exp.icon}</div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.title}</h3>
                        <span className="company">{exp.company}</span>
                        <span className="duration">{exp.duration}</span>
                      </div>
                      <div className="timeline-body">
                        <ul>
                          {exp.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`tab-content ${activeTab === 'achievements' ? 'active' : ''}`}>
              <div className="timeline">
                {achievements.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-icon">{exp.icon}</div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.title}</h3>
                        <span className="company">{exp.company}</span>
                        <span className="duration">{exp.duration}</span>
                      </div>
                      <div className="timeline-body">
                        <ul>
                          {exp.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;