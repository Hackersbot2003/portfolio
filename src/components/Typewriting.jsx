import React, { useState, useEffect, useRef } from 'react';
import Typical from 'react-typical';

const Typewriter = ({ text, typingSpeed = 1000, loop = 1 }) => {
  const [isVisible, setIsVisible] = useState(false); // To track visibility
  const typewriterRef = useRef(null); // To reference the component

  // Generate the steps array dynamically based on the input text
  const generateSteps = () => {
    const steps = [];
    let accumulatedText = '';
    for (const char of text) {
      accumulatedText += char; // Build the string progressively
      steps.push(accumulatedText, typingSpeed); // Add the current string and delay
    }
    return steps;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start typing when visible
        } else {
          setIsVisible(false); // Reset when out of view (optional)
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      if (typewriterRef.current) {
        observer.unobserve(typewriterRef.current);
      }
    };
  }, []);

  return (
    <div ref={typewriterRef} className=" " style={{ minHeight: '50px' }}>
      <h1 className="inline-bloc font-[cinzel]k">
        {isVisible && <Typical steps={generateSteps()} loop={loop} wrapper="span" />}
      </h1>
    </div>
  );
};

export default Typewriter;
