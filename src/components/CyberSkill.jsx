import { useEffect, useRef } from "react";

const CyberSkill = ({ icon: Icon, skill, color, animate }) => {
  const skillRef = useRef(null);

  useEffect(() => {
    if (!animate || !skillRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillRef.current.classList.add("active");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div
      className={`technologies ${animate ? "reveal" : ""}`}
      ref={skillRef}
    >
      <Icon style={{ fontSize: "5vh", color: color || "#00e676" }} />
      <h4 style={{ color: "white" }}>{skill}</h4>
    </div>
  );
};

export default CyberSkill;
