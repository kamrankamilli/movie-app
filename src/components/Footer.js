import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p>
              <FontAwesomeIcon size='sm' icon={faCopyright} /> 2020 Copyright | Kamran Kamilli
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
