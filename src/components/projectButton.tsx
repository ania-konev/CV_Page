import { Button } from "antd";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";
import { white, lightGrey, darkGrey } from "./constants";
import styles from "./common.module.scss";

const ProjectButton = () => {
  return (
    <div>
      <Link href="/projects">
        <Button
          className={`${styles["button-element"]} animate__animated animate__jackInTheBox`}
        >
          <div className={styles["button-title"]}>Projects</div>
          <div>
            <LinearGradient gradient={["to right", `${white}, ${lightGrey}`]}>
              1. Weather App - website to
            </LinearGradient>
          </div>
          <div>
            <LinearGradient
              gradient={["to right", `${lightGrey}, ${darkGrey}`]}
            >
              2. To do list - website for
            </LinearGradient>
          </div>
          <div className={styles["hover-tip-note"]}>Click to expand!</div>
        </Button>
      </Link>
    </div>
  );
};

export default ProjectButton;
