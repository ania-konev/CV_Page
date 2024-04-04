import { Card } from "antd";

const ProjectPage: React.FC = () => {
  return (
    <Card bordered={false} className="subpage-card">
      <h1>Projects</h1>
      <ol>
        <li>
          <b>This CV page</b> - a shortened, overview version of my CV.
          <p className="emphasized-tech">
            <br></br>
            (Typescript, HTML, Sass, React, Ant Design, Next.js)
          </p>
        </li>

        <li>
          <a href="https://tags-browser-psi.vercel.app/" className="nav-links">
            <b>Tags browser</b>
          </a>{" "}
          - a UI for the tags browser provided by API.
          <p className="emphasized-tech">
            <br></br>
            (Typescript, HTML, Sass, React, Redux, Ant Design, Next.js,
            Storybook)
          </p>
        </li>
        <li>
          <a
            href="https://weather-app-anias-projects-9ef58225.vercel.app/"
            className="nav-links"
          >
            <b>Weather App</b>
          </a>{" "}
          - a website to check weather conditions in different cities around the
          world.
          <p className="emphasized-tech">
            {" "}
            (Typescript, CSS, HTML, React, Next.js, Ant Design, Rest API)
          </p>
        </li>
        <li>
          <a
            href="https://ania-konev.github.io/ToDoList/"
            className="nav-links"
          >
            <b>To do list</b>
          </a>{" "}
          - a website for creating a to-do lists depending on your goal, e.g.
          shopping list, travel&nbsp;packing checklist.
          <p className="emphasized-tech">
            {" "}
            (Javascript, HTML, CSS, React, Ant Design)
          </p>
        </li>
        <li>
          <a href="https://github.com/ania-konev/Sudoku" className="nav-links">
            <b>Sudoku</b>{" "}
          </a>
          - a simple Sudoku game.
          <p className="emphasized-tech"> (Python)</p>
        </li>
      </ol>
    </Card>
  );
};

export default ProjectPage;
