import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner.PNG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    //const [index, setIndex] = useState(1);
    const toRotate = [ "Games", "Web", "Mobile", "Developer." ];
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        //setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        //setIndex(1);
        setDelta(500);
        } else {
        //setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi,I'm Andrei! I am `} <span className="txt-rotate" ><span className="wrap">{text}</span></span></h1>
                  <p>
                    Hi I am experienced Full Stack Developer with 7+ years in web and mobile development. I am passionate about 
                    building scalable, high-quality software using the best software engineering and design patterns. A team 
                    player with a strong belief in synergy, always eager to learn and explore new technologies.   
                  </p>
                  <button onClick={() => {
                      document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
                    }}>Let’s Connect <ArrowRightCircle size={25} />
                  </button>
              </div>
          </Col>
          <Col className="banner_img" xs={12} md={6} xl={5}>
                <div>
                  <img src={headerImg} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
    );
};