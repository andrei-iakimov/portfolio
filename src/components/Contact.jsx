import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Toaster, toast } from "react-hot-toast";


export const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [errors, setErrors] = useState({});


  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
    
    if (errors[category]) {
      setErrors({ ...errors, [category]: "" });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setButtonText("Sending...");
    
    let response = await fetch("https://formcarry.com/s/5f1phGe9Boi", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      toast.success("Message sent!");
    } else {
      toast.error("Something went wrong.");
    }
  };
  const validateForm = () => {
  let newErrors = {};
  if (!formDetails.name.trim()) newErrors.name = "Name is required";
  if (!formDetails.email.trim()) newErrors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDetails.email)) newErrors.email = "Invalid email";
  if (!formDetails.message.trim()) newErrors.message = "Message is required";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img  src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Row className="frm-row">
                    <Col size={12} className="px-1">
                      <input id="name" className={errors.name ? "error" : ""} type="text" value={formDetails.firstName} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} />
                      {errors.name && <small className="text-danger">{errors.name}</small>}
                    </Col>
                  </Row>
                  <Row className="frm-row">
                    <Col size={12} sm={6} className="px-1">
                      <input className={errors.email ? "error" : ""} id="email" type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      {errors.email && <small className="text-danger">{errors.email}</small>}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id="tel" type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                  </Row>
                  
                  <Row className="frm-row">
                    <Col size={12} className="px-1">
                      <textarea className={errors.message ? "error" : ""} id="contact_msg" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      {errors.message && <small className="text-danger">{errors.message}</small>}
                      
                    </Col>
                  </Row>
                  <Row className="frm-row">
                    <Col size={12} className="px-1">
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                  </Row>
                  
                </Row>
              </form>
            </div>
            <Toaster />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
