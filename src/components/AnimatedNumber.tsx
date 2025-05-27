import React, { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface AnimatedNumberProps {
  to: number;
  className?: string;
  plus?: boolean; // To add a '+' sign after the number
  duration?: number; // Optional duration for the animation
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ to, className, plus = false, duration = 2 }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" }); // Trigger when 50px into view

  console.log(`AnimatedNumber (${to}): isInView = ${isInView}`);

  useEffect(() => {
    const node = nodeRef.current;
    console.log(`AnimatedNumber (${to}): useEffect triggered. Node: ${node ? 'exists' : 'null'}, isInView: ${isInView}`);
    if (node && isInView) { // Only animate if in view
      console.log(`AnimatedNumber (${to}): Starting animation from 0 to ${to}`);
      const controls = animate(0, to, {
        duration: duration,
        onUpdate(value) {
          node.textContent = Math.round(value).toString() + (plus ? "+" : "");
        },
      });
      return () => {
        console.log(`AnimatedNumber (${to}): Animation cleanup`);
        controls.stop();
      };
    }
  }, [to, plus, duration, isInView]); // Add isInView to dependencies

  // Initial text before animation starts or if not in view
  return <span ref={nodeRef} className={className}>0{plus ? "+" : ""}</span>;
};

export default AnimatedNumber;
