import { Container } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <Container
      fluid
      className="bg-body"
      style={{
        minHeight: "10vh",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 0px 1000px rgba(128, 0, 128, 0.75)", // Modified shadow color
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3 style={{ marginBottom: "0.25em", marginTop: "0.5em" }}>My Socials</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="https://github.com/JasonIsHydrated" style={{ margin: "0.75em" }}>
            <FaGithub
              style={{
                height: "2.5em", // Updated height
                width: "2.5em", // Updated width
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </a>
          <a href="https://twitter.com" style={{ margin: "0.75em" }}>
            <FaTwitter
              style={{
                height: "2.5em", // Updated height
                width: "2.5em", // Updated width
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </a>
          <a href="https://www.instagram.com/muyjason/" style={{ margin: "0.75em" }}>
            <FaInstagram
              style={{
                height: "2.5em", // Updated height
                width: "2.5em", // Updated width
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/jason-herrmann-45732123a/" style={{ margin: "0.75em" }}>
            <FaLinkedin
              style={{
                height: "2.5em", // Updated height
                width: "2.5em", // Updated width
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </a>
          <a href="https://facebook.com" style={{ margin: "0.75em" }}>
            <FaFacebook
              style={{
                height: "2.5em", // Updated height
                width: "2.5em", // Updated width
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Footer;
