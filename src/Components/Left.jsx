import React from "react";
import { data } from "./deatils";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Left = () => {
  return (
    <div className="left">
      <div className="bg-img"></div>
      <div className="left-inner">
        <div className="info">
          <h2 className="name">{data.name}</h2>
          <div className="subtext">{data.subtext}</div>
          <div className="jobStatus">{data.jobStatus}</div>
          <div className="social-links">
            <a href={data.instaURL} target="_blank">
              <i className="fa ">
                <FaInstagram />
              </i>
            </a>
            <a href={data.githubURL} target="_blank">
              <i className="fa ">
                <FaGithub />
              </i>
            </a>
            <a href={data.linkedinURL} target="_blank">
              <i className="fa ">
                <FaLinkedin />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
