import Technologies from "../components/Technologies";
import Certificates from "../components/Certificates";
import CyberSkill from "../components/CyberSkill";
import SkillBars from "../components/SkillBars";
import Timeline from "../components/Timeline";
import WorkExperience from "../components/WorkExperience";
import {
  FaShieldAlt,
  FaLock,
  FaTerminal,
  FaNetworkWired,
  FaKey,
  FaLinux,
  FaEye,
  FaServer,
  FaBug,
  FaCubes,
  FaClipboardCheck,
} from "react-icons/fa";
import {
  SiKalilinux,
  SiWireshark,
  SiPython,
  SiShopify,
  SiLess,
  SiGithubactions,
} from "react-icons/si";

const About = (props) => {
  return (
    <div id="about">

      {/* ── BIO ─────────────────────────────────── */}
      <div className={`bioSection ${props.className}`}>
        <div className="titlecentered">
          <h2>About Me</h2>
        </div>
        <div className="bioContent">
          <p>
            Hi! I'm <span className="bioHighlight">John Patrick Gelera</span> — a Frontend
            Web Developer from the Philippines with
            <span className="bioHighlight"> 3+ years of experience in e-commerce development
            and quality assurance</span> at Four13 Digital. I build and maintain BigCommerce
            storefronts using Stencil, React, JavaScript, and TypeScript, and have contributed
            bug fixes, new features, and QA testing to a client Shopify store. Before tech, I
            spent 10 years in telecommunications engineering, technical documentation, and
            team leadership.
          </p>
          <p>
            In 2026, I completed CompTIA Security+ training to combine
            my deep networking background with modern security skills. My telecom roots give me
            a natural edge in understanding <span className="bioHighlight">network security,
            infrastructure, and system vulnerabilities</span> that most developers don't have.
          </p>
          <div className="bioTags">
            <span className="bioTag"># 14-yrs-in-tech</span>
            <span className="bioTag"># telecom-background</span>
            <span className="bioTag"># bigcommerce-developer</span>
            <span className="bioTag"># shopify</span>
            <span className="bioTag"># quality-assurance</span>
            <span className="bioTag"># frontend-react</span>
            <span className="bioTag"># cybersec-trainee</span>
          </div>
        </div>
      </div>

      {/* ── WORK EXPERIENCE ─────────────────────── */}
      <div className={`techs ${props.className}`}>
        <div className="titlecentered">
          <h2>Work Experience</h2>
        </div>
        <WorkExperience animate={props.animate} />
      </div>

      {/* ── SKILL PROFICIENCY ───────────────────── */}
      <div className={`techs ${props.className}`}>
        <div className="titlecentered">
          <h2>Proficiency</h2>
        </div>
        <SkillBars />
      </div>

      {/* ── TIMELINE ────────────────────────────── */}
      <div className={`techs ${props.className}`}>
        <div className="titlecentered">
          <h2>My Journey</h2>
        </div>
        <Timeline />
      </div>

      {/* ── TECHNOLOGIES ────────────────────────── */}
      <div className={`techs ${props.className}`}>
        <div className="titlecentered">
          <h2>Technologies</h2>
        </div>

        <div className="techGroups">

          <div className="techGroup">
            <p className="techGroupLabel">&lt; Frontend /&gt;</p>
            <div className="techGroupCards">
              <Technologies url="bigcommerce.svg"  tech="BigCommerce"       animate={props.animate} />
              <Technologies icon={SiShopify}       tech="Shopify"           color="#96bf48" animate={props.animate} />
              <Technologies icon={FaCubes}         tech="Stencil"           color="#00bcd4" animate={props.animate} />
              <Technologies url="html.png"          tech="HTML"              animate={props.animate} />
              <Technologies url="css.png"          tech="CSS"               animate={props.animate} />
              <Technologies icon={SiLess}          tech="LESS"              color="#4d8fd6" animate={props.animate} />
              <Technologies url="JavaScript.png"   tech="JavaScript"        animate={props.animate} />
              <Technologies url="typescript.png"   tech="TypeScript"        animate={props.animate} />
              <Technologies url="react.png"        tech="React JS"          animate={props.animate} />
              <Technologies url="redux.png"        tech="React Redux"       animate={props.animate} />
              <Technologies url="next.png"         tech="Next.Js"           animate={props.animate} />
              <Technologies url="angular.png"      tech="Angular JS"        animate={props.animate} />
              <Technologies url="jquery.png"       tech="jQuery"            animate={props.animate} />
              <Technologies url="bootstrap.png"    tech="Bootstrap"         animate={props.animate} />
              <Technologies url="material ui.png"  tech="Material UI"       animate={props.animate} />
              <Technologies url="semantic ui.png"  tech="Semantic UI"       animate={props.animate} />
              <Technologies url="rwd.png"          tech="Responsive Design" animate={props.animate} />
            </div>
          </div>

          <div className="techGroup">
            <p className="techGroupLabel">&lt; Backend &amp; Database /&gt;</p>
            <div className="techGroupCards">
              <Technologies url="nodejs.png"      tech="NodeJS"      animate={props.animate} />
              <Technologies url="express.png"     tech="Express"     animate={props.animate} />
              <Technologies url="php.png"         tech="PHP"         animate={props.animate} />
              <Technologies url="codeigniter.png" tech="CodeIgniter" animate={props.animate} />
              <Technologies url="socket.png"      tech="Socket.IO"   animate={props.animate} />
              <Technologies url="ajax.png"        tech="Ajax"        animate={props.animate} />
              <Technologies url="mysql.png"       tech="MySQL"       animate={props.animate} />
              <Technologies url="mongodb.png"     tech="MongoDB"     animate={props.animate} />
            </div>
          </div>

          <div className="techGroup">
            <p className="techGroupLabel">&lt; QA &amp; Dev Tools /&gt;</p>
            <div className="techGroupCards">
              <Technologies icon={FaClipboardCheck} tech="Manual Testing" color="#00e676" animate={props.animate} />
              <Technologies icon={FaBug}            tech="Bug Tracking"   color="#ff5252" animate={props.animate} />
              <Technologies url="git.png"      tech="Git / Github" animate={props.animate} />
              <Technologies icon={SiGithubactions} tech="GitHub Actions" color="#2088ff" animate={props.animate} />
              <Technologies url="docker.png"   tech="Docker"       animate={props.animate} />
              <Technologies url="jenkins.png"  tech="Jenkins"      animate={props.animate} />
              <Technologies url="selenium.png" tech="Selenium"     animate={props.animate} />
            </div>
          </div>

        </div>
      </div>

      {/* ── CYBERSECURITY ───────────────────────── */}
      <div className={`techs ${props.className} cyberSection`}>
        <div className="titlecentered cyberTitle">
          <h2>Cybersecurity Skills</h2>
        </div>
        <p className="cyberSubtitle">
          Currently pursuing cybersecurity — building skills in ethical hacking, network analysis, and web application security.
        </p>
        <div className="techGroups">
          <div className="techGroup">
            <p className="techGroupLabel techGroupLabelGreen">&lt; OS &amp; Networking /&gt;</p>
            <div className="techGroupCards">
              <CyberSkill icon={FaLinux}       skill="Linux"       color="#f5a623" animate={props.animate} />
              <CyberSkill icon={SiKalilinux}   skill="Kali Linux"  color="#1793d1" animate={props.animate} />
              <CyberSkill icon={FaNetworkWired} skill="Networking" color="#00e676" animate={props.animate} />
              <CyberSkill icon={SiWireshark}   skill="Wireshark"   color="#1679a7" animate={props.animate} />
              <CyberSkill icon={FaServer}      skill="Nmap"        color="#00e676" animate={props.animate} />
              <CyberSkill icon={FaTerminal}    skill="Bash Scripting" color="#00e676" animate={props.animate} />
            </div>
          </div>
          <div className="techGroup">
            <p className="techGroupLabel techGroupLabelGreen">&lt; Security &amp; Exploitation /&gt;</p>
            <div className="techGroupCards">
              <CyberSkill icon={FaBug}       skill="Pen Testing"  color="#ff5252" animate={props.animate} />
              <CyberSkill icon={FaShieldAlt} skill="OWASP Top 10" color="#00e676" animate={props.animate} />
              <CyberSkill icon={FaEye}       skill="OSINT"        color="#f5a623" animate={props.animate} />
              <CyberSkill icon={FaLock}      skill="Cryptography" color="#00e676" animate={props.animate} />
              <CyberSkill icon={SiPython}    skill="Python"       color="#3776ab" animate={props.animate} />
              <CyberSkill icon={FaKey}       skill="CTF Challenges" color="#f5a623" animate={props.animate} />
            </div>
          </div>
        </div>
      </div>

      {/* ── CERTIFICATES ────────────────────────── */}
      <div className={`techs ${props.className} techCert`}>
        <div className="titlecentered">
          <h2>Trainings &amp; Certificates</h2>
        </div>
        <section className="certGrid">
          <Certificates
            url="WF.png"
            cert="Certificate in Web Fundamentals"
            training="Village88 — Full-Stack Web Development · 2022"
            details="Cloned a full webpage using pure HTML and CSS within a 4-hour time limit."
            animate={props.animate}
          />
          <Certificates
            url="PHP.png"
            cert="Certificate in Advanced PHP"
            training="Village88 — Full-Stack Web Development · 2022"
            details="Built a full frontend and backend app using HTML, CSS, JavaScript, jQuery, Ajax, CodeIgniter, and MySQL from a given wireframe in 5 hours."
            animate={props.animate}
          />
          <Certificates
            url="javascript.png"
            cert="Certificate in Advanced JavaScript"
            training="Village88 — Full-Stack Web Development · 2022"
            details="Built a real-time full-stack app using HTML, CSS, JavaScript ES6, Node.js, Express, and Socket.IO from a wireframe in 5 hours."
            animate={props.animate}
          />
          <Certificates
            url="FE.png"
            cert="Certificate in Frontend Track"
            training="Village88 — Full-Stack Web Development · 2022"
            details="Built a complete React.js application within 5 hours from a given specification."
            animate={props.animate}
          />
          <Certificates
            url="security_plus.svg"
            cert="CompTIA Security+ Training"
            training="Rivancyber Training Institute Inc. · 2026"
            details="Completed training in network security, threats and vulnerabilities, cryptography, access control, and security operations."
            animate={props.animate}
          />
          <Certificates
            url="tesda.svg"
            cert="Web Development Level II (NC II)"
            training="RVN Tech-Voc Inc. — TESDA · 2018"
            details="TESDA National Certificate II in Web Development — covering HTML, CSS, JavaScript, and responsive web design standards."
            animate={props.animate}
          />
          <Certificates
            url="cisco.svg"
            cert="Cisco Routing and Switching Training"
            training="Ironlink Computer Learning Center · 2017"
            details="Hands-on training using physical Cisco routers and switches."
            animate={props.animate}
          />
        </section>
      </div>

    </div>
  );
};

export default About;
