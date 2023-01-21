import React from "react";
import resume from "./PraveenAS_resume.pdf";

const Right = () => {
  return (
    <div className="right">
      <div className="right-inner">
        <div className="introduction">
          <h4>Intro</h4>
          <div className="content">
            <p className="intro-p">
              I'm a Electrical and Electronics Engg graduate who found a passion
              for coding. As a junior software engineer ,I am a coding
              enthusiast who is always eager to learn new technologies and
              programming languages. I have experience with Java, Python, and
              C++ and have dabbled in web development using HTML, CSS, and
              JavaScript. In my free time, I enjoy building personal projects
              and experimenting with different frameworks. I am a quick learner
              and enjoy a good challenge. I am a team player and am able to work
              well under pressure. I am excited to find an opportunity where I
              can apply my skills and continue to develop as a developer, and
              also to have fun doing it.
            </p>
            <p className="intro-p">
              I enjoy being the bridge between engineering and design, and feel
              right at home as a front end engineer. I&#39;m experienced in
              developing and designing products for the web, from simple landing
              pages to full-fledged web apps.
            </p>
            <span className="intro-p job-pls">
              I'm currently looking fo opportunites that challenge me and help
              me grow my career.
            </span>
          </div>
        </div>
        <div className="skills">
          <h4>Skills</h4>
          <div className="content">
            <div className="skill-category">
              <strong>Languages: &nbsp;</strong>
              <span>JavaScript (ES6), HTML5, CSS3, Java, Figma</span>
            </div>
            <div className="skill-category">
              <strong>Libraries &amp; Frameworks: &nbsp;</strong>
              <span>
                Bootstrap,Node, MongoDB,Spring-boot, Express, React,Tailwind CSS
              </span>
            </div>
            <div className="skill-category">
              <strong>Tools: &nbsp;</strong>
              <span>
                Git &amp; Github, Command Line, Postman, Adobe Photoshop, Figma
              </span>
            </div>
          </div>
        </div>
        <div className="education">
          <h4>Education</h4>
          <div className="content">
            <div className="College">
              <a href="http://ceadoor.ihrd.ac.in/" target="_blank">
                College of Engineering Adoor
              </a>
            </div>
            <div className="major">
              <strong>Major:</strong> Electrical and Electronics
            </div>
            <div className="minor">
              <strong>Minor:</strong> Industrial Automation
            </div>
            <div className="grad-date"> Graduation: Sep 2020</div>
          </div>
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <div className="content">
            <div className="exp-item">
              <div className="job">
                <a
                  className="company"
                  href="https://www.simplilearn.com/"
                  target="_blank"
                >
                  SimpliLearn
                </a>
                <div className="duration">Nov 2021 &mdash; Jul 2022</div>
              </div>
              <div className="title">Full Stack Developement Intern</div>
              <ul className="description">
                <li>Learned Data structure and Algorithm in deep level.</li>
                <li>
                  Technologies learned Core Java,Spring
                  boot,HTML/CSS,React,Javascript.
                </li>
                <li>Learned software development principles</li>
              </ul>
            </div>
            <div className="exp-item">
              <div className="job">
                <a
                  className="company"
                  href="https://federalsoftsystems.com/"
                  target="_blank"
                >
                  FederalSoftSystems
                </a>
                <div className="duration">Sep 2022 &mdash; Nov 2022</div>
              </div>
              <div className="title">Frontend Developement Intern</div>
              <ul className="description">
                <li>
                  Worked as a Frontend developer for a product named MagikMat
                  which is an interactive learning website for kids
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects">
          <h4>Projects</h4>
          <div className="content">
            <div className="project-item">
              <a
                className="project-title"
                href="https://Praveen-anirudh.netlify.app"
                target="_blank"
              >
                Personal Portfolio
              </a>
              <p className="project-desc">
                Portfolio site designed and coded from scratch to showcase my
                skills and past work
              </p>
            </div>
            <div className="project-item">
              <a
                className="project-title"
                href="https://mania-movie-app.netlify.app"
                target="_blank"
              >
                Movie Suggestion Website
              </a>

              <p className="project-desc">
                Fully functioning movie app for movie suggestions with firebase
                authentication. Used React js and it's libraries for building
                the entire application. TMDB API is used for fetching the data.
              </p>
            </div>
            <div className="project-item">
              <a
                className="project-title"
                href="https://jobs-find.netlify.app"
                target="_blank"
              >
                Job Searching Website
              </a>
              <p className="project-desc">
                Developed a user-interface using React for Job Searching App.
                React is used as a front-end library and Tail-wind is used for
                styling
              </p>
            </div>
            <div className="project-item">
              <a
                className="project-title"
                href="https://superchat-firebase-react.netlify.app"
                target="_blank"
              >
                Real Time Group Chat Application
              </a>
              <p className="project-desc">
                Created an app for real time chatting with friends and family in
                a global chat room.Tech stack used is React, MUI, Firebase
              </p>
            </div>
          </div>
        </div>
        <a className="resume" href={resume} download target="_blank">
          <div className="resume-link">Grab a PDF of my full resume</div>
        </a>
      </div>
    </div>
  );
};

export default Right;
