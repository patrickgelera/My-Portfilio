import Project from "../components/Projects";
import classes from "./Projects.module.css";

const Projects = (props) => {
  return (
    <div
      id="projects"
      className={`${classes["project-card"]} ${props.className}`}
    >
      <div className="titlecentered">
        <h2>Projects</h2>
      </div>

      <div>
        <Project
          number="01"
          type="Full-Stack Web App"
          url="https://www.youtube.com/embed/mL9_TZmNCgg"
          title="E-COMMERCE WEBSITE"
          descriptions={[
            "Admin dashboard with full CRUD for product management — add, edit, delete, and search products.",
            "Customer-facing storefront with cart, checkout flow, and live card payments via Stripe API.",
          ]}
          tech={[
            { name: "HTML", color: "#e34c26" },
            { name: "CSS", color: "#264de4" },
            { name: "Bootstrap", color: "#7952b3" },
            { name: "JavaScript", color: "#f7df1e" },
            { name: "jQuery", color: "#0769ad" },
            { name: "CodeIgniter", color: "#ee4623" },
            { name: "Ajax", color: "#0078d4" },
            { name: "MySQL", color: "#00758f" },
            { name: "Stripe API", color: "#635bff" },
          ]}
          className={`projects ${props.className}`}
        />

        <Project
          number="02"
          type="Real-Time Multiplayer Game"
          url="https://www.youtube.com/embed/EO0vXwGc2ao"
          title="MULTIPLAYER PACMAN"
          descriptions={[
            "2-player real-time Pacman built with WebSockets — both players connect from separate browsers.",
            "Players race to collect all coins while avoiding ghosts. Server syncs game state in real time via Socket.IO.",
          ]}
          tech={[
            { name: "HTML", color: "#e34c26" },
            { name: "CSS", color: "#264de4" },
            { name: "JavaScript ES6", color: "#f7df1e" },
            { name: "NodeJS", color: "#3c873a" },
            { name: "Express", color: "#7952b3" },
            { name: "Socket.IO", color: "#010101" },
          ]}
          className={`projects ${props.className}`}
        />

        <Project
          number="03"
          type="Collaborative Learning Platform"
          url="https://www.youtube.com/embed/r7t0ZNg5M6M"
          title="E-CLASSROOM"
          descriptions={[
            "Instructors create virtual classrooms with a live interactive whiteboard — draw, annotate, and present lesson slides in real time.",
            "Students join a Game Room featuring a multiplayer draw-and-guess game with timed rounds and a live leaderboard.",
            "Full auth system (login/register), role-based access, and room management — instructors only can create Class Rooms.",
          ]}
          tech={[
            { name: "React JS", color: "#20232a" },
            { name: "Material UI", color: "#0081cb" },
            { name: "Node JS", color: "#3c873a" },
            { name: "Express", color: "#7952b3" },
            { name: "Socket.IO", color: "#010101" },
            { name: "MongoDB", color: "#13aa52" },
          ]}
          className={`projects ${props.className}`}
        />
      </div>
    </div>
  );
};

export default Projects;
