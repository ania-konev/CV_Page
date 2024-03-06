import { Card } from "antd";
import styles from "./aboutMeNote.module.scss";

const AboutMeNote = () => {
  return (
    <Card bordered={false}>
      <div className={`${styles.name} animate__animated animate__heartBeat`}>
        Anna Konefał{" "}
      </div>
      <div className={styles["welcome-note"]}>Welcome to my CV page!</div>
      <div className={styles["about-me-note"]}>
        I am in the final year of my PhD in chemistry at the
        University&nbsp;of&nbsp;Warsaw.
        <div>
          From year and a half, I have been self-educating myself to become a
          Junior&nbsp;JS&nbsp;Frontend&nbsp;Developer.
        </div>{" "}
      </div>
      <div className={styles["instructions-note"]}>
        Use the buttons to expand the specific page.
      </div>
    </Card>
  );
};

export default AboutMeNote;
