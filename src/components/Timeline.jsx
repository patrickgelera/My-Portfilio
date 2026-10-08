const items = [
  {
    period: "2008 – 2012",
    title: "BS Information Technology · STI College Sta. Maria",
    description:
      "Earned a Bachelor of Science in Information Technology, building the foundation for a career in telecom and, later, web development.",
    type: "education",
    icon: "🎓",
  },
  {
    period: "2012 – 2022",
    title: "Telecom Engineer · 10 Years",
    description:
      "Worked across drive testing, RF surveys, site engineering, and integration for Globe, Smart, and other telecom projects — eventually leading a four-member team at Teltrends Service Inc. Built strong habits in technical documentation, reporting, and team leadership.",
    type: "project",
    icon: "🛰️",
  },
  {
    period: "2022",
    title: "Retrained as Full-Stack Web Developer · Village88",
    description:
      "Completed Village88's Full-Stack Web Development program, earning certificate tracks in Web Fundamentals, Advanced PHP, JavaScript, and Frontend Development through timed practical projects using HTML, CSS, PHP, MySQL, Node.js, and React.",
    type: "education",
    icon: "📚",
  },
  {
    period: "Jan 2023 – Jun 2023",
    title: "QA Engineer · Four13 Digital",
    description:
      "Joined Four13 Digital as a QA Engineer — performing manual and exploratory testing of BigCommerce storefronts, tracking defects, and verifying fixes with developers before client deployment.",
    type: "project",
    icon: "🧪",
  },
  {
    period: "Jul 2023 – Present",
    title: "Frontend Web Developer · Four13 Digital",
    description:
      "Promoted to Frontend Web Developer after six months. Building and maintaining BigCommerce storefronts with Stencil, React, and TypeScript, and contributing bug fixes, new features, and QA testing to a client Shopify store.",
    type: "project",
    icon: "💻",
  },
  {
    period: "2026",
    title: "CompTIA Security+ Training · RivanCyber",
    description:
      "Completed CompTIA Security+ training at Rivancyber Training Institute Inc., covering network security, threats and vulnerabilities, cryptography, access control, and security operations.",
    type: "security",
    icon: "🔐",
  },
  {
    period: "Now",
    title: "Frontend · QA · Telecom · Security",
    description:
      "3+ years of e-commerce development and quality assurance at Four13 Digital, backed by 10 years of telecom engineering experience and Security+ training.",
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
