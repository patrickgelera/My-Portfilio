import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import About from "./About";
import Typewriter from "../components/Typewriter";
import useCountUp from "../hooks/useCountUp";

const RESUME_URL =
  "https://drive.google.com/file/d/1-I--GfNxFyDVJ9fSMT-1LVCmyE8rQ5qu/view?usp=sharing";

function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  const years = useCountUp(14);
  const certs = useCountUp(5);
  const techs = useCountUp(24);

  return (
    <>
      <div id="home">
        <div className="homeContent">
          {/* ── LEFT ── */}
          <div className="heroLeft">
            <div className="terminalBar">
              <span className="termDot termRed" />
              <span className="termDot termYellow" />
              <span className="termDot termGreenDot" />
              <span className="termCmd">
                root@portfolio:~$&nbsp;
                <span className="termCursor">▋</span>
              </span>
            </div>

            <h2 className="glitch" data-text="John Patrick Gelera">
              John Patrick Gelera
            </h2>

            <div className="roleBadges">
              <span className="roleBadge badgeGreen">⬡ Frontend Dev · BigCommerce</span>
              <span className="roleBadge badgeCyan">⬡ Cybersecurity Trainee</span>
              <span className="roleBadge badgeTelecom">⬡ Ex-Telecom Engineer</span>
            </div>

            <Typewriter />

            <div className="heroStats">
              <div className="heroStat" ref={years.ref}>
                <span className="statNum">{years.count}+</span>
                <span className="statLabel">Yrs in Tech</span>
              </div>
              <span className="statDiv">|</span>
              <div className="heroStat" ref={certs.ref}>
                <span className="statNum">{certs.count}+</span>
                <span className="statLabel">Certificates</span>
              </div>
              <span className="statDiv">|</span>
              <div className="heroStat" ref={techs.ref}>
                <span className="statNum">{techs.count}+</span>
                <span className="statLabel">Technologies</span>
              </div>
            </div>

            <div className="heroCtas">
              <Link to="/contacts" className="ctaPrimary">
                Hire Me →
              </Link>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="ctaSecondary"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="heroRight">
            <div className="photoWrapper">
              <img
                src={require("../assets/images/profile2.jpg")}
                alt="John Patrick Gelera"
              />
            </div>
            <div className="availableBadge">
              <span className="availableDot" />
              Open to cybersecurity roles
            </div>
          </div>
        </div>

      </div>

      <About className="reveal" animate={true} />
      <div id="contacts" className="reveal">
        <Contacts />
      </div>
    </>
  );
}

export default Home;
