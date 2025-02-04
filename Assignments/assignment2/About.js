import React, { useState, useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {
  const [loop, setLoop] = useState(false);

  useEffect(() => {
    // Restart animation every few seconds to loop infinitely
    const interval = setInterval(() => {
      setLoop((prev) => !prev);
    }, 3000); // Restart animation every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section fade-in">
      <h2>About Me</h2>
      <RoughNotationGroup show={loop}>
        <p>
          <RoughNotation 
            type="underline" 
            color="#FFD700" 
            padding={4} 
            strokeWidth={3} 
            animationDuration={1000} 
            iterations={1} 
          >
            <span className="annotated-text">Hi there! I’m a college student</span>
          </RoughNotation>
          &nbsp;and a&nbsp;
          <RoughNotation 
            type="circle" 
            color="#FFD700" 
            padding={6} 
            strokeWidth={3} 
            animationDuration={1200} 
            iterations={1} 
          >
            <span className="annotated-text">Full Stack MERN Developer</span>
          </RoughNotation>  
          &nbsp;with a passion for UI/UX design.
        </p>
        <p>
          I specialize in&nbsp;
          <RoughNotation 
            type="underline" 
            color="#FFD700" 
            padding={4} 
            strokeWidth={3} 
            animationDuration={1000} 
            iterations={1} 
          >
            <span className="annotated-text">ReactJS, NodeJS, MongoDB, and Express</span>
          </RoughNotation>, creating dynamic web applications.
        </p>
        <p>
          Currently, I’m enhancing my skills in UI/UX to deliver user-friendly digital experiences.
        </p>
      </RoughNotationGroup>
    </section>
  );
};

export default About;
