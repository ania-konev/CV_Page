import { Col, Button } from "antd";
import { LinearGradient } from "react-text-gradients";

const PublicationsButton = () => {
  return (
    <div>
      <Button className="button-element animate__animated animate__jackInTheBox">
        <Col span={24} className="button-title">
          Publications
        </Col>
        <Col span={24}>
          <LinearGradient gradient={["to right", "#ffffff ,#ffffff66"]}>
            1. Konefał A., Piątek P.
          </LinearGradient>
        </Col>
        <Col span={24}>
          <LinearGradient gradient={["to right", "#ffffff66 ,#ffffff33"]}>
            2. Konefał A., Piątek P.
          </LinearGradient>
        </Col>
        <Col span={24} className="hover-tip-note">
          Click to expand!
        </Col>
      </Button>
    </div>
  );
};

export default PublicationsButton;
