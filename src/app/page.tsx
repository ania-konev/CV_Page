"use client";

import { Col, Row, ConfigProvider } from "antd";
import "animate.css";
import AboutMeNote from "../components/aboutMeNote";
import ContactButton from "../components/contactButton";
import CourseButton from "../components/courseButton";
import ProjectButton from "../components/projectButton";
import PublicationsButton from "../components/publicationButton";
import SkillButton from "../components/skillButton";

const HomePage: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBg: "#5f9ea099",
            defaultHoverColor: "#ffffff",
          },
        },
        token: {
          colorBgContainer: "#5f9ea0cc",
          colorText: "#ffffff",
        },
      }}
    >
      <Row className="layout" gutter={[0, 0]}>
        <Col className="columns" span={7}>
          <SkillButton />
          <ProjectButton />
        </Col>
        <Col className="about-me-column" span={10}>
          <AboutMeNote />
          <ContactButton />
        </Col>

        <Col className="columns" span={7}>
          <CourseButton />
          <PublicationsButton />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default HomePage;
