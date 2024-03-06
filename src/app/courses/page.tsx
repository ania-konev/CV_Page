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
            &quot;Master Next JS 13 - 2023 - For Busy Developers&quot;.
          </a>
          <em> (Udemy Course)</em>
        </li>
        <li>
          <a
            href="https://www.udemy.com/course/sass-for-the-beginners/"
            className="nav-links"
          >
            &quot;Sass for the beginners Course - Let&apos;s go ahead&quot;.
          </a>
          <em> (Udemy Course)</em>
        </li>
        <li>
          <a href="https://scrimba.com/learn/typescript" className="nav-links">
            &quot;Learn Typescript level intermediate&quot;.
          </a>
          <em> (Scrimba Course)</em>
        </li>
        <li>
          <a
            href="https://www.udemy.com/course/build-your-first-react-js-application/"
            className="nav-links"
          >
            &quot;Build your first React JS Application&quot;.
          </a>
          <em> (Udemy Course)</em>
        </li>
        <li>
          <a
            href="https://www.udemy.com/course/html-css-certification-course-for-beginners/"
            className="nav-links"
          >
            &quot;HTML & CSS - Certification Course for Beginners&quot;.
          </a>
          <em> (Udemy Course)</em>
        </li>
        <li>
          <a href="https://mimo.org/" className="nav-links">
            &quot;SQL, JS, HTML, CSS, Web Development&quot;.
          </a>
          <em> (Mimo Course)</em>
        </li>
        <li>
          &quot;Introduction to programming&quot;.
          <em> (Workshops)</em>
        </li>
        <li>
          <a
            href="https://karierawfarmacji.pl/kurs/clinical-trial-associate/"
            className="nav-links"
          >
            &quot;Clinical Trial Associate&quot;.
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
