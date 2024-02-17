import { Col, Row, Card } from "antd";

const ProjectPage: React.FC = () => {
  return (
    <Row className="layout" gutter={[0, 0]}>
      <Col span={24}>
        <Card bordered={false} className="route-card">
          <h1>Projects</h1>
          <p className="text-page-route">
            1. <b>This CV page</b> - a shortened, overview version of my CV.
          </p>
          <p className="tech-page-route">(Python)</p>
          <p className="text-page-route">
            2.
            <a className="nav-links">
              <b>Weather App</b>
            </a>{" "}
            - website to check weather conditions in different cities around the
            world.
          </p>
          <p className="tech-page-route">
            (Typescript, CSS, HTML, React, Next.js, Ant Design, Rest API)
          </p>
          <p className="text-page-route">
            3.{" "}
            <a className="nav-links">
              <b>To do list</b>
            </a>{" "}
            - website for creating a to-do lists depending on your goal, e.g.
            shopping list, travel&nbsp;packing checklist.
          </p>
          <p className="tech-page-route">
            (Javascript, HTML, CSS, React, Ant Design)
          </p>
          <p className="text-page-route">
            4.{" "}
            <a className="nav-links">
              <b>Sudoku</b>{" "}
            </a>
            - simple Sudoku game.
          </p>
          <p className="tech-page-route">(Python)</p>
        </Card>
      </Col>
    </Row>
  );
};

export default ProjectPage;
