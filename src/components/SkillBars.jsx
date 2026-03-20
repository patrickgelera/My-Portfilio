import { useState, useEffect, useRef } from "react";

const skillData = [
  {
    category: "Frontend",
    color: "#00bcd4",
    skills: [
      { name: "HTML / CSS", level: 92 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "React / Next.js", level: 88 },
      { name: "Angular / jQuery", level: 70 },
    ],
  },
  {
    category: "Backend & Database",
    color: "#00e676",
    skills: [
      { name: "Node.js / Express", level: 78 },
      { name: "PHP / CodeIgniter", level: 72 },
      { name: "MySQL / MongoDB", level: 75 },
    ],
  },
  {
    category: "Cybersecurity",
    color: "#ff5252",
    skills: [
      { name: "Linux / Bash Scripting", level: 62 },
      { name: "Networking / Wireshark", level: 55 },
      { name: "Web Security / OWASP", level: 58 },
      { name: "Python for Security", level: 52 },
    ],
  },
];

const SkillBar = ({ name, level, color }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 150);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skillBarItem" ref={ref}>
      <div className="skillBarHeader">
        <span className="skillName">{name}</span>
        <span className="skillLevel" style={{ color }}>{level}%</span>
      </div>
      <div className="skillBarTrack">
        <div
          className="skillBarFill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
};

const SkillBars = () => (
  <div className="skillBarsGrid">
    {skillData.map((group) => (
      <div key={group.category} className="skillBarGroup">
        <h3 className="skillBarGroupTitle" style={{ color: group.color }}>
          {group.category}
        </h3>
        {group.skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={group.color}
          />
        ))}
      </div>
    ))}
  </div>
);

export default SkillBars;
