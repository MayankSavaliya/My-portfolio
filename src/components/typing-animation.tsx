"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  newTextDelay?: number;
  className?: string;
}

export function TypingAnimation({
  texts,
  typingSpeed = 100,
  erasingSpeed = 50,
  newTextDelay = 2000,
  className = "",
}: TypingAnimationProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isErasing) {
        if (charIndex < texts[textIndex].length) {
          setDisplayText(texts[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsErasing(true), newTextDelay);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(texts[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsErasing(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isErasing ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, textIndex, texts, typingSpeed, erasingSpeed, newTextDelay]);

  return (
    <span className={`${className} border-r-2 border-primary animate-blink-caret`}>
      {displayText}
    </span>
  );
} 