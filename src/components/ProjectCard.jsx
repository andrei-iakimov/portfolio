import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, redirectUrl  }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          <a href={redirectUrl} target="_blank" className="proj-link">View Project</a>
        </div>
      </div>
    </Col>
  )
}
