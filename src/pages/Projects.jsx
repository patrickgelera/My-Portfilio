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
          url="https://www.youtube.com/embed/mL9_TZmNCgg"
          title="E-COMMERCE WEBSITE"
          descriptions={[
            "Allows admin to add, edit, delete, search and view products",
            "Allows users to search, view a product, add products to cart, delete product in the cart, check out product and accepts card payment using Stripe API.",
          ]}
          tech={[
            { name: "HTML", color: "#C7252E" },
            { name: "CSS", color: "#DD8834" },
            { name: "Bootstrap", color: "#6058F7" },
            { name: "JavaScript", color: "#148248" },
            { name: "jQuery", color: "#1572B6" },
            { name: "CodeIgniter", color: "#F26322" },
            { name: "Ajax", color: "#348DC9" },
            { name: "MySQL", color: "#DD8834" },
            { name: "Stripe API", color: "#6058F7" },
          ]}
          className={`projects ${props.className}`}
        />
        <Project
          url="https://www.youtube.com/embed/EO0vXwGc2ao"
          title="MULTIPLAYER GAME (PACMAN)"
          descriptions={[
            "Play 2 Player Pacman the goal is to get all the coins without hitting the ghosts",
          ]}
          tech={[
            { name: "HTML", color: "#C7252E" },
            { name: "CSS", color: "#DD8834" },
            { name: "JavaScript", color: "#148248" },
            { name: "ES6", color: "#1572B6" },
            { name: "NodeJS", color: "#148248" },
            { name: "Express JS", color: "#6058F7" },
            { name: "Socket.IO", color: "#343A40" },
          ]}
          className={`projects ${props.className}`}
        />
        <Project
          url="https://www.youtube.com/embed/r7t0ZNg5M6M"
          title="E CLASSROOM"
          descriptions={[
            " Login/Register Feature, allow users to Create Room and choose between Game Room and Class Room (Only the Instructor can create a Class Room)",
            "Game Room - multiplayer drawing and guessing game Each game has multiple timed rounds. In every round, one of the players draws a chosen word while others guess what the word is for points. The player with the most points at the end of all the rounds wins!",
            "Class Room – It is an Online Blackboard that allows the instructor to display the lessons he/she created in the app. The instructor can also draw on the blackboard while displaying the lessons.",
          ]}
          tech={[
            { name: "HTML", color: "#C7252E" },
            { name: "CSS", color: "#DD8834" },
            { name: "React Js", color: "#1572B6" },
            { name: "React Material UI", color: "#6058F7" },
            { name: "Node JS", color: "#148248" },
            { name: "Express", color: "#C7252E" },
            { name: "Socket IO", color: "#DD8834" },
            { name: "MongoDB", color: "#1572B6" },
          ]}
          className={`projects ${props.className}`}
        />
      </div>
    </div>
  );
};

export default Projects;
