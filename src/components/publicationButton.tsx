import { Button } from "antd";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";
import { white, lightGrey, darkGrey } from "./constants";
import styles from "./common.module.scss";

const PublicationsButton = () => {
  return (
    <div>
      <Link href="/publications">
        <Button
          className={`${styles["button-element"]} animate__animated animate__jackInTheBox`}
        >
          <div className={styles["button-title"]}>Publications</div>
          <div>
            <LinearGradient gradient={["to right", `${white}, ${lightGrey}`]}>
              1. Konefał A., Piątek P.
            </LinearGradient>
          </div>
          <div>
            <LinearGradient
              gradient={["to right", `${lightGrey}, ${darkGrey}`]}
            >
              2. Konefał A., Piątek P.
            </LinearGradient>
          </div>
          <div className={styles["hover-tip-note"]}>Click to expand!</div>
        </Button>
      </Link>
    </div>
  );
};

export default PublicationsButton;
