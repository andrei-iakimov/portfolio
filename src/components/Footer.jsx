import { Container, Row, Col } from "react-bootstrap";
import linkedin from '../assets/img/nav-linkedin.svg';
import github from '../assets/img/nav-github.svg';


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
        <Container>
            <Row className="align-items-center">
                <p className="copyright">Copyright {currentYear}. All Rights Reserved.</p>
            </Row>
        </Container>
        </footer>
    )
}
