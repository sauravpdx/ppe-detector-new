import React from "react";
import "../styles/Contact.css";

const DeveloperCard = ({
  name,
  university,
  degree,
  githubUrl,
  linkedinUrl,
}) => {
  return (
    <div className="developer-info-col">
      <h3 className="developer-name">{name}</h3>
      <h5>{university}</h5>
      <h6>{degree}</h6>
      <a href={githubUrl}>GITHUB</a>
      <br />
      <a href={linkedinUrl}>LINKEDIN</a>
    </div>
  );
};

export default DeveloperCard;
