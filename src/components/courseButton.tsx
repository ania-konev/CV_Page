import { Col, Button } from "antd";
import { LinearGradient } from "react-text-gradients";

const CourseButton = () => {
  return (
    <div>
      <Button className="button-element animate__animated animate__jackInTheBox">
        <Col span={24} className="button-title">
          Courses
        </Col>
        <Col span={24}>
          <LinearGradient gradient={["to right", "#ffffff ,#ffffff66"]}>
            1. Master Next JS 13 - 2023
          </LinearGradient>
        </Col>
        <Col span={24}>
          <LinearGradient gradient={["to right", "#ffffff66 ,#ffffff33"]}>
            2. Sass for the beginners
          </LinearGradient>
        </Col>
        <Col span={24} className="hover-tip-note">
          Click to expand!
        </Col>
      </Button>
    </div>
  );
};

export default CourseButton;
