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
            <em> (Udemy Course)</em>
          </p>
          <p className="text-page-route">
            2.
            <b>"Sass for the beginners Course - Let's go ahead".</b>
            <em> (Udemy Course)</em>
          </p>

          <p className="text-page-route">
            3. <b>"Learn Typescript level intermediate".</b>
            <em> (Scrimba Course)</em>
          </p>
          <p className="text-page-route">
            4. <b>"Build your first React JS Application".</b>
            <em> (Udemy Course)</em>
          </p>
          <p className="text-page-route">
            5.
            <b>"HTML & CSS - Certification Course for Beginners".</b>
            <em> (Udemy Course)</em>
          </p>
          <p className="text-page-route">
            6.
            <b>"SQL, JS, HTML, CSS, Web Development".</b>
            <em> (Mimo Course)</em>
          </p>
          <p className="text-page-route">
            7.
            <b>"Introduction to programming".</b>
            <em> (Workshops)</em>
          </p>
          <p className="text-page-route">
            8.
            <b>"Clinical Trial Associate".</b>
            <em> (Career in pharmacy Course)</em>
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
