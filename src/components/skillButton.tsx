import { Col, Button } from "antd";
import { SiJavascript } from "react-icons/si";
import { RiHtml5Line } from "react-icons/ri";

const SkillButton = () => {
  return (
    <div>
      <Button className="button-element animate__animated animate__jackInTheBox">
        <Col span={24} className="button-title">
          Skills
        </Col>
        <Col span={24}>
          <SiJavascript className="JS-icon" />
        </Col>
        <Col span={24}>
          <RiHtml5Line className="html-icon" />
        </Col>
        <Col span={24} className="hover-tip-note">
          Click to expand!
        </Col>
      </Button>
    </div>
  );
};

export default SkillButton;
