// import React, { useState, useEffect, useRef } from 'react';

// const AnimatedCounter = ({ targetNumber, duration = 2000, suffix = '' }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const counterRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(counterRef.current);
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the element is visible
//     );

//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }

//     return () => {
//       if (counterRef.current) {
//         observer.unobserve(counterRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (isVisible) {
//       let startTimestamp = null;
//       const step = (timestamp) => {
//         if (!startTimestamp) startTimestamp = timestamp;
//         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//         setCount(Math.floor(progress * targetNumber));
//         if (progress < 1) {
//           window.requestAnimationFrame(step);
//         }
//       };
//       window.requestAnimationFrame(step);
//     }
//   }, [isVisible, targetNumber, duration]);

//   return (
//     <span ref={counterRef}>
//       {count}{suffix}
//     </span>
//   );
// };

// export default AnimatedCounter;