import React, { useState, useEffect } from 'react';

const TypeWriter = ({ children, speed = 15 }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const isSimpleText = typeof children === 'string';

  useEffect(() => {
    if (!isSimpleText) {
      return;
    }

    setDisplayedContent('');
    setCurrentIndex(0);
  }, [children, isSimpleText]);

  useEffect(() => {
    if (!isSimpleText) return;

    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setDisplayedContent(children.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, children, isSimpleText, speed]);

  if (!isSimpleText) {
    return <>{children}</>;
  }

  return <span>{displayedContent}<span className="animate-pulse">|</span></span>;
};

export default TypeWriter;