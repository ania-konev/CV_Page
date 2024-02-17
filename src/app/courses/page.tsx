import { Col, Row, Card } from "antd";

const CoursePage: React.FC = () => {
  return (
    <Row className="layout" gutter={[0, 0]}>
      <Col span={24}>
        <Card bordered={false} className="route-card">
          <h1>Courses</h1>
          <p className="text-page-route">
            1.
            <b>"Master Next JS 13 - 2023 - For Busy Developers".</b>
            <a
              href="https://www.udemy.com/course/master-next-js-for-busy-developers/"
              className="nav-links"
            >
              <em> (Udemy Course)</em>
            </a>
          </p>
          <p className="text-page-route">
            2.
            <b>"Sass for the beginners Course - Let's go ahead".</b>
            <a
              href="https://www.udemy.com/course/sass-for-the-beginners/"
              className="nav-links"
            >
              <em> (Udemy Course)</em>
            </a>
          </p>

          <p className="text-page-route">
            3. <b>"Learn Typescript level intermediate".</b>
            <a
              href="https://scrimba.com/learn/typescript"
              className="nav-links"
            >
              <em> (Scrimba Course)</em>
            </a>
          </p>
          <p className="text-page-route">
            4. <b>"Build your first React JS Application".</b>
            <a
              href="https://www.udemy.com/course/build-your-first-react-js-application/"
              className="nav-links"
            >
              {" "}
              <em> (Udemy Course)</em>
            </a>
          </p>
          <p className="text-page-route">
            5.
            <b>"HTML & CSS - Certification Course for Beginners".</b>
            <a
              href="https://www.udemy.com/course/html-css-certification-course-for-beginners/"
              className="nav-links"
            >
              <em> (Udemy Course)</em>
            </a>
          </p>
          <p className="text-page-route">
            6.
            <b>"SQL, JS, HTML, CSS, Web Development".</b>
            <a href="https://mimo.org/" className="nav-links">
              <em> (Mimo Course)</em>
            </a>
          </p>
          <p className="text-page-route">
            7.
            <b>"Introduction to programming".</b>
            <em> (Workshops)</em>
          </p>
          <p className="text-page-route">
            8.
            <b>"Clinical Trial Associate".</b>
            <a
              href="https://karierawfarmacji.pl/kurs/clinical-trial-associate/"
              className="nav-links"
            >
              <em> (Career in pharmacy Course)</em>
            </a>
          </p>
          <p className="text-page-route">
            <b>Other courses:</b> Work organization and time management;
            Advanced statistics; Organization and management of a research
            laboratory.
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default CoursePage;
