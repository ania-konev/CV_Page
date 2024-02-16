import { Card } from "antd";

const AboutMeNote = () => {
  return (
    <Card bordered={false}>
      <div className="name animate__animated animate__heartBeat">
        Anna Konefał{" "}
      </div>
      <div className="welcome-note">Welcome to my CV page!</div>
      <div className="about-me-note">
        I am in the final year of my PhD in chemistry at the
        University&nbsp;of&nbsp;Warsaw.
        <div>
          From year and a half, I have been self-educating myself to become a
          Junior&nbsp;JS&nbsp;Frontend&nbsp;Developer.
        </div>{" "}
      </div>
      <div className="instructions-note">
        Use the buttons to go forward to expand the page.
      </div>
    </Card>
  );
};

export default AboutMeNote;
