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
            <a href="mailto:email@gmail.com" className="email-address">
              akonev27@gmail.com
            </a>
          </p>
          <p className="text-page-route">
            <FaLinkedin className="contact-icon" />
            Linkedin
          </p>
          <p className="text-page-route">
            <FaGithub className="contact-icon" />
            Github
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default CoursePage;
