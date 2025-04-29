import { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setHidden(true);
      return;
    }

    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const mouseEnterLink = () => {
      setLinkHovered(true);
    };

    const mouseLeaveLink = () => {
      setLinkHovered(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    const links = document.querySelectorAll('a, button, .btn, .card');
    links.forEach((link) => {
      link.addEventListener('mouseenter', mouseEnterLink);
      link.addEventListener('mouseleave', mouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', mouseEnterLink);
        link.removeEventListener('mouseleave', mouseLeaveLink);
      });
    };
  }, []);

  const cursorStyles = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hidden ? 0 : 0.75,
    transform: `translate(-50%, -50%) scale(${clicked ? 0.7 : linkHovered ? 1.5 : 1})`,
    backgroundColor: clicked ? 'var(--accent)' : linkHovered ? 'transparent' : 'var(--primary)',
    border: linkHovered ? '2px solid var(--primary)' : 'none',
    transition: 'transform 0.2s ease-out, opacity 0.2s ease, background-color 0.2s ease'
  };

  const dotStyles = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: hidden ? 0 : 1,
  };

  return (
    <>
      <div className="cursor" style={cursorStyles}></div>
      <div className="cursor-dot" style={dotStyles}></div>
    </>
  );
};

export default Cursor;