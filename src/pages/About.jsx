import Technologies from "../components/Technologies";
import Certificates from "../components/Certificates";

const About = (props) => {
  return (
    <div id="about">
      <div className={`techs ${props.className}`}>
        <div className="titlecentered">
          <h2>Technologies</h2>
        </div>
        <div className="techdiv">
          <div className="designs">
            <section className="techfields webdesign">
              <Technologies
                url="html.png"
                tech="HTML"
                animate={props.animate}
              />
              <Technologies
                url="JavaScript.png"
                tech="JavaScript"
                animate={props.animate}
              />
              <Technologies
                url="react.png"
                tech="React JS"
                animate={props.animate}
              />
              <Technologies
                url="redux.png"
                tech="React Redux"
                animate={props.animate}
              />
              <Technologies
                url="next.png"
                tech="Next.Js"
                animate={props.animate}
              />
              <Technologies url="css.png" tech="CSS" animate={props.animate} />
              <Technologies
                url="bootstrap.png"
                tech="Bootstrap"
                animate={props.animate}
              />
              <Technologies
                url="material ui.png"
                tech="Material UI"
                animate={props.animate}
              />
              <Technologies
                url="semantic ui.png"
                tech="Semantic UI"
                animate={props.animate}
              />
              <Technologies
                url="rwd.png"
                tech="Responsive Web Design"
                animate={props.animate}
              />
              <Technologies
                url="nodejs.png"
                tech="NodeJS"
                animate={props.animate}
              />
              <Technologies
                url="codeigniter.png"
                tech="CodeIgniter"
                animate={props.animate}
              />
              <Technologies
                url="angular.png"
                tech="Angular JS"
                animate={props.animate}
              />
              <Technologies
                url="jquery.png"
                tech="jQuery"
                animate={props.animate}
              />
              <Technologies
                url="socket.png"
                tech="Socket.IO"
                animate={props.animate}
              />
              <Technologies
                url="typescript.png"
                tech="TypeScript"
                animate={props.animate}
              />
              <Technologies url="php.png" tech="PHP" animate={props.animate} />
              <Technologies
                url="mysql.png"
                tech="MySQL"
                animate={props.animate}
              />
              <Technologies
                url="mongodb.png"
                tech="MongoDB"
                animate={props.animate}
              />
              <Technologies
                url="ajax.png"
                tech="Ajax"
                animate={props.animate}
              />
              <Technologies
                url="git.png"
                tech="Github"
                animate={props.animate}
              />
              <Technologies
                url="docker.png"
                tech="Docker"
                animate={props.animate}
              />
              <Technologies
                url="jenkins.png"
                tech="Jenkins"
                animate={props.animate}
              />
              <Technologies
                url="selenium.png"
                tech="Selenium"
                animate={props.animate}
              />
            </section>
          </div>
        </div>
      </div>
      <div className={`techs ${props.className} techCert`}>
        <div className="titlecentered">
          <h2>Trainings and Certificates</h2>
        </div>

        <section>
          <Certificates
            url="WF.png"
            cert="Certificate in Web Fundamentals"
            training="Village88 - FullStack Web Development"
            details="Able to clone a webpage using pure HTML and CSS under 4 hours limit"
            animate={props.animate}
          />
          <Certificates
            url="PHP.png"
            cert="Certificate in Advance PHP"
            training="Village88 - FullStack Web Development"
            details="Coded frontend and backend using HTML, CSS JavaScript, jQuery, Ajax, CodeIgniter, and 
                MySQL has given in wireframe for 5 hours"
            animate={props.animate}
          />
          <Certificates
            url="javascript.png"
            cert="Certificate in Advance Javascript"
            training="Village88 - FullStack Web Development"
            details=" Coded frontend and backend using HTML, CSS, JavaScript ES6, Node JS, Express, Socket.IO 
                given in wireframe under 5 hours"
            animate={props.animate}
            className="js "
          />
          <Certificates
            url="FE.png"
            cert="Certificate in Frontend Track"
            training="Village88 - FullStack Web Development"
            details=" Coded an App Using React JS in under 5 hours"
            animate={props.animate}
          />
        </section>
      </div>
    </div>
  );
};

export default About;
