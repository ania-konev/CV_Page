import { Card } from "antd";
import { FaCity } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const CoursePage: React.FC = () => {
  return (
    <Card bordered={false} className="subpage-card">
      <h1>Contact</h1>
      <p className="centered-content">
        <FaCity className="contact-logo" />
        Warsaw
      </p>
      <p className="centered-content">
        <IoMail className="contact-logo" />
        <a href="mailto:email@gmail.com" className="nav-links">
          akonev27@gmail.com
        </a>
      </p>
      <p className="centered-content">
        <FaLinkedin className="contact-logo" />
        <a
          href="https://www.linkedin.com/in/anna-konefa%C5%82-8962182b4/"
          className="nav-links"
        >
          {" "}
          Linkedin
        </a>
      </p>
      <p className="centered-content">
        <FaGithub className="contact-logo" />
        <a href="https://github.com/ania-konev" className="nav-links">
          Github
        </a>
      </p>
    </Card>
  );
};

export default CoursePage;
