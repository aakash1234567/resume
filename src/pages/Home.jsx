import React, { useEffect, useState, Suspense, lazy } from "react";
import AOS from "aos";
import Typed from "react-typed";
import "aos/dist/aos.css";
import ProfilePic from "../img/profile_pic.png";
import Spider from "./Spider";
import Robot from "./Robot";
import SocialPerson from "./SocialPerson";
import Atropos from "atropos/react";
const Spline = lazy(() => import("@splinetool/react-spline"));
import { ClimbingBoxLoader } from "react-spinners";

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
  "Sequelize",
  "Ionic",
  "Rich Text Editors (Quill, CKEditor, etc)",
  "Flask/Django (Beginner)",
  "Image and Video Processing",
  "Machine Learning",
];
const databases = ["MongoDB", "MySQL", "PostgreSQL"];
const hardwareSkills = ["Microcontrollers"];

const Loading = () => {
  return <ClimbingBoxLoader color="#36d7b7" />;
};

const Card = () => {
  return (
    <Atropos className="card-atropos">
      <div className="card">
        <div className="card-header">
          <h2>Project 1</h2>
        </div>
        <div className="card-links">
          <button type="button">Check Live</button>
          <button type="button">Github</button>
          <button type="button">Gallery</button>
        </div>
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas, voluptatibus. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vel quisquam consequuntur rerum eos omnis ut.
            Ipsum consectetur non architecto, optio officia facere nulla laborum
            at dolores, repudiandae vero esse omnis.
          </p>
        </div>
      </div>
    </Atropos>
  );
};

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
        <div className="cards-container">
          <Card />
        </div>
      </div>
      <Loading />
      <Suspense fallback={<Loading />}>
        <div className="design">
          <Spline scene="https://prod.spline.design/oABiyeWN8CC7OTzx/scene.splinecode" />
        </div>
      </Suspense>
    </>
  );
};

export default Home;
