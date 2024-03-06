import { Card } from "antd";

const CoursePage: React.FC = () => {
  return (
    <Card bordered={false} className="subpage-card">
      <h1>Courses</h1>
      <ol>
        <li>
          <a
            href="https://www.udemy.com/course/master-next-js-for-busy-developers/"
            className="nav-links"
          >
            "Master Next JS 13 - 2023 - For Busy Developers".
          </a>
          <em> (Udemy Course)</em>
        </li>
        <li>
          <a
            href="https://www.udemy.com/course/sass-for-the-beginners/"
            className="nav-links"
          >
            "Sass for the beginners Course - Let's go ahead".
          </a>
          <em> (Udemy Course)</em>
        </li>
        <li>
          <a href="https://scrimba.com/learn/typescript" className="nav-links">
            "Learn Typescript level intermediate".
          </a>
          <em> (Scrimba Course)</em>
        </li>
        <li>
          <a
            href="https://www.udemy.com/course/build-your-first-react-js-application/"
            className="nav-links"
          >
            "Build your first React JS Application".
          </a>
          <em> (Udemy Course)</em>
        </li>
        <li>
          <a
            href="https://www.udemy.com/course/html-css-certification-course-for-beginners/"
            className="nav-links"
          >
            "HTML & CSS - Certification Course for Beginners".
          </a>
          <em> (Udemy Course)</em>
        </li>
        <li>
          <a href="https://mimo.org/" className="nav-links">
            "SQL, JS, HTML, CSS, Web Development".
          </a>
          <em> (Mimo Course)</em>
        </li>
        <li>
          "Introduction to programming".
          <em> (Workshops)</em>
        </li>
        <li>
          <a
            href="https://karierawfarmacji.pl/kurs/clinical-trial-associate/"
            className="nav-links"
          >
            "Clinical Trial Associate".
          </a>
          <em> (Career In Pharmacy Course)</em>
        </li>
        <li>
          <b>Other courses:</b> Work organization and time management; Advanced
          statistics; Organization and management of a research laboratory.
        </li>
      </ol>
    </Card>
  );
};

export default CoursePage;
