const items = [
  {
    period: "2012",
    title: "Started Career in Telecommunications",
    description:
      "Began professional career as a Telecom Engineer — working with network infrastructure, signal systems, and communications technology.",
    type: "education",
    icon: "📡",
  },
  {
    period: "2012 – 2023",
    title: "Telecom Engineer · 11 Years",
    description:
      "Over a decade of hands-on experience in telecommunications — managing network systems, troubleshooting infrastructure, and working with protocols and hardware at a professional level. This foundation gave a deep understanding of how networks and systems truly work.",
    type: "project",
    icon: "🛰️",
  },
  {
    period: "2022 – 2023",
    title: "Retrained as Full-Stack Web Developer",
    description:
      "While transitioning careers, completed Village88's intensive FullStack Web Development program. Earned 4 certificates covering HTML/CSS, PHP, Advanced JavaScript, and React.",
    type: "education",
    icon: "🎓",
  },
  {
    period: "2023 – Present",
    title: "Frontend Web Developer · BigCommerce & React",
    description:
      "Successfully transitioned into the tech industry as a frontend web developer — specialising in BigCommerce e-commerce development with React. Building performant storefronts, custom themes, and client-facing web experiences.",
    type: "project",
    icon: "💻",
  },
  {
    period: "2026",
    title: "Cybersecurity Training · RivanCyber",
    description:
      "Enrolled in CompTIA Security+ training at RivanCyber Training Institute INC. Covering network security, cryptography, threat analysis, and access control — leveraging a strong telecom and networking background.",
    type: "security",
    icon: "🔐",
  },
  {
    period: "Now",
    title: "Telecom · Web Dev · Cybersecurity",
    description:
      "A rare combination: 11 years of telecom infrastructure experience, 3+ years of web development, and active cybersecurity training. Targeting roles in secure application development or cybersecurity analysis.",
    type: "current",
    icon: "🚀",
  },
];

const Timeline = () => (
  <div className="timeline">
    <div className="timelineLine" />
    {items.map((item, i) => (
      <div key={i} className="timelineItem reveal">
        <div className="timelineDot" data-type={item.type} />
        <div className={`timelineCard timelineCard--${item.type}`}>
          <span className="timelinePeriod">{item.period}</span>
          <h3 className="timelineTitle">
            <span className="timelineIcon">{item.icon}</span>
            {item.title}
          </h3>
          <p className="timelineDesc">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;
