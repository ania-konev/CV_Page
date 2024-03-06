import { Button } from "antd";
import { SiJavascript } from "react-icons/si";
import { RiHtml5Line } from "react-icons/ri";
import Link from "next/link";
import styles from "./common.module.scss";

const SkillButton = () => {
  return (
    <div>
      <Link href="/skills">
        <Button
          className={`${styles["button-element"]} animate__animated animate__jackInTheBox`}
        >
          <div className={styles["button-title"]}>Skills</div>
          <div>
            <SiJavascript className={styles["jS-logo"]} />
          </div>
          <div>
            <RiHtml5Line className={styles["html-logo"]} />
          </div>
          <div className={styles["hover-tip-note"]}>Click to expand!</div>
        </Button>
      </Link>
    </div>
  );
};

export default SkillButton;
