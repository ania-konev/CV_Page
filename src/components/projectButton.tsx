import { Col, Button } from "antd";
import { LinearGradient } from "react-text-gradients";

const ProjectButton = () => {
  return (
    <div>
      <Button className="button-element animate__animated animate__jackInTheBox">
        <Col span={24} className="button-title">
          Projects
        </Col>
        <Col span={24}>
          <LinearGradient gradient={["to right", "#ffffff ,#ffffff66"]}>
            1. Weather App - website to
          </LinearGradient>
        </Col>
        <Col span={24}>
          <LinearGradient gradient={["to right", "#ffffff66 ,#ffffff33"]}>
            2. To do list - website for
          </LinearGradient>
        </Col>
        <Col span={24} className="hover-tip-note">
          Click to expand!
        </Col>
      </Button>
    </div>
  );
};

export default ProjectButton;