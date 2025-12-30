import React, { useState, useEffect, useRef } from 'react';

const AnimatedText = ({ children, className = '', observerTargetRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const fallbackRef = useRef(null);

  useEffect(() => {
    const targetNode = observerTargetRef ? observerTargetRef.current : fallbackRef.current;

    if (!targetNode) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        // Trigger when element reaches 40% from bottom of screen
        rootMargin: "0px 0px -40% 0px",
      }
    );

    observer.observe(targetNode);

    return () => observer.unobserve(targetNode);
  }, [observerTargetRef]);

  const refToUse = observerTargetRef ? null : fallbackRef;

  return (
    <div
      ref={refToUse}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
