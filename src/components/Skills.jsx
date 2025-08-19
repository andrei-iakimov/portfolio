import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import SkillCircle from "./SkillCircle";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const skills = [
  { label: "React", percentage: 90 },
  { label: "Redux", percentage: 85 },
  { label: "AngularJS", percentage: 80 },
  { label: "C#", percentage: 90 },
  { label: ".NET Core", percentage: 95 },
  { label: "ASP.NET", percentage: 95 },
  { label: ".NET MAUI", percentage: 80 },
  { label: "Flutter", percentage: 90 },
  { label: "SQL Server", percentage: 90 },
  { label: "PostgreSQL", percentage: 80 },
  { label: "Azure", percentage: 85 },
  { label: "AWS", percentage: 75 },
  { label: "TDD", percentage: 85 },
  { label: "Agile", percentage: 90 },
];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I’m always learning and exploring new technologies. Here are the core skills I’ve mastered and continue to refine through real projects.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {skills.map((skill) => (
                                <SkillCircle
                                    key={skill.label}
                                    label={skill.label}
                                    percentage={skill.percentage}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
};