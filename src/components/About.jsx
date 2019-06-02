import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/main.sass';

import aboutimg from '../imgs/about-img.png';
import html from '../imgs/html.svg';
import css from '../imgs/css.svg';
import javascript from '../imgs/javascript.svg';

const About = () => {
  return (
    <div className="about">
      <h2>Let's get ac quainted</h2>
      <Container className="about-first">
        <Row>
          <Col lg="4">
            <img src={aboutimg} alt="aboutimg" />
          </Col>
          <Col lg="8">
            <h3>I am cool frontend developer</h3>
            <p>
              When real users have a slow experience on mobile, they're much
              less likely to find what they are looking for or purchase from you
              in the future. For many sites this equates to a huge missed
              opportunity, especially when more than half of visits are
              abandoned if a mobile page takes over 3 seconds to load.
              <br />
              Last week, Google Search and Ads teams announced two new speed
              initiatives to help improve user-experience on the web.
            </p>
            <span className="sign-up">Sign Up</span>
          </Col>
        </Row>
      </Container>
      <h2>About my relationships with web-development</h2>
      <Container className="about-second">
        <Row>
          <Col lg="4">
            <img src={html} alt="html" />
            <h3>I'm in love with HTML</h3>
            <p>
              Hypertext Markup Language (HTML) is the standard markup language
              for creating web pages and web applications.
            </p>
          </Col>
          <Col lg="4">
            <img src={css} alt="css" />

            <h3>CSS is my best friend</h3>
            <p>
              Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML.
            </p>
          </Col>
          <Col lg="4">
            <img src={javascript} alt="javascript" />

            <h3>JavaScript is my passion</h3>
            <p>
              JavaScript is a high-level, interpreted programming language. It
              is a language which is also characterized as dynamic, weakly
              typed, prototype-based and multi-paradigm.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default About;