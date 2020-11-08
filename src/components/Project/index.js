import React from "react";
import projects from "../../projects.json";
import { Card } from 'react-bootstrap';
import './index.css';

function Project() {
  return (
    projects.map(project =>
      <div className="col-md-4 col-lg-3 float-sm-left">
        <Card id="cardId">
        <a href={project.github}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title id="title">{project.name}</Card.Title>
            <Card.Text id="cardText">{project.description}</Card.Text>
            <a href={project.heroku} id="herokuLink">Check it out</a>
          </Card.Body>
          </a>
        </Card>
      </div>
    )
  )
}

export default Project;