import { useState, useEffect, useRef } from 'react';
import { FaBriefcase, FaUserGraduate, FaDesktop, FaLaptopCode } from 'react-icons/fa';

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
      title: "Lead of Network, Security, and Operating System Special Interest Group",
      company: "RISTEK",
      duration: "February 2025 - Present",
      description: [
        "Leading a student-led Special Interest Group (SIG) focused on network engineering, cybersecurity, and operating systems under RISTEK.",
        "Organizing internal classes and hands-on projects to deepen members' technical skills.",
        "Designing and managing practical labs on topics like digital forensics, system hardening, and penetration testing.",
        "Mentoring members on related competitions such as CTF (Capture the Flag)."
      ],
      icon: <FaLaptopCode />
    },
    {
      title: "Teaching Assistant of Introduction to Computer Organization",
      company: "University of Indonesia",
      duration: "January 2025 - Present",
      description: [
        "Guided 100+ students in mastering computer architecture, assembly programming, and hardware-software integration.",
        "Created supplemental materials and live tutorials that enhanced understanding of complex system design concepts.",
        "Provided personalized support that improved student performance and critical thinking in technical problem sets."
      ],
      icon: <FaUserGraduate />
    },
    {
      title: "IT Intern",
      company: "Jakarta Smart City",
      duration: "July - August 2024",
      description: [
        "Built and deployed a secure web application that automated webinar registration, attendance tracking, and certificate generation, improving operational efficiency.",
        "Increased data accuracy and reduced human error by implementing secure authentication and real-time validation features.",
        "Delivered the solution using Django and Tailwind CSS."
      ],
      icon: <FaBriefcase />
    },
    {
      title: "Scientific Committee of CTF (Capture The Flag) Competition",
      company: "COMPFEST 16",
      duration: "April 2024 - Present",
      description: [
        "Delivered an educational session on Digital Forensics to 100+ attendees, enhancing public knowledge on cybersecurity basics.",
        "Developed three original CTF challenges in steganography, memory forensics, and log analysis—testing real-world debugging and exploit discovery skills.",
        "Worked collaboratively in a team to ensure challenge quality, clarity, and progressive difficulty."
      ],
      icon: <FaDesktop />
    }
  ];

  const hackerExperience = [
    {
      title: "Runner-up",
      company: "World Innovations Day Hackathon",
      duration: "May 2021",
      description: [
        "Led a team of 5 in developing and pitching a web-based solution in accordance to SDG #3 (Good Health and Well-being)."
      ],
      icon: <FaLaptopCode />
    },
    {
      title: "Semifinalist",
      company: "Indonesian Digital Tribe Hackathon",
      duration: "May 2022",
      description: [
        "Led a team of 4 to construct an app and IoT-based start-up idea in the agricultural sector, benefiting Indonesian farmers."
      ],
      icon: <FaLaptopCode />
    },
    {
      title: "Presenter",
      company: "2nd International Conference on Research and Development",
      duration: "November 2022",
      description: [
        "Co-wrote and presented a research paper: \"Designing Plant Monitoring System using Arduino.\""
      ],
      icon: <FaDesktop />
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
              className={`tab-btn ${activeTab === 'hacker' ? 'active' : ''}`}
              onClick={() => setActiveTab('hacker')}
            >
              <FaLaptopCode /> Achievements
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
            
            <div className={`tab-content ${activeTab === 'hacker' ? 'active' : ''}`}>
              <div className="timeline">
                {hackerExperience.map((exp, index) => (
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