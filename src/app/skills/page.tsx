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
import { SiRedux } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
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
        <SiRedux className="redux-logo-subpage" />
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
        <SiNextdotjs className="next-logo-subpage" />
        <br />
        <FaAngular className="angular-logo-subpage" />
        <FaBootstrap className="bootstrap-logo-subpage" />
        <SiStorybook className="storybook-logo-subpage"></SiStorybook>
        <Image
          src="rxjs.svg"
          alt="RxJS logo"
          className="svg-logo-subpage"
          width={80}
          height={80}
        />
        <Image
          src="python.svg"
          alt="Python logo"
          className="svg-logo-subpage"
          width={80}
          height={80}
        />
        <br />
        <Image
          src="java.svg"
          alt="Java logo"
          className="svg-logo-subpage"
          width={80}
          height={80}
        />
        <BiLogoSpringBoot className="spring-boot-logo-subpage" />
        <DiRuby className="ruby-logo-subpage" />
        <SiRubyonrails className="ruby-on-rails-logo-subpage" />
      </p>
    </Card>
  );
};

export default CoursePage;
