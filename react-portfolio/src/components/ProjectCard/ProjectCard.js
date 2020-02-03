import React from "react";
import "./ProjectCard.css";




function ProjectCard(props) {
  console.log({props} )
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.title}
            </li>
          </ul>
            <li>
                <a href={props.githubLink}><strong>Link to Github Repo</strong></a>
            </li>
            
        </div>
        
      </div>
    );
  }
  
  export default ProjectCard;