import React, { useEffect } from "react";
import AOS from "aos";
import Typed from "react-typed";
import "aos/dist/aos.css";
import ProfilePic from "../img/profile_pic.png";
import Spider from "./Spider";
import Robot from "./Robot";
import SocialPerson from "./SocialPerson";
import Atropos from "atropos/react";
import "atropos/css";

const experiences = [
  {
    company: "TCS, Pune",
    position: "Systems Engineer",
    date: "July 2021 - Present",
    projects: [
      {
        name: "NewsCorp Reel Project",
        description:
          "As a Backend Engineer I am involved in the development of the backend driven Reel framework which is used by International News Brands as a node package for serving news content.",
        tech: "Nodejs, Redis, Hugo, Performance Testing",
      },
      {
        name: "HyperScaler Leads Portal Project",
        description:
          "As an Engineer I am responsible for development of the Dashboard for TCS Leads to provide insights on available opportunities and do CRUD operations over the dataset.",
        tech: "React, Nodejs, MySQL, Sequelize, HighCharts",
      },
    ],
  },
  {
    company: "eYantra IIT Bombay, Bombay",
    position: "Research Intern",
    date: "May 2020 - July 2020",
    projects: [
      {
        name: "Development of desktop App",
        description:
          "Development of desktop App with Vue-Electron and django framework for mailing services and analytics.",
        tech: "Vuejs, Electron, Django, GCP",
      },
    ],
  },
];
const programmingLanguages = ["Python", "Javascript"];
const technologiesFrameworks = [
  "MERN",
  "Ionic",
  "Flask/Django (Beginner)",
  "Machine Learning",
  "Image and Video Processing",
  "Hugo",
  "Sequelize",
  "Rich Text Editors (Quill, CKEditor, etc)",
];
const databases = ["MongoDB", "MySQL", "PostgreSQL"];
const hardwareSkills = ["Microcontrollers"];

const JobExperience = (props) => {
  return (
    <div className="job-experience">
      <h3>{props.company}</h3>
      <p>{props.position}</p>
      <p>{props.date}</p>
      <ul>
        {props.projects.map((project, index) => (
          <li key={index}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.tech}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="banner_div" highlight={false}>
        <span className="banner_span_0">
          <Typed
            strings={["Hello,", "नमस्ते,", "Bonjour,", "Ciao,"]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={5}
            loop
            smartBackspace
          />
          <p>
            I'm Aakash Khandelwal, a full-stack web developer. Welcome to my
            online portfolio.
          </p>
        </span>
        <span className="banner_span_1">
          <Robot />
        </span>
        <span className="banner_span_2">
          <Spider />
        </span>
        <span className="banner_span_3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png "
            alt="profile Img"
          />{" "}
        </span>
        <span
          className="social-icons"
          onMouseEnter={(e) => {
            document.getElementById("hanging-svg").style.transform =
              "translateX(10px)";
            document.getElementById("hanging-svg").style.transition =
              ".5s ease-in-out";
          }}
          onMouseLeave={(e) => {
            document.getElementById("hanging-svg").style.transform =
              "translateX(0px)";
          }}
        >
          <SocialPerson />
          <a>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
              alt=""
            />
          </a>{" "}
          <a>
            <img
              src="https://cdn-icons-png.flaticon.com/512/11023/11023941.png"
              alt=""
            />
          </a>
          <a>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png"
              alt=""
            />
          </a>
        </span>
      </div>
      <div className="body-content">
        <div className="left-content">
          <div className="skills">
            <h1>Education</h1>
            <p>RTU, Kota - B. Tech (ECE)</p>
            <p>AUGUST 2017 - AUGUST 2021</p>
            <p>CGPA: 8.6</p>
            <br />
            <p>St. Paul’s Sr. Sec. School, Kota</p>
            <p>12th (CBSE), 2017: Percentage: 88.6%</p>
            <p>10th (CBSE), 2015: CGPA: 9.2</p>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <ul>
                {programmingLanguages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3>Technologies/Frameworks</h3>
              <ul>
                {technologiesFrameworks.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <ul>
                {databases.map((database, index) => (
                  <li key={index}>{database}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category">
              <h3>Hardware Skills</h3>
              <ul>
                {hardwareSkills.map((hardware, index) => (
                  <li key={index}>{hardware}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="featured">
            <h1>Experience</h1>
            {experiences.map((experience, index) => (
              <JobExperience key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
      <div className="other-content">
        <h1>Personal Projects</h1>
        <div
          className="featured-content"
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="card">
            <div className="card-left">
              <h3>Plan International</h3>
              <p>
                Plan International is a web application that helps you plan your
                travel.
              </p>
            </div>
            {/* <img src={PlanInternationalImg} alt="Plan International" /> */}{" "}
            <div className="card-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              dolore. Repellat suscipit est magni ullam nulla sequi deserunt
              incidunt quae rem quisquam eius vitae sint dolore omnis, quaerat
              optio! Sunt.
            </div>
          </div>{" "}
        </div>
        <div
          className="featured-content"
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="card">
            {/* <img src={PlanInternationalImg} alt="Plan International" /> */}{" "}
            <div className="card-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              dolore. Repellat suscipit est magni ullam nulla sequi deserunt
              incidunt quae rem quisquam eius vitae sint dolore omnis, quaerat
              optio! Sunt.
            </div>
            <div className="card-left">
              <h3>Plan International</h3>
              <p>
                Plan International is a web application that helps you plan your
                travel.
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
