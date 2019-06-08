import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import requirementsimg from '../imgs/requirementsimg.png';

const Requirements = () => {
  return (
    <div className="requirements">
      <h1>General requirements for the test task</h1>
      <Container>
        <Row>
          <Col lg="6">
            <p>
              Users want to find answers to their questions quickly and data
              shows that people really care about how quickly their pages load.
              The Search team announced speed would be a ranking signal for
              desktop searches in 2010 and as of this month (July 2018), page
              speed will be a ranking factor for mobile searches too. If you're
              a developer working on a site, now is a good time to evaluate your
              performance using our speed tools. Think about how performance
              affects the user experience of your pages and consider measuring a
              variety of real-world user-centric performance metrics. Are you
              shipping too much JavaScript? Too many images? Images and
              JavaScript are the most significant contributors to the page
              weight that affect page load time based on data from HTTP Archive
              and the Chrome User Experience Report - our public dataset for key
              UX metrics as experienced by Chrome users under real-world
              conditions.
            </p>
          </Col>
          <Col lg={{ size: '4', offset: '1' }}>
            <img src={requirementsimg} alt="requirementsimg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Requirements;
