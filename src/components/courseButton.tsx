import { Button } from "antd";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";
import { white, lightGrey, darkGrey } from "./constants";
import styles from "./common.module.scss";

const CourseButton = () => {
  return (
    <div>
      <Link href="/courses">
        <Button
          className={`${styles["button-element"]} animate__animated animate__jackInTheBox`}
        >
          <div className={styles["button-title"]}>Courses</div>
          <div>
            <LinearGradient gradient={["to right", `${white}, ${lightGrey}`]}>
              1. Master Next JS 13 - 2023
            </LinearGradient>
          </div>
          <div>
            <LinearGradient
              gradient={["to right", `${lightGrey}, ${darkGrey}`]}
            >
              2. Sass for the beginners
            </LinearGradient>
          </div>
          <div className={styles["hover-tip-note"]}>Click to expand!</div>
        </Button>
      </Link>
    </div>
  );
};

export default CourseButton;
