import { useEffect, useRef } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const jobs = [
  {
    title: "Frontend Web Developer",
    company: "Current Employer",
    location: "Philippines",
    period: "2023 – Present",
    type: "webdev",
    tags: ["BigCommerce", "React", "TypeScript", "Stencil.js"],
    bullets: [
      "Develop and maintain BigCommerce storefronts using Stencil.js, React, and TypeScript.",
      "Build custom themes, UI components, and client-facing e-commerce experiences.",
      "Collaborate with design and backend teams to deliver performant, responsive web solutions.",
      "Implement SEO best practices, accessibility standards, and cross-browser compatibility.",
    ],
  },
  {
    title: "Telecom Engineer / Team Leader",
    company: "Teltrends Service Inc.",
    location: "Philippines",
    period: "Dec 2019 – May 2022",
    type: "telecom",
    tags: ["Team Lead", "Network Infrastructure", "LTE", "Rollout"],
    bullets: [
      "Led a team of engineers for network infrastructure deployment and maintenance projects.",
      "Managed site rollout activities including installation, integration, and commissioning of telecom equipment.",
      "Coordinated with telco clients (PLDT, Globe) to ensure project milestones and KPIs were met.",
      "Handled escalation of critical network issues and provided technical guidance to junior engineers.",
    ],
  },
  {
    title: "Drive Test Engineer",
    company: "QROI Network Services",
    location: "Philippines",
    period: "Feb 2019 – Sep 2019",
    type: "telecom",
    tags: ["Drive Test", "TEMS", "MapInfo", "RF Optimization"],
    bullets: [
      "Conducted drive tests to assess network coverage, quality, and performance (2G/3G/4G LTE).",
      "Analyzed RF data using TEMS Investigation and MapInfo for network optimization reports.",
      "Identified and reported coverage holes, interference issues, and handover failures.",
      "Collaborated with optimization engineers to improve network KPIs.",
    ],
  },
  {
    title: "Site Engineer / Site Integrator / Site Surveyor",
    company: "STJB Network Solutions",
    location: "Philippines",
    period: "Sep 2014 – Feb 2019",
    type: "telecom",
    tags: ["Site Integration", "Civil Works", "Commissioning", "Survey"],
    bullets: [
      "Performed site surveys to assess feasibility for new telecom tower installations.",
      "Oversaw civil and structural works for tower erection and equipment shelters.",
      "Integrated and commissioned BTS/NodeB/eNodeB equipment for major telcos.",
      "Ensured compliance with client technical specifications and safety standards.",
    ],
  },
  {
    title: "Drive Test Engineer / Site Surveyor",
    company: "Metroglobal Services Inc.",
    location: "Philippines",
    period: "Oct 2012 – Aug 2014",
    type: "telecom",
    tags: ["Drive Test", "Site Survey", "2G/3G", "Field Engineering"],
    bullets: [
      "Carried out drive tests and post-processing of RF data for network quality assessments.",
      "Conducted site surveys for cell site acquisition and expansion projects.",
      "Prepared technical survey reports and presented findings to project managers.",
      "Supported rollout teams with integration and acceptance testing of new sites.",
    ],
  },
];

const typeColors = {
  webdev: "#00e676",
  telecom: "#00bcd4",
};

function JobCard({ job, animate }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animate]);

  const color = typeColors[job.type] || "#00e676";

  return (
    <div className="workCard reveal" ref={ref}>
      <div className="workCardAccent" style={{ background: color }} />
      <div className="workCardBody">
        <div className="workCardHeader">
          <div className="workCardTitleBlock">
            <h3 className="workCardTitle">{job.title}</h3>
            <span className="workCardCompany">
              <FaBriefcase size={12} style={{ marginRight: 5, color }} />
              {job.company}
            </span>
          </div>
          <div className="workCardMeta">
            <span className="workCardPeriod">
              <FaCalendarAlt size={11} style={{ marginRight: 4 }} />
              {job.period}
            </span>
            <span className="workCardLocation">
              <FaMapMarkerAlt size={11} style={{ marginRight: 4 }} />
              {job.location}
            </span>
          </div>
        </div>

        <ul className="workCardBullets">
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="workCardTags">
          {job.tags.map((t, i) => (
            <span key={i} className="workCardTag" style={{ borderColor: color, color }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const WorkExperience = ({ animate }) => (
  <div className="workExpGrid">
    {jobs.map((job, i) => (
      <JobCard key={i} job={job} animate={animate} />
    ))}
  </div>
);

export default WorkExperience;
