import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Landing = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "UI/UX Developer", "MERN Developer","Photographer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="section">
      <h1>Rudraksh Mahajan</h1>
      <p ref={typedRef}></p>
      <div>
        <a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" className="btn">View CV</a>
        <a href="https://www.linkedin.com/in/ruex64/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
      </div>
    </section>
  );
};

export default Landing;
