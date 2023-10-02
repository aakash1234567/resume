import React, { useEffect, useState, Suspense, lazy } from "react";
import AOS from "aos";
import Typed from "react-typed";
import "aos/dist/aos.css";
import ProfilePic from "../img/profile_pic.png";
import Spider from "./Spider";
import Robot from "./Robot";
import SocialPerson from "./SocialPerson";
import Atropos from "atropos/react";
import Spline from "@splinetool/react-spline";
import { ClimbingBoxLoader } from "react-spinners";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "atropos/css";

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
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
  "Docker",
  "Firebase",
  "Flask/Django (Beginner)",
  "Image and Video Processing",
  "Machine Learning",
];
const databases = ["MongoDB", "MySQL", "PostgreSQL", "Redis"];
const hardwareSkills = ["Microcontrollers"];
const personalProjects = [
  {
    title: "Live Image Capturing Desktop App to generate Huge dataset",
    body: (
      <>
        <p>
          Developed a versatile desktop application for live image capturing,
          catering to the generation of extensive datasets for model training.
          <br />
          The app offers a range of features:{" "}
        </p>
        <ul>
          <li>exporting images as PNG or JPG</li>
          <li>grayscale capture, image flipping</li>
          <li>autonomous multi-image capture at predefined intervals</li>
          <li>change brightness and contrast</li>
        </ul>
      </>
    ),
    tech: ["Python", "Tkinter", "live image/video processing"],
    github: "https://github.com/aakash1234567/image_dataset_generator",
    site: "",
    gallery: ["/resume/img/image_generator_ss.png"],
  },
  {
    title: "Live Hand Gesture recognition Desktop App",
    body: (
      <>
        <p>
          Developed a robust desktop application, leveraging Python, Tkinter,
          and machine learning, to recognize sign language alphabets through
          live hand gesture analysis. This innovative solution utilizes
          real-time image and video processing, allowing users to communicate
          effectively using sign language gestures. It provides an inclusive and
          accessible means of communication for the hearing-impaired community.
        </p>
      </>
    ),
    tech: ["Python", "Tkinter", "live image/video processing", "ML"],
    github: "",
    site: "https://www.publications.scrs.in/chapter/978-81-95502-01-1/10",
    gallery: [],
  },
  {
    title: "Supply Bot",
    body: (
      <>
        <p>
          This project was from a 7 month long competition of eYantra IIT
          Bombay. We were required to detect the environment ie. arena ,design
          the fully functional bot and according to some constraints given to us
          we have to supply(hit) the aids(coins) to the center of arena. A
          camera being mounted at the top is used to guide the bot.
        </p>
      </>
    ),
    tech: [
      "Live Image and Video Processing",
      "Python",
      "Embedded C",
      "Microcontrollers",
    ],
    github: "",
    site: "",
    gallery: [
      "https://www.youtube.com/embed/ks7AAVTwx0o",
      "https://www.youtube.com/embed/R5BXwXXFK5s",
      "/resume/img/supply_bot1.jpeg",
      "/resume/img/supply_bot2.jpeg",
      "https://www.youtube.com/embed/dxbtqosUrfo",
    ],
  },
  {
    title: "Automated Google meet class attending bot",
    body: (
      <>
        <p>
          Google Meet attending Bot is an automated script to attend google
          meets, it also listens to users speech and can be used to respond back
          if your name is called. Feel free to explore. <br />
          Features:
        </p>
        <ul>
          <li>Join Google Meet</li>
          <li>Disable Camera</li>
          <li>Disable Mic</li>
          <li>Listen to Audio and respond to specific scenarios</li>
        </ul>
      </>
    ),
    tech: ["Python", "Selenium"],
    github: "https://github.com/aakash1234567/gmeet_attending_bot",
    site: "",
    gallery: [],
  },
  {
    title: "Test Case Generator",
    body: (
      <>
        <p>
          Test Case Generator is an opensource tool to create Test cass of
          desired type to use in Competitive coding using a simple, easy-to-use
          interface. You can create arrays, strings, char patterns and use a
          variety of handy features like copy, regenerate, change constraints.
        </p>
      </>
    ),
    tech: ["React", "Redux"],
    github: "https://github.com/aakash1234567/test_case_generator",
    site: "https://aakash1234567.github.io/test_case_generator/",
    gallery: [],
  },
  {
    title: "Suraksha Chakra NGO Website and CMS Dashboard",
    body: (
      <>
        <p>
          A platform dedicated to women's safety. Empowering women to register
          complaints and track their progress, the system promotes transparency
          and accountability. Additionally, it facilitates the creation of
          informative blogs, enables the upload of essential tools and reports
          for public awareness, and offers a comprehensive solution for
          addressing women's safety concerns.
        </p>
      </>
    ),
    tech: ["React", "Nodejs", "Sequelize", "MySQL", "JWT"],
    github: "",
    site: "https://surakshachakra.myambar.org/",
    gallery: [],
  },
  {
    title: "Plan International Hub Website and CMS Dashboard",
    body: (
      <>
        <p>
          A fully dynamic web solution with separate CMS dashboard Empowering
          users to craft and publish blogs, articles, and engage in real-time
          group chats. Offers seamless management of all contents like events,
          webinars, campaigns and having robust role-based content management,
          ensuring a secure, inclusive, and interactive digital ecosystem. This
          project underscores my prowess in full-stack development.
        </p>
      </>
    ),
    tech: ["React", "Nodejs", "Sequelize", "MySQL", "PassportJs"],
    github: "",
    site: "https://ovochub.org/",
    gallery: [],
  },
  {
    title: "Smart Home Automation",
    body: (
      <>
        <p>
          Designed a functional Smart Home Automation model, accessible through
          voice commands, a website, and an Android app. Additionally, we
          created a dynamic IoT website for issuing instructions and remotely
          controlling microcontrollers from any location.
        </p>
      </>
    ),
    tech: ["IoT", "Microcontroller", "Embedded C", "HTML/CSS", "JS"],
    github: "",
    site: "",
    gallery: [
      "https://www.youtube.com/embed/ws6J88ETLpI",
      "/resume/img/home_automation1.jpg",
      "/resume/img/home_automation2.jpeg",
    ],
  },
  {
    title: "Opencv Fun",
    body: (
      <>
        <p>
          I've created a couple of entertaining OpenCV projects. In the first
          one, I used object detection and motion tracking to play the Chrome
          dino game. The second project involves making a person appear
          invisible by detecting their skin color and displaying their borders
          in a separate frame.
        </p>
      </>
    ),
    tech: ["React", "Nodejs", "Sequelize", "MySQL", "PassportJs"],
    github: "",
    site: "https://ovochub.org/",
    gallery: [
      "https://www.youtube.com/embed/A7Od4vp37a4",
      "https://www.youtube.com/embed/__3-nF-aGL0",
    ],
  },
  {
    title: "API for decrypting password protected PDF",
    body: (
      <>
        <p>
          As the name suggests API for decrypting password protected Pdf was
          hosted on heroku using docker container.
        </p>
      </>
    ),
    tech: ["Python", "Flask", "Docker", "Heroku"],
    github: "https://github.com/aakash1234567/PDFOperator",
    site: "",
    gallery: [],
  },
];

