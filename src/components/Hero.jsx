import React from 'react';
import { Row, Container, Col } from 'reactstrap';

const Hero = () => (
  <div className="hero">
    <Container>
      <Row>
        <Col lg="5">
          <h1>Test assignment for Frontend Developer position</h1>
          <p>
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository. Please be patient, we
            consider and respond to every application that meets minimum
            requirements. We look forward to your submission. Good luck!
          </p>
          <button type="button" className="btn">
            Sign Up
          </button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Hero;
