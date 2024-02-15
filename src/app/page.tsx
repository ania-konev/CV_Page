"use client";

import { Col, Row, Button, Card } from "antd";
import "animate.css";

const HomePage: React.FC = () => {
  return (
    <Row className="layout" gutter={[0, 0]}>
      <Col className="columns" span={7}>
        <div className="container">
          <div>
            <Button
              className="buttons animate__animated animate__jackInTheBox"
              type="primary"
            >
              Skills
            </Button>
          </div>
          <div>
            <Button
              className="buttons animate__animated animate__jackInTheBox"
              type="primary"
            >
              Projects
            </Button>
          </div>
        </div>
      </Col>
      <Col className="columns" span={10}>
        <Card bordered={false} className="card">
          <div className="name">Anna Konefał</div>
          <div className="welcome-note">Welcome to my CV page!</div>
          <div className="about-me-note">
            I am in the final year of my PhD in chemistry at the
            University&nbsp;of&nbsp;Warsaw.
            <div>
              From year and a half, I have been self-educating myself to become
              a Junior&nbsp;JS&nbsp;Frontend&nbsp;Developer.
            </div>{" "}
          </div>
          <div className="instructions-note">
            Use the buttons to go forward to the desired/particular page.
          </div>
        </Card>
        <div>
          <Button
            className="contact-button animate__animated animate__jackInTheBox"
            type="primary"
          >
            Contact
          </Button>
        </div>
      </Col>
      <Col className="columns" span={7}>
        <div className="container">
          <div>
            <Button
              className="buttons animate__animated animate__jackInTheBox"
              type="primary"
            >
              Courses
            </Button>
          </div>
          <div>
            <Button
              className="buttons animate__animated animate__jackInTheBox"
              type="primary"
            >
              Publications
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HomePage;