const Loading = () => {
  return <ClimbingBoxLoader color="#36d7b7" />;
};

const Card = ({ onOpenModal, ...details }) => {
  return (
    <div className="card-rounded">
      <div className="card">
        <div className="card-header">
          <h2>{details.title}</h2>
        </div>
        <div className="card-links">
          {details.site && (
            <a href={details.site} target="_blank">
              Check Live
            </a>
          )}
          {details.github && (
            <a href={details.github} target="_blank">
              Code
            </a>
          )}
          {!!details.gallery.length && (
            <button
              type="button"
              onClick={() =>
                onOpenModal({ gallery: details.gallery, title: details.title })
              }
            >
              Gallery
            </button>
          )}
        </div>
        <div className="card-body">{details.body}</div>
        <div className="card-footer">
          {details.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>{" "}
    </div>
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
  const [show3d, setShow3d] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [openGalleryDisplay, setOpenGalleryDisplay] = useState({
    state: false,
    title: "",
    array: [],
  });

  const onOpenModal = ({ gallery, title }) =>
    setOpenGalleryDisplay({
      state: true,
      array: gallery,
      title,
    });
  const onCloseModal = () =>
    setOpenGalleryDisplay({
      state: false,
      array: [],
      title: "",
    });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (!show3d) setShowLoading(true);
  }, [show3d]);

  return (
    <>
      <Modal open={openGalleryDisplay.state} onClose={onCloseModal} center>
        <h2>{openGalleryDisplay.title}</h2>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {openGalleryDisplay.array.map((image, index) => (
            <SwiperSlide key={index}>
              {image.includes("embed") ? (
                <iframe
                  src={image}
                  title={openGalleryDisplay.title}
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={image} alt="" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Slider {...slickSettings}>
          {openGalleryDisplay.array.map((image, index) => (
            <div key={index}>
              {image.includes("embed") ? (
                <iframe
                  width="560"
                  height="315"
                  src={image}
                  title={openGalleryDisplay.title}
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={image} alt="" />
              )}
            </div>
          ))}
        </Slider> */}
      </Modal>
      <div className="btn-3d">
        <button type="button" onClick={() => setShow3d(!show3d)}>
          {show3d ? "Hide 3D" : "Show 3D (Experimental)"}
        </button>
        <a href="https://aakash1234567.github.io/resume_site" target="_blank">
          Visit v1
        </a>
      </div>
      {!show3d ? (
        <>
          <div className="banner_div">
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
              <a href="https://github.com/aakash1234567" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
                  alt=""
                />
              </a>{" "}
              <a
                href="https://stackoverflow.com/users/14900445/aakash-khandelwal"
                target="_blank"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/11023/11023941.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aakash-khandelwal-a700ab172/"
                target="_blank"
              >
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
              <div className="skills">
                <h1>Current Focused Skill Set</h1>
                <div className="skill-category">
                  <ul>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Nodejs</li>
                  </ul>
                </div>
                <h4
                  style={{
                    marginBottom: "0px",
                    color: "#d4ffd4",
                  }}
                >
                  Note: Being a Geek I am open to all new challenges
                </h4>
              </div>
            </div>
            <div className="right-content">
              <div className="featured">
                <h1>Experience</h1>
                {experiences.map((experience, index) => (
                  <JobExperience key={index} {...experience} />
                ))}
              </div>
              <div className="featured">
                <h1>Awards and Recognition</h1>
                <div className="job-experience">
                  <ul>
                    <li>
                      eYantra Robotics Competition IIT Bombay, 3rd position
                    </li>{" "}
                    <li>AZ-900: Microsoft Azure Fundamentals certified</li>{" "}
                    <li>
                      Coursera Machine Learning by Stanford University certified
                    </li>
                    <li>
                      MJF Code 19 Hackathon [The entry is recognized to be
                      amongst the Top 250 entries submitted during the
                      #MJFCODE19 Hackathon.]
                    </li>
                    <li>IoT challenge Exhibition, Runner-up</li>
                    <li>Robowar ,IGNUS’19 ,IIT Jodhpur[1st position]</li>
                    <li>Rajya Puraskar, Scouts</li>
                    <li>Robotics Club [Mentor]</li>
                    <li>Developers Students Club [Core Team Member]</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="other-content">
            <h1>Personal Projects</h1>
            <div className="cards-container">
              {personalProjects.map((project, index) => (
                <Card key={index} {...project} onOpenModal={onOpenModal} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="design">
          {showLoading && (
            <div>
              <Loading />
            </div>
          )}
          <Spline
            scene="https://prod.spline.design/oABiyeWN8CC7OTzx/scene.splinecode"
            onLoad={() => setShowLoading(false)}
            renderOnDemand={true}
          />
        </div>
      )}
    </>
  );
};

export default Home;
