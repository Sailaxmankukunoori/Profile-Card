import React, { StrictMode } from "react";
import ReactDom from 'react-dom/client';
import "./styles.css";

const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
      skill: "Web Developer ",
      level: "advanced",
      color: "#C3DCAF"
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
        skill: "Java",
        level: "advanced",
        color: "green"
    },
    {
        skill: "Spring-Boot",
        level: "advanced",
        color: "grey"
    },
    {
        skill: "Rest-API's",
        level: "advanced",
        color: ""
    }

  ];

function App(){
    return (
        <center>
            <div className="card">
            <Avatar />
            <div>
                <Intro />

                <Skillset />
            </div>
        </div>
        </center>
        
    );
}

function Avatar(){
    return <img src="WhatsApp Image 2024-01-23 at 17.20.50_b8f0a19e.jpg" alt="logo" className="avatar"/>
}

function Intro(){
    return(
        <div className="data">
            <h2>Sai Laxman</h2>
            <b>Full Stact Developer</b>
            <p>
            Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
            </p>

        </div>
    );
}

function Skillset(){
    return(
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill skill={skill.skill} color={skill.color} level={skill.level} />
            ))}
        </div>
    );
}

function Skill(props){
    return(
        <div className="skill" style={{backgroundColor: props.color}}>
            <span>{props.skill}</span>
            <span>{props.name}</span>
            <span>
                {props.level === "beginner" && "👶"}
                {props.level === "intermediate" && "👍"}
                {props.level === "advanced" && "💪"}
            </span>
        </div>

    );
}

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
    
)




// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./styles.css";

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         {/* Should contain one Skill component
//         for each web dev skill that you have,
//         customized with props */}
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Jonas Schmedtmann</h1>
//       <p>
//         Full-stack web developer and teacher at Udemy. When not coding or
//         preparing a course, I like to play board games, to cook (and eat), or to
//         just enjoy the Portuguese sun at the beach.
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skill="React" emoji="💪" color="blue" />
//       <Skill skill="HTML+CSS" emoji="💪" color="orange" />
//       <Skill skill="JavaScript" emoji="💪" color="yellow" />
//       <Skill skill="Svelte" emoji="👶" color="orangered" />
//     </div>
//   );
// }

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
