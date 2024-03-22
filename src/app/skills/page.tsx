import { Card } from "antd";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import Image from "next/image";

const CoursePage: React.FC = () => {
  return (
    <Card bordered={false} className="subpage-card">
      <h1>Skills</h1>
      <p className="centered-content">
        <IoLogoJavascript className="js-logo-subpage" />
        <FaHtml5 className="html-logo-subpage" />
        <IoLogoCss3 className="css-logo-subpage" />
        <FaReact className="react-logo-subpage" />
        <br />
        <Image
          src="ant-design.svg"
          alt="Ant design logo"
          className="svg-logo-subpage"
          width={80}
          height={80}
        />
        <SiTypescript className="ts-logo-subpage" />
        <FaSass className="sass-logo-subpage" />
        <FaGitAlt className="git-logo-subpage" />
        <br />
        <Image
          src="python.svg"
          alt="Python logo"
          className="svg-logo-subpage"
          width={80}
          height={80}
        />
        <SiNextdotjs className="next-logo-subpage" />
        <FaAngular className="angular-logo-subpage" />
      </p>
    </Card>
  );
};

export default CoursePage;
