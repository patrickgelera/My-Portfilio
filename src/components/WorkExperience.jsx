import { useEffect, useRef } from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const jobs = [
  {
    title: "Frontend Web Developer",
    company: "Four13 Digital",
    location: "Philippines",
    period: "Jul 2023 – Present",
    type: "webdev",
    tags: ["BigCommerce", "Shopify", "React", "TypeScript", "Stencil"],
    bullets: [
      "Develop and maintain BigCommerce storefronts using Stencil, React, and TypeScript.",
      "Build custom themes, reusable UI components, and responsive e-commerce experiences based on client requirements.",
      "Debug storefront issues and implement fixes to support reliable customer-facing functionality.",
      "Fixed bugs, implemented new features, and performed QA testing for a client Shopify store.",
      "Apply search engine optimization (SEO), accessibility, and cross-browser compatibility practices.",
      "Collaborate with design and backend teams to deliver frontend features and resolve technical issues.",
      "Promoted from QA Engineer after six months based on performance and technical growth.",
    ],
  },
  {
    title: "QA Engineer",
    company: "Four13 Digital",
    location: "Philippines",
    period: "Jan 2023 – Jun 2023",
    type: "webdev",
    tags: ["Manual Testing", "Exploratory Testing", "Defect Tracking", "BigCommerce"],
    bullets: [
      "Performed manual and exploratory testing of BigCommerce storefronts across multiple client projects.",
      "Identified, documented, and tracked software defects before release.",
      "Worked with developers to reproduce reported issues and verify fixes before client deployment.",
    ],
  },
  {
    title: "Telecom Engineer / Team Leader",
    company: "Teltrends Service Inc.",
    location: "Philippines",
    period: "Dec 2019 – May 2022",
    type: "telecom",
    tags: ["Team Leadership", "Quality Control", "Daily Reporting"],
    bullets: [
      "Led a four-member team and guided daily work to maintain quality and complete assigned jobs.",
      "Prepared daily reports covering completed work and pending assignments.",
    ],
  },
  {
    title: "Drive Test Engineer",
    company: "QROI Network Services",
    location: "Philippines",
    period: "Feb 2019 – Sep 2019",
    type: "telecom",
    tags: ["Drive Test", "Globe Telecom", "Coverage Analysis", "Reporting"],
    bullets: [
      "Conducted field drive tests to assess Globe Telecom signal coverage and network performance.",
      "Prepared reports and recommendations to improve signal quality in surveyed areas.",
    ],
  },
  {
    title: "Site Engineer / Site Integrator / Site Surveyor",
    company: "STJB Network Solutions",
    location: "Philippines",
    period: "Sep 2014 – Feb 2019",
    type: "telecom",
    tags: ["Site Survey", "Planning", "Documentation", "VoIP Installation"],
    bullets: [
      "Supported telecom projects through site surveys, planning, technical documentation, and installation.",
      "Installed and configured Alcatel VoIP phones and switches at Metrobank branches.",
      "Contributed to Smart PAWS, Globe Arch Angel, PT&T Free Public Wi-Fi, Nokia-Smart Refarm, and Huawei-Smart projects.",
    ],
  },
  {
    title: "Drive Test Engineer / Site Surveyor",
    company: "Metroglobal Services Inc.",
    location: "Philippines",
    period: "Oct 2012 – Aug 2014",
    type: "telecom",
    tags: ["Drive Test", "RF Survey", "Planning", "Documentation"],
    bullets: [
      "Conducted radio frequency (RF) surveys, planning, and documentation for Belltel Hybrid Macro and Globe Modernization projects.",
      "Performed drive tests to investigate Globe customer signal complaints.",
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
