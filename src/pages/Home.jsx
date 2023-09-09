import React, { useEffect } from "react";
import AOS from "aos";
import Typed from "react-typed";
import "aos/dist/aos.css";
import ProfilePic from "../img/profile_pic.png";
import Spider from "./Spider";
import Robot from "./Robot";
import SocialPerson from "./SocialPerson";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
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
        <div className="featured">
          <h1>Skills</h1>
        </div>
        <div className="featured">
          <h1>Featured Projects</h1>

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
                  Plan International is a web application that helps you plan
                  your travel.
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
                  Plan International is a web application that helps you plan
                  your travel.
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
