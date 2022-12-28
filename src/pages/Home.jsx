import Projects from "./Projects";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import About from "./About";

function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  return (
    <>
      <div id="home">
        <div className="homeContent">
          <img src={require("../assets/images/profile2.jpg")} alt="" />
          <h2>Hi , I am John Patrick Gelera</h2>
          <div className="type">Software / Web Developer</div>
          <Link to="/contacts">Hire me</Link>
          {/* <a href='#contacts'>Hire me</a> */}
        </div>
        <p className="rotate green">&lt;/&gt;</p>
        <p className="rotate red">&lt;/&gt;</p>
        <p className="rotate blue">&lt;/&gt;</p>
      </div>
      <About className="reveal" animate={true} />
      <Projects className="reveal" />
      <div id="contacts" className="reveal">
        <Contacts />
      </div>
    </>
  );
}

export default Home;
