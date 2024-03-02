import { Button, Col, Row } from "react-bootstrap";

const Collaborate = () => {
  return (
    <div>
      <p>YOUR IDEA STARTS HERE</p>
      <h2>Collaborate without constraints</h2>
      <Row>
        <Col>
          <h4>Free forever</h4>
          <p>
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our pricing plans for more features.
          </p>
        </Col>
        <Col>
          <h4>Easy integrations</h4>
          <p>
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our Marketplace .
          </p>
        </Col>
        <Col>
          <h4>Security first</h4>
          <p>
            We treat your data like you would — with the utmost care. We follow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more at our Trust Center .
          </p>
        </Col>
      </Row>
      <Button>Sign up free</Button>
    </div>
  );
};

export default Collaborate;
