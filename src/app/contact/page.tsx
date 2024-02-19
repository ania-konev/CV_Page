import { Col, Row, Card } from "antd";
import { FaCity } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const CoursePage: React.FC = () => {
  return (
    <Row className="layout" gutter={[0, 0]}>
      <Col span={24}>
        <Card bordered={false} className="route-card">
          <h1>Contact</h1>
          <p className="text-page-route">
            <FaCity className="contact-icon" />
            Warsaw
          </p>
          <p className="text-page-route">
            <IoMail className="contact-icon" />
            <a href="mailto:email@gmail.com" className="nav-links">
              akonev27@gmail.com
            </a>
          </p>
          <p className="text-page-route">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/anna-konefa%C5%82-8962182b4/"
              className="nav-links"
            >
              {" "}
              Linkedin
            </a>
          </p>
          <p className="text-page-route">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/ania-konev" className="nav-links">
              Github
            </a>
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default CoursePage;
