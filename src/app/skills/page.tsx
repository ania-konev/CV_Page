import { Col, Row, Card } from "antd";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const CoursePage: React.FC = () => {
  return (
    <Row className="layout" gutter={[0, 0]}>
      <Col span={24}>
        <Card bordered={false} className="route-card">
          <h1>Skills</h1>
          <p className="text-page-route">
            <IoLogoJavascript className="JS-logo-route" />
            <FaHtml5 className="HTML-logo-route" />
            <IoLogoCss3 className="CSS-logo-route" />
            <FaReact className="React-logo-route" />
            <br />
            <img
              src="ant-design.svg"
              alt="Ant-design logo"
              className="AD-logo-route"
            ></img>
            <SiTypescript className="TS-logo-route" />
            <FaSass className="Sass-logo-route" />
            <FaGitAlt className="Git-logo-route" />
            <br />
            <img
              src="python.svg"
              alt="Python logo"
              className="Python-logo-route"
            ></img>

            <SiNextdotjs className="Next-logo-route" />
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default CoursePage;
