import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import GradientText from "../Prefabs/GradientText";
import "../../animations.css";

const LandingPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      fluid
      className="flex justify-content-end"
      style={{ minHeight: "84vh" }}
    >
      <Row className="align-items-end" style={{ minHeight: "84vh" }}>
        <Col
          style={{ minHeight: "76vh" }}
          className={`d-flex m-5 p-5 flex-column  ${
            isLoaded ? "fade-in  slide-in-right" : ""
          }`}
        >
          <div
            className={`text-line display-1 font-weight-bold ${
              isLoaded ? "fade-in slide-in-right" : ""
            }`}
            style={{ fontFamily: "Archivo Black, sans-serif" }}
          >
            Hello You!
          </div>
          <div
            className={`text-line display-1 font-weight-bold ${
              isLoaded ? "fade-in slide-in-right" : ""
            }`}
            style={{ fontFamily: "Archivo Black, sans-serif" }}
          >
            I'm <GradientText>Jason</GradientText>,
          </div>
          <div
            className={`text-line display-1 font-weight-bold ${
              isLoaded ? "fade-in slide-in-right " : ""
            }`}
            style={{ fontFamily: "Archivo Black, sans-serif" }}
          >
            I do stuff.
          </div>
        </Col>
        <Col className="m-0 p-0">
          pls fix image (fast)
          <img
            src="/LandingPage.png"
            className={`img-fluid ${
              isLoaded ? "fade-in slide-in-left-fade" : ""
            }`}
            alt="Landing Page"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
