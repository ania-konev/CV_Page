import { Button } from "antd";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";
import { white, lightGrey, darkGrey } from "./constants";
import styles from "./common.module.scss";

const ContactButton = () => {
  return (
    <div>
      <Link href="/contact">
        <Button
          className={`${styles["button-element"]} ${styles["contact-button"]} animate__animated animate__jackInTheBox`}
        >
          <div className={styles["button-title"]}>Contact</div>
          <div>
            <LinearGradient gradient={["to right", `${white}, ${lightGrey}`]}>
              1. akonev27@gmail.com
            </LinearGradient>
          </div>
          <div>
            <LinearGradient
              gradient={["to right", `${lightGrey}, ${darkGrey}`]}
            >
              2. Linkedin
            </LinearGradient>
          </div>
          <div className={styles["hover-tip-note"]}>Click to expand!</div>
        </Button>
      </Link>
    </div>
  );
};

export default ContactButton;
