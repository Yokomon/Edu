import React from "react";
// import PropTypes from "prop-types";
import { Container} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <div className="copyright">
            © {new Date().getFullYear()} made by{" "}
            <a
              href="https://learnian.com"
              rel="noopener noreferrer"
              target="_blank"
            >
             Learnian
            </a>{" "}
            for a better Edu Experience.
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
