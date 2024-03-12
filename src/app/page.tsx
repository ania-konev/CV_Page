import { Col, Row, ConfigProvider } from "antd";
import "animate.css";
import AboutMeNote from "../components/aboutMeNote/aboutMeNote";
import ContactButton from "../components/contactButton";
import CourseButton from "../components/courseButton";
import ProjectButton from "../components/projectButton";
import PublicationsButton from "../components/publicationButton";
import SkillButton from "../components/skillButton";
import variables from "./constants.module.scss";
import column from "./page.module.scss";

const HomePage: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBg: `${variables.defaultHoverBg}`,
            defaultHoverColor: `${variables.defaultHoverColor}`,
          },
        },
        token: {
          colorBgContainer: `${variables.colorBgContainer}`,
          colorText: `${variables.colorTex}`,
        },
      }}
    >
      <Row>
        <Col className={column["column"]} span={7}>
          <SkillButton />
          <ProjectButton />
        </Col>
        <Col className={column["about-me-column"]} span={10}>
          <AboutMeNote />
          <ContactButton />
        </Col>

        <Col className={column["column"]} span={7}>
          <CourseButton />
          <PublicationsButton />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default HomePage;
