import { Col, Button } from "antd";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";

const ContactButton = () => {
  return (
    <div>
      <Link href="/contact">
        <Button className="button-element contact-button animate__animated animate__jackInTheBox">
          <Col span={24} className="button-title">
            Contact
          </Col>
          <Col span={24}>
            <LinearGradient gradient={["to right", "#ffffff ,#ffffff66"]}>
              1. akonev27@gmail.com
            </LinearGradient>
          </Col>
          <Col span={24}>
            <LinearGradient gradient={["to right", "#ffffff66 ,#ffffff33"]}>
              2. Linkedin
            </LinearGradient>
          </Col>
          <Col span={24} className="hover-tip-note">
            Click to expand!
          </Col>
        </Button>
      </Link>
      ;
    </div>
  );
};

export default ContactButton;
