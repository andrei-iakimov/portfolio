import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import monstersRolodex from "../assets/img/monsters-rolodex.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import wip from "../assets/img/work-in-progress.png";

export const Projects = () => {

  const projects = [
    {
      title: "Mosters Rolodex",
      description: "Simple React App to display a list of monsters",
      imgUrl: monstersRolodex,
      redirectUrl: "https://andrei-iakimov.github.io/monsters-rolodex/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                  A collection of my work showcasing creativity, technical skills, and problem-solving. 
                  From interactive experiences to practical solutions, each project highlights my passion for building 
                  and delivering quality results.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Games</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Web</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tools</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <div className="wip-container">
                      <img src={wip} alt="Work in Progress" />
                      <h3>Work in Progress</h3>
                      <p>Stay tuned for more updates!</p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                      <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                      <div className="wip-container">
                          <img src={wip} alt="Work in Progress" />
                          <h3>Work in Progress</h3>
                          <p>Stay tuned for more updates!</p>
                      </div>
                    
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
